import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  hidden: boolean = false;

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {

      particles: {
        number: {
          "value": 130,
          "density": {
            "enable": true,
            "value_area": 1000
          }
        },
        color: {
          "value": "#0017ff"
        },
        shape: {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        opacity: {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        size: {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        line_linked: {
          "enable": true,
          "distance": 150,
          "color": "#20ff00",
          "opacity": 0.4,
          "width": 1
        },
        move: {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      interactivity: {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          onclick: {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        modes: {
          "grab": {
            "distance": 300,
            "line_linked": {
              "opacity": 1
            }
          },
          bubble: {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          repulse: {
            "distance": 200
          },
          push: {
            "particles_nb": 4
          },
          remove: {
            "particles_nb": 2
          }
        }
      },
      retina_detect: true,
      config_demo: {
        "hide_card": false,
        "background_color": "#869183",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }

  }

  onResumeBtnClick(){
    this.hidden=true;
    setTimeout(()=>{this.router.navigate(['resume'])}, 1500);
  }

}

