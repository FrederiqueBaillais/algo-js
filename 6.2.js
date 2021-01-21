//Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length.
//Add a method named collides(otherRectangle) that returns true only if the current
//rectangle collides with otherRectangle.
//Test the collides(otherRectangle) method by using multiple test cases.

class Rectangle {
    //constructeur qui contient les attributs de la class et indique la position
    //initiale du rectangle avec topLeftXPos et topLeftYPos et indique sa largeur et sa longueur
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    //méthode qui retourne vrai si le rectangle nommé est superposé à un autre
    collides(otherRectangle) {
        var A = this.topLeftXPos+this.length;
        var B = otherRectangle.topLeftXPos+otherRectangle.length;
        var C = this.topLeftYPos+this.width;
        var D = otherRectangle.topLeftYPos+otherRectangle.width;
        if ((((this.topLeftXPos < otherRectangle.topLeftXPos)&&(otherRectangle.topLeftXPos < A))
            || ((this.topLeftXPos < B)&&(B < A)))
            && (((this.topLeftYPos < otherRectangle.topLeftYPos)&&(otherRectangle.topLeftYPos < C))
            || ((this.topLeftYPos < D)&&(D < C)))) {
            return true;
        }
        else {
            return false;
        }

    }
}
//premier test qui doit renvoyer true
//premier rectangle à créer
let rect1 = new Rectangle(1,1,3,5);
//deuxième rectangle à créer
let rect2 = new Rectangle(3,3,3,6);
//vérifier en appelant la méthode collides pour l'autre rectangle
console.log(rect1.collides(rect2));

//deuxième test qui doit renvoyer false
//premier rectangle à créer
let rect3 = new Rectangle(1,1,3,5);
//deuxième rectangle à créer
let rect4 = new Rectangle(8,2,2,5);
//vérifier en appelant la méthode collides pour l'autre rectangle
console.log(rect3.collides(rect4));

//troisième test qui doit renvoyer true
//premier rectangle à créer
let rect5 = new Rectangle(1,1,3,5);
//deuxième rectangle à créer
let rect6 = new Rectangle(2,2,3,3);
//vérifier en appelant la méthode collides pour l'autre rectangle
console.log(rect5.collides(rect6));