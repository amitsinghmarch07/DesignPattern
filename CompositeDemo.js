class Employee {
    calculate() { }
}

class CEO extends Employee {
    managers = [];
    name;
    salary;
    constructor(name, salary) {
        super();
        this.name = name;
        this.salary = salary;
    }

    calculate() {
        let calSalary = 0;
        this.managers.forEach(manager => calSalary += manager.calculate());
        return calSalary + this.salary;
    }
}

class Manager extends Employee {
    employees = [];
    name;
    salary;
    constructor(name, salary) {
        super();
        this.name = name;
        this.salary = salary;
    }

    calculate() {
        let calSalary = 0;
        this.employees.forEach(employee => calSalary += employee.calculate());
        return calSalary + this.salary;
    }
}

class Developer extends Employee {
    name;
    salary;

    constructor(name, salary) {
        super();
        this.name = name;
        this.salary = salary;
    }

    calculate() {
        return this.salary;
    }
}

pichai = new CEO("pichai", 100);

eich = new Manager("Brendon Eich", 95);

gosling = new Manager("Gosling", 90);

amit = new Developer("Amit", 30);

anish = new Developer("Anish", 35);

alka = new Developer("Alka", 35);

shriza = new Developer("Shirza", 40);

pichai.managers = [eich, gosling];

eich.employees = [amit, anish, alka];

gosling.employee = [shriza];


const sum = pichai.calculate();

console.log(sum);
// devList = [];
// mgrList = [];


// devList.push(new Developer("Brendan Eich", 100_000));
// devList.push(new Developer("James Gosling", 200_000));
// devList.push(new Developer("Guido van Rossum", 250_000));
// devList.push(new Developer("Anders Hejlsberg", 350_000));
// mgrList.push(new Manager("Dennis Ritchie", 500_000));
// mgrList.push(new Manager("Alan Kay", 500_000));

// sum = 0
// devList.forEach(element => {
//     sum += element.salary;
// });

// mgrList.forEach(element => {
//     sum += element.salary;
// });

// console.log(`The total company salary is ${sum}`);