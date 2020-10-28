const spinner = document.querySelectorAll('.spin__text');
const scrollItem = document.querySelector('.hero-scroll');

const check = data => {
  if (data < 850) {
    delOp();
    spinner[0].style.opacity = 1;
  }
  if (data >= 850) {
    delOp();
    spinner[1].style.opacity = 1;
  }
  if (data >= 1650) {
    delOp();
    spinner[2].style.opacity = 1;
  }
  if (data >= 2550) {
    delOp();
    spinner[3].style.opacity = 1;
  }
}

const delOp = () => {
  for (const key of spinner) {
    key.style.opacity = 0.5
  }
}

const checkE = (e) => {
  if (e == spinner[0]) document.querySelector('.navbar').scrollIntoView({block: "center", behavior: "smooth"});
  if (e == spinner[1]) document.querySelector('.first').scrollIntoView({block: "center", behavior: "smooth"});
  if (e == spinner[2]) document.querySelector('.second').scrollIntoView({block: "center", behavior: "smooth"});
  if (e == spinner[3]) document.querySelector('.third').scrollIntoView({block: "center", behavior: "smooth"});

}

window.addEventListener('scroll', () => {
  check(pageYOffset);
});

scrollItem.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.first').scrollIntoView({block: "center", behavior: "smooth"});
});

for (const key of spinner) {
  key.addEventListener('click', function() {
    e = event.target;
    checkE(e);
    delOp();
    e.style.opacity = 1;
  });
}