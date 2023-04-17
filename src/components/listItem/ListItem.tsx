import { useState } from "react";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import "./ListItem.scss";

const ListItem: React.FC<{ index: number }> = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      style={{ left: isHovered ? index * 230 - 50 : undefined }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://i.ytimg.com/vi/qEVUtrk8_B4/maxresdefault.jpg" alt="" />
      {isHovered && (
        <>
          <Link to="/watch" className="link">
            <video src="../img/trailer.mp4" autoPlay={true} loop />
          </Link>
          <div className="itemInfo">
            <div className="icons">
              <Link to="/watch" className="link">
                <PlayArrowIcon className="icon" />
              </Link>
              <AddIcon className="icon" />
              <ThumbUpIcon className="icon" />
              <ThumbDownIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>2 hours 15 mins</span>
              <span className="age">+16</span>
              <span>2023</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique dolorum autem.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
