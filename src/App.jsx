import React from 'react'
import { Button } from './components/ui/button'
import { getDatabase , ref ,set} from "firebase/database"  
import {app} from "../firebase"


const db = getDatabase(app)

function App() {

  const putData = () => {
    set(ref(db,"user/rao"),{
      id:1,
      payment :200,
      Name: "Rao Shahbaz",

    })
  }

  return (
    <> 
   <div className='flex justify-center flex-col  items-center mt-3'>
      <Button  variant='destructive' onClick={putData} >
      JUST PUT DATA IN FIREBASE
    </Button>
    <Button >
      We Have Succefully Connected With Firebae
    </Button>
   </div>
    </>
  )
}

export default App