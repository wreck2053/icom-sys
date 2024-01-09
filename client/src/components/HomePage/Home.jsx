import MyCarousel from "./MyCarousel";
import SpliderSet from "./SpliderSet";

function Home(props) {
  return (
    <div className="container">
      <MyCarousel data={props.data} brands={props.brands} />
      <SpliderSet data={props.data} brands={props.brands} />
    </div>
  );
}

export default Home;
