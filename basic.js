/*
    1. 변수 

*/

var num; //변수를 선언 (heap에 메모리를 할당해서 공간을 생성)
num = 3; //변수에 값을 할당
var num = 3;
var num1 = 2;
var num2 = 3;

var result = num1+num2;

console.log(result);

/*
    2. 연산자 : 특정 값을 도출하기 위한 연산을 처리하는 식별자
    
    (+ , - , / , * , % , ++ , --. **) 산술연산자 : 숫자를 연산하기 위한 연산자
    (= , += , -= , *= , /= , **= ) 대입연산자 : 특정 값을 대입하기 위한 연산자 
    (boolean 값으로 내보냄 true, false) 두개 이상의 값을 서로 비교하기 우히나 연산자
*/

//산술연산자 
var num = 2 + 3;
var num = 2 - 3;
var num = 3 / 2;
var num = 3 * 2;
var num = 5 % 3;
var num = 3 ** 3; //ie지원x

//대입연산자
var x = 2;
// x = x + 3;
// x+=3;

// x = x + 1;
// x += 1;

var num1 = 0;
console.log(num1);
num1 = num1+1;
//num++ : 후위연산자 : 초기 변수값을 활욜하고 그 이후에 값을 카운트

var num2 = 0;
num2 = num2+1;
console.log(nume2);
//++num : 전위연산가 : 초기 변수값을 바로 카운트하고 코드를 실행

var num3 = 0;
console.log(++num3);


/*
    3. 조건문 : 특정 조건을 미리 설정해서 해당 조건마다 코드이 분기를 발생
    && : 두개의 조건을 모두 만족해야 true 반환
    || : 두개의 조건 중 하나만 만족해도 true 반환
    
    if(조건삭) {
        조건식이 참, 해당 구문 실행, 만약 거짓일 경우 구문자체가 무시됨.
    }

    new Date().getHours();
*/

var now = new Date().getHours();
console.log(now);

//0~8 : 아침 테마 (gray)
//9~16 : 낮 테마 (lightblue)
//17~24 : 밤 테마 (violet)

/*
    if(now >= 0 && now < 9){
        
    }

*/
