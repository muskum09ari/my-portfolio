document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We will get back to you as soon as possible.");
  });

  const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(link.getAttribute('href'), '_blank');
  });
});

const firebaseConfig = {
  apiKey: "AIzaSyCHKwG1BJFcdCVS9lvb6tPlW98_Qnyaz7w",
  authDomain: "portfolio-c8fca.firebaseapp.com",
  projectId: "portfolio-c8fca",
  storageBucket: "portfolio-c8fca.appspot.com",
  messagingSenderId: "120230423228",
  appId: "1:120230423228:web:aa2738ebd8a77ddb73feb9",
  measurementId: "G-PX57M03E8Y"
};
// Reference to the form
const contactForm = document.querySelector("#contact-form");

// Reference to the submit button
const submitBtn = document.querySelector("#submit-btn");

// Listen for form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Disable the submit button
  submitBtn.disabled = true;

  // Get form data
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  // Reference to the Firebase Firestore
  const db = firebase.firestore();

  // Save the contact form data to the Firebase Firestore
  db.collection("contact-forms").add({
    name: name,
    email: email,
    message: message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    // Show success message
    alert("Your message has been sent!");

    // Clear the form
    contactForm.reset();

    // Enable the submit button
    submitBtn.disabled = false;
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
});
