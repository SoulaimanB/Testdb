let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

  if(window.scrollY > 0){
     header.classList.add('active');
  }else{
     header.classList.remove('active');
  }

}


   var btn = document.getElementById("envoyer");



btn.addEventListener('click',function(e){
    e.preventDefault();
    var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var number = document.getElementById("number").value;
var date = document.getElementById("date").value;

alert('Nom : ' +name + '\n Email : '+email+ '\n Telephone : ' +number+ '\n Date et Heure : ' + date )

})

$(function () {
   $('#myDiv').floatingWhatsApp({
     phone: '+212 605-565353',
     position:'right'
   });
 });



//Reviews
