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

