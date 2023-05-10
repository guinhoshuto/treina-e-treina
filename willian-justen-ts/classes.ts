class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(this.name, this.age)
    }
}

class CharAccount extends UserAccount {
    private username: string;
    private level: number;

    constructor(name: string, age:number, username: string, level: number){
        super(name, age)
        this.username = username;
        this.level = level
    }
}

const juca = new UserAccount('juca', 11)
const juquinha = new CharAccount('juca', 33, 'juquinha', 100)

juquinha.logDetails()
