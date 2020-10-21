/* eslint-disable @typescript-eslint/no-explicit-any*/
export default function guest ({ next }: { next: any} ){
    if(!localStorage.getItem('access_token')){
        return next({
           name: 'Login'
        })
    }
   
    return next()
   }