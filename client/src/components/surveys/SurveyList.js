import React, { useEffect, Component } from "react";
import { connect, useDispatch } from "react-redux";
import * as actions from "../../actions";

export const SurveyList = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchSurveys();
  }, []);

  const renderSurveys = () => {
    return props.surveys.reverse().map((survey) => {
      return (
        <div key={survey._id} className="card darken">
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  };

  return <div>{renderSurveys()}</div>;
};

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, actions)(SurveyList);
