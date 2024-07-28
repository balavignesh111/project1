import { createContext, useContext, useEffect, useState } from "react"; 


const URL = "https://www.course-api.com/react-usereducer-cart-project";


// 1 create a context
const CartContext = createContext();


// 2. create a provider function
const CartProvider = ({children})=>{
    // logic of my app

    const [data,setData] = useState([]);


    const fetchData = async()=>{
        try{
            const resp = await fetch(URL);
            const result = await resp.json();
            setData(result);
        }catch(err){
            console.log(err);
        }
    } 

    // all clear
    const clearAll = ()=> setData([]);

    // increment 
    const increment = (id) => setData((prevArr)=> prevArr.map((ele)=> (ele.id === id) ? {...ele,amount : ele.amount + 1} : ele))

    // decrement
    const decrement = (id) => setData((prevArr)=> prevArr.map((ele)=> (ele.id === id) ? {...ele,amount : ele.amount - 1} : ele))

    // remove item
    const removeItem = (id)=> setData((prevArr)=> prevArr.filter((ele)=> ele.id !== id));

    // total
    const totalAmt = ()=> data.reduce((accEle,currentEle)=> accEle += (currentEle.price * currentEle.amount),0).toFixed(2)

    useEffect(()=>{
        fetchData();
    },[])

    return(
    <CartContext.Provider value={{data,clearAll,increment,decrement,removeItem,totalAmt}}>
        {children}
    </CartContext.Provider>)
}

// 4. consumer function
const CartConsumer = ()=> useContext(CartContext);

export {CartProvider, CartConsumer};