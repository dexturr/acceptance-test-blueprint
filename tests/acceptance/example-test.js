import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from '../helpers/setup-application-test';

module('Acceptance | example', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /example', async function(assert) {
    await visit('/example');

    assert.equal(currentURL(), '/example');
  });
});