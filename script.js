//your JS code here. If required.
const n=document.getElementById("counter");
const btn=document.getElementById("incrementBtn");

btn.addEventListener("click",()=>{
  n.textContent=Number(n.textContent)+1;
});