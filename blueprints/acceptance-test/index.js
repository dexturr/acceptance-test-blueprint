'use strict';
const stringUtils = require('ember-cli-string-utils');

/* eslint-env node */
module.exports = {
  description: '',

  locals(options) {
    let friendlyTestName = [
      'Acceptance',
      stringUtils.dasherize(options.entity.name).replace(/[-]/g, ' '),
    ].join(' | ');

    return {
      friendlyTestName,
    };
  },
};
