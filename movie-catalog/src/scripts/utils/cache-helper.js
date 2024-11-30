import CONFIG from '../globals/config'; //import kunci cache

const CahceHelper = { //objek

  //caching app shell
  async cachingAppShell(request){
    const cache = await this._openCache();
    cache.addAll(request); //method addAll untuk memasukan semua parameter (beberapa parameter di dalam bentuk array)
  },


  //hapus todo lama
  async deleteOldCache(){
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },


  //add fetch request ke cache dengan teknik stale while revalidate(cache didapat tanpa harus lost koneksi)
  async revalidateCache(request){
    const response = await caches.match(request);

    if (response){
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  },


  //membuka/membuat cache yang dituju, karena cache bisa ada banyak
  async _openCache(){
    return caches.open(CONFIG.CACHE_NAME); //atribut sebagai key cache, bebas
  },

  //fetching request / meminta request cache?
  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200){
      return response;
    }

    await this._addCache(request);
    return response;
  },

  //memasukan request dalam cache
  async _addCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  },
};

export default CahceHelper;