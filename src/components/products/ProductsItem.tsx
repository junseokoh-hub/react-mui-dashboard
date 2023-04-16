import { useMemo, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Portal from "@mui/base/Portal";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Text from "../atoms/Text";
import ProductImage from "./ProductImage";

interface ProductsItemProps {
  product: {
    id: number;
    stock: number;
    product: string;
    price: string;
    origin: string;
    image: string;
  };
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ProductsItem = ({ product }: ProductsItemProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const gridProduct = useMemo(() => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ padding: "0.5rem" }} onClick={handleOpen}>
          <ProductImage product={product} />
          <Text
            variant="h6"
            align="center"
            sx={{ fontWeight: 600 }}
            color="primary.dark"
          >
            {product.product}
          </Text>
          <Text
            align="center"
            sx={{
              color: product.stock === 0 ? "red" : "primary.light",
              alignItems: "center",
            }}
          >
            {product.stock === 0 ? "Out of Stock" : `Stock : ${product.stock}`}
          </Text>
          <Text align="center">Price : {product.price}</Text>
        </Paper>
      </Grid>
    );
  }, []);

  const modalProduct = useMemo(() => {
    return (
      <Portal>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <ProductImage product={product} />
              <Text
                variant="h6"
                align="center"
                sx={{ fontWeight: 600 }}
                color="primary.dark"
              >
                {product.product}
              </Text>
              <Text align="center">Origin : {product.origin}</Text>
              <Text paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                dolor quisquam in labore fugiat eum, nam recusandae maiores
                repellendus! Aperiam amet saepe soluta explicabo incidunt minima
                neque dolorem, perspiciatis harum!
              </Text>
            </Box>
          </Fade>
        </Modal>
      </Portal>
    );
  }, [open]);

  return (
    <>
      {gridProduct}
      {modalProduct}
    </>
  );
};

export default ProductsItem;
