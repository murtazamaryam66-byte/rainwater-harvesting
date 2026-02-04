$(document).ready(function(){
// demovideo js
const videoModal = document.getElementById('videoModal');
const iframe = videoModal.querySelector('iframe');
const videoSrc = iframe.src;

videoModal.addEventListener('hidden.bs.modal', function () {
  iframe.src = "";
  iframe.src = videoSrc;
});
// Animation on scroll JS
AOS.init({
  duration: 1000,
  once: true,
});
// waterusage section jQuery
$(".row2").hide();
$("#hidebtn").hide();
$("#showbtn").click(function(){
  $(".row2").slideDown(800);
  $("#hidebtn").show();
  $("#showbtn").hide();
});
$("#hidebtn").click(function(){
  $(".row2").slideUp(800);
  $("#hidebtn").hide();
  $("#showbtn").show();
});
});
// feedback form JS
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("feedbackform");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      name: form.username.value,
      rating: form.rating.value,
      suggestion: form.suggestion.value
    };

    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.push(data);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    form.reset();
    alert("Feedback submitted successfully");
  });
});
//contact form JS
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactform");
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value.trim()
        };
        const existingData = JSON.parse(localStorage.getItem("contactData")) || [];
        existingData.push(formData);
        localStorage.setItem("contactData", JSON.stringify(existingData));
        alert("Message sent successfully!");
        contactForm.reset();
    });
});
