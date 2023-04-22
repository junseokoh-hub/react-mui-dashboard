import Grid from "@mui/material/Grid";
import PRODUCTS from "../products.json";
import ProductsItem from "../components/products/ProductsItem";

const ProductsPage = () => {
  return (
    <Grid container spacing={2}>
      {PRODUCTS.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductsPage;
