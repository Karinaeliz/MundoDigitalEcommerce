import imgCarrito from './assest/imgCarrito.png'



const CartWidget = () => {
    
    return (
        <div >
            <img  src={imgCarrito}  alt="Carrito de Compras"  width="55"
                height="55"  /> 
            <strong className="text-bg-dark p-2">0</strong>
        </div>
    )
}

export default CartWidget