import { ProductsProps } from "@/pages";
import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setLoadingCondition } from "../../src/action/index";
import classes from "./ProductList.module.css";
import Image from "next/image";
const ProductList: React.FC<{ productData: ProductsProps[] }> = (props) => {
  const dispatch = useDispatch();
  const productList = props.productData.map((product) => {
    console.log(product.id);
    return (
      <>
        <div className={classes.container} key={product.id}>
          <div className={classes.card}>
            <div className={classes["card-info"]}>
              <Image
                className={classes.image}
                src={product.thumbnail}
                alt={product.title}
                width="300"
                height="100"
              />
            </div>
            <div>
              <p> ₹ {product.title}</p>
            </div>
            <div>
              <p> ₹ {product.price}</p>
            </div>
            <div>
              <p> {product.category}</p>
            </div>
            <div>
              <p> {product.rating}</p>
            </div>
            <div className={classes.button}>
              {/* <Link href={`/product/${product.id}`}>View Product</Link> */}
              <Link href={`/product/${product.id}`}>
                <p onClick={() => dispatch(setLoadingCondition())}>Home Page</p>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  });
  return <div>{productList}</div>;
};

export default ProductList;
