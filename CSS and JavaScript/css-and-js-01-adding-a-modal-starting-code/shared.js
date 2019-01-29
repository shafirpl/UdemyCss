// alert("Conncted");
var backdrop = document.querySelector(".backdrop");
var selectPlanButton = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var noButton = document.querySelector(".modal__actions button");
var toggleButton = document.querySelector(".toggle")
//adding event listener to all the three choose plan button
for(var i = 0; i<selectPlanButton.length; i++){
  selectPlanButton[i].addEventListener('click',function(){
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
};

//making the background and the modal go away when we click the no button
noButton.addEventListener('click',function(){
  modal.style.display = 'none';
  backdrop.style.display = 'none';
});

//make the modal and blurry background go away when we click anywhere on the page, basically
//since the backdrop div covers the entire page, we are technically clicking the backdrop div
//when we click anywhere on the page
backdrop.addEventListener('click',function(){
  modal.style.display = 'none';
  backdrop.style.display = 'none';
});
