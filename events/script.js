
let longname = document.querySelector(".displayedsquare-wrapper");

let actionlog = document.querySelector("h2");


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







