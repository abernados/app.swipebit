export default function guest ({ next, store }  : { next: any, store: any} ){
    if(!localStorage.getItem('access_token')){
        return next({
           name: 'Login'
        })
    }
   
    return next()
   }