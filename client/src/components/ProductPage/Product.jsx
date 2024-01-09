import "./Product.css";
import { useParams } from "react-router-dom";
import { imagesContext } from "../../scripts/HelperFunctions";

function Product(props) {
  let { prod_type, prod_id } = useParams();

  let prod_name = props.data[prod_type]["Name"][prod_id];
  let prod_desc = props.data[prod_type]["Desc"][prod_id];
  let prod_img = imagesContext("./" + prod_id + ".jpg");

  return (
    <>
      <div className="product-info">
        <h1 id="prod_hdr"> {prod_name} </h1>
        <img id="prod_img" src={prod_img} alt="Product" />
        <p id="prod_desc"> {prod_desc} </p>
      </div>
    </>
  );
}

export default Product;
