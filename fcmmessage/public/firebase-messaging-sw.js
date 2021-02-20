importScripts("https://www.gstatic.com/firebasejs/8.2.8/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.8/firebase-messaging.js");

firebase.initializeApp({
  //firebase apikey 등등...설정은 파이어베이스 참조!!!
});

const messaging = firebase.messaging();

// [START messaging_on_background_message]
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
