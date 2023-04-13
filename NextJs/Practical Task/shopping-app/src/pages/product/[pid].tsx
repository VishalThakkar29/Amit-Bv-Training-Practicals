import classes from "./[pid].module.css";
import { Fragment } from "react";
import { ProductsProps } from "..";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Loading } from "@nextui-org/react";

const ProductDetailPage: React.FC<{ id: string; sProd: ProductsProps }> = (
  props
) => {
  const loading = useSelector((state: any) => state.loading);
  const { id, sProd } = props;
  // console.log(id, sProd);
  return (
    <Fragment>
      {loading && <Loading />}
      <div className={classes.card} key={sProd.id}>
        <div className={classes.cont1}>
          <Image
            src={sProd.thumbnail}
            width="250"
            height="300"
            alt={sProd.title}
          />
        </div>
        <div className={classes.cont2}>
          <h2>{sProd.title}</h2>
          <h3>Category:{sProd.category}</h3>

          <h3> Price:${sProd.price}</h3>
          <h3>Ratings :{sProd.rating}</h3>
          <h3>{sProd.description}</h3>
        </div>
      </div>
    </Fragment>
  );
};

export async function getServerSideProps(context: { params: { pid: string } }) {
  const { params } = context;
  const { pid } = params;
  const res = await fetch(`${process.env.PRODUCT}/${pid}`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      id: pid,
      sProd: data,
    },
  };
}

export default ProductDetailPage;
