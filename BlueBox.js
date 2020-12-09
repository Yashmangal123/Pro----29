class BlueBox extends Box{
    constructor(x,y){
        super(x,y,40,50);
    }

    display(){
       fill(85,136,238);
       super.display(); 
    }
}