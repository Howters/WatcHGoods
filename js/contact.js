function validateName() {
  let name = document.querySelector("#name");
  let nameLabel = document.querySelector("label[for='name']");
  let nameValue = name.value;

  if (name.value == "" || nameValue.length < 3) {
    name.style.borderColor = "red";
    nameLabel.style.color = "red";
  } else {
    name.style.borderColor = "#f5cb5c";
    nameLabel.style.color = "#f5cb5c";
  }
}

function validateGender() {
  let male = document.querySelector("#male");
  let female = document.querySelector("#female");
  let genderLabel = document.querySelector("label.gender");

  if (male.checked || female.checked) {
    genderLabel.style.color = "#f5cb5c";
  } else {
    genderLabel.style.color = "red";
  }
}

function validateEmail() {
  let email = document.querySelector("#email");
  let emailValue = email.value;
  let emailLabel = document.querySelector("label[for='email']");
  let counter = 0;


    if (!(emailValue.endsWith("@gmail.com"))) {
      counter = 0;
    }
    else{
      counter = 1;
    }
  if (counter == 0) {
    email.style.borderColor = "red";
    emailLabel.style.color = "red";
  } else {
    email.style.borderColor = "#f5cb5c";
    emailLabel.style.color = "#f5cb5c";
  }
}
function validateCountry() {
  let country = document.getElementById("country")
  let countryLabel = document.querySelector("label[for='country']");

  if (country.value === "") {
    countryLabel.style.color = "red";
    country.style.borderColor = "red";
  } else {
    countryLabel.style.color = "#f5cb5c"; 
    country.style.borderColor = "#f5cb5c"; 
    // Proceed with form submission or other actions
  }
}



function validateMessage() {
  let message = document.querySelector("#message");
  let messageLabel = document.querySelector("label[for='message']");
  var words = message.value.split(" ");
  var wordCount = words.length;

  if(wordCount <10 || wordCount > 100){
    message.style.borderColor = "red";
    messageLabel.style.color = "red";
  }
  else{
    message.style.borderColor = "#f5cb5c";
    messageLabel.style.color = "#f5cb5c";
  }

}

function validateTerms() {
  let terms = document.querySelector("#terms");
  let termsLabel = document.querySelector("label[for='terms']");
  let termsLabel2 = document.querySelector("label[for='terms'] a");
  if (terms.checked) {
    termsLabel.style.color = "#f5cb5c";
    termsLabel2.style.color = "#f5cb5c";
  } else {
    termsLabel.style.color = "red";
    termsLabel2.style.color = "red";
  }
}

function validatecontact(e) {
  e.preventDefault();
  validateName();
  validateGender();
  validateEmail();
  validateCountry();
  validateMessage();
  validateTerms();

  let form = document.querySelector("#contactForm");

  let nameLabel = document.querySelector("label[for='name']");
  let genderLabel = document.querySelector("label.gender");
  let emailLabel = document.querySelector("label[for='email']");
  let countryLabel = document.querySelector("label[for='country']");
  let messageLabel = document.querySelector("label[for='message']");
  let termsLabel = document.querySelector("label[for='terms']");

  if (
    nameLabel.style.color === "rgb(245, 203, 92)" &&
    genderLabel.style.color === "rgb(245, 203, 92)" &&
    emailLabel.style.color === "rgb(245, 203, 92)" &&
    countryLabel.style.color === "rgb(245, 203, 92)" &&
    messageLabel.style.color === "rgb(245, 203, 92)" &&
    termsLabel.style.color === "rgb(245, 203, 92)"
  ) {
    form.submit();
  }
}


