export default function isRegistered ({ next, store }){
    if(localStorage.getItem('user')){
        return next({
           name: 'Register'
        })
    }
   
    return next()
   }