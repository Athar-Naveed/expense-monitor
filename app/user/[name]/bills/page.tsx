import ManualBillField from "./components/ManualField";
import AutoBillField from "./components/AutoField";
export default function Bills() {
  return (
    <>
      <section className="bills">
        <div className="main-head">
          <h1 className="text-black dark:text-white text-3xl font-semibold">Bills here</h1>
        </div>
        <hr />
        <div className="">
          <ManualBillField />
          <hr />
          <AutoBillField />
        </div>
      </section>
    </>
  );
}
