import CartComponent from "./CartComponent"
import { useSelector,useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
const CartContainer = () => {
    const {cartItems,total,amount} = useSelector((state) => state.cart)

    const dispatch = useDispatch()
    if(amount < 1){
        return (
            <section className="w-11/12 h-full py-10 mx-auto my-0 mt-10">
                <header>
                    <h2 className="mb-12 text-center uppercase">your bag</h2>
                    <h4 className="mt-4 text-center lowercase">is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className="w-11/12 h-full py-10 mx-auto my-0 mt-4">
            <div> 
                    {cartItems.map((item) => {
                        return <CartComponent key={item.id} {...item}/>
                    })}
            </div>
                <footer className="mt-16 text-center">  
                    <hr/>
                    <h4 className="flex justify-between mt-4 text-lg font-semibold uppercase">
                        Total <span>₹{total.toLocaleString('en-IN')}</span>
                    </h4>
                    <button className="px-4 py-2 bg-transparent border border-red-500 rounded-md btn hover:bg-red-500 hover:text-white "
                    onClick={() => dispatch(clearCart())}
                    >clear cart</button>
                </footer>
        </section>
    )
}

export default CartContainer
