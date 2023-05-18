import React from 'react'

const ProductList = (props) => {

    const deleteID =(i)=>{
        localStorage.removeItem(i)
        props.filterArray(i)
        
    }

  return (
    <div>
        <h3>Product List :</h3>
        <ul >{props.item.map((i)=>{
                return(<li key={i}>{localStorage.getItem(i)} <button onClick={()=>{deleteID(i)}}>Delete</button></li>)})}</ul>
    </div>
  )
}

export default ProductList; 