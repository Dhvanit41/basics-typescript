class Vehical {
  //color: string = 'red';
  // constructor(name: string) {
  //   this.color = name;
  // }

  constructor(public color: string) {}

  public drive(): void {
    console.log('habibi');
  }
}

class Car extends Vehical {
  constructor(wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('habibi2');
  }
}

let car1 = new Car('gg');
car1.drive();
console.log(car1.color);

/// modifier doest not provide security
// it just provide that other developer don't use or override
