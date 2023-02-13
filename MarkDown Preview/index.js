const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

// Update the preview with the Markdown converted to HTML
function updatePreview() {
  preview.innerHTML = marked(editor.value);
}

// Set the default text and render it as HTML in the preview
const defaultText = `# Welcome to my Markdown Previewer!

## This is a sub-heading...

...and here's some other cool stuff:

Heres some code, \`<inline style='color:red;'>var example = true</inline>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

s not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

editor.value = defaultText;
updatePreview();
