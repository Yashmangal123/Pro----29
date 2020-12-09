class YellowBox extends Box{
    constructor(x,y){
        super(x,y,40,50);
    }

    display(){
        fill(242, 217, 3);
        super.display();
    }
}