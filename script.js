function getAdmins(map) {
   let admins = [];
   for ([key,value] of map) {
       if(value === 'Admin') {
           admins.push(key);
       }
   } 
   return admins;
}

const usuarios = new Map();

usuarios.set('paulo','Admin');
usuarios.set('Antonia','Admin');
usuarios.set('Brian','User');
usuarios.set('Maria','Admin');

console.log(getAdmins(usuarios));