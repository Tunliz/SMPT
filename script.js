const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
//Add event listener on form container...
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log("Clicked");

  //Email Code Here....
  Email.send({
    SecureToken : "e6f1ab25-65e-4234-899b-e81047531693",
    To : 'oyesijibaasit04@gmail.com',
    From : "tunlizstakes@gmail.com",
    Subject : "Testing my mail App",
    Body : "Testing my mailing app i hope it works.."
}).then(
  message => alert(message)
);
})