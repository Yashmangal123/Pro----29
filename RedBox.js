class RedBox extends Box{
    constructor(x,y){
        super(x,y,40,50);
    }

    display(){
        fill(233, 119, 121);
        super.display();
    }
}