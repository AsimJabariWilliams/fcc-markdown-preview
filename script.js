import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as marked from "https://cdn.skypack.dev/marked@4.0.16";

const MarkdownPreviewer = () => {
  const defaultEditor = "    {sun: 1, sum: 2}\n# Heading\n## Sub-Heading\n[GitHub Pages](https://pages.github.com/)\nThis is inline code: ` const bool = 1; `\n1. item1\n2. item2\n> Dorothy followed her through many of the beautiful rooms in her castle.\n![The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg 'San Juan Mountains') \n\n **I did not enjoy this one.**";

  React.useEffect(() => {

    document.getElementById('preview').innerHTML = marked.parse(defaultEditor);
    //     When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text

  });

  const onEdit = e => {
    document.getElementById('preview').innerHTML = marked.parse(e.target.value);
  };

  const Editor = ({ defaultText }) => {
    return /*#__PURE__*/(
      React.createElement("textarea", { id: "editor", onChange: onEdit },
      defaultText));


  };

  const Preview = () => {
    return /*#__PURE__*/(
      React.createElement("div", { id: "preview" }));


  };

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(Editor, { defaultText: defaultEditor }), /*#__PURE__*/
    React.createElement(Preview, null)));


};

const App = () => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "main" }, /*#__PURE__*/
    React.createElement(MarkdownPreviewer, null)));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));