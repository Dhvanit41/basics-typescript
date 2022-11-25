const profile = {
  name: 'alex',
  age: 29,
  coords: {
    lat: 20,
    lan: 30,
  },
  setAge(age: number): void {
    this.age = number;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { lat, lan },
}: { coords: { lat: number; lan: number } } = profile;
