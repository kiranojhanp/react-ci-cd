import React from "react";

const Spacer = ({ children, py = '', px = ''}) => {
	return <div className={py + px}>{children}</div>;
};

export default Spacer;
