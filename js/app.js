// variables
const sendBtn = document.querySelector('#sendBtn'),
      email = document.querySelector('#email'),
      subject = document.querySelector('#subject'),
      message = document.querySelector('#message'),
      error = document.querySelectorAll('.error'),
      form = document.querySelector('#email-form'),
      resetBtn = document.querySelector("#resetBtn"),
      header = document.querySelector('#header')
      


// eventlisteners
eventlisteners()
function eventlisteners(){
  // disabled send btn on load
  document.addEventListener("DOMContentLoaded", appinit)
  // validate fields
  email.addEventListener("blur", validatefields)
  subject.addEventListener("blur", validatefields)
  message.addEventListener("blur", validatefields)
  // submit form
  form.addEventListener('submit', submitForm)
  // reset from form
  resetBtn.addEventListener('click', resetForm)
  

}



// functions
// app initizalitaion
function appinit(){
  sendBtn.disabled = true;
}
// validate from fields
function validatefields(){
  validatelength(this)
  if(this.type === 'email'){
    validateEmail(this)
   // enabled send btn 
   if(email.value !=='' && subject.value !=='' && message.value !==''){
     if(error.length === 0){
       sendBtn.disabled = false;
     }
   }
  }
}
// validating field length
function validatelength(field){
if(field.value.length > 0){
  field.style.borderBottomColor = "green"
  field.classList.remove("error")
}else{
  field.style.borderBottomColor = "red"
  field.classList.add("error")
  
}
}
// validating from email 
function validateEmail(email){
  const emailText = email.value
  if(emailText.includes("@")){
    email.style.borderBottomColor = "green"
    email.classList.remove("error")
  }else{
    email.style.borderBottomColor = "red"
    email.classList.add("error")
    
  }
}
// submit form
function submitForm(e){
  e.preventDefault()
 // accses to the spinner
  const spinner = document.querySelector('#spinner')
  spinner.src = '../img/spinner.gif'
  spinner.style.display = 'block'
 // create new img
  const sendEmailImg = document.createElement('img')
  sendEmailImg.src = "../img/mail.gif"
  sendEmailImg.style.display = 'block'
  const loaders = document.querySelector("#loaders")
  setTimeout(function()  {
    // hide first spinner
    spinner.style.display = 'none'
    loaders.appendChild(sendEmailImg)
    setTimeout(() => {
    resetForm();
    // hide seccend img && reset form 
    sendEmailImg.style.display = "none"
    header.textContent = "email now Sended"
    }, 5000);
  }, 3000);
}
// reset form 
function resetForm(){
  form.reset()
}