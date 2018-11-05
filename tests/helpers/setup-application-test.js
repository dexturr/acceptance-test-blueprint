import { setupApplicationTest } from 'ember-qunit';
import stubHistoryBack from 'ember-contextual-back/test-support';

function setupEverything(hooks) {
  setupApplicationTest(hooks);
  stubHistoryBack(hooks);
}

export { setupEverything as setupApplicationTest };
