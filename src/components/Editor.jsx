import React from "react";
import CodeMirror from "codemirror";
import markdown from "@codemirror/lang-markdown";
const Editor = ({ value }) => {
	<CodeMirror
		value=""
		height="90vh"
		extensions={[markdown()]}
		onChange={(value, viewUpdate) => {
			console.log("value:", value);
		}}
	/>;
};

export default Editor;
