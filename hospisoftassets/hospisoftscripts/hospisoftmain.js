let hospisoftNavButton = document.querySelector("#hospisoftNavButton");
let hospisoftMenuOpened = document.querySelector("#hospisoftMenuOpened");
let hospisoftX = document.querySelector("#hospisoftX");
let hospisoftY = document.querySelector("#hospisoftY");
let hospisoftZ = document.querySelector("#hospisoftZ");

let hospisoftLoading = document.querySelectorAll('.hospisoftLoading');

let ii = 100;

hospisoftLoading.forEach((elt) => {

    ii += 100;
    
    setTimeout(() => {
      elt.classList.remove("hospisoftDisplayNone");
    }, ii);
});

addEventListener("load", () => {
    hospisoftLoadingDiv.classList.add("hospisoftDisplayNone");
});
/** 
hospisoftNavButton.addEventListener("click", () => {

    hospisoftMenuOpened.classList.toggle("hospisoftNavShown");

    hospisoftX.classList.toggle("collapse");
    hospisoftY.classList.toggle("collapse");
    hospisoftZ.classList.toggle("collapse"); 
    
    setTimeout(() => {
        hospisoftY.classList.toggle("hospisoftDisplayNone");
        hospisoftX.classList.toggle("rotate30");
        hospisoftZ.classList.toggle("rotate150");
      }, 70);
    
    setTimeout(() => {
      hospisoftX.classList.toggle("rotate45");
      hospisoftX.classList.toggle("xhover");
      hospisoftZ.classList.toggle("rotate135"); 
    }, 120);
});
*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            alignToTop: true,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function(){
    let header = document.querySelector('#hospisoftHeader');
    let hospisoftToTopBtn = document.querySelector('#hospisoftToTopBtn');
    let rewardhospisoftservatoire = document.querySelector('#rewardhospisoftservatoire');
    let hospisoftFresque = document.querySelector('#hospisoftFresque');

    if(rewardhospisoftservatoire && hospisoftFresque){
        let hospisoftDistanceFresque = rewardhospisoftservatoire.offsetTop + hospisoftFresque.offsetHeight;
        hospisoftIconFresque.classList.toggle("hospisoftJoined", window.scrollY > hospisoftDistanceFresque);
    }
    header.classList.toggle("hospisoftFixed", window.scrollY > 100);
    /*hospisoftToTopBtn.classList.toggle("hospisoftOnSight", window.scrollY > 600);*/
});


let hospisoftAccordionWrapper = document.querySelectorAll('.hospisoftAccordionWrapper');

hospisoftAccordionWrapper.forEach((element) => {

    element.addEventListener("click", () => {

        hospisoftAccordionWrapper.forEach((elt) => {
            
            if(!elt.querySelector('.hospisoftAccordionText').classList.contains("hospisoftAccordionTextClose")){
                elt.querySelector('.hospisoftAccordionText').classList.add("hospisoftAccordionTextClose");
            }
        });

        element.querySelector('.hospisoftAccordionText').classList.remove("hospisoftAccordionTextClose");
        
    });
});

/* Multisteps form */

let hospisoftFormSteps = document.querySelectorAll(".hospisoftFormSteps");
let hospisoftFormStepsLength = document.querySelectorAll(".hospisoftFormSteps").length;

let hospisofti = 1;

let hospisoftDivSize = document.querySelector('.hospisoftDivSize');
let hospisoftFormNext = document.querySelector('.hospisoftFormNext');
let hospisoftFormPrevious = document.querySelector('.hospisoftFormPrevious');
let hospisoftFormSubmitButton = document.querySelector('#hospisoftFormSubmitButton');


let hospisoftName = document.querySelector('#hospisoftName');

let hospisoftEmail = document.querySelector('#hospisoftEmail');

let hospisoftTelephone = document.querySelector('#hospisoftTelephone');

let hospisoftPassword = document.querySelector('#hospisoftPassword');

let hospisoftCompany = document.querySelector('#hospisoftCompany');

let hospisoftIndustry = document.querySelector('#hospisoftIndustry');

if(hospisofti < hospisoftFormStepsLength){
    hospisoftFormSubmitButton.classList.add("hospisoftDisplayNone");
    hospisoftFormPrevious.classList.add("hospisoftDisplayNone");
}
if(hospisoftFormNext){
    hospisoftFormNext.addEventListener("click", () =>{

        let hospisoftFormErr = 0;
    
        if(hospisoftName.value == ""){
            let hospisoftNameParent = hospisoftName.parentNode;
            hospisoftFormErr++;
            hospisoftNameParent.style.boxShadow = "0 0 0 3px #FFB5AB";
        }else{
            hospisoftNameParent.style.boxShadow = "0 0 0 3px #F0F7FF";
        }
        if(hospisoftEmail.value == ""){
            let hospisoftEmailParent = hospisoftEmail.parentNode;
            hospisoftFormErr++;
            hospisoftEmailParent.style.boxShadow = "0 0 0 3px #FFB5AB";
        }else{
            hospisoftEmailParent.style.boxShadow = "0 0 0 3px #F0F7FF";
        }
        if(hospisoftTelephone.value == ""){
            let hospisoftTelephoneParent = hospisoftTelephone.parentNode;
            hospisoftFormErr++;
            hospisoftTelephoneParent.style.boxShadow = "0 0 0 3px #FFB5AB";
        }else{
            hospisoftTelephoneParent.style.boxShadow = "0 0 0 3px #F0F7FF";
        }
        if(hospisoftPassword.value.length < 8){
            let hospisoftPasswordParent = hospisoftPassword.parentNode;
            hospisoftFormErr++;
            hospisoftPasswordParent.style.boxShadow = "0 0 0 3px #FFB5AB";
        } else{
            hospisoftPasswordParent.style.border = "0 0 0 3px #F0F7FF";
        }
    
        if(hospisoftFormErr == 0){
            document.querySelector("#hospisoftStep0"+hospisofti).classList.add("hospisoftDisplayOutOfSight");
            hospisofti++;
        
            if(hospisofti > 1){
                hospisoftFormPrevious.classList.remove("hospisoftDisplayNone");
            }
            if(hospisofti == hospisoftFormStepsLength){
                hospisoftFormNext.classList.add("hospisoftDisplayNone");
                hospisoftFormSubmitButton.classList.remove("hospisoftDisplayNone");
            }
            document.querySelector("#hospisoftStep0"+hospisofti).classList.remove("hospisoftDisplayOutOfSight");
        }
    });
    
    hospisoftFormPrevious.addEventListener("click", () =>{
    
        document.querySelector("#hospisoftStep0"+hospisofti).classList.add("hospisoftDisplayOutOfSight");
        hospisofti--;
        
        if(hospisofti < hospisoftFormStepsLength){
            hospisoftFormNext.classList.remove("hospisoftDisplayNone");
            hospisoftFormSubmitButton.classList.add("hospisoftDisplayNone");
        }
        if(hospisofti = 1){
            hospisoftFormPrevious.classList.add("hospisoftDisplayNone");
        }
        document.querySelector("#hospisoftStep0"+hospisofti).classList.remove("hospisoftDisplayOutOfSight");
    });
}

let hospisoftEye = document.querySelector(".hospisoftEye");
let hospisoftNoEye = document.querySelector(".hospisoftNoEye");
let hospisoftInput = document.querySelectorAll(".hospisoftInput");


hospisoftInput.forEach( elt => {

    window.addEventListener("click", (e) => {
        if (elt.contains(e.target)){

            elt.classList.add('hospisoftInputFocus');

          } else{

             elt.classList.remove('hospisoftInputFocus');
          
            }
    });
});

if(hospisoftEye){
    hospisoftEye.addEventListener("click", () => {
        hospisoftEye.classList.add("hospisoftDisplayNone");
        hospisoftNoEye.classList.remove("hospisoftDisplayNone");
        
        if (hospisoftPassword.type === "password") {
            hospisoftPassword.type = "text";
        }
    });

    hospisoftNoEye.addEventListener("click", () => {
        hospisoftNoEye.classList.add("hospisoftDisplayNone");
        hospisoftEye.classList.remove("hospisoftDisplayNone");
        
        if (hospisoftPassword.type === "text") {
            hospisoftPassword.type = "password";
        }
    });
}


let hospisoftIconLogo = document.querySelector("#hospisoftDashBoardSideHeader #hospisoftIconLogo");
let hospisoftDashBoardCollapse = document.querySelector("#hospisoftDashBoardCollapse");
let hospisoftDashBoardSide = document.querySelector("#hospisoftDashBoardSide");
let hospisoftDashboardPages = document.querySelector(".hospisoftDashboardPages");

if(hospisoftDashBoardCollapse){
    hospisoftDashBoardCollapse.addEventListener('click', () => {
        
        hospisoftDashboardPages.classList.toggle("hospisoftCollapsedWrapper");
        hospisoftDashBoardSide.classList.toggle("hospisoftCollapsed");

        if(hospisoftDashBoardSide.classList.contains('hospisoftCollapsed')){
            
            hospisoftIconLogo.setAttribute('viewBox', '0 0 120 144');
        
        }else{

            hospisoftIconLogo.setAttribute('viewBox', '0 0 687 144');

        }
    });
}

let hospisoftBtnClose = document.querySelector('#hospisoftBtnClose');
let hospisoftDemarrer = document.querySelector('#hospisoftDemarrer');

if(hospisoftBtnClose){

    hospisoftBtnClose.addEventListener('click', () => {

        hospisoftDemarrer.style.display = "none";
    });    
}

let hospisoftBtnCloseAll = document.querySelectorAll('.hospisoftBtnClose');

if(hospisoftBtnCloseAll){

    hospisoftBtnCloseAll.forEach(elt => {

        elt.addEventListener('click', ()=>{

            elt.parentNode.querySelector(".hospisoftVoirTout").classList.toggle("hospisoftDisplayNone");
        });
    });

}



//Initial references
const input = document.querySelectorAll(".input");
const inputField = document.querySelector(".inputfield");
const submitButton = document.getElementById("hospisoftSubmit");
let inputCount = 0,
  finalInput = "";

//Update input
const updateInputConfig = (element, disabledStatus) => {
  element.disabled = disabledStatus;
  if (!disabledStatus) {
    element.focus();
  } else {
    element.blur();
  }
};

input.forEach((element) => {
  element.addEventListener("keyup", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    let { value } = e.target;

    if (value.length == 1) {
      updateInputConfig(e.target, true);
      if (inputCount <= 3 && e.key != "Backspace") {
        finalInput += value;
        if (inputCount < 3) {
          updateInputConfig(e.target.nextElementSibling, false);
        }
      }
      inputCount += 1;
    } else if (value.length == 0 && e.key == "Backspace") {
      finalInput = finalInput.substring(0, finalInput.length - 1);
      if (inputCount == 0) {
        updateInputConfig(e.target, false);
        return false;
      }
      updateInputConfig(e.target, true);
      e.target.previousElementSibling.value = "";
      updateInputConfig(e.target.previousElementSibling, false);
      inputCount -= 1;
    } else if (value.length > 1) {
      e.target.value = value.split("")[0];
    }
    submitButton.classList.add("hide");
  });
});

window.addEventListener("keyup", (e) => {
  if (inputCount > 3) {
    submitButton.classList.remove("hide");
    submitButton.classList.add("show");
    if (e.key == "Backspace") {
      finalInput = finalInput.substring(0, finalInput.length - 1);
      updateInputConfig(inputField.lastElementChild, false);
      inputField.lastElementChild.value = "";
      inputCount -= 1;
      submitButton.classList.add("hide");
    }
  }
});

const validateOTP = () => {
  alert("Success");
};

//Start
const startInput = () => {
  inputCount = 0;
  finalInput = "";
  input.forEach((element) => {
    element.value = "";
  });
  updateInputConfig(inputField.firstElementChild, false);
};

window.onload = startInput();