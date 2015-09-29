System.config({
  baseURL: ".",
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "*": "js/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "jquery": "github:components/jquery@2.1.3",
    "jquery-lazyload": "npm:jquery-lazyload@1.9.5",
    "luis-almeida/unveil": "github:luis-almeida/unveil@1.3.0",
    "prism": "github:PrismJS/prism@master",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88"
  }
});
