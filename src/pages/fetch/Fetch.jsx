import React from 'react'
import { firestore } from '../confing/firebase'
import { getDoc,collection, doc, getDocs } from 'firebase/firestore'
const Fetch = () => {
    const ctaFetchHandler= async ()=>{
        try {
          const snapShots= await getDocs(collection(firestore,"users") )
          snapShots.forEach((item)=>{
                console.log("i an itme ",item.data());
          })
        } catch (error) {
            console.log("i am error",error);
        }
    }
  return (
    <div>
        <button className='btn btn-success' onClick={ctaFetchHandler}>fetch data from firestore </button>
    </div>
  )
}

export default Fetch