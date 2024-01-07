function menufunc() {
    let menu = document.querySelector('#menu')
    let nav = document.querySelector('.nav');
    nav.classList.toggle('open');
}
function toggleContactForm() {
    var contactFormContainer = document.getElementById("contactFormContainer");
    contactFormContainer.style.display = (contactFormContainer.style.display === "none") ? "flex" : "none";
}
