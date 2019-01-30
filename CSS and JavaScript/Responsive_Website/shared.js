// alert("Conncted");
var backdrop = document.querySelector(".backdrop");
var selectPlanButton = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var noButton = document.querySelector(".modal__actions button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector('.mobile-nav');
//adding event listener to all the three choose plan button
for(var i = 0; i<selectPlanButton.length; i++){
  selectPlanButton[i].addEventListener('click',function(){
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
};

//making the background and the modal go away when we click the no button

//the problem is, the other pages don't have the noButton, so for other pages
//this line will fail and so the js won't get executed, in order to do that,
//we check if the noButton exists and only then add eventlistener

if(noButton){
  noButton.addEventListener('click', function () {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    closeModal();
  });
}


//make the modal and blurry background go away when we click anywhere on the page, basically
//since the backdrop div covers the entire page, we are technically clicking the backdrop div
//when we click anywhere on the page
backdrop.addEventListener('click',function(){
  //closing the navbar
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  //closing the modal
  closeModal();
});

//adding event listener to the toggle button to display the mobile nav bar
toggleButton.addEventListener('click',function(){
  // mobileNav.style.display = 'block';
  // //adding backdrop to blur the page
  // backdrop.style.display = 'block';

  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});

//this function is for closing the modal
function closeModal(){
  // modal.style.display = 'none';
  // backdrop.style.display = 'none';

  //similarly other pages won't have modals, so in order to get js executed,
  //we need to check if the modal exists and only then remove or add classes
  if (modal) modal.classList.remove('open');
  
  backdrop.classList.remove('open');
}