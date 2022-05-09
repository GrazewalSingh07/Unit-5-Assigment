import './form.css'
import { useState,useEffect } from 'react'
export const Form=()=>{
    const [formdata,setForm]=useState({
            name:'',
            age:'',
            address:'',
            Dept:'',
            salary:'',
            marital:false
        })
const [show,showdata]=useState([])
    const handleclick=(e)=>{
            const {id,value}=e.target
            setForm({...formdata,[id]:value})
        }

        const handlechange=(e)=>{
        const {id,value}=e.target
        setForm({...formdata,[id]:value})

    }
    //console.log(formdata)
      const handleSubmit=(e)=>{
        e.preventDefault();
        //
        fetch("http://localhost:8080/details",{method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(formdata)})}

const getdata=async()=>{
    try {
        const data=await fetch("http://localhost:8080/details");
    //setForm(data)
    const dataa=await data.json()
    console.log(dataa)
    showdata(dataa)
    } catch (err) {
        console.log(err)
    }
}
useEffect(()=>{
    getdata()
},[])

   return <div>
   
       <form onSubmit={handleSubmit} className="form">
        <input onChange={handlechange} id="name" value={formdata.name} type="text" placeholder="Name"/>
        <input onChange={handlechange} id="age" value={formdata.age} type="number" placeholder="age"/>
        <textarea onChange={handlechange} id="address" value={formdata.address}>Adress</textarea>
        <select onChange={handlechange} id="Dept" value={formdata.Dept} placeholder="Department">
        <option>Dept-A</option>
        <option>Dept-B</option>
        <option>Dept-C</option>
        </select>
        <input onChange={handlechange} id="salary" value={formdata.salary} type="number" placeholder="Salary"></input>
        <div  className='mar'>
        <div  className='maried'>Maried</div>
        <input onClick={handleclick} id="marital" value="Maried" type="checkbox"className='box'></input>
        </div>
        <div className='unmar'>
        <div  className='unmaried'>Unmaried</div>
        <input onClick={handleclick} id="marital" value="Unmaried" type="checkbox"className='boxx'></input>
        </div>
        <input type="submit" value='submit'className='submit'/>
       
    </form> 
    <div>
        <h3>Submited List</h3>
        {show.map((e)=>(
            <div>
                <div className='show'>
                <p className='p'>Name:{e.name}</p>
                <p className='p'>Age:{e.age}</p>
                <p className='p'>Adress:{e.address}</p>
                <p className='p'>Department:{e.Dept}</p>
                <p className='p'>Salary:{e.salary}</p>
                <p className='p'>Marital Status:{e.marital}</p>
                </div>
            </div>
        ))}
      
    </div>
   </div>
}