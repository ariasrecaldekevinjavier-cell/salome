/*==================================================

            PARA SALOMÉ ❤️
        SCRIPT.JS - PARTE 1

====================================================*/

// =========================
// VARIABLES
// =========================

const loader = document.getElementById("loader");
const intro = document.getElementById("intro");
const startButton = document.getElementById("startButton");
const lockScreen = document.getElementById("lockScreen");
const unlockButton = document.getElementById("unlock");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");
const website = document.getElementById("website");
const backgroundMusic = document.getElementById("backgroundMusic");
const clickSound = document.getElementById("clickSound");

// Cambia esta contraseña por la que tú quieras
const PASSWORD = "143";

// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const bar = document.querySelector(".loading-bar span");

    bar.style.transition = "width 2s ease";
    bar.style.width = "100%";

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 2200);

});

// =========================
// INTRO CINEMATOGRÁFICA
// =========================

const introLines = document.querySelectorAll(".intro-line");

function playIntro(){

    introLines.forEach((line,index)=>{

        setTimeout(()=>{

            line.style.opacity="1";
            line.classList.add("fadeUp");

        },index*1200);

    });

}

setTimeout(playIntro,2500);

// =========================
// BOTÓN COMENZAR
// =========================

startButton.addEventListener("click",()=>{

    intro.style.opacity="0";

    setTimeout(()=>{

        intro.style.display="none";

        lockScreen.style.display="flex";

        lockScreen.classList.add("fadeIn");

    },800);

});

// =========================
// DESBLOQUEAR
// =========================

unlockButton.addEventListener("click",unlockWebsite);

passwordInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        unlockWebsite();

    }

});

function unlockWebsite(){

    if(passwordInput.value===PASSWORD){

        if(clickSound){

            clickSound.play();

        }

        lockScreen.style.opacity="0";

        setTimeout(()=>{

            lockScreen.style.display="none";

            website.style.display="block";

            website.classList.add("fadeIn");

            if(backgroundMusic){

                backgroundMusic.volume=0.35;

                backgroundMusic.play().catch(()=>{});

            }

        },700);

    }

    else{

        errorMessage.textContent="Código incorrecto ❤️";

        passwordInput.value="";

        passwordInput.focus();

    }

}
/*==================================================

            PARA SALOMÉ ❤️
        SCRIPT.JS - PARTE 2

        MÚSICA
        BOTÓN ARRIBA
        FRASES
        VIDEO
        REGALO

====================================================*/


//========================================
// BOTÓN VOLVER ARRIBA
//========================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>600){

        backToTop.style.display="flex";

    }

    else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


//========================================
// MÚSICA
//========================================

const playMusic=document.getElementById("playMusic");

const pauseMusic=document.getElementById("pauseMusic");

const progressBar=document.getElementById("progressBar");


if(playMusic){

playMusic.onclick=()=>{

backgroundMusic.play();

};

}


if(pauseMusic){

pauseMusic.onclick=()=>{

backgroundMusic.pause();

};

}


backgroundMusic.addEventListener("timeupdate",()=>{

const progress=

(backgroundMusic.currentTime/backgroundMusic.duration)*100;

progressBar.style.width=progress+"%";

});


//========================================
// FRASES
//========================================

const quoteText=document.getElementById("quoteText");

const nextQuote=document.getElementById("nextQuote");

const quotes=[

"Cada día contigo vale la pena ❤️",

"Eres mi lugar favorito.",

"Gracias por aparecer en mi vida.",

"Siempre habrá un lugar para ti en mi corazón.",

"Contigo aprendí que los pequeños momentos son los más importantes.",

"No importa dónde estemos, mientras sea contigo.",

"Cada sonrisa tuya ilumina mi día.",

"Eres una de las mejores casualidades de mi vida.",

"Siempre elegiría volver a conocerte.",

"Gracias por existir."

];

if(nextQuote){

nextQuote.addEventListener("click",()=>{

const random=

Math.floor(Math.random()*quotes.length);

quoteText.innerHTML=quotes[random];

});

}


//========================================
// VIDEO
//========================================

const video=

document.querySelector("#videoSection video");

if(video){

video.volume=.55;

}


//========================================
// REGALO
//========================================

const openGift=

document.getElementById("openGift");

if(openGift){

openGift.onclick=()=>{

alert(

"❤️ Gracias por formar parte de mi vida ❤️"

);

};

}


//========================================
// SCROLL SUAVE
//========================================

document

.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=

document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
/*==================================================

            PARA SALOMÉ ❤️
        SCRIPT.JS - PARTE 3

        CONTADOR DE TIEMPO

====================================================*/


//========================================
// FECHA DE INICIO
//========================================

// CAMBIA ESTA FECHA POR LA SUYA
// Formato:
// Año, Mes (0=enero), Día, Hora, Minuto

const startDate = new Date(

    2025,
    0,
    1,
    0,
    0,
    0

);


//========================================
// ELEMENTOS
//========================================

const yearsElement = document.getElementById("years");
const monthsElement = document.getElementById("months");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


//========================================
// ACTUALIZAR CONTADOR
//========================================

function updateCounter(){

    const now = new Date();

    let years =
        now.getFullYear() -
        startDate.getFullYear();

    let months =
        now.getMonth() -
        startDate.getMonth();

    let days =
        now.getDate() -
        startDate.getDate();

    let hours =
        now.getHours() -
        startDate.getHours();

    let minutes =
        now.getMinutes() -
        startDate.getMinutes();

    let seconds =
        now.getSeconds() -
        startDate.getSeconds();


    if(seconds < 0){

        seconds += 60;
        minutes--;

    }

    if(minutes < 0){

        minutes += 60;
        hours--;

    }

    if(hours < 0){

        hours += 24;
        days--;

    }

    if(days < 0){

        const previousMonth = new Date(

            now.getFullYear(),
            now.getMonth(),
            0

        );

        days += previousMonth.getDate();

        months--;

    }

    if(months < 0){

        months += 12;

        years--;

    }


    if(yearsElement){

        yearsElement.textContent = years;

    }

    if(monthsElement){

        monthsElement.textContent = months;

    }

    if(daysElement){

        daysElement.textContent = days;

    }

    if(hoursElement){

        hoursElement.textContent = hours;

    }

    if(minutesElement){

        minutesElement.textContent = minutes;

    }

    if(secondsElement){

        secondsElement.textContent = seconds;

    }

}


//========================================
// EFECTO VISUAL
//========================================

function animateCounter(){

    document

    .querySelectorAll(".counter-card")

    .forEach(card=>{

        card.animate(

            [

                {

                    transform:"scale(1)"

                },

                {

                    transform:"scale(1.05)"

                },

                {

                    transform:"scale(1)"

                }

            ],

            {

                duration:400

            }

        );

    });

}


//========================================
// INICIAR
//========================================

updateCounter();

setInterval(updateCounter,1000);

setInterval(animateCounter,1000);
/*==================================================

            PARA SALOMÉ ❤️
        SCRIPT.JS - PARTE 4

    CARTA - GALERÍA - LIBRO

====================================================*/


//========================================
// SOBRE Y CARTA
//========================================

const envelope = document.getElementById("envelope");
const letterPaper = document.getElementById("letterPaper");
const openEnvelopeSound =
document.getElementById("openEnvelopeSound");

let letterOpened = false;

if(envelope){

    envelope.addEventListener("click",()=>{

        if(letterOpened) return;

        letterOpened = true;

        if(openEnvelopeSound){

            openEnvelopeSound.play().catch(()=>{});

        }

        const flap =
        envelope.querySelector(".envelope-flap");

        if(flap){

            flap.style.transform =
            "rotateX(180deg)";

        }

        setTimeout(()=>{

            letterPaper.style.display="block";

            letterPaper.classList.add("fadeUp");

            letterPaper.scrollIntoView({

                behavior:"smooth",

                block:"center"

            });

        },700);

    });

}



//========================================
// LIBRO
//========================================

const bookCover =
document.querySelector(".book-cover");

const bookPages =
document.querySelectorAll(".book-page");

let currentPage = 0;

if(bookCover){

    bookCover.addEventListener("click",()=>{

        bookCover.style.display="none";

        if(bookPages.length){

            bookPages[0].style.display="block";

            bookPages[0].classList.add("fadeIn");

        }

    });

}

bookPages.forEach((page,index)=>{

    page.addEventListener("click",()=>{

        page.style.display="none";

        currentPage++;

        if(currentPage<bookPages.length){

            bookPages[currentPage].style.display="block";

            bookPages[currentPage]

            .classList.add("fadeIn");

        }

    });

});



//========================================
// GALERÍA
//========================================

const galleryImages =
document.querySelectorAll(".gallery-grid img");

const imageModal =
document.getElementById("imageModal");

const modalImage =
document.getElementById("modalImage");

const closeModal =
document.getElementById("closeModal");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        imageModal.style.display="flex";

        modalImage.src=image.src;

    });

});


if(closeModal){

closeModal.onclick=()=>{

imageModal.style.display="none";

};

}


if(imageModal){

imageModal.onclick=(e)=>{

if(e.target===imageModal){

imageModal.style.display="none";

}

};

}



//========================================
// EFECTO EN IMÁGENES
//========================================

galleryImages.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.05)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

});
/*==================================================

            PARA SALOMÉ ❤️
        SCRIPT.JS - PARTE 5

    CORAZONES
    PÉTALOS
    ESTRELLAS
    PARTÍCULAS

====================================================*/


//========================================
// CORAZONES FLOTANTES
//========================================

const heartsContainer =
document.getElementById("floatingHearts");

function createHeart(){

    if(!heartsContainer) return;

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="110vh";

    heart.style.fontSize=(18+Math.random()*30)+"px";

    heart.style.animation=
    "heartFloat "+(6+Math.random()*4)+"s linear forwards";

    heart.style.pointerEvents="none";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,700);


//========================================
// PÉTALOS
//========================================

const petalsContainer=
document.getElementById("petals");

function createPetal(){

    if(!petalsContainer) return;

    const petal=document.createElement("img");

    petal.src="assets/petal.png";

    petal.style.position="absolute";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-80px";

    petal.style.width=(18+Math.random()*20)+"px";

    petal.style.animation=

    "petalFall "+(8+Math.random()*5)+"s linear forwards";

    petal.style.pointerEvents="none";

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },14000);

}

setInterval(createPetal,450);


//========================================
// ESTRELLAS
//========================================

const starsContainer=
document.getElementById("stars");

function createStars(){

    if(!starsContainer) return;

    for(let i=0;i<180;i++){

        const star=document.createElement("span");

        star.style.position="absolute";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.width="2px";

        star.style.height="2px";

        star.style.borderRadius="50%";

        star.style.background="white";

        star.style.opacity=Math.random();

        star.style.animation=

        "twinkle "+(2+Math.random()*5)+"s infinite";

        starsContainer.appendChild(star);

    }

}

createStars();


//========================================
// PARTÍCULAS
//========================================

const particlesContainer=
document.getElementById("particles");

function createParticle(){

    if(!particlesContainer) return;

    const particle=document.createElement("div");

    particle.style.position="absolute";

    particle.style.left=Math.random()*100+"vw";

    particle.style.top="105vh";

    particle.style.width="5px";

    particle.style.height="5px";

    particle.style.borderRadius="50%";

    particle.style.background="rgba(255,255,255,.5)";

    particle.style.animation=

    "heartFloat "+(10+Math.random()*6)+"s linear forwards";

    particlesContainer.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },16000);

}

setInterval(createParticle,350);


//========================================
// DESTELLOS
//========================================

const twinkles=
document.getElementById("twinkles");

function createTwinkle(){

    if(!twinkles) return;

    const spark=document.createElement("div");

    spark.style.position="absolute";

    spark.style.left=Math.random()*100+"vw";

    spark.style.top=Math.random()*100+"vh";

    spark.style.width="4px";

    spark.style.height="4px";

    spark.style.borderRadius="50%";

    spark.style.background="white";

    spark.style.animation="sparkle 2s";

    twinkles.appendChild(spark);

    setTimeout(()=>{

        spark.remove();

    },2000);

}

setInterval(createTwinkle,250);
/*==================================================

            PARA SALOMÉ ❤️
        SCRIPT.JS - PARTE 6

    FUEGOS ARTIFICIALES
    METEOROS
    CHISPAS
    ROSAS

====================================================*/


//========================================
// CANVAS
//========================================

const canvas = document.getElementById("particleCanvas");

let ctx = null;

if(canvas){

    ctx = canvas.getContext("2d");

}

function resizeCanvas(){

    if(!canvas) return;

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}

window.addEventListener("resize",resizeCanvas);

resizeCanvas();


//========================================
// FUEGOS ARTIFICIALES
//========================================

const fireworks = [];

function Firework(){

    this.x = Math.random()*window.innerWidth;

    this.y = window.innerHeight;

    this.targetY =

    100 + Math.random()*250;

    this.radius = 3;

    this.speed =

    4 + Math.random()*3;

    this.color =

    `hsl(${Math.random()*360},100%,60%)`;

}

Firework.prototype.update=function(){

    this.y-=this.speed;

};

Firework.prototype.draw=function(){

    if(!ctx) return;

    ctx.beginPath();

    ctx.arc(

        this.x,

        this.y,

        this.radius,

        0,

        Math.PI*2

    );

    ctx.fillStyle=this.color;

    ctx.fill();

};

function launchFirework(){

    fireworks.push(new Firework());

}

setInterval(launchFirework,2200);


//========================================
// DIBUJAR
//========================================

function animateCanvas(){

    if(!ctx) return;

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

    fireworks.forEach((fw,index)=>{

        fw.update();

        fw.draw();

        if(fw.y<fw.targetY){

            fireworks.splice(index,1);

            explode(fw.x,fw.y,fw.color);

        }

    });

    particles.forEach((p,index)=>{

        p.update();

        p.draw();

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(

        animateCanvas

    );

}

requestAnimationFrame(

animateCanvas

);


//========================================
// PARTÍCULAS
//========================================

const particles=[];

function Particle(x,y,color){

    this.x=x;

    this.y=y;

    this.life=70;

    this.color=color;

    this.size=2+Math.random()*3;

    this.vx=-4+Math.random()*8;

    this.vy=-4+Math.random()*8;

}

Particle.prototype.update=function(){

    this.life--;

    this.x+=this.vx;

    this.y+=this.vy;

    this.vy+=0.03;

};

Particle.prototype.draw=function(){

    if(!ctx) return;

    ctx.globalAlpha=this.life/70;

    ctx.beginPath();

    ctx.arc(

        this.x,

        this.y,

        this.size,

        0,

        Math.PI*2

    );

    ctx.fillStyle=this.color;

    ctx.fill();

    ctx.globalAlpha=1;

};

function explode(x,y,color){

    for(let i=0;i<60;i++){

        particles.push(

            new Particle(

                x,

                y,

                color

            )

        );

    }

}


//========================================
// METEOROS
//========================================

function createMeteor(){

    const meteor=

    document.createElement("div");

    meteor.style.position="fixed";

    meteor.style.left=

    Math.random()*window.innerWidth+"px";

    meteor.style.top="-80px";

    meteor.style.width="2px";

    meteor.style.height="120px";

    meteor.style.background=

    "linear-gradient(white,transparent)";

    meteor.style.transform=

    "rotate(35deg)";

    meteor.style.opacity=".8";

    meteor.style.pointerEvents="none";

    meteor.style.zIndex="1";

    document.body.appendChild(meteor);

    let pos=-100;

    const interval=

    setInterval(()=>{

        pos+=18;

        meteor.style.transform=

        `translate(${pos}px,${pos}px) rotate(35deg)`;

        if(pos>window.innerHeight){

            clearInterval(interval);

            meteor.remove();

        }

    },20);

}

setInterval(createMeteor,9000);


//========================================
// CHISPAS
//========================================

document.addEventListener("click",(e)=>{

    for(let i=0;i<12;i++){

        const spark=

        document.createElement("div");

        spark.style.position="fixed";

        spark.style.left=e.clientX+"px";

        spark.style.top=e.clientY+"px";

        spark.style.width="6px";

        spark.style.height="6px";

        spark.style.borderRadius="50%";

        spark.style.background="white";

        spark.style.pointerEvents="none";

        spark.style.transition=".8s";

        document.body.appendChild(spark);

        const x=(-60+Math.random()*120);

        const y=(-60+Math.random()*120);

        requestAnimationFrame(()=>{

            spark.style.transform=

            `translate(${x}px,${y}px)`;

            spark.style.opacity="0";

        });

        setTimeout(()=>{

            spark.remove();

        },800);

    }

});
