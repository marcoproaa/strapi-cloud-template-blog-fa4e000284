'use strict';

/**
 * bookmaker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bookmaker.bookmaker');
