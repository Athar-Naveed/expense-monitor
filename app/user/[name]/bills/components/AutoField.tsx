"use client";
import {FetchBill} from "../../handler/fetchBill";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
// Define Yup validation schema
const validationSchema = Yup.object().shape({
  billCompany: Yup.string().required("Bill company name is required"),
  billReference: Yup.string().required("Bill reference is required"),
  billChar: Yup.string().required("Bill character is required"),
});
const AutoBillField = () => {
  return (
    <>
      <section className="mt-10 mb-40">
        <div className="auto-fetch text-3xl text-black dark:text-white text-center font-semibold">
          <h1 className="h1">Auto Fetch Bill</h1>
        </div>
        <Formik
          initialValues={{
            billCompany: "",
            billReference: "",
            billChar: "",
          }}
          validationSchema={validationSchema} // Apply the Yup validation schema
          onSubmit={async (values) => {
            const resp = await FetchBill(values);
          }}
        >
          {() => (
            <Form className="p-4 w-full md:w-fit md:grid lg:grid-cols-3 text-white my-5">
              <div className="mb-4 md:mx-5">
                <label className="field_label" htmlFor="billCompany">
                  Bill Company
                </label>
                <br />
                <Field as="select" name="billCompany" className="fields">
                  <option value="" label="Select a company" />
                  <option value="LESCO" label="LESCO" />
                  <option value="SNGPL" label="SNGPL" />
                </Field>
                <ErrorMessage
                  className="text-red-500 text-sm mt-1"
                  component="div"
                  name="billCompany"
                />
              </div>

              <div className="mb-4 md:mx-5">
                <label className="field_label" htmlFor="billReference">
                  Bill Reference no.
                </label>
                <br />
                <Field
                  className="fields"
                  name="billReference"
                  placeholder="Enter your bill reference no. Also include the Last Alphabet, either R or U"
                  type="text"
                />
                <ErrorMessage
                  className="text-red-500 text-sm mt-1"
                  component="div"
                  name="billReference"
                />
              </div>
              <div className="mb-4 md:mx-5">
                <label className="field_label" htmlFor="billChar">
                  Bill Character
                </label>
                <br />
                <Field as="select" className="fields" name="billChar">
                  <option value="" label="Select a character" />
                  <option value="U" label="U" />
                  <option value="R" label="R" />
                </Field>
                <ErrorMessage
                  className="text-red-500 text-sm mt-1"
                  component="div"
                  name="billChar"
                />
              </div>

              <button
                className="mt-4 bg-transparent border border-[#4D5382] hover:bg-[#4D5382] text-black dark:text-white py-2 px-4 md:h-fit md:w-fit md:mt-10 md:px-10 md:py-3 rounded"
                type="submit"
              >
                Fetch & Save
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};
export default AutoBillField;
