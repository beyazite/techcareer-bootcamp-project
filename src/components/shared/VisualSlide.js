import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

const VisualSlide = (props) => {
  let items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      imgPath: "https://picsum.photos/id/5/800/250",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      imgPath: "https://picsum.photos/id/90/800/250",
    },
  ];
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};
export default VisualSlide;
