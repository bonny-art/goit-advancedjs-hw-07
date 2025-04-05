class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean = false;
  tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (this.door === true) {
      this.tenants.push(person);
      console.log(
        `Person with key ${person
          .getKey()
          .getSignature()} has entered the house.`
      );
      this.door = false;
    } else {
      console.log("The door is closed. The person can't come in.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is now open.");
    } else {
      console.log("Incorrect key! The door remains closed.");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);

const person1 = new Person(key);
const person2 = new Person(new Key());

console.log("--- Right key ---");
house.openDoor(person1.getKey());
house.comeIn(person1);

console.log("--- Wrong key ---");
house.openDoor(person2.getKey());
house.comeIn(person2);

export {};
