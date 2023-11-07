class student {
    name;
    roll;
    address;
    constructor(setName, roll, address){
        this.name = setName;
        this.roll = roll;
        this.address = address
    }
    school = 'madanpur High School'
    attendance(){
        console.log('student should be attend in class before 10 am');

    }
    exam(){
        console.log(' every student should attend in exam');
    }
}
const Rohul = new student('alif', 16, 'Narayangonj')
const Dipu = new student ('hamim', 15, 'Dhaka')


console.log(alif);
console.log(hamim);