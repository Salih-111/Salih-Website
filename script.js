document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior : 'smooth',
                block: 'start'
            })
        }
     });
   }
);

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const ObserverOptions = {
    threshold: 0.1,
    rootMargin : '0px 0px -50px 0px'
}

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
} , ObserverOptions);

document.querySelectorAll('.fade').forEach(elem => {
    observer.observe(elem);
})

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if(!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    alert(`Thank you for your message! I\'ll get back to you soon.`);
    this.reset();
})

function typeWritter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
window.addEventListener('load', function() {

    const mainTitle = document.querySelector('.main-text h1') 
    if(mainTitle) {
        const originalText = mainTitle.textContent;
        setTimeout(() => {
            typeWritter(mainTitle, originalText, 150);
        }, 1000);
    }
})

window.addEventListener('scroll' , function() {
    const  scrolled = this.window.pageXOffset;
    const main = document.querySelector('.main');
    const rate = scrolled * -0.5;

    if(main){
        main.style.transform = `translateY(${rate}px)`;
    }
});
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
       this.style.transform = `translateY(-10px) scale(1.02)`;
    });
    item.addEventListener('mouseleave', function() {
       this.style.transform = `translateY(0px) scale(1)`;
    });
});

const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('active');
});
