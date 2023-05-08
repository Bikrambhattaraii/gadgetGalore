import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "./product";
import { ProductData,responsive } from "./data";

const Productslider = () => {
  
  const product = ProductData.map((item) => <Product 
  name={item.name} 
  image={item.image} 
  price={item.price}
  description={item.description} />);
  return (
    <div className="slide">
      <Carousel showDots={true} autoPlay={true} infiniteLoop={true} responsive={responsive}>{product}</Carousel>;
    </div>
  );
};

export default Productslider;
