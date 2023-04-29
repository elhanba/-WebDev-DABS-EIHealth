function show(){
    document.getElementById("forma").style.display="block"
    document.getElementById("show").style.display="none"
    document.getElementById("signup").style.height="1000px"
}
 
const firebaseConfig = {
    apiKey: "AIzaSyA-KUWJtJ-sXgDYjJDdRmx6zN-_3oJRnFI",
    authDomain: "eihealthba-ab4a9.firebaseapp.com",
    databaseURL: "https://eihealthba-ab4a9-default-rtdb.firebaseio.com",
    projectId: "eihealthba-ab4a9",
    storageBucket: "eihealthba-ab4a9.appspot.com",
    messagingSenderId: "588314906356",
    appId: "1:588314906356:web:c617ab5affcbdf3e3518a1",
    measurementId: "G-X6K68R3ZFX"
};

firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    
    var name = getInputVal('inputName');
    var age = getInputVal('inputAge');
    var address = getInputVal('inputAddress');
    var city = getInputVal('inputCity');
    var email = getInputVal('inputEmail');
    var phone = getInputVal('inputPhone');
    var message = getInputVal('message');
    var date = getInputVal('my-date-picker');
    
    saveMessage(name, age, email, phone, address, city, date, message);

    document.querySelector('.alert').style.display = 'block';

    const name1 = document.getElementById('inputName');
    const age1 = document.getElementById('inputAge');
    const address1 = document.getElementById('inputAddress');
    const city1 = document.getElementById('inputCity');
    const email1 = document.getElementById('inputEmail');
    const phone1 = document.getElementById('inputPhone');
    const message1 = document.getElementById('message');
    const date1 = document.getElementById('my-date-picker');
    
    let data = 
        'Your information and appointment date: \r\n' + 
        '   Name: ' + name1.value + ' \r\n' + 
        '   Age: ' +age1.value + ' \r\n' + 
        '   Address: ' +address1.value + ' \r\n' + 
        '   City: ' +city1.value + ' \r\n' + 
        '   Email: ' +email1.value + ' \r\n' + 
        '   Phone Number: ' + phone1.value + ' \r\n' + 
        '   Message: ' + message1.value + ' \r\n' + 
        '   Appointment Date&Time: ' + date1.value + ' \r\n' +
        '\rContact: \r\n' +
        '   Office location: Vilsonovo šetalište \r\n' + 
        '   Tel: +38700 000 000 \r\n' +
        '\rCOPYRIGHT © 2023';
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'AppointmentData.txt';

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click();
    
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
        document.getElementById('contactForm').reset();
    },3000);
}
    
function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, age, email, phone, address, city, date, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        age: age,
        email: email,
        phone: phone,
        address: address,
        city: city,
        date: date,
        message: message
    });
}

setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
    document.getElementById('contactForm').reset();
},3000);