
let longname = document.querySelector(".displayedsquare-wrapper");

let actionlog = document.querySelector("h2");

let body = document.querySelector("body");


const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {

  let div = document.createElement("div");
  div.classList.add("displayedsquare" , e.target.classList[1]);

  longname.appendChild(div);

  console.log(e.target.classList[1])
  console.log(getElapsedTime())


 let li = document.createElement("li");

 actionlog.appendChild(li);

 let actiontext = document.createTextNode( "[" + getElapsedTime() + "]" + " Created a new " + e.target.classList[1] + " square");

 li.appendChild(actiontext);

}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
  
}






function k (keypress){

    console.log(keypress);

    if (keypress.keyCode == 32) {

        color();
       
    }
}

function color() {
    
    let randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
    
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    
    let rgb = `rgb(${r},${g},${b})`;
    
    body.style.backgroundColor = rgb;
    
     }

body.addEventListener("keypress" , k);





