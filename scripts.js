let fName = document.querySelector('#fName');
let lName = document.querySelector('#lName');
let email = document.querySelector('#email');
let bD = document.querySelector('#bD');
var areaCheck = document.getElementsByName("area");
var tecCheck = document.getElementsByName("tec");
var selectCheck = document.querySelector('#select')
var myForm = document.querySelector('#myForm')
var myContainer = document.querySelector('#container')
var valid1 = false;
var valid2 = false;
var allValidations = false;
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]+/

function greetings(){
    myContainer.classList.add('container-in');
}

addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
})

function submitForm() {
    validateForm();
    if (allValidations == true) {
        myForm.classList.add('form-out');
        document.querySelector('h2').classList.add('h2-in');
        setTimeout(()=>{
            myForm.remove();
        }, 1000);
    }
    return false;
}

function validateForm() {
    allValidations = true;
    // Text input validations //

    if (fName.value == "" || format.test(fName.value)) {
        allValidations = false;
        document.querySelector('.fName-error').classList.add('error-in');
    } else {
        document.querySelector('.fName-error').classList.add('error-out');
    }
    if (lName.value == "" || format.test(lName.value)) {
        allValidations = false;
        document.querySelector('.lName-error').classList.add('error-in');
    } else {
        document.querySelector('.lName-error').classList.add('error-out');
    }
    if (email.value == "") {
        allValidations = false;
        document.querySelector('.email-error').classList.add('error-in');
    } else {
        document.querySelector('.email-error').classList.add('error-out');
    }
    if (bD.value == "" || isNaN(bD.value)==1) {
        allValidations = false;
        document.querySelector('.bD-error').classList.add('error-in');
    } else {
        document.querySelector('.bD-error').classList.add('error-out');
    }

    // Box input validations //

    areaCheck.forEach(box => {
        if (box.checked) {
            valid1 = true;
        }
    });

    tecCheck.forEach(box => {
        if (box.checked) {
            valid2 = true;
        }
    });

    if (valid1 == false || valid2 == false || selectCheck.value == 'default') {
        allValidations = false;
        document.querySelector('.box-error').classList.add("error-in");
    } else {
        document.querySelector('.box-error').classList.add("error-out");
    }

    return false;
}