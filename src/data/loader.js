// Loads data from localStorage, falls back to product.yml
import data from './product.yml'
import YAML from 'yamljs'
const STORAGE_KEY = 'product-info'

class Loader {
  load() {
    const loadedData = this._storedData() || data;
    return loadedData;
  }

  store(data) {
    window.localStorage.setItem(STORAGE_KEY, YAML.stringify(data))
  }

  _storedData() {
    const existingData = window.localStorage.getItem(STORAGE_KEY)
    if (!existingData) { return null }
    return YAML.parse(existingData)
  }
}

export default Loader
