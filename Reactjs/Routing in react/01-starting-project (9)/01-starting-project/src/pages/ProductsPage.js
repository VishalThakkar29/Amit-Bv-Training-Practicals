import React from 'react'
import { Link } from 'react-router-dom'
const ProductsPage = () => {
    const PRODUCTS = [
        { id: 'p1', title: "Product1" },
        { id: 'p2', title: "Product2" },
        { id: 'p3', title: "Product3" }
    ]
    return (
        <>
            <h2>Welcome to ProductsPage</h2>
            <ul>

                {PRODUCTS.map((prods) => (
                    <li key={prods.id}>
                        <Link to={`/products/${prods.id}`}>{prods.title}</Link>
                    </li>
                ))}




            </ul>
        </>
    )
}

export default ProductsPage
