import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
const firebaseConfig = {
  apiKey: "AIzaSyCqFBAC69apk5PDGtrBX5RkJHQQFl1sLEU",
  authDomain: "jagga-website.firebaseapp.com",
  projectId: "jagga-website",
  storageBucket: "jagga-website.firebasestorage.app",
  messagingSenderId: "823930371338",
  appId: "1:823930371338:web:670961a40b66d6b9a1cef3"
};  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  const firebaseConfig = {
  apiKey: "AIzaSyCqFBAC69apk5PDGtrBX5RkJHQQFl1sLEU",
  authDomain: "jagga-website.firebaseapp.com",
  projectId: "jagga-website",
  storageBucket: "jagga-website.firebasestorage.app",
  messagingSenderId: "823930371338",
  appId: "1:823930371338:web:670961a40b66d6b9a1cef3"
};
  authDomain: "jagga-website.firebaseapp.com",
  projectId: "jagga-website",
  storageBucket: "jagga-website.firebasestorage.app",
  messagingSenderId: "823930371338",
  appId: "1:823930371338:web:670961a40b66d6b9a1cef3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("msg").innerHTML = error.message;
    });
};
