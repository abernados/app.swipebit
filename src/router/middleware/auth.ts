export default function auth ({ next, store }){
    if(!localStorage.getItem('access_token')){
        return next({
           name: 'Login'
        })
    }
   
    return next()
   }