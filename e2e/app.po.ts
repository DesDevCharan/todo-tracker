import { browser, by, element } from 'protractor';

export class MyFirstGhPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ck-root h1')).getText();
  }
}
