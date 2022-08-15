import '@testing-library/jest-dom'
import { getUser, getUserName } from '../../base/05-funciones';

describe('Pruebas 05-funciones.js', () => {

    test('Debe de retornar un objeto', () => {
        const rs = getUser();

        const user = {
            uid: "abc",
            username: "usuario"
        }

        expect(rs).toEqual(user);
    });

    test('Debe regresar un objeto + el nombre proporcionado', () =>{

        const name = "prueba";

        const user = {
            uid: "abc",
            username: name
        }

        const rs = getUserName(name);

        expect(rs).toEqual(user);


    })
});