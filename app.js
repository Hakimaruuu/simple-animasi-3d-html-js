// pergerakan animasi
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// opsional
// items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const size = document.querySelector('.size');

// event pergerakan animasi
card.addEventListener('mousemove', (e)=> {
    let yAxis = (window.innerWidth / 2 - e.pageX)/22;
    let xAxis = (window.innerHeight / 2 - e.pageY)/22;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});
// animasi in
container.addEventListener('mouseenter', (e)=>{
    card.style.transition = 'none';
    // opsional popout
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    description.style.transform = 'translateZ(150px)';
    size.style.transform = 'translateZ(100px)';
})

//animasi out
container.addEventListener('mouseleave', (e)=>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // opsional popback
    title.style.transform = "translate(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translate(0px)";
    size.style.transform = "translate(0px)";
});