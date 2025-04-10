

gsap.registerPlugin(ScrollTrigger);

const scrollContainer = document.querySelector("[data-scroll-container]");

const locoScroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true,
});
ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed",
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);



function page1Animation() {
    var tl = gsap.timeline() 
    tl.from("nav h1, nav a,nav button", {
        y : -30,
        opacity : 0,
        stagger : 0.1,
        duration : 0.7,
        delay : 0.3,
        pointerEvents : "none",
    })
    tl.from(".content1-part1 h1 span, .content1-part1 p",{
        y : 30,
        duration : 0.7,
        stagger : 0.1,
        delay : 0.1,
        opacity : 0 ,
        
        
    })
    tl.from(".content1-part2 img", {
        opacity : 0 , 
        duration : 0.5, 
    
    },"-=0.2")
    
    tl.from(".content1-part1 button", { 
        opacity : 0, 
        x : -10,
        duration : 0.5,
    
    })
    
    tl.from(".section2-content2 img ",{
        opacity : 0 , 
        y : 30 , 
        stagger : 0.1,
        duration : 0.6,
        
    })
    
}
page1Animation()

function page2Animation() {

    var e1 = document.querySelector("#one"); 
    var e2 = document.querySelector("#two");
    var e3 = document.querySelector("#three");
    var e4 = document.querySelector("#four");
    function rotateButton(e,id) {
        e.addEventListener("mouseenter", function() {
            gsap.to(`${id} button` ,{
                rotate : 40,
                duration : 0.5 ,
                scale : 1.2,
            })
            
        })
        
        e.addEventListener("mouseleave", function() {
            gsap.to(`${id} button`, {
                rotate : 0,
                scale : 1,
            })
        })
    }
    
    rotateButton(e1,"#one")
    rotateButton(e2,"#two")
    rotateButton(e3,"#three")
    rotateButton(e4,"#four")

    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger : ".page2",
            scroller : "#whole",
            start : "top 80%",
            end : "top -10%" ,
            scrub : 2,
        }
    })
    tl2.from(".page2-content1 h2",{
        background : "#fff",
        duration : 0.6 ,
    },"one")
    tl2.from(".page2-content1 span",{
        y: 100, 
        opacity : 0,
        stagger : 0.1,
        
        
    },"one")
    
    tl2.from(".from-left1",{
        x : -50, 
        opacity :  0, 
         
        
    },"two")
    tl2.from(".from-right1",{
        x : 50, 
        opacity : 0 , 
        
    },"two")
    tl2.from(".from-left2",{
        x : -50, 
        opacity : 0 ,
        
        
    },"three")
    tl2.from(".from-right2",{
        x : 50, 
        opacity : 0 ,
        
    },"three")

    
}
page2Animation()

function page3Animation() {
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger : ".page3",
            scroller : "#whole",
            start : "top 80%",
            end : "top -10%" ,
            scrub : 2,
        }
    })
    tl.from(".part1-content",{
        background : "#fff" ,
        duration : 0.4,
    })

    
    tl.from(".left-content h2,.left-content span",{
        y : 50,
        opacity : 0 ,
        stagger : 0.15,

    },"o")
    tl.from(".left-content button",{
        x : -100,
        opacity : 0 ,

    },"o")

    tl.from(".right-content img", {
        opacity : 0 , 
        duration : 0.5, 
    },"-=1")

    tl.from(".partt2 h1",{
        background : "#fff",
        duration : 0.4,
    },"-=0.4")
    tl.from(".partt2 span",{
        y : 50,
        opacity : 0,
        stagger : 0.05 ,
        delay : 0.5,
    },"o")

    tl.from(".part3-content",{
        opacity : 0 , 
    },"-=0.2")

    
}
page3Animation()
