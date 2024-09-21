import "./SlideController.scss";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

export default function SlideController({
  currIndex,
  count,
  handleLeftBtnOnClick,
  handleRightBtnOnClick,
}: {
  currIndex: number;
  count: number;
  handleLeftBtnOnClick: () => void;
  handleRightBtnOnClick: () => void;
}) {
  return (
    <div className="controller-btns">
      <button
        className={`controller-btn controller-btn-left ${
          currIndex === 0 ? "disabled" : ""
        }`}
        onClick={handleLeftBtnOnClick}
      >
        <WestOutlinedIcon />
      </button>
      <button
        className={`controller-btn controller-btn-right ${
          currIndex === count - 1 ? "disabled" : ""
        }`}
        onClick={handleRightBtnOnClick}
      >
        <EastOutlinedIcon />
      </button>
    </div>
  );
}
