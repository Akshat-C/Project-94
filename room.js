var firebaseConfig = {
    apiKey: "AIzaSyBFLAAaTwSemKgknFOZEJioiJhvIxwA7ek",
    authDomain: "lets-chat-web-app-399c3.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-399c3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-399c3",
    storageBucket: "lets-chat-web-app-399c3.appspot.com",
    messagingSenderId: "505530155394",
    appId: "1:505530155394:web:f258339a5bdd87745d4f9b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function show_name()
{
    var username = localStorage.getItem("username");
    document.getElementById("welcome_head").innerHTML = "Welcome " + username;
}

function logout()
{
    window.location = "index.html";
}