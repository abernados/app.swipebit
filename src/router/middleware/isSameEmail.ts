export default function isSameEmail ({ next, store }){
    if(localStorage.getItem('access_token') && localStorage.getItem('user').email === 'sample@gmail.com'){
        return next({
           name: 'Unauthorized'
        })
    }
   
    return next()
   }