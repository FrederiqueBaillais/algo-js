//Create a class named Circle with attributes xPos, yPos and radius.
//Add a method named move(xOffset, yOffset) that will adjust the position of the circle.
//Add a getter accessor named surface that will return the surface of the circle.
//Test its method and accessors by modifying the values and checking if everything is consistent.

class Circle {
    //constructeur qui contient les attributs de la class et indique la position
    //initiale du cercle avec xPos et yPos et indique son radius
    constructor(xPos,yPos,radius){
        this.radius = radius;
        this.xPos = xPos;
        this.yPos = yPos;
    }
    //méthode qui ajuste la position du cercle aux nouvelles valeurs nommées xOffset et yOffset
    move(xOffset,yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    //accesseur (getter) qui calcule Pi*R² pour la surface d'un cercle
    get surface (){
        return Math.PI*(this.radius*this.radius);
    }
}
let myCircle = new Circle(1,6,2);
console.log(myCircle);
console.log('surface du cercle : '+myCircle.surface);
//je déplace le cercle ci-dessus créé aux nouvelles coordonnées
myCircle.move(4,7);
console.log(myCircle);