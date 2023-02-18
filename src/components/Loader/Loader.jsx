import { RotatingLines } from "react-loader-spinner";
import { Spinner } from "./Loader.styled.js";

const Loader = () => {
  return (
    <Spinner>
      <RotatingLines
        strokeColor="#56d8f5"
        strokeWidth="5"
        animationDuration="0.75"
        width="75"
        visible={true}
      />
    </Spinner>
  );
};

export default Loader;
