import React, { useState } from "react";
import Loader from "../../components/ui/Loader";
import { useSelector } from "react-redux";
import { Loading } from "@nextui-org/react";
import ProductList from "../../components/product/ProductList";
import classes from "../styles/index.module.css";
export type ProductsProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductProp = {
  products: ProductsProps[];
};

const HomePage: React.FC<{ products: ProductProp }> = ({ products }) => {
  const loading = useSelector((state: any) => state.loading);
  const [showLoader, setShowLoader] = useState(false);
  const [filter, setFilter] = useState({
    category: "",
    price: "",
    rating: "",
  });
  if (!products) {
    setShowLoader(true);
  }
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

  const filteredProducts = products.products.filter((product) => {
    let match = true;

    if (filter.category && product.category !== filter.category) {
      match = false;
    }

    if (filter.price && product.price > parseInt(filter.price)) {
      match = false;
    }

    if (filter.rating && product.rating < parseInt(filter.rating)) {
      match = false;
    }

    return match;
  });

  // setShowLoader(false);
  return (
    <>
      <div className={classes.cont}>
        {loading && <Loading />}
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home-decoration</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
          </select>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <select id="price" name="price" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="50">Less than $50</option>
            <option value="100">Less than $100</option>
            <option value="500">Less than $500</option>
          </select>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select id="rating" name="rating" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="3">3 stars and above</option>
            <option value="4">4 stars and above</option>
            <option value="5">5 Star</option>
          </select>
        </div>
      </div>
      <div className={classes.flex}>
        {showLoader && <Loading />}

        <ProductList productData={filteredProducts} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(process.env.PRODUCT!);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}

export default HomePage;
