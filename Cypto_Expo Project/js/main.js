(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
})(jQuery);

// Countdown start
// set Dec 25, 2023 18:30:00 countdown
let countDownDate = new Date("Mar 25, 2024 18:30:00").getTime();
setInterval(() => {
    let now = new Date().getTime();
    let distance = Math.ceil((countDownDate - now) / 1000);
    const currentDate = new Date();
    flipAllCards(distance);
    console.log(distance);

}, 250);

function flipAllCards(time) {
    // variable storing the time value 
    const days = Math.floor(time / (24 * 3600));
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600) % 24;
    //   set formuls
    flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10));
    flip(document.querySelector("[data-days-ones]"), days % 10);
    flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
    flip(document.querySelector("[data-hours-ones]"), hours % 10);
    flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
    flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
    flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
    flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
}

function flip(flipCard, newNumber) {
    // select the top class for appling the action 
    const topHalf = flipCard.querySelector(".top");
    const startNumber = parseInt(topHalf.textContent);
    if (newNumber === startNumber) return;

    const bottomHalf = flipCard.querySelector(".bottom");
    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");

    top.textContent = startNumber;
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", (e) => {
        topHalf.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", (e) => {
        topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", (e) => {
        bottomHalf.textContent = newNumber;
        bottomFlip.remove();
    });
    flipCard.append(topFlip, bottomFlip);
}
// Countdown End

// Sticky Menu Start
document.addEventListener('scroll',function(){
    let cd = document.getElementById("cd");
    let rBtn = document.getElementById("rBtn");
    let ab = document.getElementById("about");
    if(window.pageYOffset >= 800){
        cd.classList.add("sticky");
        ab.classList.add("m-top");
        cd.classList.remove("push-in");
        rBtn.classList.remove("d-none");
        
    }
    else{
        cd.classList.add("push-in");
        rBtn.classList.add("d-none");
        cd.classList.remove("sticky");
        ab.classList.remove("m-top");

    }
});
// Sticky Menu End
