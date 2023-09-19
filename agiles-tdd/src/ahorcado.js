// export let intentos = 6

export class Ahorcado {
    constructor(palabra_recibida = '') {
        this.palabraAdivinar = palabra_recibida
        this.intentos = 6
    }

    verificarLetra = (letra) => {
        if (letra.length !== 1) return false
        this.palabraAdivinar = this.palabraAdivinar.toLowerCase()
        return this.palabraAdivinar.includes(letra.toLowerCase())
    }

    verificarPalabra = (palabraIntento) => {
        if (this.palabraAdivinar.toLowerCase() === palabraIntento.toLowerCase()) {
            return { band: true, int: this.intentos }
        } else {
            this.intentos = 0
            return { band: false, int: this.intentos }
        }
    }

    cantidadVidasRestantes = () => {
        return this.intentos
    }

    reiniciarJuego = () => {
        this.intentos = 6
        return { palabra: this.palabraAdivinar, cantVidas: this.intentos}
    }
    
    completarPalabra = (letra) => {
        this.palabraAdivinar.split('').forEach((letraAdivinar, index) => {
            if (letraAdivinar === letra) this.palabraUsuario[index] = letra
        })
    }

    descuentaVida = () => {
        this.intentos--
        return this.intentos
    }


    verificaPosicion = (letra) => {
        const indices = []
        this.palabraAdivinar.split('').forEach((letraAdivinar, index) => {
            if (letraAdivinar === letra) indices.push(index)
        })
        return indices
    }

}
