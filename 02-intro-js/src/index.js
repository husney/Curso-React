// const arreglo = [1,2,3,4,5];

// // const arreglo2 = arreglo;
// const arreglo2 = [...arreglo, 6];

// const arreglo3 = arreglo2.map(x => x * 2);

// console.log(arreglo);
// console.log(arreglo2);
// console.log(arreglo3);

// const getUsuarioActivo = (nombre) => ({ uid: "abc", username: nombre});


// console.log(getUsuarioActivo("prueba"))

// const persona = {
//     nombre: 'Tony',
//     edad: 45,
//     clave: 'Ironman',
//     latlng:{
//         lat: 12.123,
//         lng: -12.123
//     }
// };

// const {nombre, edad, clave} = persona;

// console.log(nombre, edad, clave);

// console.log('--------------');

// const retornarPersona = ({nombre, edad, clave, latlng}) => {
//     return{
//         nombreClave: clave,
//         ubicacion: latlng
//     }
// } 

// const { nombreClave, ubicacion:{lat, lng} } = retornarPersona(persona);
// console.log(nombreClave, lat, lng);

// const personajes = ["Goku", "Gohan", "Goten"];

// const [ , , goten ] = personajes;

// console.log(goku);
// console.log(gohan);
// console.log(goten);

// const retornaAreglo = () => {
    
//     return ["ABC", 123];
// }

// const [ x1 ] = retornaAreglo();

// console.log(x1);

import { heroes } from './data/heroes';


const getHeroeById = id => heroes.find(x => x.id === id);

// console.log(getHeroeById(5));

// // const getHeroesByOwner = owner => heroes.filter(x => x.owner === owner);
const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner )

const obtenerHeroeById = id => {
    return new Promise((resolve, reject) => {

        const respuesta = true;

        setTimeout(() => {
            
            if(respuesta)
                resolve(getHeroeById(id));
            else
                reject("Error al buscar el heroe.");
            
        }, 2000)
    });
}

obtenerHeroeById(5)
.then(console.log)
.catch(console.warn)


// console.log(getHeroesByOwner('Marvel'));

// const prueba = new Promise((resolve, reject) => {
    
//     const work = true;

//     setTimeout(()=> {
//         if(work){
//             resolve("Se termino correctamente");
//         }
//         else{
//             reject("Error");
//         }
//     }, 3000)
// });

// // prueba
// // .then(rs =>{
// //     console.log(rs);
// // })
// // .catch(ex => {
// //     console.log(ex);
// // })

// const ejecutar = async () =>{

//     const rs = await prueba;
//     console.log(rs);
// }

// ejecutar()