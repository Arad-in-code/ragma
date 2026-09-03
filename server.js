/* ============================================================
   Smartiz — tiny static + media-listing server
   Run:  node server.js   →  http://localhost:3000
   Galleries auto-grow: just drop files into the folders.
   ============================================================ */
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 2999;
const ROOT = __dirname;

// Folders exposed to the gallery API and their allowed extensions
const MEDIA_FOLDERS = {
  cover:   [".jpg", ".jpeg", ".png", ".webp", ".gif"],
  lay:     [".jpg", ".jpeg", ".png", ".webp", ".gif"],
  poster:  [".jpg", ".jpeg", ".png", ".webp", ".gif"],
  motions: [".mp4", ".webm", ".mov"],
};

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".js":   "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif":  "image/gif",
  ".svg":  "image/svg+xml",
  ".mp4":  "video/mp4",
  ".webm": "video/webm",
  ".mov":  "video/quicktime",
  ".ico":  "image/x-icon",
  ".woff2":"font/woff2",
};

function listMedia(folder) {
  const exts = MEDIA_FOLDERS[folder];
  if (!exts) return null;
  const dir = path.join(ROOT, folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    return [];
  }
  return fs.readdirSync(dir)
    .filter(f => {
      const ext = path.extname(f).toLowerCase();
      return exts.includes(ext);
    })
    .sort((a, b) => {
      // Natural sort: extract numbers and compare properly
      const getNum = str => {
        const match = str.match(/\((\d+)\)/);
        return match ? parseInt(match[1], 10) : 0;
      };
      return getNum(a) - getNum(b) || a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    })
    .map(f => `/${folder}/${encodeURIComponent(f)}`);
}

function serveFile(res, filePath, range) {
  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || "application/octet-stream";
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) { 
      res.writeHead(404, { "Content-Type": "text/plain" }); 
      res.end("Not found"); 
      return; 
    }
    // Range support for video seeking
    if (range && (ext === ".mp4" || ext === ".webm" || ext === ".mov")) {
      const m = /bytes=(\d*)-(\d*)/.exec(range);
      let start = m && m[1] ? parseInt(m[1], 10) : 0;
      let end = m && m[2] ? parseInt(m[2], 10) : stat.size - 1;
      if (start > end || start >= stat.size) { 
        res.writeHead(416, { "Content-Range": `bytes */${stat.size}` }); 
        res.end(); 
        return; 
      }
      res.writeHead(206, {
        "Content-Type": type,
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Cache-Control": "public, max-age=86400",
      });
      fs.createReadStream(filePath, { start, end }).pipe(res);
      return;
    }
    res.writeHead(200, { 
      "Content-Type": type, 
      "Content-Length": stat.size, 
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=86400",
    });
    fs.createReadStream(filePath).pipe(res);
  });
}

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);

  // API: list media in a folder
  const api = url.match(/^\/api\/media\/([a-z]+)$/);
  if (api) {
    const files = listMedia(api[1]);
    if (files === null) { 
      res.writeHead(404, { "Content-Type": "application/json" }); 
      res.end(JSON.stringify([])); 
      return; 
    }
    res.writeHead(200, { 
      "Content-Type": "application/json", 
      "Cache-Control": "no-store" 
    });
    res.end(JSON.stringify(files));
    return;
  }

  // Static files (prevent path traversal)
  let rel = url === "/" ? "/index.html" : url;
  const filePath = path.normalize(path.join(ROOT, rel));
  if (!filePath.startsWith(ROOT)) { 
    res.writeHead(403, { "Content-Type": "text/plain" }); 
    res.end("Forbidden"); 
    return; 
  }
  serveFile(res, filePath, req.headers.range);
}).listen(PORT, () => {
  console.log(`✨ Smartiz studio site running →  http://localhost:${PORT}`);
  console.log(`📁 Serving media from: cover, lay, poster, motions`);
});