import { expect } from 'chai';
import { When, Then } from 'cucumber'

When(/^I search for "([^"]*)"$/, function(searchQuery) {
  return this.page.searchFor(searchQuery);
});

Then(/^I see results$/, function() {
  return this.page.numberOfResults().then((numberOfResults) => expect(numberOfResults).to.be.above(0));
});

