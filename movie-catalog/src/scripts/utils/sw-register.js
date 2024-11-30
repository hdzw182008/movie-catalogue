//registrasikan SW ke browser
import { Workbox } from "workbox-window"; //registrasi dengan workbox window

const swRegister = async () =>{
  if (!('serviceWorker' in navigator)){
    console.log('Service worker not supported in the browser');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');//agar workbox dapat mengaktifkan sw dalam browser

  try{
    await wb.register();
    console.log('Service worker registered');
  }catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;