// server/server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const clientBuildPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientBuildPath));

app.get('/health', (_req, res) => res.json({ ok: true }));

// SPA fallback
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
