/* eslint-disable max-len */
import { h } from '@stencil/core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { HelixExtrasTodo } from './helix-extras-todo';

describe('helix-extras-todo', () => {
  it('should build', () => {
    expect(new HelixExtrasTodo()).toBeTruthy();
  });

  describe('when clicking', () => {
    let page;
    let shadowRoot;
    beforeEach(async () => {
      page = await newSpecPage({
        components: [HelixExtrasTodo],
        html: '<helix-extras-todo></helix-extras-todo>',
        supportsShadowDom: true
      });
      shadowRoot = page.root.shadowRoot;
    });

    it('should submit form', async () => {
      shadowRoot.querySelectorAll('.todo_new').click();
      await page.waitForChanges();
    });
  });
});
