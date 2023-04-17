import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./List.scss";

const List: React.FC<{ title: string }> = ({ title }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);

  const clickHandler = (arrow: string) => {
    setHasMoved(true);
    if (listRef.current) {
      let distance = listRef.current.getBoundingClientRect().x - 50;

      if (arrow === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }

      if (arrow === "right" && slideNumber < 4) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{title}</span>
      <div className="wrapper">
        <ArrowBackIosIcon
          className="sliderArrow left"
          onClick={() => clickHandler("left")}
          style={{ display: hasMoved ? "block" : "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosIcon
          className="sliderArrow right"
          onClick={() => clickHandler("right")}
        />
      </div>
    </div>
  );
};

export default List;
