import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBvTmEiKvbJahqPzvdjlp-VYYKibe7zD60",
  authDomain: "fcmtest-88df1.firebaseapp.com",
  projectId: "fcmtest-88df1",
  storageBucket: "fcmtest-88df1.appspot.com",
  messagingSenderId: "427562955476",
  appId: "1:427562955476:web:9742e53f948c03e8a94141",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// [START messaging_on_background_message]
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
// [END messaging_on_background_message]
