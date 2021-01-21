//reuse class Rectangle in 6.2.js. It should generate 1000 random instances of Rectangle with random
//positions and sizes. Display all colliding rectangles amongst those that were generated that way.

class Rectangle {
    //constructeur qui contient les attributs de la class et indique la position
    //initiale du rectangle avec topLeftXPos et topLeftYPos et indique sa largeur et sa longueur
    constructor(id, topLeftXPos, topLeftYPos, width, length){
        this.id = id;
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
        //vérifie s'il y a une superposition de rectangles, si oui, renvoie true
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
//crée un tableau contenant 1000 rectangles
let tableau = [];
for (let i = 1; i <= 1000; i++) {
    rect = new Rectangle(
        i,
        Math.floor(Math.random() * 800) + 1,
        Math.floor(Math.random() * 800) + 1,
        Math.floor(Math.random() * 800) + 1,
        Math.floor(Math.random() * 800) + 1
    );
    tableau.push(rect);
}
//vérifie s'il y a collision entre chaque rectangle et renvoie les rectangles qui se touchent
//pour chaque rectangle, ...
for (let m = 0; m < Math.round(tableau.length/2); m++) {
    //... regarder les autres rectangles
    for (let p = m+1; p < tableau.length; p++) {
        if (tableau[m].collides(tableau[p])== true) {
            //affiche les rectangles qui se tamponnent en renvoyant leur information sour forme de JSON
            var myRect = JSON.stringify(tableau[m]);
            var myRect2 = JSON.stringify(tableau[p]);
            console.log(myRect+myRect2);
        }
    }
}