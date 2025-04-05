/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

class Student {
  constructor(public name: string, public age: number, public grade: string) {}
}

const student1 = new Student("Іван", 16, "10-Б");

console.log(`Ім'я: ${student1.name}`);
console.log(`Вік: ${student1.age}`);
console.log(`Клас: ${student1.grade}`);

export {};
