class Ladder {
  constructor() {
    this.step = 0;
  }
  up() {
    this.step++;
    this.checkNegativeStep();
    return this;
  }
  down() {
    this.step--;
    this.checkNegativeStep();
    return this;
  }
  showStep() {
    console.log(this.step);
    this.checkNegativeStep();
    return this;
  }
  checkNegativeStep() {
    if (this.step < 0) {
      console.log('The end of the route');
      throw new Error('Step can\'t be negative');
    }
  }
}

const ladder = new Ladder();

ladder.up().up().down().up().down().showStep();
