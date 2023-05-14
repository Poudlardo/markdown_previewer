marked.setOptions({
  renderer: new marked.Renderer(),
  langPrefix: 'hljs language-',
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartypants: false,
  xhtml: false });



class App extends React.Component {

  componentDidMount() {
    document.getElementById('editor').value = "# Marked - Markdown Parser\n\n`Marked` lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML. This demo page will let you type anything you like and see how it gets converted.  Live. \n ### How To Use Demo\n\n ```\n  function() {\n    marked.parse()\n  };\n``` \n\n 1. Type in stuff on the left.\n2. See the live updates on the right.\n\n There\'s also a drop-down option above to switch between views:\n - **Preview:**  A live display of the generated HTML as it would render in a browser.\n - **HTML Source:**  The generated HTML before your browser makes it pretty. \n\n ## Why Markdown\nIt\'s easy.  It\'s not overly bloated, unlike HTML.  Also, as the creator of [markdown] says, The overriding design goal for Markdown\'s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it\'s been marked up with tags or formatting instructions. Ready to start writing?  Either start changing stuff on the left or [clear everything](/demo/?text=) with a simple click !";

    document.getElementById('preview').innerHTML = marked.parse(document.getElementById('editor').value);
  }

  handleChange() {
    document.getElementById('preview').innerHTML = marked.parse(document.getElementById('editor').value);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container-fluid" }, /*#__PURE__*/
      React.createElement("div", { className: "row text-center" }, /*#__PURE__*/
      React.createElement("h1", null, "Markdown Previewer")), /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-sm-6" }, /*#__PURE__*/
      React.createElement("div", { className: "editor-head" }, "Editor"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", onChange: this.handleChange })), /*#__PURE__*/


      React.createElement("div", { className: "col-sm-6" }, /*#__PURE__*/
      React.createElement("div", { className: "preview-head" }, "Preview"), /*#__PURE__*/
      React.createElement("div", { id: "preview" })))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));