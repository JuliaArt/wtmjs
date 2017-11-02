const Person = require('./person');

module.exports = class Artist extends Person {
    constructor(name, typeOfArt, popularity, money){
    super(name, money);
    this.typeOfArt = typeOfArt;
    this.popularity = popularity;
    }

    test(){
        console.log(JSON.stringify("Test"));
    }

    amIPopular(){
        var x = this.popularity;
        switch (true){
            case (x<5):
                console.log(JSON.stringify(this.name + " is in the beginning of the way..."));
                break;
            case (x >= 5 && x < 15):
                console.log(JSON.stringify("God job!" + this.name + " has got +100 000 followers in instagram!"));            
                break;
            case (x >= 15 && x < 35):
                console.log(JSON.stringify("Congrats, " + this.name + "'s last colaboration was very successfull"));            
                break;
            case (x >= 35):
                console.log(JSON.stringify(this.name + " is on the top"));            
        }
    }

    amIRich(){
        var x = this.money;
        switch (true){
            case (x<20):
                console.log(JSON.stringify(this.name + " is in the beginning of the way..."));
                break;
            case (x >= 20 && x < 50):
                console.log(JSON.stringify(this.name + " can go to pub in any time"));            
                break;
            case (x >= 50 && x < 100):
                console.log(JSON.stringify("I saw " + this.name + " on Davos in Swiss;)"));            
                break;
            case (x >= 100):
                console.log(JSON.stringify("Time for " + this.name + " to buy an Aston Martin or found a start-up"));            
        }
    }

    makeArt(){
        this.popularity = ++this.popularity; 
      //  this.money = this.money - (Math.random * this.popularity)/3;
        this.money = this.money - Math.floor(this.popularity/12);        
        console.log(JSON.stringify(this.name + " made a great art. The popularity now: "
         + this.popularity + " points. Amount of money: " + this.money + " thousands"));
    }

    doCollaborationWith(artist){
        if (this.popularity >= artist.popularity){
            this.popularity = ++this.popularity;
       //     this.friends.push(artist);
            console.log(JSON.stringify("Collaboration of " + artist.name + " with " + this.name + " was successfull"))
        } else {
            console.log(JSON.stringify(this.name + " is not enough popular. "+ artist.name + " didn't notice the attempt"))            
        }
    }

    earnMoney(){
        var x = this.popularity;
        switch (true){
            case (x<6):
                this.money = this.money + 5;
                console.log(JSON.stringify(this.name+" earned "+ 5 +" euro"));
                break;
            case (x > 6 && x < 9):
                this.money = this.money + 10;
                console.log(JSON.stringify(this.name+" earned "+ 10 +" euro"));                
                break;
            case (x > 10 && x < 50):
                this.money = this.money + 20;
                console.log(JSON.stringify(this.name+" earned "+ 20 +" euro"));
                break;
            case (x > 51):
                this.money = this.money + 30;
                console.log(JSON.stringify(this.name+" earned "+ 30 +" euro"));
        }

    } 
    
}