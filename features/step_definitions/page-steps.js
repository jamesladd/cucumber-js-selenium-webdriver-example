import { Given } from 'cucumber'

Given(/^I have navigated to the (.+) page$/, function(pageName) {
  this.page = this.pageFactory.create(pageName);

  return this.page.loadAndWaitUntilVisible();
});

