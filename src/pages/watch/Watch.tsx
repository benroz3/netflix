import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <Link to="/home" className="link">
          <KeyboardBackspaceIcon />
        </Link>
        Home
      </div>
      <video src="../img/trailer.mp4" autoPlay={true} controls></video>
    </div>
  );
};

export default Watch;
