
import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {addPizza} from '../actions/pizzaActions'
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'
export default function Addpizza() {

    const [name,setName]=useState('')
    const [smallprice,setSmallprice]=useState('')
    const [mediumprice,setMediumprice]=useState('')
    const [largeprice,setLargeprice]=useState('')
    const [image,setImage]=useState('')
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('')
    const dispatch=useDispatch()

    const addpizzasstate = useSelector((state) => state.addPizzaReducer)
    const{success,error,loading} = addpizzasstate

    function formHandler(e){
        e.preventDefault();
        const pizza={
            name,
            image,
            description,
            category,
            prices:{
                small:smallprice,
                medium:mediumprice,
                large:largeprice
            }
        }
        console.log(pizza)
        dispatch(addPizza(pizza))
    }
    return (
        <div>
           <div className="text-start shadow-lg p-3 mb-5 bg-white rounded">
               <h1>Addpizza</h1>
               {loading && (<Loading/>)}
               {error&& (<Error error='Something went wrong'/>)}
               {success&& (<Success success='New Pizza Added Successfully'/>)}
               <form onSubmit={formHandler}>
                   <input className="form-control" type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                   <input className="form-control" type="text" placeholder="small varient price" value={smallprice} onChange={(e)=>{setSmallprice(e.target.value)}}/>
                   <input className="form-control" type="text" placeholder="medium varient price" value={mediumprice} onChange={(e)=>{setMediumprice(e.target.value)}}/>
                   <input className="form-control" type="text" placeholder="large varient price" value={largeprice} onChange={(e)=>{setLargeprice(e.target.value)}}/>
                   <input className="form-control" type="text" placeholder="category" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                   <input className="form-control" type="text" placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                   <input className="form-control" type="text" placeholder="image url" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
                   <button className="btn mt-3" type="submit">Add Pizza</button>
               </form>
           </div>
        </div>
    )
}
