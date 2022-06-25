import React from "react";
import "./spinner.css";
import PropTypes from "prop-types";

export const Spinner = ({ fast }) => {
  const mode = fast ? "spinner-speed-fast" : "spinner-speed-basic";
  return <div className={["spinner", mode].join(" ")}></div>;
};

Spinner.propTypes = {
  fast: PropTypes.bool,
};

Spinner.defaultProps = {
  fast: false,
};

