// call signature ( 콜 시그니처 )
type Add = (a: number, b: number) => number;

// overloading ( 오버로딩 )
// 여러개의 콜 시그니처가 있는 객체에서 사용

// polymorphism ( 다형성 ) _ generic ( 제네릭 )
// 콜 시그니처에 제네릭을 입력하면 어떤 타입의 데이터든 들어올수 있음.

// class / oop ( 객체지향 프로그래밍 )

// abstract class => 추상 클래스
// 추상 클래스는 인터턴스 할 수없으며, 오로지 하위 클래스 상속을 위한 전용 클래스
// 변수 선언은 private, public, protected 등으로 사용
// 상속 된 클래스 내부에서 변수를 접근하고 싶을때 protected 선언
// private, public 는 스킵

// abstract method => 추상 메소드
// 추상 메소드는 추상 클래스에서 생상하며, 콜 시그니처 형식으로 선언
// 모든 하위 클래스는 추상 메소드를 정의해야함

// Type, interface 
// Type은 유연하게 많은 데이터 타입을 정의할 수 있음
// Interface 는 오브젝트의 형식을 정의하는 경우에만 사용이 가능
// Interface 는 동일한 이름의 객체를 여러번 호출하여 정의를 중첩할 수 있음
// Type은 상속을 &로 표현하며, Interface는 클래스의 상속과 같이 사용 

// 추상 클래스 보다 인터페이스를 이용하여 클래스를 생성하는 방법이 더 가볍다
// interface User{
//   firstName:string,
//   sayHi(name:string):string
// }
// class Player implements User{
//   constructor(
//     public firstName: string    
//   ){}
//   sayHi(name: string) {
//     return name
//   }
// }