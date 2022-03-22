var firebaseConfig = {
  apiKey: "AIzaSyBTbpUBOjJjDpZ94eMNr_fAH61FgBO_7MY",
  authDomain: "devaank-a23bc.firebaseapp.com",
  databaseURL: "https://devaank-a23bc-default-rtdb.firebaseio.com",
  projectId: "devaank-a23bc",
  storageBucket: "devaank-a23bc.appspot.com",
  messagingSenderId: "580347868052",
  appId: "1:580347868052:web:911578e1aa10bc448ad581"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;

      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

    });
  });
}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name)

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}