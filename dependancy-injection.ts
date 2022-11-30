// Dependency injection means giving an object its instance variables. Really. That’s it.

class Engine {
  start(): void {
    console.log('Engine started');
  }
}

class Car1 {
  private engine: Engine;
  constructor() {
    this.engine = new Engine();
  }

  driveCar(): void {
    this.engine.start();
  }
}

class InjectionCalss {
  private engine: Engine;
  constructor(engine: Engine) {
    this.engine = engine;
  }

  driveCar(): void {
    this.engine.start();
  }
}

// -----------best solution --------------
interface engineInterface {
  start(): string;
}
// in testing it will be fast and use ful beacuse it not get from disk
class BestInjectionCalss {
  private engine: engineInterface;
  constructor(engine: engineInterface) {
    this.engine = engine;
  }

  driveCar(): void {
    this.engine.start();
  }
}
// -----------best solution --------------

let gg = new InjectionCalss(new Engine());
gg.driveCar();

let gg2 = new Car1();
gg2.driveCar();

// this example does not have single responsibility
// car class is not testable beacuse it has a dependancy on engine.
// not extensible
// engine can be not working but car can be good. engine and car is tighly coupled over here.

// inversion to convrol (resulbe code guide)
// why we do not need to do let gg = new InjectionCalss(new Engine()); answer is down
// 1. list of class and their dependancy.
// whenever we create new app DI container will get call for us.
// except controller all class get analys and checkdepency by checking all constructors
// and feed it to DI container. car => enigne
// rep => none.
// service => repo
// controler => service
//

// 2. list of instance that i have created and return the copy.

// di container flow
// 1 reginster all class with the container
// 2 continer will figure out each dependancy class has.
// 3. then we ask container to create and instance  of class for us -> provider in module.
// 4. container create all required depency and give  the instance
// 5. container will hold on to that dependancy and resue them if needed
