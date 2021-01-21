//reuse class Rectangle in 6.2.js
//it should generate 1000 random instances of Rectangle
//with random positions and sizes.
//display all colliding rectangles amongst those that
//were generated that way.
let tableau = [];

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
        let rectM;
        for (let m = 0;m<tableau.length;m++){
            rectM = tableau[m];
            for (let p = 0;p<tableau.length;p++){
                if ((((this.topLeftXPos < otherRectangle.topLeftXPos)&&(otherRectangle.topLeftXPos < A))
                    || ((this.topLeftXPos < B)&&(B < A)))
                    && (((this.topLeftYPos < otherRectangle.topLeftYPos)&&(otherRectangle.topLeftYPos < C))
                    || ((this.topLeftYPos < D)&&(D < C)))) {
                        return true;
                    }
            }
            
        }
    }
    //1000 rectangles
    rect1000rand() {
        for (let i = 0; i < 10; i++) {
            
            rect = new Rectangle(
                Math.floor(Math.random() * (10 - 1) + 1),
                Math.floor(Math.random() * (10 - 1) + 1),
                Math.floor(Math.random() * (10 - 1) + 1),
                Math.floor(Math.random() * (10 - 1) + 1)
            );
            tableau.push(rect);

        }
        console.log(rect.collides(rect));
        console.log(tableau);
        //return rect;
    }
}
let rect = new Rectangle();
console.log(rect.rect1000rand());