import React from 'react' 
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const Details = () => {

    const {id} = useParams();

  return (

    <div>
         <Link to = {'/home'}>
            <div style = {{height:'50px' , width:"50px",margin:"auto", backgroundColor:"cyan"    }} >
              
                  go back
            </div>
         </Link>
         <p style = {{height:"50px"}}></p>
        <h1>{id}</h1>
    </div>

  )
}

export default Details