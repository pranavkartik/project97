// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAx-XWoeeTeIYBvRMjL4FEk5qFYXz8Jh4w",
  authDomain: "letschat-7cea9.firebaseapp.com",
  databaseURL: "https://letschat-7cea9.firebaseio.com",
  projectId: "letschat-7cea9",
  storageBucket: "letschat-7cea9.appspot.com",
  messagingSenderId: "139196829402",
  appId: "1:139196829402:web:2f65a3ce36f02da52a1fe3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = user_name;

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_name = childKey;
      console.log("Room Name - " + Room_name);
      row = "<div class='room_name' id=" + Room_name + " onclick='redirectToRoomName(this.id)' >#" + Room_name + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}