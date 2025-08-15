// server/server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Force HTTPS on Heroku
app.enable('trust proxy');
app.use((req, res, next) => {
  if (req.secure) return next();
  // allow health checks and local dev
  if (req.headers['x-forwarded-proto'] !== 'https')
    return res.redirect(301, 'https://' + req.headers.host + req.originalUrl);
  next();
});

const clientBuildPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientBuildPath));

app.get('/health', (_req, res) => res.json({ ok: true }));

// SPA fallback
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
