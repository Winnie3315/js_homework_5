let users = ["javoxir", "munir", "jago", "jahonbek", "shohruh"];

let name = prompt('напиши имя которого хочешь удалить').toLowerCase().trim()

 
 let res = users.indexOf(name)

if (res === -1) {
  alert(
  'У нас в списке только javoxir , Munir , Jago, Jahonbek, Shohruh'
  )
} else {
  users.splice(res , 1)
}










console.log(users)