import productos from '../data/comunidad.json'

const fetch = (mockData, time = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}

const comunidadApi = {
    getComunidad() {
        return fetch(comunidad, 500)
    }
}

export { comunidadApi };