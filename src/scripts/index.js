"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let burgerMenu = document.getElementById("burger-menu");
  burgerMenu.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});

function toggleSearch() {
  let searchContainer = document.querySelector(".menuNavigation .search");
  searchContainer.classList.toggle("active");
  document.getElementById("searchInput").focus();
}

function submitSearch(event) {
  event.preventDefault();
  let searchQuery = document.getElementById("searchInput").value;

  alert("Pesquisando por: " + searchQuery);
}
// blog post's
let myObject = {
  initialize: function () {
    let paragraphs = document.getElementsByClassName(
      "mainSectionBlogContainerArticlesOldAArticleBlogArticle"
    );

    for (let i = 0; i < paragraphs.length; i++) {
      let paragraph = paragraphs[i];
      let words = paragraph.textContent.trim().split(" ");
      let filterArr = words.filter((x) => {
        return x !== "";
      });

      let shortenedText = filterArr.slice(0, 20).join(" ") + "...";
      paragraph.textContent = shortenedText;

      paragraph.addEventListener("click", function () {
        window.location.href = "blog.html";
      });
    }
  },
};

window.onload = function () {
  myObject.initialize();
};

/// EmailjS script to be use with the email Form
const script = document.createElement("script");
script.src =
  "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
document.head.appendChild(script);

script.onload = function () {
  (function () {
    emailjs.init("IdfaL7par9F3B65vL"); // Initialize with my public key created by EmailJS
  })();
};



/*
This sendMail() function is responsible for sending an email using the EmailJS service. 
Here's a step-by-step explanation of what the function does:
*/
function sendMail() {
  let params = { /*
  It creates an object params that contains the sender's information, such as name, email, and message. 
  These values are obtained from the HTML elements with the 
  IDs "name", "email", and "message" respectively.
   */
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
/*
It defines two constants serviceID and templateID. 
The serviceID represents the identifier of the email service configured in EmailJS, 
The templateID represents the identifier of the email template that will be used to send the message.
*/
  const serviceID = "service_vq9vwwv";
  const templateID = "template_7cczwsr";

  emailjs
    .send(serviceID, templateID, params) 
    /*It calls the send() method of the emailjs object, 
    passing the serviceID, templateID, and params object as arguments. 
    This sends the request to the EmailJS service to send the email.
    */
    .then((res) => {
      /*If the request is successful, the code inside the then() block will be executed. 
      It clears the values of the name, email, and message input fields, 
      logs the response in the console, and displays an alert indicating that the message was sent successfully.
      */
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    /*If there is an error during the email sending process, 
    the code inside the catch() block will be executed. It logs the error in the console.
    */
    .catch((err) => console.log(err));
    /*
    This function is used in response to a form submission event 
    when the user clicks a "Submit" button. 

    When this event occurs, the sendMail() function is called, 
    and the form data is collected and sent via email using the EmailJS service.
    */
}
