if (
  process.env.NODE_ENV === 'production'
  && typeof window !== 'undefined'
  && 'serviceWorker' in navigator
) {
  navigator.serviceWorker
    .register('/sw.js')
    .then((reg) => {
      console.log('Service worker registered (0-0) ');
      reg.pushManager.subscribe({userVisibleOnly: true});
    })
    .catch((e) => {
      console.error('Error during service worker registration:', e);
    });
}
