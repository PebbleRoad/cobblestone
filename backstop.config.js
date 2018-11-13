const pkg = require("./package.json");
const isCI = require("is-ci");
const scenarios = require("./tests/backstop/scenarios");
const baseUrl = isCI
  ? "http://localhost:3000"
  : "http://host.docker.internal:3000";

const config = {
  id: pkg.config.project.name,
  viewports: [
    {
      label: "phone",
      width: 320,
      height: 480,
    },
    {
      label: "tablet",
      width: 1024,
      height: 768,
    },
  ],
  onBeforeScript: "puppet/onBefore.js",
  onReadyScript: "puppet/onReady.js",
  scenarios: scenarios.map(scenario => {
    return Object.assign({}, scenario, {
      url: scenario.url.replace("<baseUrl>", baseUrl),
    });
  }),
  paths: {
    bitmaps_reference: "tests/backstop/bitmaps_reference",
    bitmaps_test: "tests/backstop/bitmaps_test",
    engine_scripts: "tests/backstop/engine_scripts",
    html_report: "tests/backstop/html_report",
    ci_report: "tests/backstop/ci_report",
  },
  report: ["CI"],
  engine: "chromy",
  engineOptions: {
    waitTimeout: 300000,
    gotoTimeout: 300000,
    chromeFlags: [
      "--disable-gpu",
      "--force-device-scale-factor=1",
      "--disable-infobars=true",
      "--hide-scrollbars",
    ],
    args: ["--no-sandbox"],
  },
  asyncCaptureLimit: 1,
  asyncCompareLimit: 10,
  debug: false,
  debugWindow: false,
};

module.exports = config;
