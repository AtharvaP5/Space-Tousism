const navBarMobile = document.querySelector('.nav-links-mobile');
const hamburger = document.querySelector('.burger');
const closeBurger = document.querySelector('.close-burger')
const main = document.querySelector('.main-div__home');
const divarea = document.querySelector('.technology-main');


hamburger.addEventListener('click', () => {
  navBarMobile.classList.add('nav-links-mobile-add');
});
closeBurger.addEventListener('click', () => {
  navBarMobile.classList.remove('nav-links-mobile-add')
})

window.addEventListener('load', () => {
  setTimeout(() => {
    main.classList.add('main-div__home-visible');
    // divarea.classList.add('main-div__home-visible')
  }, 100);
});

const planetNavigator = document.querySelectorAll('.planet-navigator');

planetNavigator.forEach((planet) => {
  planet.addEventListener('click', () => {
    if (!(planet.className.includes('active'))) {
      planet.classList.toggle('active')
    }
  })
  const descriptionObject = {
    moon: "See our planet as you have never seen before. A perfect relaxing trip away to help regain perspective and comeback refreshed. While you're there take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    mars: "Don't forget to pack your hiking boots. You'll need them to tackle the Olympus Mons, the tallest planetary mountain in our solar system. It's and a half times the size of Everest",
    europa:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    titan:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
  };
  const distanceTime = {
    moon: [384 + ',' + 400, 3 + 'DAYS'],
    mars: [225 + 'MIL. KM', 9 + 'MONTHS'],
    europa: [628 + 'MIL. KM', 3 + 'YEARS'],
    titan: [1.6 + 'BIL. KM', 9 + 'MONTHS'],
  };
  const planetNameHolder = document.querySelector('.planet-name-holder');
  const planetImageHolder = document.querySelector('.planet-image-holder');
  const planetDescription = document.querySelector('.planet-desc');
  const distance = document.querySelector('.distance');
  const days = document.querySelector('.days');
  planet.addEventListener('click', () => {
    if (planet.id == 1) {
      console.log('planet 1 triggered');
      planetNameHolder.textContent = 'MOON';
      planetImageHolder.src = 'assets/destination/image-moon.png';
      planetDescription.textContent = descriptionObject.moon;
      distance.textContent = distanceTime.moon[0];
      days.textContent = distanceTime.moon[1];
    } else if (planet.id == 2) {
      console.log('planet 2 triggered');
      planetNameHolder.textContent = 'MARS';
      planetImageHolder.src = 'assets/destination/image-mars.png';
      planetDescription.textContent = descriptionObject.mars;
      distance.textContent = distanceTime.mars[0];
      days.textContent = distanceTime.mars[1];
    } else if (planet.id == 3) {
      console.log('planet 3 triggerd');
      planetNameHolder.textContent = 'EUROPA';
      planetImageHolder.src = 'assets/destination/image-europa.png';
      planetDescription.textContent = descriptionObject.europa;
      distance.textContent = distanceTime.europa[0];
      days.textContent = distanceTime.europa[1];
    } else if (planet.id == 4) {
      console.log('planet 4 triggered');
      planetNameHolder.textContent = 'TITAN';
      planetImageHolder.src = 'assets/destination/image-titan.png';
      planetDescription.textContent = descriptionObject.titan;
      distance.textContent = distanceTime.titan[0];
      days.textContent = distanceTime.titan[1];
    }
  });
});


const crewNavigator = document.querySelectorAll('.crew-navigator');
const crewPostHolder = document.querySelector('.crew-post');
const crewNameHolder = document.querySelector('.crew-name');
const crewDescHolder = document.querySelector('.crew-desc');
const crewImageHolder = document.querySelector('.crew-image-holder');
// console.log(crewPostHolder, crewNameHolder, crewDescHolder);
crewNavigator.forEach((crewMate) => {
  const crewDescription = {
    douglas: 'Douglas Gerald Hurley is an Ameriacn engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    mark: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    victor: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    anousheh: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
  }
  const crewNamesList = ['DOUGLAS HURLEY', 'MARK SHUTTLEWORTH', 'VICTOR GLOVER', 'ANOUSHEH ANSARI'];
  const crewPostList = ['COMMANDER', 'MISSION SPECIALIST', 'PILOT', 'FLIGHT ENGINEER'];
  console.log(crewPostList[0])
  crewMate.addEventListener('click', () => {
    if (crewMate.id == 1) {
      crewPostHolder.textContent = crewNamesList[0];
      crewNameHolder.textContent = crewNamesList[0];
      crewDescHolder.textContent = crewDescription.douglas;
      crewImageHolder.src = 'assets/crew/image-douglas-hurley.png';
      console.log('fkjdasjfkadjslkfjsdlk')
    }
     else if (crewMate.id == 2) {
      crewPostHolder.textContent = crewNamesList[1];
      crewNameHolder.textContent = crewNamesList[1];
       crewDescHolder.textContent = crewDescription.mark;
       crewImageHolder.src = 'assets/crew/image-mark-shuttleworth.png';
      console.log('next crew')
    }
    else if (crewMate.id == 3) {
      crewPostHolder.textContent = crewNamesList[2];
      crewNameHolder.textContent = crewNamesList[2];
      crewDescHolder.textContent = crewDescription.victor;
      crewImageHolder.src = 'assets/crew/image-victor-glover.png';
    }
    else if (crewMate.id == 4) {
      crewPostHolder.textContent = crewNamesList[3];
      crewNameHolder.textContent = crewNamesList[3];
      crewDescHolder.textContent = crewDescription.anousheh;
      crewImageHolder.src = 'assets/crew/image-anousheh-ansari.png';
    }
  })
})

const techNavigators = document.querySelectorAll('.tech-nav');
const craftsHolder = document.querySelector('.crafts-holder');
const craftsDescHolder = document.querySelector('.craft-desc-holder');
const techObjectImages = document.querySelector('.asset-images');
console.log(techObjectImages)
// console.log(techNavigators)
techNavigators.forEach((tech) => {
  const crafts = ['LAUNCH VEHICLE', 'SPACEPORT', 'SPACE CAPSULE'];
  const craftDesc = {
    launchV: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
    spaceport: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    spacecapsule: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'
  }

  const desktopImg = () => {
    // console.log('areadesk')
    techObjectImages.src = 'assets/technology/image-launch-vehicle-portrait.jpg';
    // techObjectImages.src = 'assets/technology/image-spaceport-portrait.jpg';
    // techObjectImages.src = 'assets/technology/image-space-capsule-portrait.jpg';
  }
  const mobileAndTabImg = () => {
    // console.log('area')
    techObjectImages.src = 'assets/technology/image-launch-vehicle-landscape.jpg';
    // techObjectImages.src = 'assets/technology/image-spaceport-landscape.jpg';
    // techObjectImages.src = 'assets/technology/image-space-capsule-landscape.jpg';
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 850) {
      desktopImg()
    }
    else if (window.innerWidth <= 849) {
      mobileAndTabImg()
    }
  })
  window.addEventListener('load', () => {
    if (window.innerWidth >= 850) {
      desktopImg()
    }
    else if (window.innerWidth <= 849) {
      mobileAndTabImg()
    }
  })
  tech.addEventListener('click', () => {
    if (tech.id == 1) {
      craftsHolder.textContent = crafts[0];
      craftsDescHolder.textContent = craftDesc.launchV;
      if (window.innerWidth >= 850) {
        techObjectImages.src = 'assets/technology/image-launch-vehicle-portrait.jpg';
      }
      else if (window.innerWidth <= 849) {
        techObjectImages.src = 'assets/technology/image-launch-vehicle-landscape.jpg';  
      }
    } 
    else if (tech.id == 2) {
      craftsHolder.textContent = crafts[1];
      craftsDescHolder.textContent = craftDesc.spaceport;
      if (window.innerWidth >= 850) {
        techObjectImages.src = 'assets/technology/image-spaceport-portrait.jpg'
      } else if (window.innerWidth <= 849) {
        techObjectImages.src = 'assets/technology/image-spaceport-landscape.jpg'
      }
    }
    else if (tech.id == 3) {
      craftsHolder.textContent = crafts[2];
      craftsDescHolder.textContent = craftDesc.spacecapsule;
      if (window.innerWidth >= 850) {
        techObjectImages.src = 'assets/technology/image-space-capsule-portrait.jpg';
      } else if (window.innerWidth <= 849) {
        techObjectImages.src = 'assets/technology/image-space-capsule-landscape.jpg';
      }
    }
  })
})