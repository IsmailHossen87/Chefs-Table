import React from 'react'

export default function Sidebar(
  {recepe,handleRemove,prepare,handleCalculate,time,calories}
) {
  console.log(recepe)
  return (
    <div className='md:col-span-1 border rounded-xl text-center'>
        {/*want to cook table  */}
      <div className="overflow-x-auto">
      <h3 className='text-4xl  font-bold border-b-2 pb-3'>Total Card : {recepe.length}</h3>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      recepe.map((data,index) =>
        <tr key={index} className="hover">
          <th>{index + 1}</th>
          <td>{data.recipe_name}</td>
          <td>{data.preparing_time}</td>
          <td>{data.calories}</td>
          <div className="card-action flex justify-center">
         <button onClick={()=> {
          handleRemove(data.recipe_id);
          handleCalculate(data.preparing_time,data.calories)}} className=" btn bg-green-400 px-3 rounded-full font-medium text-xl mt-6">Prepare</button>
       </div>
    </tr>
      )
     }
    </tbody>
  </table>
      </div>
      {/* curently cokking Tavl  */}
      <div className="overflow-x-auto">
      <h3 className='text-xl mt-8 font-bold border-b-2 pb-3'>Currently Cooking : {prepare.length}</h3>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      prepare.map((data,index) =>
        <tr key={index} className="hover">
          <th>{index + 1}</th>
          <td>{data.recipe_name}</td>
          <td>{data.preparing_time}</td>
          <td>{data.calories}</td>
        </tr>
      )
     }
       <tr >
          <td></td>
          <td></td>
          <td>Time :{time}</td>
          <td>Calories:{calories}</td>
        </tr>

    </tbody>
  </table>
      </div>

    </div>
  )
}
