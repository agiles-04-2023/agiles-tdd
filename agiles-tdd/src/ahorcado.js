export let intentos = 6

export class Ahorcado {
    constructor(palabra_recibida = '') {
        this.palabraAdivinar = palabra_recibida;
    }

    verificarLetra = (letra) => {
        if (letra.length !== 1) return false
        this.palabraAdivinar = this.palabraAdivinar.toLowerCase()
        return this.palabraAdivinar.includes(letra.toLowerCase())
    }

    completarPalabra = (letra) => {
        this.palabraAdivinar.split('').forEach((letraAdivinar, index) => {
            if (letraAdivinar === letra) this.palabraUsuario[index] = letra
        })
    }

    descuentaVida = () => {
        intentos--
        return intentos
    }

    verificaPosicion = (letra) => {
        const indices = []
        this.palabraAdivinar.split('').forEach((letraAdivinar, index) => {
            if (letraAdivinar === letra) indices.push(index)
        })
        return indices
    }

}
