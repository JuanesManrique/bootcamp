import historias from '../data/historias.json'

const fetch = (mockData, time = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}

const historiasApi = {
    getHistorias() {
        return fetch(historias, 500)
    }
}

export { historiasApi };