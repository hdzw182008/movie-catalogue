import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';

//file yang pertama kali di jalankan
class App{
  //membuat parameter didalam object karena parameter lebih dari 2
  constructor({ button, drawer, content }){
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    //panggil method penginisiasi komponen AppShell
    this._initialAppShell();
  }

  //buat methodnya
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();//request API
  }
};

export default App;