const logo = document.querySelector('.logo');
console.log(logo); // This logs the selected element for debugging purposes

logo.addEventListener('click', function(event) {
    event.preventDefault();
    
    window.location.href = "index.html";
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


const btn = document.getElementById('bar-click');
const images = document.querySelectorAll('.images img');
let currentIndex = 0;
let interval;
const dotsContainer = document.getElementById('dots-container');

btn.addEventListener("click", () => {
    console.log('hi');
    let nav = document.getElementById('nav');
    let icon = document.querySelector('.bar i');

    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        icon.classList.remove('fa-x');
        icon.classList.add('fa-bars');
    } else {
        nav.classList.add('active');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-x');
    }
});

function showImage(index) {
    currentIndex = index - 1;
    showCurrentImage();
}


function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    const btns = document.querySelectorAll('.btns');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(btnss => {
                btnss.style.backgroundColor = "white";
                btnss.style.color = "#000";
            });
            btn.style.backgroundColor = "red";
            btn.style.color = "#fff";
        });
    });
    showCurrentImage();
}




function showCurrentImage() {
    images.forEach((image, index) => {
        if (index === currentIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
    updateDots();
}

function updateDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < images.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentIndex) {
            dot.classList.add('active');
        }
        dot.onclick = () => {
            currentIndex = i;
            showCurrentImage();
        };
        dotsContainer.appendChild(dot);
    }
}

function startImageSlider() {
    interval = setInterval(() => {
        showNext();
    }, 5000);
}

startImageSlider();