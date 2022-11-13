


class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    
    greeting() {
        console.log(`My name is ${this.name}`)
    }
}

class Engineer extends Person{
    constructor(name, age, languages, canGoogle) {
        super(name, age)
        this.languages = languages
        this.canGoogle = canGoogle
    }

    deleteAWSResourses() {
        
    }
}



let george = new Person('George', 24)

george.greeting()

let nick = new Engineer('Nick', 32, ['Go', 'JS', 'Python'], true)

nick.greeting()

