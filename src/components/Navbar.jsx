import { useSelector } from "react-redux"
import { CartIcon } from "../icon"

const Navbar = () => {
// here we are using the useSelector hook to get the amount from the state and display it in the navbar

    const {amount} = useSelector((state) => state.cart)
    return (
    <nav>
        <div className="flex items-center justify-between ">
            <h3 className="text-2xl font-bold font-BarlowCondensed text-[#19A7CE]">Gadget Cart</h3>
            <div className="relative block">
                <CartIcon />
                <div className="absolute flex items-center justify-center w-5 h-5 bg-teal-400 rounded-full -top-2 -right-2">
                    <p className="mb-0 text-lg text-gray-700">{amount}</p>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
