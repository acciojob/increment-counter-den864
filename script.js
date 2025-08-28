const n=document.getElementById("counter");
const btn=document.getElementById("incrementBtn");

let count=0;
n.textContent=count;


btn.addEventListener("click",()=>{
  count++;
  n.textContent=count;
});