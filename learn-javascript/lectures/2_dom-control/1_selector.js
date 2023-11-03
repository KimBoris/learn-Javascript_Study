// 1] get 메서드
let title = document.getElementById('title');
console.log(title);

title.textContent = '헬스 3대 운동';

let items = document.getElementsByClassName('item');
console.log(items);
console.log('스쿼트', items[0]);
console.log('벤치프레스', items[1]);
console.log('데드리프트', items[2]);

let liList = document.getElementsByTagName('li');
console.log(liList);

// 2] HTML 요소 쿼리
//쿼리셀렉터는 같은 요소가 있을때는 첫번째거만 들고옴
let h2 = document.querySelector('#title');
console.log(h2);

let item = document.querySelector('.item');
console.log('query item: ', item);

let itemAll = document.querySelectorAll('.item');
console.log('itemAll: ', itemAll);
console.log('item[0]: ', itemAll[0]);
console.log('item[1]: ', itemAll[1]);
console.log('item[2]: ', itemAll[2]);

//HTML 요소 조작하기
//1. 콘텐츠 수정
//
//컨텐츠 안에 있는것이 모두 지워지면서 값이 들어가기 때문에 주의!
// h2.textContent = '운동!!!';
// h2.innerHTML = '<span>운동@@@</span>';

// console.log(h2.textContent);

//이렇게하면 body안에 다 지워짐
// document.querySelector('body').innerHTML = '<strong>운동</strong>';

//속성 수정
let input = document.querySelector('input');
input.setAttribute('placeholder', '헬스 운동을 입력해주세요!');
//속성 삭제
//input.removeAttribute('placeholder');
input.setAttribute('required', '');
input.removeAttribute('required');

//2.
let helloItem = document.querySelector('.hello');
console.log('helloItem', helloItem);
//helloItem.style.color = 'white';
//helloItem.style.backgroundColor = 'black';

//helloItem.classList.add('dark', 'one');
//helloItem.classList.add('one');
