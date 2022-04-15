// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyAq3ZmcO_xbtGaLkp9O2NyzQ_TFCG3nayI",
  authDomain: "eco-notification-5e979.firebaseapp.com",
  projectId: "eco-notification-5e979",
  storageBucket: "eco-notification-5e979.appspot.com",
  messagingSenderId: "19974257719",
  appId: "1:19974257719:web:47128fa8887ad83083d3b2",
  measurementId: "G-0YQ636W3DN",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
