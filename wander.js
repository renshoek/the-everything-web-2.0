gsap.registerPlugin(ScrollTrigger);

let limit = {max: 100, pullRatio: 0},
    getRandom = () => gsap.utils.random(-limit.max, limit.max),
    round = value => Math.round(value * 10000) / 10000,
    getModifier = home => value => {
      value = parseFloat(value);
      return round(value + (home - value) * limit.pullRatio) + "px";
    };

gsap.utils.toArray(".boxwander").forEach((element) => {
  wander(element, gsap.getProperty(element, "x"), gsap.getProperty(element, "y"))
});

function wander(element, homeX, homeY) {
  gsap.set(element, {
    x: homeX + (gsap.getProperty(element, "x") - homeX) / (1 - limit.pullRatio),
    y: homeY + (gsap.getProperty(element, "y") - homeY) / (1 - limit.pullRatio)
  })
  gsap.to(element, {
    x: homeX + getRandom(),
    y: homeY + getRandom(),
    modifiers: {
      x: getModifier(homeX),
      y: getModifier(homeY)
    },
    duration: gsap.utils.random(1.5, 4), 
    ease: "sine.inOut",
    onComplete: () => wander(element, homeX, homeY)
  });
}

// pull toward "home" position more and more as you scroll down
gsap.to(limit, {
  pullRatio: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".wander",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});
