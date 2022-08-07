let rules = document.querySelectorAll("hr");
let circles = document.querySelectorAll(".circle");
let buttons = document.querySelectorAll(".button");

let active = 1;

  let prev = buttons[0];
  prev.addEventListener("click",backward);
  let next = buttons[1];
  next.addEventListener("click",forward);

if(active === 1)
{
  prev.disabled = true;
}


  function backward() {
    active--;
    rules[active-1].classList.remove("active");
    circles[active].classList.remove("active");
    next.disabled = false;
    if(active === 1)
      prev.disabled = true;
  }

  function forward() {
    active++;
    rules[active-2].classList.add("active");
    circles[active-1].classList.add("active");
    prev.disabled = false;
    if(active === 4)
      next.disabled = true;
  }
