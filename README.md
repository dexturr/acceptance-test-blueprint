# Acceptance Test Blueprint

The purpose of this repository is to demonstrate how to override the default acceptance test blueprint in order to provide custom test setup and avoid blueprint code.

In the tests folder there is a [helper](./tests/helpers/setup-application-test.js) which performs our custom setup logic. The idea is that this provides all the boiler plate setup for each test, for example if using [ember-simple-auth](https://github.com/simplabs/ember-simple-auth) or [ember-cli-mirage](https://github.com/samselikoff/ember-cli-mirage) as well then we could perform test setup for these in here.

The blueprints folder contains the actual logic which performs the actual overriding of the acceptance-test blueprint. If your helper is also named `setup-application-test` you can just copy the entire `blueprints` folder into your project.

Usage
-------------------------------

To use this pattern:

* Create your own `setup-application-test.js` helper in the `tests` folder
* Copy the acceptance-test blueprint into your project (if you have named your helper `setup-application-test` you can just copy the blueprints folder into your project).

Thats it!

Try out `ember g acceptance-test foo` and observe the text in the acceptance test blueprint is now based off our [blueprint file](./blueprints/acceptance-test/files/tests/acceptance/__name__-test.js) and includes our helper!
