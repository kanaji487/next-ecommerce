"use client"
import { CartItemWithProducts } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

interface CartEntryProps {
    cartItem: CartItemWithProducts;
    setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

export default function CartEntry({ cartItem: { product, quantity }, setProductQuantity }: CartEntryProps) {
    const [isPending, startTransition] = useTransition();

    const quantityOption: JSX.Element[] = [];
    for(let i = 1; i <= 99; i++) {
        quantityOption.push(
            <option value={i} key={i}>
                {i}
            </option>
        )
    }

    return(
        <div>
            <div className="flex flex-wrap gap-3">
                <Image 
                    src={product.imageUrl}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded-lg"
                />
                <div>
                    <Link 
                        href={"/products/" + product.id}
                        className="font-bold text-black top-[-10rem]"    
                    >
                        {product.name}
                    </Link>
                    <h4 className="text-slate-600">
                        Price: {formatPrice(product.price)}
                    </h4>
                    <div className="my-1 flex items-center gap-2 text-slate-600">
                        Quantity:
                        <select 
                            className="select select-bordered w-full max-w-[80px] text-white"
                            defaultValue={quantity}
                            onChange={e => {
                                const newQuantity = parseInt(e.currentTarget.value)
                                startTransition(async () => {
                                    await setProductQuantity(product.id, newQuantity)
                                })
                            }}   
                        >
                            <option value={0}>0</option>
                            {quantityOption}
                        </select>
                    </div>
                    <h5 className="flex items-center gap-3 text-slate-600">
                        Total: {formatPrice(product.price * quantity)}
                    </h5>
                    {isPending && (
                        <span className="loading loading-spinner loading-sm" />
                    )}
                </div>
            </div>
            <div className="divider divider-success"></div>
        </div>
    )
}