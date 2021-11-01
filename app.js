const hourCount = document.querySelector(".hour");
const minuteCount = document.querySelector(".minute");
const colon = document.querySelector('.colon')
const colorPicker = document.querySelector('#colorPicker')
const expand = document.querySelector('.expand')
const menuLi = document.querySelector('.menu-list')



expand.addEventListener('click', function() {
  expand.classList.toggle('flipexpand')
  menuLi.classList.toggle('show')
  
})
colorPicker.addEventListener('change', changeColor)
colorPicker.addEventListener('mousemove', changeColor)


function changeColor() {
  document.documentElement.style.setProperty('--color', this.value)
}

function getTime() {
    colon.classList.toggle('no-colon')
  const now = new Date();
  const hour = now.getHours();
  let minute = now.getMinutes();

  if (minute < 10) {
    minute = "0" + now.getMinutes();
  } else {
    minute = now.getMinutes();
  }

  hourCount.textContent = hour;
  minuteCount.textContent = minute;
}

setInterval(getTime, 1000)