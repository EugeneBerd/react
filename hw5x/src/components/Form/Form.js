import Button from "../Button/Button";
import { Formik, Form, Field } from "formik";
import MyInput from "./MyInput";
import * as yup from "yup";
import React, { useRef, useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";

const IS_REQUIRED = "This field is required";
const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

const schema = yup.object().shape({
  name: yup.string().required(IS_REQUIRED),
  lastname: yup.string().required(IS_REQUIRED),
  age: yup
    .number()
    .required(IS_REQUIRED)
    .positive()
    .integer()
    .typeError("you must specify a number"),
  adress: yup.string().required(IS_REQUIRED),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

function FormCart() {
  const cart = useSelector((state) => state.cart);
  const store = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);
  const [credentials, setCredentials] = useState();
  const [phoneVal, setPhoneVal] = useState(false);

  const phoneRef = useRef();
  const handleSubmit = (values) => {
    const login = phoneRef;
    values.phone = login.current.state.value;
    setCredentials(values);
    const res = store.filter((item) => cart.includes(item.id));
    const counts = {};
    cart.forEach((x, i) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    console.log("You bought", cart.length, "items: ");
    res.map((x) => console.log(counts[x.id], "of", x.name));
    dispatch({ type: "DEL_CART", payload: [] });
  };
  const handleBlur = () => {
    const valid = phoneRef.current.state.value;

    const validCheck = valid.replace(/[^0-9]/g, "");
    if (validCheck.length < 12) {
      setPhoneVal(true);
    } else {
      setPhoneVal(false);
    }
  };

  return (
    <div>
      <Button
        buttonText="open Form"
        handleClick={() => setOpenForm(!openForm)}
        className="empty-button"
      />
      {openForm && (
        <Formik
          initialValues={{
            name: "",
            lastname: "",
            adress: "",
            age: "",
            phone: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {(formikProps) => {
            return (
              <Form noValidate>
                <div>
                  <Field
                    component={MyInput}
                    name="name"
                    type="text"
                    placeholder="name"
                  />
                </div>
                <div>
                  <Field
                    component={MyInput}
                    name="lastname"
                    type="text"
                    placeholder="lastname"
                  />
                </div>
                <div>
                  <Field
                    component={MyInput}
                    name="age"
                    type="text"
                    placeholder="age"
                  />
                </div>
                <div>
                  <Field
                    component={MyInput}
                    name="adress"
                    type="text"
                    placeholder="adress"
                  />
                </div>
                <div>
                  <NumberFormat
                    onBlur={() => handleBlur()}
                    ref={phoneRef}
                    allowEmptyFormatting
                    mask="_"
                    name="phone"
                    format="+38 (###) ###-##-##"
                  />
                  {phoneVal && <div>please input full number</div>}
                </div>
                <div>
                  <button type="submit">Checkout</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
      <div>
        {credentials && (
          <div>
            <div>You bought something! Details in the console</div>
            Your credentials: <div>name: {credentials.name}</div>
            <div>lastname: {credentials.lastname}</div>
            <div>adress: {credentials.adress}</div>
            <div>age: {credentials.age}</div>
            <div>phone: {credentials.phone}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormCart;
