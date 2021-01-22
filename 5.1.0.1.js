const readlineSync = require("readline-sync");

function askTvseries(){
    let TvSeries ={
        "Name" : readlineSync.question("What your favorite series ?"),
        "ProductionYears" : readlineSync.question("What the years of production ?"),
        "NamesOfTheCastMembers" : [
            {
            PrincipaleCharacter : readlineSync.question ("Who are the principale Character ?")
            },{
            SideKick : readlineSync.question ("Who is his Side kick ?"),
            },{
            Ennemies : readlineSync.question ("Who is his ennemie ?"),
            }
        ]       
    }
    return TvSeries
}
console.log(askTvseries());