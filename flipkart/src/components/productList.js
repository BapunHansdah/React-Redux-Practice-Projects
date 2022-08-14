import react from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addToCart} from '../actions/index'
import '../css/productList.css'

function productList(){
    const products = useSelector(state=>state.products)
    const key = useSelector(state=>state.searchedKey)
    const Cart  = useSelector(state=>state.addToCart)
    const dispatch = useDispatch()
    console.log(products)
    function setNumbers(){
        
    }
    
    console.log(key)
    return(
        <>
            <div className="container">
                <div  className="grid">
                {
                    products.products.map((m,i)=>{
                        if(m.product_title.toUpperCase().includes(key.toUpperCase())){
                        return (
                            <div key={m.id}>
                                <div className="image"><img src={m.p_image}/></div>
                                <div className="title">{m.product_title}</div>
                                <div className="price">{`$ ${m.list_price}`}</div>
                                <button className="button-13" onClick={()=>dispatch(addToCart(m.id,m.product_title,m.brand,m.p_image,m.list_price))}>add To Cart</button>
                            </div>
                        )
                        }
                    })
                }
                </div>
                <div className ="cartContainer">
                <h1>Cart</h1>
                <div className="grid-2">
                    {
                        Cart.length === 0 ? <p className="nothing-cart">Empty</p>: Cart.map((m,i)=>{
                            return (
                               
                                    
                                        <div className="cart-desc" key={i}>
                                                   <div className="cart-image"><img src={m.image} /></div>  
                                                   <div className="detail">
                                                    <div><h3>{m.name}</h3></div>
                                                    <div>{`Price : $${m.price}`}</div>
                                                    <div>{`Brand : ${m.brand}`}</div>
                                                    <div className="cartDescription">
                                                            <button className="button-14">-</button>&nbsp;
                                                            <input value="1" onChange={(e)=>setNumbers(e.target.value)}/>&nbsp;
                                                            <button className="button-14">+</button>
                                                    </div>
                                                </div>
                                    </div>
                             
                            )
                        })

                    }
                </div>
                </div>
            </div>
        </>
    )
                      
}
export default productList