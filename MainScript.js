var navigationCheckbox = document.getElementById("navigation-checkbox")
var navigationToggler = document.getElementById("navigation-check")
navigationToggler.addEventListener('click', function () {
    navigationCheckbox.checked = ! navigationCheckbox.checked
})

var bookRadioInputSmall = document.getElementById("form-radio-small")
var bookRadioInputLarge = document.getElementById("form-radio-large")
var bookTogglerSmall = document.getElementById("small")
var bookTogglerLarge = document.getElementById("large")
bookTogglerSmall.addEventListener('click', function() {
    bookRadioInputSmall.checked = ! bookRadioInputSmall.checked
    // if(bookRadioInputLarge.checked)
    //     bookRadioInputLarge.checked = !bookRadioInputLarge.checked
})
bookTogglerLarge.addEventListener('click', function() {
    bookRadioInputLarge.checked = ! bookRadioInputLarge.checked
    // if(bookRadioInputSmall.checked)
    //     bookRadioInputSmall.checked = !bookRadioInputSmall.checked
})

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