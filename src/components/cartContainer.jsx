import {CartItem} from "./cartItem";
// import {data} from "../constants/index";
import { CartConsumer } from "../context/context";

export const CartContainer = () => {
    // let cartItems = [...data];
    const {data,totalAmt,clearAll} = CartConsumer();
    if(data?.length === 0){
        return (
            <h3 className="cartBoxTitle">Your bag is empty</h3>
        )
    }

    return ( 
    <div className="cartContainer">
        {/* cart header */}
        <h2 className="cartBoxTitle">Your bag</h2><br></br>
        {/* cart body */}
        {
            data?.length>0 && data?.map((item,ind)=>
                <CartItem item={item} key={ind}/>
            )
        }
        {/* cart footer */}
        <hr />
        <div className="footer">
            <p>Total</p>
            <p className="totalAmt">${totalAmt()}</p>
        </div>
        <div className="clr-btn-box">
        <button className="clearBtn" onClick={()=> clearAll()}>Clear cart</button>

        </div>
    </div> );
}