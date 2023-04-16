import Box from "@mui/material/Box";

interface ProductImageProps {
  product: {
    image: string;
    product: string;
  };
}

const ProductImage = ({ product }: ProductImageProps) => {
  return (
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
  );
};

export default ProductImage;
