// Library: Styled-components 
// Example: Using static and dynamic props.
// Use-Case: Creating styles using JS instead of SASS.
// Edge: Dynamically scalable, Create re-usable components with files.

// Beginning of Styled-components example:
const Constant = styled.div.attrs((props) => ({
  localShadow: "grey", // Define static props.
  size: props.size || "1em",
  foreground: props.theme.foreground || "green", // Define dynamic props.
}))`
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: ${(props) => props.localShadow}; /* Static props */
  color: ${(props) => props.foreground}; /* Dynamic props */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;
// Here is the End of Styled-component example.