import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={css["loader"]}>
      <RotatingLines strokeColor="black" />
    </div>
  );
}
