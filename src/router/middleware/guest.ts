/* eslint-disable @typescript-eslint/no-explicit-any*/
export default function guest({ next }: { next: any }) {
    if(localStorage.getItem('user')){
        return next({
           name: 'Home'
        })
    }
   
    return next()
}
