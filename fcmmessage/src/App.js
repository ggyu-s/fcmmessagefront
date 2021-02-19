import React, { useEffect } from "react";
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

function App() {
  const onClick = () => {
    if (Notification.permission !== "denied") {
      Notification.requestPermission((res) => {
        console.log(res);
      });
      if (Notification.permission === "granted") {
        console.log("허용");
        messaging
          .getToken({
            vapidKey:
              "BGn8-dSSuyuPqobx9-xrKoXPAZNLRe-HM7R0oNYNlD3KJsl-vQY4VZjA8UpDCW9hcwDbmaLvx7r5oZMSiKr6aB8",
          })
          .then((currentToken) => {
            if (currentToken) {
              console.log(currentToken);
            } else {
              // Show permission request UI
              console.log(
                "No registration token available. Request permission to generate one."
              );
              // ...
            }
          })
          .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // ...
          });
      } else {
        alert("차단했습니다.");
      }
    }
  };
  useEffect(() => {
    messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      navigator.serviceWorker.ready.then((registraion) => {
        registraion.showNotification("Sadsdasdsadad", {
          body: "sdasdsada",
        });
      });
    });
  }, []);

  return (
    <>
      <div onClick={onClick}>FireBase</div>
      <div>Access Token</div>
    </>
  );
}

export default App;
