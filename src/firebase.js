import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyAq3ZmcO_xbtGaLkp9O2NyzQ_TFCG3nayI",
  authDomain: "eco-notification-5e979.firebaseapp.com",
  projectId: "eco-notification-5e979",
  storageBucket: "eco-notification-5e979.appspot.com",
  messagingSenderId: "19974257719",
  appId: "1:19974257719:web:47128fa8887ad83083d3b2",
  measurementId: "G-0YQ636W3DN",
};

initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const __getToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BMFakvzrFjbtIoZD_0vPBG63CM1pU5NYUD0jsY9WVq7Fu34B3Hwm71NQ0_8yxVAUTudyFl5XMlFiEb-O3Ttqa48",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });