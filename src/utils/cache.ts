class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const vaule = window.localStorage.getItem(key)
    if (vaule) {
      return JSON.parse(vaule)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
}

export default new LocalCache()
