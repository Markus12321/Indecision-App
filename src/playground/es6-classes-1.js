class Person{
    constructor(name = 'Markus hellestveit', age = 0){
        this.name = name
        this.age = age
    }

    getGreeting(){
        //template strings backticks ``
        return `Hi I am ${this.name}`
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }

    hasMajor(){
        return !!this.major
    }

    getDescription(){
        let description = super.getDescription()

        if(this.hasMajor()){
            return `${description}. Their major is ${this.major}`
        }
        return description;
    }
}

class Travler extends Person{
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation)
            return `${greeting}. I'm vising from ${this.homeLocation}`
        
        return greeting;

    }

}

const me = new Travler('per', 16)


console.log(me.getGreeting())
