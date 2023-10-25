// ----------------typing animation--------------

var typed = new Typed(".typing",{
    strings:["", "Web Designer", "Graphics Designer", "Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

let sections = document.querySelectorAll('section');
let asideLink = document.querySelectorAll('.aside li a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top >= offset && top < offset + height){
            asideLink.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.aside li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
  