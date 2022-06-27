import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";


const FormikValidation = ()=>{
    
    const formInitialValue = {
        fullname: "",
        email: "",
        password: "",
        mobile: "",
        city: "",
        course: "",
        dateOfBirth: "",
      };
      const formValidationSchema = yup.object().shape({
        fullname: yup.string().required("This field is empty."),
        email: yup.string().required('This field is empty.').email('Invalid email.'),
        password: yup.string().required('This field is empty.').min(6,'Min length atleast six char').max(16,'Max length 16 char'),
        mobile: yup.number().required('This field is empty.'),
        city: yup.string().required('This field is empty.'),
        course: yup.string().required('This field is empty.'),
        dateOfBirth: yup.date().required('This field is empty.'),
      });
    
      const handlerFormSubmit = (values) => {
        console.log("submited values", values);
      };

      return (
        <>
          <h2 className="text-center mb-4">React Formik and Yup Validation</h2>
          <div className="form-container" style={{marginLeft:"500px"}}>
          <Formik
            initialValues={formInitialValue}
            validationSchema={formValidationSchema}
            onSubmit={(values) => handlerFormSubmit(values)}
          >
            <Form>
              <div className="mb-4">
                <Field
                  type="text"
                  name="fullname"
                  className="form-control w-50"
                  placeholder="fullname"
                  autocomplete="off"
                />
                <span className="text-danger">
                  <ErrorMessage name="fullname" />
                </span>
              </div>
    
              <div className="mb-4">
                <Field
                  type="text"
                  name="email"
                  className="form-control w-50"
                  placeholder="email"
                  autocomplete="off"
                />
                 <span className="text-danger">
                  <ErrorMessage name="email" />
                </span>
              </div>
              <div className="mb-4">
                <Field
                  type="password"
                  name="password"
                  className="form-control w-50"
                  placeholder="password"
                  autocomplete="off"
                />
                 <span className="text-danger">
                  <ErrorMessage name="password" />
                </span>
                </div>
                <div className="mb-4">
                <Field
                  type="number"
                  name="mobile"
                  className="form-control w-50"
                  placeholder="mobile"
                  autocomplete="off"
                />
                 <span className="text-danger">
                  <ErrorMessage name="mobile" />
                </span>
                </div>
              <div className="mb-4">
                <Field
                  type="text"
                  name="city"
                  className="form-control w-50"
                  placeholder="city"
                  autocomplete="off"
                />
                 <span className="text-danger">
                  <ErrorMessage name="city" />
                </span>
              </div>
              <div className="mb-4">
                <Field className="form-control w-50" as="select" name="course">
                    <option value="">Select</option>
                    <option value="java">Java</option>
                    <option value="React js">React js</option>
                    <option value="Angular">Angular</option>
                    <option value="Node js">Node js</option>
                </Field>
                <span className="text-danger">
                  <ErrorMessage name="course" />
                </span>
              </div>
              <div className="mb-4">
                <Field className="form-control w-50"
                 type="date"
                 name="dateOfBirth"
                 placeholder="Date of birth"
                 />
                <span className="text-danger">
                  <ErrorMessage name="dateOfBirth" />
                </span>
              </div>
              <div className="mb-4">
                <button type="submit" className="btn btn-primary form-control w-50">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
          </div>
        </>
      );
}

export default FormikValidation;