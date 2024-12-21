// All the imports
// ---------------------
import {Toaster} from "react-hot-toast";
import Reglo from "./components/reglo";
import Introduction from "./components/introduction";
// ---------------------
export default function Home() {
  return (
    <>
      <Toaster />
      <Introduction />
      <Reglo />
    </>
  );
}
