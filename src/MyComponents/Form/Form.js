import React, { useState } from 'react'

const Form = (props) => {
    const[input, setInput] = useState('');
    const[price, setPrice] = useState('');

    const changeName=(event)=>{
        setInput(event.target.value)
    }

    const changePrice=(event)=>{
        setPrice(event.target.value)
    }

    const formSubmitHandler=(event)=>{
        event.preventDefault();

       const id= Math.random()
       const object={
        ProductName:input,
        SellingPrice:price
       }
       localStorage.setItem(id,JSON.stringify(object))
       props.displayLS(id)
       setInput('')
       setPrice('')

    }


  return (
    <div>
      
        <form onSubmit={formSubmitHandler}>
            <label htmlFor='productname' >Product Name</label>
            <input type='text' id='productname' name='productname' value={input} onChange={changeName} />

            <label htmlFor='sellingprice'>Selling Price</label>
            <input type='number' id='sellingprice' name='sellingprice' value={price} onChange={changePrice} />

            <button type='submit'>Add Product</button>
        </form>

    </div>
  )
}

export default Form
