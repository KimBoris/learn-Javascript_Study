console.log('Hello !!!');
console.log('Hello', 'world', 'javascript');

//alert('Hello JavaScript');

const str1 = 'halo';
console.log(str1);

let str = 'Hello JavaScript';
let number = 30;
console.log('문자열: ', str);
console.log('number: ', number);

function sayHello() {
  console.log('Hello 1');
  console.log('Hello 2');
  console.log('Hello 3');
}

// sayHello();
// console.log('-------');
// sayHello();

//객체는 변수, 함수를 가질 수 있다.
let obj = {
  number: 30, //프로퍼티(속성)
  sayHello: function () {
    console.log('obj>Hello 1');
    console.log('obj>Hello 2');
    console.log('obj>Hello 3');
  },
};

// console.log(obj);
// obj.sayHello();
