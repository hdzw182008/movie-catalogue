import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const cacheAvailable = 'caches' in self; //chechking adanya Cache browser, true or false
console.log(cacheAvailable);

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#mainContent')
});

window.addEventListener('hashchange', ()=>{ //saat url hash berubah
  app.renderPage();
});

window.addEventListener('load', ()=>{ //saat halamn dimuat
  app.renderPage();
  swRegister();
});