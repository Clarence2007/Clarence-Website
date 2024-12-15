let dayDisplay = document.getElementById('day-display');
let monthDisplay = document.getElementById('month-display');

let date = new Date();
let dayDisplayInput = date.getDate();
dayDisplay.innerHTML = dayDisplayInput;

var months = ['jan', 'feb', 'mar', 'apr', ',may', 'jun', 'jul', 'sept', 'oct', 'nov', 'dec'];
let monthDisplayInput = date.getMonth();
monthDisplay.innerHTML = months[monthDisplayInput];

const observer = new IntersectionObserver((entries) =>{

    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach ((el) => observer.observe(el))

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach ((el) => observer.observe(el))

const hiddenElements3 = document.querySelectorAll('.hidden3');
hiddenElements3.forEach ((el) => observer.observe(el))

const hiddenElements4 = document.querySelectorAll('.hidden4');
hiddenElements4.forEach ((el) => observer.observe(el))

const hiddenElements5 = document.querySelectorAll('.hidden5');
hiddenElements5.forEach ((el) => observer.observe(el));

let body = document.getElementById('body')
let seeMore = document.getElementById('see-more-projects');
let seeMorePage = document.getElementById('see-more-page');
seeMore.onclick = () =>{
   seeMorePage.style.opacity = "1"
   seeMorePage.style.transform = "translateX(0)";
  seeMorePage.style.filter = "blur(0)";
  body.style.overflowY = "hidden";
}
let closeButton = document.getElementById('close-btn');

closeButton.onclick = () =>{
    seeMorePage.style.opacity = "0";
    seeMorePage.style.transform = "translateX(100%)";
   seeMorePage.style.filter = "blur(5px)";
}
