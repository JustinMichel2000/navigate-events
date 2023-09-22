let ol = document.querySelector("ol");
let a = ol.children[0];
let b = ol.children[1];
let c = ol.children[2];
let d = ol.children[3];
let e = ol.children[4];

a.before(e);


let section = document.querySelectorAll("section");

let f = section[0];
let g = section[1];        /*provident*/ /*avant*/ 
let h = section[2].children[0];       /* praesentium*/


g.prepend(h.children[0], g.children[0] ); 

h.prepend(g.children[1] , h.children[0]);

/*h est inséré au début de g

pour dire ce qu'on veut avant

premier ce qu'on veut ajouter deuxième devant quoi on veut ajouter */

// h.prepend();


h.remove();























