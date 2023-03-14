// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 
//Two darkmode buttons (Footer desktop / mobile)
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const darkModeToggle2 = document.querySelector('#dark-mode-toggle2');
const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
 

  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', 'disabled');
}

const checkThebox = () => {
  $(".session__storage__checkbox").prop( "checked", true );
  $(".session__storage__checkbox2").prop( "checked", true );
}


// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
  checkThebox();
}

// When someone clicks the button
//Two darkmode buttons (Footer desktop / mobile)
[darkModeToggle].forEach((element)=>{
  element.addEventListener('click', (e)=>{
// get their darkMode setting
darkMode = localStorage.getItem('darkMode'); 
  
// if it not current enabled, enable it
if (darkMode !== 'enabled') {
  enableDarkMode();
  
// if it has been enabled, turn it off  
} else {  
  disableDarkMode(); 
 
}
  });
});
  

// When someone clicks the button
//Two darkmode buttons (Footer desktop / mobile)
[darkModeToggle2].forEach((element)=>{
  element.addEventListener('click', (e)=>{
// get their darkMode setting
darkMode = localStorage.getItem('darkMode'); 
  
// if it not current enabled, enable it
if (darkMode !== 'enabled') {
  enableDarkMode();

// if it has been enabled, turn it off  
} else {  
  disableDarkMode(); 
  
}
  });
});




