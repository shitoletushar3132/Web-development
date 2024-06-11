import Product from "./Product";
import "./Product.css";

function ProductList() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Product title={"Logitect MX Master"} idx={0} />
      <Product title={"Apple Pencil (2nd Gen)"} idx={1} />
      <Product title={"Zebronics zeb-transformer"} idx={2} />
      <Product title={"Petronics Toad 23"} idx={3} />
    </div>
  );
}

export default ProductList;
