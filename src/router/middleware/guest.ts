export default function guest ({ next, store }: { next: any; store: any} ){
    if(localStorage.getItem('user')){
        return next({
           name: 'Home'
        })
    }
   
    return next()
}
