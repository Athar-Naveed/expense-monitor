import Link from "next/link";
import Data from "./components/Data";
export default async function User() {
  return (
    <>
      <div className="user">
        <h1 className="h1 text-center text-2xl text-white">User data here</h1>
        <Data />
      </div>
    </>
  );
}
