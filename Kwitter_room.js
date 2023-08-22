//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgAlPYqyBX5fIsT3LXdUv5XySW85Gtve4",
    authDomain: "project-93-e3ab0.firebaseapp.com",
    databaseURL: "https://project-93-e3ab0-default-rtdb.firebaseio.com",
    projectId: "project-93-e3ab0",
    storageBucket: "project-93-e3ab0.appspot.com",
    messagingSenderId: "1058230198012",
    appId: "1:1058230198012:web:f08c440308eefdc0e8c179"
  };
  
 
// Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();