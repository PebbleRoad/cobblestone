///
// This file optimizes loading of @babel/polyfill
///

if (browserSupportBabelFeatures()) {
  console.warn("your browser doesnt support es5+");
  const scriptParent = document.scripts[document.scripts.length - 1].parentNode;
  scriptParent.parentNode.removeChild(scriptParent);
} else {
  console.warn("you are on a modern browser+");
}

function browserSupportBabelFeatures() {
  return "Promise" in window;
}
