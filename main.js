// Animation width on scrolling

let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".our-skills .progress span");

window.addEventListener("scroll", () => {
  scrolling();
});

function scrolling() {
  if (window.scrollY >= section.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
}

// count down timer

let countDown = new Date();
countDown.setFullYear(2024, 0, 0);
countDown.setHours(23, 59, 59);

let count = setInterval(function () {
  let dateNow = new Date();
  let dateDifference = countDown.getTime() - dateNow.getTime();
  let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

  document.querySelector(".days h3").innerHTML = days < 100 ? `0${days}` : days;
  document.querySelector(".hours h3").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes h3").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds h3").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDifference < 0) {
    clearInterval(count);
  }
}, 1000);


// Increase Numbers On Scrolling

let statsSection = document.querySelector(".stats");
let statsSpan = document.querySelectorAll(".stats .container .box span:first-of-type");
// let status = false;

window.addEventListener("scroll", () => {
  if(window.scrollY >= statsSection.offsetTop) {
    increasingNumbers();
  }
})
// console.log(statsSpan.dataset)
function increasingNumbers() {
  statsSpan.forEach(function(e) {
    let count = setInterval(function() {
      if(e.innerHTML !== e.dataset.goal) {
        e.innerHTML++;
      } else {
        clearInterval(count)
      }
    }, 5000 / e.dataset.goal)
  })
}
