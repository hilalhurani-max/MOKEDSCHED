// Minimal service worker so MokedSched can be installed as a home-screen app.
// Always goes to the network, so doctors never see a stale schedule.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
