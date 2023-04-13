import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <>
      <div className={classes.loadContainer}>
        <div className={classes.ldsRipple}></div>
      </div>
    </>
  );
};

export default Loader;
