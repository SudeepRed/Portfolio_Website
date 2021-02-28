/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
let lightBeige="#D64B4B"
let beige="#BF3A55"
let lightPink="#903F5C"
let pink="#7A3A64"
let lightViolet="#632B58"

particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": false,
        "value_area": 1499.3805191013182
      }
    },
    "color": {
      "value": beige
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 6,
        "color": lightViolet
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src":"assets/virus.png",
        "width": 50,
        "height": 50
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 45,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 15,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": lightViolet,
      "opacity": 1,
      "width": 2.5
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 1200,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);
