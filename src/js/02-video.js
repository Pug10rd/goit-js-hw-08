
import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(e => {
    localStorage.setItem("videoplayer-current-time", e.seconds)

}, 1000)
);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0)
    .catch(function (error) {
        console.error(error);
    });






//         class User{
//             static Roles = {
//             MANAGER: "manager",
//             USER: "user",
//             };

//             static isValidRole(role){
//                 const roles = Object.values(User)
//                  return roles.includes(role);
//             }

//             #email;
//             #role;
//         constructor({name, email, role}) {
//                 this.name = name;
//                 this.#email = email
//                 this.#role = role
//             }

//             updateName(newName){
//                 if(newName){
//                     this.name = newName
//                     return true
//                 }
//                     return false
//             }
//              getEmail(){
//                  return this.#email
//              }

//              get email(){
//                  return this.#email
//              }

//             set email(newEmail){
//                 if(newEmail.includes('@')){
//                      this.#email = newEmail
//                     return true
//                 }
//                  return false
//              }
//             get role() {
//             return this.#role;
//             }

//             set role(newRole) {
//             this.#role = newRole;
//             }
//             }

//             const user = new User({
//             email: "Agamemnon@gmail",
//             role: User.Roles.MANAGER,
//             });
//               
//             if(User.isValidRole('admin')){
//                 user.role = 'admin'
//             }
//             console.log(user.role)
//          const atreydos = new User({ name: 'Agamemnon', email: 'Agamemnon@gmail' });
//          console.log(user.Roles); // undefined
//          console.log(User.Roles); // {NAME: 'Вориан Атрейдес', POSITION: 'The only son Agamemnon '}

//          console.log(user.role); // Вориан Атрейдес
//          user.role = User.Roles.USER;
//          console.log(user.role); // The only son Agamemnon  
//          console.log(atreydos.email)
//          atreydos.email = 'Vorian@gmail.com'
//          console.log(atreydos.email)
//          console.log(atreydos.getEmail())

//          atreydos.updateName('')
//          console.log(atreydos.name)
//          atreydos.updateName('Вориан Атрейдес')
//          console.log(atreydos.name)