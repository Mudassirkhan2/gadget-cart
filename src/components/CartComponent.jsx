import { removeItems,decreaseAmount,increaseAmount } from "../features/cart/cartSlice"

import { ChevronDown,ChevronUp } from "../icon"
import { useDispatch } from "react-redux"

const CartComponent = ({id,img,title,price,amount}) => {
    const dispatch = useDispatch()  
    return (
    <article className="flex items-center justify-between mb-2 space-y-8">
        <div className="flex items-center space-x-2 ">
            <img src={img} alt={title}  className="object-contain w-40 h-40 rounded-lg bg-blend-color-burn"/>
            <div className="flex flex-col ">
                <h4 className="mb-2 font-semibold tracking-widest font-Barlow">{title}</h4>
                <h4>₹{price.toLocaleString('en-IN')}</h4>
                <button className="mt-2 text-sm font-semibold text-red-500 transition duration-300 ease-in-out bg-transparent border-none cursor-pointer md:text-base text-start hover:text-red-800 font-Bellefair " onClick={() => dispatch(removeItems(id))}>remove</button>
            </div>
        </div>
        <div className="flex flex-col !mt-0">
            <button className="w-6 transition duration-300 ease-in-out bg-transparent border-none cursor-pointer hover:text-red-500"
            onClick={() => dispatch(increaseAmount(id))}
            > <ChevronUp/>
            </button>
                <p className="w-6 mb-0 text-lg text-center ">{amount}</p>
            <button className="transition duration-300 ease-in-out bg-transparent border-none cursor-pointer hover:text-red-500"
            onClick={() => dispatch(decreaseAmount(id))}
            > <ChevronDown/>
            </button>
        </div>
    </article>
  )
}

export default CartComponent
