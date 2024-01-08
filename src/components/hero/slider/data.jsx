import Watch from "../../../assest/sliderimages/watch.jpg";
import Iphone from "../../../assest/sliderimages/iphone.png";
import Headphone from "../../../assest/sliderimages/headphone.jpg";
import Tablet from "../../../assest/sliderimages/tablet.jpg";
import Mouse from "../../../assest/sliderimages/moudr.png";
import Camera from "../../../assest/sliderimages/camera.jpg";
import Alexa from "../../../assest/sliderimages/alaexa.jpg";

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3 ,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide:2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide:1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  export const ProductData = [
    {
      id: 1,
      image: Watch,
      name: "watch",
      price: "$20.99",
      description: "heheheh",
      
    },
    {
      id: 2,
      image: Iphone,
      name: "Iphone",
      price: "$2000.99",
      description: "heheheh",
    },
    {
      id: 3,
      image: Headphone,
      name: "Headphone",
      price: "$20.99",
      description: "heheheh",
    },
    {
      id: 4,
      image: Tablet,
      name: "tablet",
      price: "$1300",
      description: "heheheh",
    },
    {
      id: 5,
      image: Mouse,
      name: "Mouse",
      price: "$2",
      description: "heheheh",
    },
    {
      id: 6,
      image: Camera,
      name: "watch",
      price: "$2000.99",
      description: "heheheh",
    },
    {
      id: 7,
      image: Alexa,
      name: "alexa",
      price: "$20.99",
      description: "heheheh",
    },
  ];