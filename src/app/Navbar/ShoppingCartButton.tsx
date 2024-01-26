"use client"
import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";

interface ShoppingCartButtonProps {
    cart: ShoppingCart | null;
}

export default function ShoppingCartButton( { cart }: ShoppingCartButtonProps ) {
    function closeDropdown() {
        const elem = document.activeElement as HTMLElement;
        if(elem) {
            elem.blur();
        }
    }
    
    return(
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn-ghost btn-circle btn">
                <div className="indicator">
                    <IoMdCart size={30} />
                    <span className="badge badge-sm badge-warning indicator-item">{cart?.size || 0}</span>
                </div>
            </label>
            <div
                tabIndex={0}
                className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow z-30"
            >
                <div className="card-body">
                    <span className="text-lg font-semibold">{cart?.size || 0} Items</span>
                    <span className="text-info">
                        Subtotal: {formatPrice(cart?.subtotal || 0)}
                    </span>
                    <div className="card-actions">
                        <Link
                            href="/cart"
                            className="btn btn-primary btn-block"
                        >
                            View cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 