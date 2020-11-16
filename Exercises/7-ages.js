'use strict';

const ages = persons => {
  const ages = {};
  for (const person in persons) {
    ages[person] = persons[person].died - persons[person].born;
  }
  return ages;
};

module.exports = { ages };
