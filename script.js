function timelineone(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 5,
            pin: true,
            end: "bottom -250%"
        }
    })
    tl
        .from("#center-img", {
            left: "90%",
            duration: 1,
            stagger: .1,
            ease: Power1
        })
    
        .to("#circle #btm img", {
            rotate: "-180deg",
            scale: 1,
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "hello")
    
        .to("#circle #top img", {
            scale: 1,
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "hello")
    
        .to("#cimg img", {
            scale: 0,
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "hello")
    
        .to("#center-img h5", {
            opacity: 0,
            stagger: .1,
            ease: Power1
        }, "hello")
    
        .to("#overlay>h1#gallery", {
            bottom: "-30%",
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "hello")
    
        .to("#overlay #pink-circle", {
            top: "50%",
            scale: 2,
            duration: 2,
            stagger: .1,
            ease: Power1
        }, "hello")
    
        .to("#circle", {
            duration: 1,
            scale: .6,
            ease: Power1
        }, "hello")
    
        .to("#circle", {
            scale: 0,
            duration: 2,
            ease: Power1
        }, "hello2")
    
        .to("#sml-circle", {
            scale: 0,
            duration: 2.3,
            ease: Power1
        }, "hello2")
  
    
        .to("#overlay #pink-circle", {
            opacity: 0,
            duration: 2,
            ease: Power1
        }, "hello2")
        .to("#overlay>h1#pf", {
            bottom: "10%",
            rotate: 0,
            ease: Power1
        }, "hello2")
        .to("#pink-card", {
            top: "0",
            duration: 5,
            ease: Power1
        }, "hello2")
        .to("#pink-card", {
            top: "-60%",
            duration: 8,
            ease: Power1
        })
};
function timelinetwo(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#second",
            start: "top top",
            scrub: 5,
            markers: true,
            pin: true,
            end: "bottom -250%"
        }
    })
    tl2.to(".top-circle",{
       top: "50%",
       stagger: 1,
       duration: 2,
       ease: Power1 
    })
    .to(".top-circle",{
       left: "50%",
       duration: 1,
       ease: Power1 
    })
    .to(".pi",{
       scale: 10,
       delay:1,
       ease: Power1 
    })
    .to("#color-max",{
        left: "0",
        duration:5,
        ease:Power1
    },"a")
    .to("#sec-top h1",{
       left:"-250%",
       duration:15,
        ease: Power1,
    },"a")
    .to("#sec-btm #one",{
       opacity:0,
       delay:2,
       duration:1,
        ease: Power1,
    },"a")
    .to("#sec-btm #two",{
       opacity:1,
       delay:3,
       duration:1,
        ease: Power1,
    },"a")
    .to("#num1",{
       top: "-100%",
       delay:2,
       duration:1,
        ease: Power1,
    },"a")
    .to("#num2",{
       top: "0",
       delay:3,
       duration:1,
        ease: Power1,
    },"a")
    .to("#boxs .box",{
        bottom:"0",
        duration:2,
        delay:"-2",
        stagger:.3,
        ease:Power1
    })
    
}
    
timelineone();
timelinetwo();