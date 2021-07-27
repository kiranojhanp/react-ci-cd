import React from "react";

const Box = ({ children, classes }) => {
	return <div className={classes + " w-full"}>{children}</div>;
};

export default Box;
