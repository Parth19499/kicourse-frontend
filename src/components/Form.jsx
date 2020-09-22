import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
import _ from "lodash";

class Form extends Component {
  state = { data: {}, errors: {} };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  validateProperty = ({ name, value }) => {
    const subschema = { [name]: this.schema[name] };
    const { error } = Joi.validate({ [name]: value }, subschema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const errors = {};
    const { data } = this.state;
    const { error } = Joi.validate(data, this.schema, { abortEarly: false });
    if (error) error.details.map((d) => (errors[d.path[0]] = d.message));
    // console.log("Joi Error: ", error);
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = ({ currentTarget }) => {
    // console.log("onChange", currentTarget.name);
    const errors = this.state.errors;
    const errorMessage = this.validateProperty(currentTarget);
    if (errorMessage) errors[currentTarget.name] = errorMessage;
    else delete errors[currentTarget.name];
    const data = this.state.data;
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data, errors });
  };

  renderInput = (name, label, type = "text", autoFocus = false) => (
    <Input
      name={name}
      label={label}
      value={this.state.data[name]}
      error={this.state.errors[name]}
      onChange={this.handleChange}
      type={type}
      autoFocus={autoFocus}
    />
  );

  renderSubmit = (label) => (
    <button className="btn btn-primary" disabled={this.validate()}>
      {label}
    </button>
  );
}

export default Form;
