
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDqek8AWsRtEAx2ocLUiPDVVdF5lIGhIzE",
      authDomain: "databasekwitter.firebaseapp.com",
      databaseURL: "https://databasekwitter-default-rtdb.firebaseio.com",
      projectId: "databasekwitter",
      storageBucket: "databasekwitter.appspot.com",
      messagingSenderId: "683093764560",
      appId: "1:683093764560:web:7644b8318bd06999d0f1d5",
      measurementId: "G-05W6T63QH7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " +  Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();



      function addRoom()
      {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child (room_name) .update({
      purpose: "adding room name"
      });
      
      localStorage.setItem("room_name",  room_name);

      window.location = "kwitter_page.html";


}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";

}
