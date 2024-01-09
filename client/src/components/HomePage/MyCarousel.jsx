import "bootstrap/dist/css/bootstrap.css";
import MySplider from "./MySplider";
import { processData } from "../../scripts/HelperFunctions";

function MyCarousel(props) {
  const [productData, brandNames] = processData(
    props.data,
    props.brands,
    true,
    true
  );
  const topProducts = [];
  for (let brandName of brandNames) {
    for (let product of productData) {
      if (brandName === product.Brand) {
        topProducts.push(product);
        break;
      }
    }
  }

  return (
    <>
      <div style={{ marginTop: 20 }}>
        <MySplider
          height={800}
          productData={topProducts}
          perPage={1}
          title={"Take a look at our best-selling products!"}
          type={"fade"}
          showArrows={false}
        />
      </div>
    </>
  );
}

export default MyCarousel;
