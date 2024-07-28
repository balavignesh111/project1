import cartIcon from "../../public/shopping-cart.svg";
import { CartConsumer } from "../context/context";
export const Header = () => {
    const {data} = CartConsumer();
    console.log(CartConsumer());

    return (
    <div className="header">
        <div className="title">
            <b>Use context</b>
        </div>
        <div className="cartBox">
            <img src={cartIcon} alt="cart" className="cartImg"/>
            <div className="cartCount">{data && data.length}</div>
        </div>
    </div>
);
}