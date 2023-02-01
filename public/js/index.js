
function initializeApp() {
    var firebaseConfig = {
        apiKey: "AIzaSyCpalyFD6TEPwmpEQI0C9CNlig9h-55kPY",
        authDomain: "omar-al.firebaseapp.com",
        projectId: "omar-al",
        storageBucket: "omar-al.appspot.com",
        messagingSenderId: "156489843081",
        appId: "1:156489843081:web:05ea320c8c421ff8f46158",
        measurementId: "G-8N2VHWLY3E"
    };
// Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    const firestore = firebase.firestore()

// Listen for form submit
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', submitForm);

    function submitForm(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        firestore.collection("ContactFormData").add(data)

        document.getElementById('contactForm').reset();
    }

}
