let menu= document.getElementById('navlinks');
let openMenu = document.getElementById('open-menu');
let closeMenu = document.getElementById('close-menu');

openMenu.addEventListener('click', function(){
  menu.style.left='0';

});
closeMenu.addEventListener('click', function(){
menu.style.left='-300px';
});





const questions = document.querySelectorAll(".question");

questions.forEach(function (question){
   const btn = question.querySelector('.question-btn')
 btn.addEventListener("click", function(){
questions.forEach(function(item){
if (item!==question){
item.classList.remove("show-text");
}
})
     question.classList.toggle("show-text") ;  
    });
});



// splide slider
var splide = new Splide( '.splide', {
 rewind : true,
 pagination:false,
});
splide.mount();


// form validation

const form = document.querySelector('.form');
const error = document.querySelector('.error');
const email = document.querySelector('#email');
const bar = document.querySelector('.form-flex')

form.addEventListener("submit", e =>{
e.preventDefault();

if(email.value.length === ""){
  error.style.display = "block";
bar.style.border ="1px solid red";
return;
}

else if(email.value.indexOf("@") === -1){
 error.style.display= "block";
bar.style.border="1px solid red"; 
}
else{
  error.style.display= "none";
}

});