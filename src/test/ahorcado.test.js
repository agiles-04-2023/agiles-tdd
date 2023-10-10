/* eslint-disable @typescript-eslint/no-unused-vars */
import { expect, test } from 'vitest'
import { Ahorcado } from '../ahorcado'


//* 1ra Planning
test('Verificar si una letra esta en la palabra', () => {
    const juego = new Ahorcado('casa')
    expect(juego.verificarLetra('a')).toBeTruthy();
});

test('Verificar si una letra no esta en la palabra', () => {
    const juego = new Ahorcado('casa')
    expect(juego.verificarLetra('x')).toBeFalsy();
}); 

test('Verificar letra repetida en la palabra ', () => {
    const juego = new Ahorcado('casa')
    expect(juego.verificarLetra('a')).toBeTruthy();
    expect(juego.verificarLetra('a')).toBeTruthy();
});

//* 2da Planning
test('Verifica que descuente intentos cuando no acierta', () => {
    const juego = new Ahorcado('casa')
    expect(juego.verificarLetra('x')).toBeFalsy();
    expect(juego.descuentaVida()).toBe(5);
});

test('Devuelve la posicion de la letra en la palabra', () => {
    const juego = new Ahorcado('casa')
    expect(juego.verificaPosicion('a')).toEqual([1, 3]);
});

//* 3er Planning
test('Completar la palabra ingresando la palabra de una tirada', () => {
    const juego = new Ahorcado('casa')
    const { band, int } = juego.verificarPalabra('CASA')
    expect(band).toBeTruthy()
});

test('Poner una palabra incorrecta y perder', () => {
    const juego = new Ahorcado('hola')
    const { band, int } = juego.verificarPalabra('CASA')
    expect(band).toBeFalsy()
    expect(int).toBe(0)
});

test('Errar todos los intentos', () => {
    const juego = new Ahorcado('casa')
    while (juego.descuentaVida() !== 0) {
        juego.verificarLetra('x')
    }
    expect(juego.cantidadVidasRestantes()).toBe(0)    
});

//* 4ta Planning
test('Reiniciar juego para la misma palabra y con 6 intentos', () => {
    const juego = new Ahorcado('casa')
    expect(juego.cantidadVidasRestantes()).toBe(6)
    expect(juego.descuentaVida('x')).toBe(5)
    const { palabra, cantVidas } = juego.reiniciarJuego()

    expect(palabra).toBe('casa')
    expect(cantVidas).toBe(6)
})
