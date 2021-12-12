console.log('toto');
// https://developer.mozilla.org/fr/docs/Web/JavaScript
// commentaire une ligne
/* 
commentaire 
plusieures lignes 
*/

// string
let myVar = "let";
// const myVar = "const";

myVar = "new";

console.log(myVar);

// template string, Littéraux de gabarits et concat

let test = 'text ' + myVar;
let test2 = `text ${myVar}`;
console.log(test);
console.log(test2);

// boolean

let isTrue = true;
let isFalse = false;

console.log(isFalse)

// chiffres et opérateurs 

let chiffre1 = 4;
let chiffre2 = 3;

// calcul
console.log(chiffre1 + chiffre2)
console.log(chiffre1 - chiffre2)
console.log(chiffre1 / chiffre2)
console.log(chiffre1 * chiffre2)

// conditions - if et les switch

if (chiffre1 < chiffre2) {
  console.log('condition est valide');
}
if (chiffre1 < 2) {
  console.log('...');
}
else {
  console.log('condition non valide');
}

// tableaux

let tableau = ['item 1', 'item 2', 'item 3', 'item 4'];
console.log(tableau);
console.log(tableau[0]);

// objets 

let obj = {
  title: 'mon titre',
  description: 'ma description'
}
console.log(obj.title, obj.description);

// les boucles - while, for, foreach, switch

for (let i = 0; i < tableau.length; i++) {
  const elem = tableau[i];
  console.log('array ' + elem)
}
tableau.forEach(elem => {
  console.log('obj ' + elem);
})

// fonctions 

/* function myFunction() {
  console.log('ma fonction');
} */

const myFunction = (param, param2) => {
  console.log(param, param2);
  let result = param + param2;
  return result;
}
myFunction(6, 3);
const resultat = myFunction(6, 3);
console.log(resultat);


// interagir avec le dom // methode, proprietes, evement
console.log(window); 
console.log(document);

// selectors amusez-vous !
let header = document.querySelector('header');
console.log(header);

let grids = document.querySelectorAll('.grid');
console.log(grids.length);
grids.forEach((grid)  => {
  console.log(grid);
})

header.classList.add('is-black');

console.log(header.classList);

// insertion dom 

// événements les plus courants

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM entièrement chargé et analysé");
});
/*
header.addEventListener("mouseenter", () => {
  console.log("on survol le header");
});

header.addEventListener("mouseleave", () => {
  console.log("on quitte le header");
});

header.addEventListener("click", () => {
  console.log("on click sur le header");
});
*/

// functions du thème

function menuMobile() {
  const btn = document.querySelector('.burger');
  const header = document.querySelector('.header');
  btn.addEventListener('click', () => {
    header.classList.toggle('show-nav');
  })
}

menuMobile();

function tabsFilters() {
  const tabs = document.querySelectorAll('.portfolio-filters a');
  const projets = document.querySelectorAll('.portfolio .card');

  const resetActiveLinks = () => {
    tabs.forEach(element => {
      element.classList.remove('active');
    });
  }
  const showProjets = (elem) => {
    
    projets.forEach(projet => {

      let filter = projet.getAttribute('data-category');
    
      if (elem === "all") {
        projet.parentNode.classList.remove('hide');
        return
      }
   
      /*if (filter !== elem) {
        projet.parentNode.classList.add('hide');
       
      } else {
        projet.parentNode.classList.remove('hide');
        
      }*/

      filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');
      
    });
  }

  tabs.forEach(element => {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      let filter = element.getAttribute('data-filter');
      showProjets(filter)
      resetActiveLinks();
      element.classList.add('active');
    });
  });

}

tabsFilters();