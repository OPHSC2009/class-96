const firebaseConfig = {
    apiKey: "AIzaSyBIc1jaf6n0omw6EMZpp2rrfB60695_prw",
    authDomain: "kwitter-51d71.firebaseapp.com",
    databaseURL: "https://kwitter-51d71-default-rtdb.firebaseio.com",
    projectId: "kwitter-51d71",
    storageBucket: "kwitter-51d71.appspot.com",
    messagingSenderId: "147979480816",
    appId: "1:147979480816:web:f954744cd70610cc255c35"
};

firebase.initializeApp(firebaseConfig);


function addUser() {

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";

}