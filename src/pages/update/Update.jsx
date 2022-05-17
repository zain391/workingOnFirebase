import React from 'react'
import {firestore} from "../confing/firebase"
import { getDoc,collection, doc, getDocs } from 'firebase/firestore'
const Update = () => {
  const ctaUpdateHandler=async (e)=>{
    e.preventDefault()
    console.log("i am working");
    try {
      let obj2={
        name:"zain",
        age:"23"
      }
      const updateSnap= await firestore.collection("users").doc("fy9ADIZKJFywRdlx7x8D").Update(obj2);
      console.log(updateSnap.data());
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button className="btn btn-primary" onclick={ctaUpdateHandler}>update</button>
    </div>
  )
}

export default Update