var navigationCheckbox = document.getElementById("navigation-checkbox")
var navigationToggler = document.getElementById("navigation-check")
navigationToggler.addEventListener('click', function () {
    navigationCheckbox.checked = ! navigationCheckbox.checked
})

// var bookRadioInputSmall = document.getElementById("form-radio-small")
// var bookRadioInputLarge = document.getElementById("form-radio-large")
// var bookRadioToggle = document.getElementById("form__radio-button")

var bgvideo = document.getElementById("bg-video")
bgvideo.playbackRate = 0.5
// bookRadioToggle.addEventListener("click", function() {
//     console.log(bookRadioInputSmall.checked)
//     if(bookRadioInputSmall.checked === true) {
//         bookRadioInputSmall.checked = !bookRadioInputSmall.checked
//     }
    
//     console.log(bookRadioInputSmall.checked)
//     if(!bookRadioInputLarge.checked)
//         bookRadioInputLarge.checked = !bookRadioInputLarge.checked
// })