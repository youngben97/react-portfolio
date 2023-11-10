import Project from '../components/UI/Project';
import baboon from '@assets/project-images/baboon-computer.png';
import gorilla from '@assets/project-images/gorilla-mac.png';
import coffeeMonkey from '@assets/project-images/monkeycoffee2.png';
import monkeyComp from '@assets/project-images/monkeycomputer.png';
import monkeyComp2 from '@assets/project-images/monkeycomputer2.png';
import orangutan from '@assets/project-images/orangutan-coding.png';


//add github links
const projects = [
    {
      id:1,
      name: 'Grow Box',
      url: 'https://grow-box-480c3b8ce4f5.herokuapp.com/',
      img: baboon
    },
    {
      id: 2,
      name: 'Tech Blog',
      url: 'https://tech-blog-production-8fe6.up.railway.app/',
      img: gorilla
    },
    {
      id: 3,
      name: 'Javascript Quiz',
      url: 'https://youngben97.github.io/javascript-quiz/',
      img: coffeeMonkey
    },
    {
      id: 4,
      name: 'Weather Dashboard',
      url: 'https://youngben97.github.io/weather-dashboard/',
      img: monkeyComp
    },
    {
      id: 5,
      name: 'E-Commerce Backend',
      url: 'https://github.com/youngben97/e-commerce-backend',
      img: monkeyComp2
    },
    {
      id: 6,
      name: 'Social Network API',
      url: 'https://github.com/youngben97/social-network-api',
      img: orangutan
    },
]

export default function Portfolio() {
    return <Project projects={projects} />;
}
