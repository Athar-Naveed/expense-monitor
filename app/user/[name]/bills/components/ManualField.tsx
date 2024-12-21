"use client";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {useState} from "react";
import * as Yup from "yup";

// Define Yup validation schema
const validationSchema = Yup.object().shape({
  billCompany: Yup.string()
    .required("Bill company name is required")
    .min(3, "Must be at least 3 characters"),
  billUser: Yup.string()
    .required("Bill username is required")
    .min(3, "Must be at least 3 characters"),
  billReference: Yup.string().required("Bill reference is required"),
  billMonth: Yup.string()
    .required("Billing month is required")
    .matches(
      /^(January|February|March|April|May|June|July|August|September|October|November|December)$/,
      "Enter a valid month",
    ),
  billYear: Yup.number()
    .required("Billing year is required")
    .min(1900, "Enter a valid year")
    .max(new Date().getFullYear(), `Year can't be in the future`),
  billAmount: Yup.number()
    .required("Bill amount is required")
    .min(1, "Amount must be greater than zero"),
});

const ManualBillField = () => {
  const [form, showForm] = useState(false);
  const handleForm = () => showForm(!form);

  return (
    <>
      <section className="my-10">
        <div>
          <button
            className="w-full md:w-fit border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white text-center p-4"
            onClick={handleForm}
          >
            Add Bill Manually
          </button>
        </div>
        {form && (
          <Formik
            initialValues={{
              billCompany: "",
              billUser: "",
              billReference: "",
              billMonth: "",
              billYear: "",
              billAmount: "",
            }}
            validationSchema={validationSchema} // Apply the Yup validation schema
            onSubmit={(values) => {
              // Submit the form values
              console.log(values);
              showForm(false);
            }}
          >
            {({errors, touched}) => (
              <Form className="p-4 w-full md:w-fit grid lg:grid-cols-2 text-white my-5">
                <div className="field-div">
                  <label htmlFor="billCompany" className="field_label">
                    Bill Company
                  </label>
                  <br />
                  <Field
                    className="fields"
                    name="billCompany"
                    placeholder="Bill Company Name e.g. 'LESCO'"
                    type="text"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm mt-1"
                    component="div"
                    name="billCompany"
                  />
                </div>

                <div className="field-div">
                  <label className="field_label" htmlFor="billUser">
                    Bill Username
                  </label>
                  <br />
                  <Field
                    className="fields"
                    name="billUser"
                    type="text"
                    placeholder="The username on the bill"
                  />
                  <ErrorMessage
                    name="billUser"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="field-div">
                  <label className="field_label" htmlFor="billReference">
                    Bill Reference No.
                  </label>
                  <br />
                  <Field
                    className="fields"
                    name="billReference"
                    placeholder="Enter your bill reference no. Also include the Last Alphabet, either R or U"
                    type="text"
                  />
                  <ErrorMessage
                    name="billReference"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="field-div">
                  <label className="field_label" htmlFor="billMonth">
                    Bill Month
                  </label>
                  <br />
                  <Field
                    className="fields"
                    name="billMonth"
                    type="text"
                    placeholder="Billing Month e.g. August"
                  />
                  <ErrorMessage
                    name="billMonth"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="field-div">
                  <label className="field_label" htmlFor="billYear">
                    Bill Year
                  </label>
                  <br />
                  <Field
                    className="fields"
                    name="billYear"
                    type="number"
                    placeholder="Billing Year e.g. 2024"
                  />
                  <ErrorMessage
                    name="billYear"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="field-div">
                  <label className="field_label" htmlFor="billAmount">
                    Bill Amount
                  </label>
                  <br />
                  <Field
                    className="fields"
                    name="billAmount"
                    type="number"
                    placeholder="Payable bill amount"
                  />
                  <ErrorMessage
                    name="billAmount"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-violet-500 hover:bg-violet-700 text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        )}
      </section>
    </>
  );
};

export default ManualBillField;
