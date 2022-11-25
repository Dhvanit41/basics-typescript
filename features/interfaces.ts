interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return this.name;
  },
};

const drink1 = {
  color: 'drink',
  carbonation: true,
  suger: 40,
  summary(): string {
    return this.color;
  },
};

const pringSummary = (item: Reportable): void => {
  console.log(item.summary());
};

pringSummary(oldCivic);
pringSummary(drink1);
