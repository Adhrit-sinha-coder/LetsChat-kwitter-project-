  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCRluSSQxQUIBFNZPlUZSktwtqaFhn1wb4",
      authDomain: "kwitter-project-edc69.firebaseapp.com",
      databaseURL: "https://kwitter-project-edc69-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-edc69",
      storageBucket: "kwitter-project-edc69.appspot.com",
      messagingSenderId: "585673635171",
      appId: "1:585673635171:web:9f16c911dd2d5aeac14f56"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
