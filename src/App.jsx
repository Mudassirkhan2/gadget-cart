import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
import { useDispatch,useSelector } from "react-redux"
import { calulateTotals } from "./features/cart/cartSlice"
import { useEffect } from "react"
function App() {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((state) => state.cart)
  useEffect(() => {
    dispatch(calulateTotals())
  },[cartItems,dispatch])


  return (
    <main className="w-11/12 max-w-6xl mx-auto my-0 ">
      <Navbar />
      <CartContainer/>
    </main>
  )
}

export default App
