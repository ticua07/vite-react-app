import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";

function App() {
	const [input, setInput] = useState("");
	return (
		<div className="App">
			<textarea
				className="textarea"
				onChange={(e) => {
					setInput(e.target.value);
				}}
			></textarea>

			<ReactMarkdown
				className="markdown"
				children={input}
				remarkPlugins={[remarkGfm]}
				components={{
					code({ node, inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || "");
						return !inline && match ? (
							<SyntaxHighlighter
								children={String(children).replace(/\n$/, "")}
								style={atomOneDark}
								language={match[1]}
								PreTag="div"
								{...props}
							/>
						) : (
							<code className={className} {...props}>
								{children}
							</code>
						);
					},
				}}
			/>
		</div>
	);
}

export const Highlighter = ({ value, language }) => {
	return (
		<SyntaxHighlighter language={language} style={atomOneDark}>
			{value}
		</SyntaxHighlighter>
	);
};

export default App;
