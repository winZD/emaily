//Survey form shows a form for a user to add input
import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formField";

/*
const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email body", name: "body" },
  { label: "Recipient List", name: "emails" },
];
*/

const SurveyForm = (props) => {
  //console.log("Survey form props: ", props);
  const renderFields = () => {
    return formFields.map(({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
        {renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button className="teal btn-flat right white-text" type="submit">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  //console.log("VALUES: ", values);
  errors.recipients = validateEmails(values.recipients || "");
  console.log("emails/recipients: ", errors.recipients);
  formFields.forEach(({ name }) => {
    //console.log("Name ", values[name]);
    if (!values[name]) {
      errors[name] = "You must provide a value!";
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
