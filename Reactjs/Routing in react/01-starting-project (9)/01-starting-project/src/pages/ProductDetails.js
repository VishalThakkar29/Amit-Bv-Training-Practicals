import React from 'react'
// import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
const ProductDetails = () => {
    // const param = useParams();
    return (
        <>
            <h1>ProductDetails</h1>
            {/* <p>{param.ids}</p> */}
            <Link to=".." relative="path">back</Link>
        </>
    )
}

export default ProductDetails
