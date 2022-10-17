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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();


function send(){
   msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value="";
}


