import React from "react";

const MyInput = (props) => {
  const { field, form, ...rest } = props;
  const { name } = field;
  return (
    <div>
      <input {...rest} {...field} />
      {form.touched[name] && form.errors[name] && (
        <div className="error">{form.errors[name]}</div>
      )}
    </div>
  );
};

export default MyInput;
