import {Offcanvas, Stack} from "react-bootstrap";
import useMockApi from "../hooks/useMockApi"
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import {CartItem} from "./CartItem"


type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps) {
    
    const {items} = useMockApi()
    const {closeCart, cartItems} = useShoppingCart()
    const {removeFromCart} = useShoppingCart()
    const item = items.find(item => item.id === item.id)

    if (item == null) return null
    return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
                <div className="ms-auto fw-bold fs-5">
                    Total{" "}
                    {formatCurrency(
                        cartItems.reduce((total, cartItem) => {
                            const item = items.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                    }, 0)
                    )}
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
    )
}