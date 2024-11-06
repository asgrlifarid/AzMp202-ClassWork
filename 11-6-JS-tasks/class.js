
// 1) Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

// class Person{
//     consctuctor(name,country,age){
//         this.name=name;
//         this.country=country;
//         this.age=age;
//     }
// }
// const person1 = new Person("Muslera",38 ,"Urugvay")
// const person2 = new Person("Ferid",18 ,"gedebey")


// console.log("Person 1 Details:");
// person1.displayDetails();
// console.log("Person 2 Details:");
// person2.displayDetails();


// Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
//          var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2) resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile (riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalid

// class CustomMatch {
//     constructor(tezeValue) {
//         this.value = tezeValue;
//     }

   
//     plus(number) {
//         this.value += number;
//         return this; 
//     }

    
//     minus(number) {
//         this.value -= number;
//         return this; 
//     }

    
//     multiply(number) {
//         this.value *= number;
//         return this; 
//     }

    
//     a=divide(number) {
//         if (number !== 0) {
//             this.value /= number;   
//         }  
//         return this; 
// }


//     getResult() {
//         return this.value;
//     }

// const result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2).getResult();
// console.log(result);  
