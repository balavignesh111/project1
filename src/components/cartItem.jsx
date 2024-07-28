import upArrow from "../../public/up-arrow.png";
import downArrow from "../../public/down.png";
import { CartConsumer } from "../context/context";

export const CartItem = ({item}) => {
    const {removeItem,decrement,increment} = CartConsumer();
    return ( 
        <div className="cart">
            <div className="cartDescBox">
                <div className="cartImageBox">
                    <img src={item.img} alt={item.title} className="itemImg"/>
                </div>
                <div className="productBox">
                    <p className="productTitle">
                        {item.title}
                    </p>
                    <span className="productPrice">${item.price}</span><br/>
                    <button className="removeBtn" onClick={()=>removeItem(item.id)}>remove</button>
               </div>
            </div>
            <div className="cartModifierBtn">
                <img src={upArrow} alt="uparrow" className={`arrow`} onClick={()=> increment(item.id)}/>
                <p className="amt">{item.amount}</p>
                <img src={downArrow} alt="downarrow" className={`${item.amount !== 0 ? 'arrow' : 'arrowDisabled'}`} onClick={()=> item.amount !== 0 ? decrement(item.id) : null}/>

            </div>
        </div>
     );
}