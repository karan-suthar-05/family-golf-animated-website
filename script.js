function changeCursor(item) {
    item.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            scale: 2,
            border: "1px solid #fff",
            backgroundColor: "transparent",
            duration: 0.5,
            ease: "power4.out"
        });
    });
    item.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            scale: 1,
            border: "1px solid #a4ce0b",
            backgroundColor: "#a4ce0b",
            duration: 0.5,
            ease: "power4.out"
        });
    });
}

function imageHoverAnimation(image) {
    image.addEventListener('mouseenter', () => {
        gsap.to(image, {
            rotateY: 20,
            x: -3,
            duration: 0.5,
            ease: "power3.out"
        });
    });
    image.addEventListener('mouseleave', () => {
        gsap.to(image, {
            rotateY: 0,
            x: 0,
            duration: 0.5,
            ease: "power3.out"
        });
    });
}
// hover,cursor and mouse move animation
document.addEventListener('mousemove', function (e) {
    gsap.to('#cursor', {
        x: e.x - document.querySelector("#cursor").getBoundingClientRect().width * 0.65,
        y: e.y - document.querySelector("#cursor").getBoundingClientRect().height * 0.65,
        duration: 0.5,
        ease: "power4.out"
    });
    let cursorBlurRect = document.querySelector("#cursor-blur").getBoundingClientRect();
    gsap.to('#cursor-blur', {
        x: e.x - cursorBlurRect.width / 2,
        y: e.y - cursorBlurRect.height / 2,
        duration: 1.1,
        ease: "power1.out"
    });
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const moveX = ((innerWidth / 2) - clientX) * 0.03;
    const moveY = ((innerHeight / 2) - clientY) * 0.03;
    gsap.to("#quote-container p", {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: "power4.out"
    });
});
document.querySelectorAll('#about-us-card-container .card .overlay').forEach((overlay) => {
    overlay.addEventListener("mousemove", function (event) {
        let cursor = overlay.querySelector(".circle-cursor");
        let overRect = overlay.getBoundingClientRect();
        let x = event.clientX - overRect.left;
        let y = event.clientY - overRect.top;
        gsap.to(cursor, {
            x: x,
            y: y,
            duration: 0.7,
            ease: "power4.out"
        });
    });
});
document.querySelectorAll("nav a").forEach((item) => {
    changeCursor(item);
});
changeCursor(document.querySelector("#down-arrow"));
document.querySelectorAll(".small-card").forEach((item) => {
    changeCursor(item);
});
document.querySelectorAll("footer a").forEach((item) => {
    changeCursor(item);
});
changeCursor(document.querySelector("footer .logo"));
document.querySelectorAll("footer svg").forEach((item) => {
    changeCursor(item);
});
document.querySelectorAll(".logo").forEach((item) => {
    imageHoverAnimation(item);
});
document.querySelectorAll('.btn').forEach((btn) => {
    changeCursor(btn);
    btn.addEventListener("mouseenter", function () {
        gsap.to(btn, {
            scale: '0.9',
            color: "black",
            duration: 0.5,
            ease: "power4.out"
        });
        gsap.to(btn.querySelector('.up-text'), {
            transform: "translateY(-150%)",
            scaleY: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out"
        });
        gsap.to(btn.querySelector('.down-text'), {
            transform: "translateY(0%)",
            scaleY: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out"
        });

        gsap.to(btn.querySelectorAll(".bg-container span"), {
            scaleX: "2",
            scaleY: "4",
            duration: 0.7,
            ease: "power4.out",
            stagger: {
                amount: 0.3
            }
        });
    });
    btn.addEventListener("mouseleave", function () {
        gsap.to(btn, {
            scale: '1',
            color: 'white',
            duration: 0.5,
            ease: "power4.out"
        });
        gsap.to(btn.querySelector('.up-text'), {
            transform: "translateY(0%)",
            scaleY: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out"
        });
        gsap.to(btn.querySelector('.down-text'), {
            transform: "translateY(150%)",
            scaleY: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out"
        });
        gsap.to(btn.querySelectorAll(".bg-container span"), {
            scaleX: "0",
            scaleY: "0",
            scaleZ: "0",
            duration: 0.7,
            ease: "power4.out",
            stagger: {
                amount: -0.1
            }
        });

    });
});
document.querySelectorAll("#rotate-div a").forEach((item)=>{
    changeCursor(item);
});

// tilt cards
VanillaTilt.init(document.querySelectorAll("#about-us-container img"), {
    max: 5,
    speed: 200
});
VanillaTilt.init(document.querySelectorAll("#about-us-card-container .card"), {
    max: 5,
    speed: 200,

});

// scrolltrigger 

gsap.to("#nav", {
    height: "3rem",
    padding: "2.2rem 0",
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top 0%",
        scrub: 1
    }
});
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#section2",
        scroller: "body",
        start: "top 85%",
        end: "top 25%",
        scrub: 1.3
    }
});
gsap.to("#quote-container img:first-child", {
    top: "-10%",
    left: "5%",
    scrollTrigger: {
        trigger: "#quote-container",
        scroller: "body",
        start: "top 75%",
        end: "top 25%",

        scrub: 1
    }
});
gsap.to("#quote-container img:last-child", {
    bottom: "-10%",
    right: "5%",
    scrollTrigger: {
        trigger: "#quote-container",
        scroller: "body",
        start: "top 75%",
        end: "top 25%",

        scrub: 1
    }
});
gsap.to("#what-you-want-h2", {
    top: "-19%",
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#what-you-want",
        scroller: "body",
        start: "top 90%",
        end: "top 85%",
        scrub: 1
    }
});

// swiper js
const swiper = new Swiper('.img-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'fade',
    crossFade: true,


});
const instaSwiper = new Swiper('.insta-swiper', {
    
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    freeMode: {
        enabled: true,
        momentumBounce:false,
        momentum:true,
        momentumRatio:2,
        minimumVelocity:0.02,
      },
    autoplay: {
        delay:2000,
      },
});

// mobile menu
const mobileMenuTimeline = gsap.timeline({paused:true });
mobileMenuTimeline.to(".menu svg:first-child",{
    attr:{class:"hidden"},
     
},'menu').to(document.querySelector(".menu svg:first-child").nextElementSibling,{
    attr:{class:"block"},
   
},'menu').to("#mobile-menu",{
    opacity:1,
    scaleY:1,
    duration:0.5,
    ease:"power4.out"
},'-=0.5').from("#mobile-menu a",{
    y:100,
    opacity:0,
    duration:0.7,
    stagger:{
        amount:0.3
    },
    ease:"back.inOut(1.7)"
});
document.querySelector(".menu svg:first-child").addEventListener("click",function(){
    mobileMenuTimeline.play();
});
document.querySelector(".menu svg:last-child").addEventListener("click",function(){
     mobileMenuTimeline.reverse();
});