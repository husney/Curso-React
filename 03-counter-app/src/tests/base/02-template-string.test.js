import '@testing-library/jest-dom'
import { getSaludo, getUserName } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {

    // const nombre = '21';
    let nombre = 'Ipsum';

    test(`getSaludo debe retornar Hola ${nombre}`, () => {

        const saludo = getSaludo(nombre);        
        expect(saludo).toBe('Hola ' + nombre)
        
    });

    test('getSaludo sin argumentos debería regresar Hola Carlos', () => {
        
        const respuesta = getSaludo();

        expect(respuesta).toBe('Hola Carlos');

    });
});