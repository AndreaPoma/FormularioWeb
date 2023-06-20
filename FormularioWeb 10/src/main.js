const firebaseConfig = {
    apiKey: "AIzaSyC0sE0E-Wd1H1O4wIRBTMPEwydc-Lina98",
    authDomain: "registroweb-2bfe5.firebaseapp.com",
    projectId: "registroweb-2bfe5",
    storageBucket: "registroweb-2bfe5.appspot.com",
    messagingSenderId: "1091645351886",
    appId: "1:1091645351886:web:5d26efb30b05a3703ced9f",
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

//Llamando elementos de html
let Registrar = document.getElementById('btnAceptarRegistrar');

//Función registrate
Registrar.addEventListener('click', () => {
    let email = document.getElementById('emailRegistrar').value;
    let password = document.getElementById('passwordRegistrar').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            console.log('Inicio de sesión correcta');
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
})
