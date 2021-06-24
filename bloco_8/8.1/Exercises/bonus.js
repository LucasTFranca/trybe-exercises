const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function dragonDamage(min) {
  return randomNumber(min, dragon.strength);
}

function warriorDamage() {
  return randomNumber(warrior.strength, warrior.strength * warrior.weaponDmg);
}

function mageDamage() {
  if (mage.mana !== 0) {
    return {
      damage: randomNumber(mage.intelligence, mage.intelligence * 2),
      mana: mage.mana - 15,
    };
  }
  return 'Não possui mana suficiente';
}

const gameActions = {
  warriorTurn(action) {
    const warriorDmg = action();
    warrior.damage = warriorDmg;
    dragon.healthPoints -= warriorDmg;
  },
  mageTurn(action) {
    const mageDmg = action();
    mage.damage = mageDmg.damage;
    mage.mana = mageDmg.mana;
    dragon.healthPoints -= mageDmg.damage;
  },
  dragonTurn(action) {
    const dragonDmg = action(15);
    dragon.damage = dragonDmg;
    mage.healthPoints -= dragonDmg;
    warrior.healthPoints -= dragonDmg;
  },
  endTurn() {
    return battleMembers;
  },
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);

console.log(gameActions.endTurn());
