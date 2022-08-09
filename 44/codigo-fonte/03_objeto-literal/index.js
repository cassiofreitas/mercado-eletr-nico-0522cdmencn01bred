
let usuario = {
    id: 1,
    nome: "Willian",
    sobrenome: "Sant Anna"
}
// Lista de objetos literais
let listaUsuarios = [
    {
        id: 1,
        nome: "Willian",
        sobrenome: "Sant Anna"
    },
    {
        id: 2,
        nome: "Sabrina",
        sobrenome: "Helena"
    },
    {
        id: 3,
        nome: "Ingrid",
        sobrenome: "Carol"
    }
];
//
let json = JSON.stringify(listaUsuarios);
// Nota: Para realizar uma conversão de JSON para Objeto literal JSON.parse(json);
// 
console.log("Objeto Literal", typeof (listaUsuarios), listaUsuarios);
//
console.log("JSON", typeof (json), json);
//
console.log(usuario);
//
console.log(usuario.id, usuario.nome, usuario.sobrenome);
//
console.log(usuario['id'], usuario['nome'], usuario['sobrenome']);
//
for (chave in usuario) {
    // usuario['id'] 
    // usuario['nome'] 
    // usuario['sobrenome']
    console.log(chave, usuario[chave]);
}
//
console.log(listaUsuarios);
//
console.log(listaUsuarios[0].id, listaUsuarios[0].nome, listaUsuarios[0].sobrenome);
console.log(listaUsuarios[1].id, listaUsuarios[1].nome, listaUsuarios[1].sobrenome);
console.log(listaUsuarios[2].id, listaUsuarios[2].nome, listaUsuarios[2].sobrenome);
//
listaUsuarios.forEach(usuario => console.log(usuario.id, usuario.nome, usuario.sobrenome));