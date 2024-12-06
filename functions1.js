class employee{
    #name;
    #age;
    #salary;
    constructor(name,age,salary){
        this.#name="sree",
        this.#age=30,
        this.#salary=50000;
    }
    hello(){
        console.log("my name is"+this.#name)
    }
}
var person1=new employee("sree",30,50000);
console.log(person1.name);
person1.hello();