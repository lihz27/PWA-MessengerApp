workbox.core.setCacheNameDetails({ prefix: 'next-ss' });

workbox.core.setLogLevel(workbox.core.LOG_LEVELS.silent);

workbox.skipWaiting();

workbox.clientsClaim();

workbox.precaching.suppressWarnings();

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.precacheAndRoute(
  self.__precacheManifest.filter(
    m => !m.url.startsWith('bundles/')
      && !m.url.startsWith('static/commons')
      && m.url !== 'build-manifest.json',
  ),
  {},
);

workbox.routing.registerRoute(
  /[.](png|jpg|css)/,
  workbox.strategies.cacheFirst({
    cacheName: 'assets-cache',
    cacheableResponse: {
      statuses: [200],
    },
  }),
  'GET',
);

workbox.routing.registerRoute(
  /^https:\/\/code\.getmdl\.io.*/,
  workbox.strategies.cacheFirst({
    cacheName: 'lib-cache',
  }),
  'GET',
);

workbox.routing.registerRoute(
  '/',
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'root',
  }),
  'GET',
);

workbox.routing.registerRoute(
  '/browser',
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'browser',
  }),
  'GET',
);

workbox.routing.registerRoute(
  '/messenger',
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'messenger',
  }),
  'GET',
);

// workbox.routing.registerRoute(
//   /^http.*/,
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: 'http-cache',
//   }),
//   'GET',
// );

self.addEventListener('notificationclick', event => {
  const notification = event.notification;
  const action = event.action;


  if (action === 'close') {
    notification.close();
  } else {
    event.waitUntil(
      clients.matchAll().then(clis => {
        const client = clis.find(c => {
          return c.visibilityState === 'visible';
        });
        if (client !== undefined) {
          client.focus();
          client.navigate(`/messenger/${notification.data.sender}`);
          client.postMessage({
            msg: notification.data.sender,
          });
          notification.close();
        } else {
          clients.openWindow(`/messenger/${notification.data.sender}`);
          notification.close();
        }
      })
    );
  }



  self.registration.getNotifications().then(notifications => {
    console.log(notifications);
    notifications.forEach(notification => {
      notification.close();
    });
  });
});

self.addEventListener('notificationclose', event => {
  const notification = event.notification;
  const primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});









