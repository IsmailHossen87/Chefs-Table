import React, { useEffect, useState } from 'react'

export default function Recipies({recepeeQuee}) {
    const [recipe,setRecipe] = useState([])
    useEffect(()=>{
        fetch('Recipe.json')
        .then(res => res.json())
        .then(data => setRecipe(data))
    },[])
  return (
    <div className='md:col-span-2 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3' >
        {recipe.map(rec => 
       
                    <div key={rec.recipe_id} class="card bg-base-100  border">
                    <figure className='rounded-lg'>
                      <img className='  p-4'
                        src={rec.recipe_img}
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">{rec.recipe_name}</h2>
                      <p>{rec.short_description}</p>
                      <h3>Ingredients : {rec.ingredients.length}</h3>
                      <ul>
                        {rec.ingredients.map((item,idx) => <li className='list-disc text-blue-400 ml-3' key={idx}>{item}</li>)}
                      </ul>
                    <div className='flex justify-between'>
                        <div className='flex gap-3 items-center'>
                          <i className="fa-solid fa-clock"></i>
                          <p>{rec.preparing_time} minite</p>
                          </div>
                        <div className='flex gap-3 items-center'>
                        <i className="fa-solid fa-fire-flame-curved"></i>
                        <p>{rec.calories}</p>
                        </div>
                    </div>

                      <div className="card-actions ">
                        <button onClick={()=>recepeeQuee(rec)} className=" btn bg-green-400 px-4 py-2 rounded-full font-medium text-xl mt-6">Want to Cook</button>
                      </div>
                    </div>
                  </div>
        )}
        </div>
    </div>
  )
}
