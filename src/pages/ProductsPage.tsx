import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import PRODUCTS from "../products.json";
import Text from "../components/atoms/Text";

const ProductsPage = () => {
  return (
    <Grid container spacing={2}>
      {PRODUCTS.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Paper sx={{ padding: "0.5rem" }}>
            <Box sx={{ height: "15rem" }}>
              <img
                loading="lazy"
                src={product.image}
                alt={product.product}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
              />
            </Box>
            <Text
              variant="h6"
              align="center"
              sx={{ fontWeight: 600 }}
              color="primary.dark"
            >
              {product.product}
            </Text>
            <Text paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              dolor quisquam in labore fugiat eum, nam recusandae maiores
              repellendus! Aperiam amet saepe soluta explicabo incidunt minima
              neque dolorem, perspiciatis harum!
            </Text>
            <Text
              align="center"
              sx={{
                color: product.stock === 0 ? "red" : "primary.light",
                alignItems: "center",
              }}
            >
              {product.stock === 0
                ? "Out of Stock"
                : `Stock : ${product.stock}`}
            </Text>
            <Text align="center">Price : {product.price}</Text>
            <Text align="center">Origin : {product.origin}</Text>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsPage;
