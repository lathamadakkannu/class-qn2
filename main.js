//Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. 
//Include two methods to calculate rectangle area and perimeter. 
//Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    rectangleArea(){
        return this.width*this.height
    }
    perimeter(){
        return 2*(this.width+this.height)
    }
}

let result=new Rectangle(5,3)

console.log(`Area of the rectangle :`+ result.rectangleArea());

console.log(`Perimeter of the rectangle :` + result.perimeter());