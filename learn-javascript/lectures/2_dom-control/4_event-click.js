let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

//console.log(btn1, btn2);

btn1.onclick = function () {
  alert('hello property listener');
};

btn2.addEventListener('click', helloEvent1);

function helloEvent1() {
  alert('addEventlistener');
}
btn2.addEventListener('click', helloEvent2);
function helloEvent2() {
  alert('addEventlistener2');
}

btn2.removeEventListener('click', helloEvent1);
btn2.removeEventListener('click', helloEvent2);
