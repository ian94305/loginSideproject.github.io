const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const popup=document.getElementById('popup');

let Popup=function(){
	popup.classList.toggle('hidden');
}


popup.addEventListener('click',Popup);



signUpButton.addEventListener('click', () => {
	container.classList.toggle("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.toggle("right-panel-active");
});


