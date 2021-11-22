const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
  constructor(name, weapon) {

    // call parent constructor here:
    super(name);

  //  this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();
//can delete code, not required to pass when running npm run test
  /*  this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5); */

  }
  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}



module.exports = Enemy;