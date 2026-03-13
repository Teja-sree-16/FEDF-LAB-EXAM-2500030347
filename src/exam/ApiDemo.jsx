import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Api() 
{
   const[data,setData] = useState([])
   const[error,setError] = useState("")

    const showData = async () =>{

        try
         {
            const response =  await axios.get("https://dummy-json.mock.beeceptor.com/posts")
            setData(response.data)
        } 
        catch (error) 
        {
            setError(error.message)
            
        }
    }
 
    useEffect(() => {
        
         showData()
    }, []);


  return (
    <div>
        <h2><u>Axios Demo</u></h2>
         {
            error?<b>{error}</b>:
            data.length == 0?
            <b>loading ...</b>:
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>body</th>
                    <th>link</th>
                    <th>Category</th>
                    
                    
                </tr>
                {
                   data.map((product,index)=>(
                    <tr key={index}>
                      <td>{product.id}</td>
                      <td>{product.title}</td>
                      <td>{product.body}</td>
                      <td>{product.link}</td>
                      <td>{product.category}</td>
                      <td>
                        <img src={product.image} width="30%" height="30%"/></td>
                      
                      
                    </tr>


                )) 
                }
            </table>
         }



    </div>
  )
}