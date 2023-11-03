let h2 = document.querySelector('h2');
h2.dataset.test = 'hello javascript';
console.log('h2.dataset.test: ', h2.dataset.test);

let img = document.querySelector('img');
let liList = document.querySelectorAll('li');
let selectedItem = document.querySelector('.selected-item');

liList[0].addEventListener('click', function (event) {
  console.log(event.target);
  img.setAttribute('src', event.target.dataset.img);
});

liList[1].addEventListener('click', function (event) {
  img.setAttribute('src', event.target.dataset.img);
});
liList[2].addEventListener('click', function (event) {
  img.setAttribute('src', event.target.dataset.img);
});

function selectItem(event) {
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
}
