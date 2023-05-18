import { useState } from "react";
import Form from "./MyComponents/Form/Form";
import ProductList from "./MyComponents/List/ProductList";


function App() {
  const[item, setItem] = useState([]);

  const displayLS=(id)=>{
    setItem(()=>{
      return([...item,id])
    })
  }

  const filterArray=(id)=>{
    setItem(item.filter((i)=>{
      return(i!==id)
    }))
  }

  return (
    <div>
      <h2>Seller's Page</h2>
      <Form displayLS={displayLS}/>
      <ProductList item={item} filterArray={filterArray} />
    </div>
  );
}

export default App;