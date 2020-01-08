//arguments object - no longer bound with arrow functions


const add = function(a, b){
    console.log(arguments)
    return a+b;
}
console.log(add(55,1, 1001))

const addArrow = (a, b) => {
    //console.log(arguments) don't have access to arguements object
    return a+ b;
}

console.log(add(55,1))



//this keyword - no longer bound with arrow functions

const user = {
    name: 'Markus',
    cities: ['New York, Oslo, Dublin'],
    printPlacesLived: function() {
        const that = this;
        console.log(this.name)
        console.log(this.cities)

        this.cities.forEach(function (city) {
            //we don't have access to this in an nested
            //anon es5 function, so we have to use that
            //es5 anon function binds its own this value
            console.log(that.name + ' has lived in ' + city)
        })

        //arrow function has access to this
        this.cities.forEach((city) => console.log(this.name + ' has lived in ' + city))

    },

    printPlacesLivedes6Method() {
        const that = this;
        console.log(this.name)
        console.log(this.cities)

        this.cities.forEach(function (city) {
            //we don't have access to this in an nested
            //anon es5 function, so we have to use that
            //es5 anon function binds its own this value
            console.log(that.name + ' has lived in ' + city)
        })

        //arrow function has access to this
        this.cities.forEach((city) => console.log(this.name + ' has lived in ' + city))

        //map info
        const cityMessages = this.cities.map((city) => {
            return this.name + " Has lived in " + city;
        })

        return cityMessages


    }
}

console.log(user.printPlacesLivedes6Method())

//challange

const multiplier = {
    numbers: [1,3,5,9,20],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((number) => number*this.multiplyBy)
    }
}
console.log(multiplier.multiply())
