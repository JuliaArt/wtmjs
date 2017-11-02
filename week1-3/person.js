module.exports = class Person {
    constructor(name,money){
        this.name = name;
       // this.friends = [];
        this.money = money;
    }

    sayName(){
        console.log(JSON.stringify(name));
    }

    haveABeerWith(person){
        if (this.money > 0){
  //      this.friends = this.friends.push(person.name);
        this.money = --this.money;
        console.log(this.name+" had a beer with "+ person.name);
        }
        else {
            console.log(JSON.stringify(this.name + " run out of money. Get a job!"));
        }
    }

    getJob(){
        this.money = this.money + 5;
    }
}