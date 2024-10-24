
import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Recipies from './Components/Recipies'
import Sidebar from './Components/Sidebar'


function App() {
// {1,2,3,4,5}
const [recepe,setRecipi]=useState([])
const [prepare,setPrepare] = useState([])
const [tim,setTime] = useState(0)
const [calo,setCalories] = useState(0)


const handleRemove = id => {
// {3}
  const deleteAndPaseData = recepe.find(data => data.recipe_id === id)
  const updataData = recepe.filter(data => data.recipe_id !== id) 

// {1,3,4,5} 
  setRecipi(updataData)
  setPrepare([...prepare,deleteAndPaseData])
}
const handleCalculate = (time,calories) =>{
  setTime(tim + time)
  setCalories(calo + calories)
}
const recepeeQuee = (data) => {
  const exitData = recepe.find(previous => previous.recipe_id == data.recipe_id)
  if(!exitData){
    setRecipi([...recepe,data])
  }else{
    alert("Recipe already exit")
  }
  
}
console.log(recepe)
  return (
    <>
    <div className='container mx-auto px-3'>
    <Header></Header>
     <section className='grid md:grid-cols-3 mt-5 gap-2'>
      {/* card section */}
        <Recipies
        recepeeQuee = {recepeeQuee}
        ></Recipies>
      {/* side Bar Section */}
      <Sidebar 
      handleRemove={handleRemove} 
      recepe={recepe}
      prepare={prepare}
      handleCalculate={handleCalculate}
      time = {tim}
      calories={calo}
      >
       </Sidebar>
     </section>
    </div>
    </>
  )
}

export default App
