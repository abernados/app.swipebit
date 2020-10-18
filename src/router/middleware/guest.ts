export default function guest ({ next, store }){
    if(localStorage.getItem('user')){
        return next({
           name: 'Home'
        })
    }
   
    return next()
   }