///
// This file optimizes loading of the CustomEvent polyfill
///

if (browserSupportsCustomEvents()) {
  const scriptParent = document.scripts[document.scripts.length - 1].parentNode;
  scriptParent.parentNode.removeChild(scriptParent);
}

function browserSupportsCustomEvents() {
  return "CustomEvent" in window;
}
