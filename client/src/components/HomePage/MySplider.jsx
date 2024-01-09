import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductCard from "./ProductCard";

function MySplider(props) {
  return (
    <>
      <h3>
        <strong>{props.title}</strong>
      </h3>
      <Splide
        options={{
          type: props.type ?? "slide",
          rewind: true,
          perPage: props.perPage,
          perMove: 1,
          pagination: false,
          autoplay: true,
          arrows: props.showArrows ?? true,
        }}
      >
        {props.productData.map((productDetails, index) => (
          <SplideSlide key={index} style={{ padding: 5 }}>
            <ProductCard
              height={props.height}
              productDetails={productDetails}
              showModal={props.showModal}
            />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}

export default MySplider;
