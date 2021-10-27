/* eslint-disable max-classes-per-file */
// une classe est un moule à partir duquel on peut définir des objets (instances)
class VoitureNonConfigurable {
  constructor() {
    this.marque = 'No name';
    this.couleur = 'noire';
  }
}

// ici, je crée 2 instance de ma classe
const voiture1 = new VoitureNonConfigurable();
const voiture2 = new VoitureNonConfigurable();

console.log(voiture1);
console.log(voiture2);

// on peut avoir besoin de configurer un objet lors de son instanciation
class Voiture {
  constructor(marque, couleur) {
    this.marque = marque;
    this.couleur = couleur;
  }

  toString() {
    return `Je suis une ${this.marque} de couleur ${this.couleur}.`;
  }
}

const maCitroen = new Voiture('citroen', 'bleue');
const maPeugeot = new Voiture('peugeot', 'rouge');

console.log(maCitroen.toString());
console.log(maPeugeot.toString());

// on peut étendre une classe afin de bénéficier de ses fonctionnalités
class Renault extends Voiture {
  constructor(couleur) {
    // quand on appelle super(), on appelle le constructeur de la 
    // classe que l'on étend
    super('renault', couleur);
  }

  // Ici, on surcharge la méthode toString de la classe que l'on étend
  toString() {
    // On peut tout de même accéder à l'implémentation d'une méthode
    // de la classe parente en utilisant super.
    return `${super.toString()} Je suis encore en panne...`;
  }
}

const maRenault = new Renault('blanche');

console.log(maRenault.toString());
