//아이디가 ' ' 인것을 가져온다.
let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let inputBox = document.querySelector('input');
let removeTargetBtn = document.querySelector('#target-remove');

let removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  //button.setAttribute('class', 'remove-btn');

  button.classList.add('remove-btn');
  button.addEventListener('click', removeParentNode);

  li.appendChild(button);
  ul.appendChild(li);
});

addBeforeBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');

  //태그명이 li이면서 타입이 target인놈
  let targetLi = document.querySelector('li#target');
  console.log(targetLi);

  li.textContent = inputBox.value;

  //li앞에 targetLi를 추가해주겠다.
  ul.insertBefore(li, targetLi);
});
//appendChild = 자식태그로 추가하는것

removeTargetBtn.addEventListener('click', function () {
  let targetLi = document.querySelector('li#target');
  targetLi.remove();
});

removeBtn.addEventListener('click', removeParentNode);

function removeParentNode(event) {
  event.target.parentNode.remove();
  inputBox.value = '';
  inputBox.focus();
}
