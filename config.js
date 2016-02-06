System.config({
  baseURL: ".",
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "*": "js/*"
  },

  map: {
    "jquery": "github:components/jquery@2.2.0",
    "jquery-lazyload": "npm:jquery-lazyload@1.9.7",
    "luis-almeida/unveil": "github:luis-almeida/unveil@1.3.0",
    "prism": "github:PrismJS/prism@master",
    "traceur": "github:jmcriffey/bower-traceur@0.0.93",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93"
  }
});
