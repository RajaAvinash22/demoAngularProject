export class Point {
    
    constructor(private x?: number, private y?:number){
        
    }
    draw() {
        console.log("X:"+this.x+',y:'+this.y);
    }
}