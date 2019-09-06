//  function message(meas){
//      console.log(meas);
//  }
//  var me="hello world";
//  message(me);
// function doSomething()
// {
//     for(let i=0; i<5;i++)
//     {
//         console.log(i);
//     }
//     console.log('Finally:'+i);
// }
// doSomething();
//type allotations
// let a : number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[]=[1,2,3];
// let f: any[]=[1,true,'fals'];
// // const ColorRed=0;
// // const ColorBlue=1;
// // const ColorGreen=2;
// enum Color{Red,Green,Blue};
// let back = Color.Red;
// console.log(back);
//tool.tip
//  let message="abc";
//  let a=message.charAt(2);
// console.log(a);
//type assertions
// let message;
// message='abc';
// //method 1
// let a=(<string>message).endsWith('c');
// console.log(a);
// //method 2
// let b=(message as string).endsWith('c');
// console.log(b);
//Arrow function
// let fun1 = function(message)
// {
//     console.log(message);
// }
// let dol  = (message) => {
//     console.log(message);
// }
//custom types Interface
//   interface Point{
//       x: number,
//       y: number
//   }
//   let drawPoint = (point: Point)=>{
//   }
//class
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X:" + this.x + ',y:' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point();
point.draw();
