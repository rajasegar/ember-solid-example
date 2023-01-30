import Component from '@glimmer/component';
import HelloWorld from 'some-solid-lib/HelloWorld.jsx';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ExampleComponent extends Component {
  theSolidComponent = HelloWorld;

  @tracked message = 'hello';

  @action toggle() {
    if (this.message === 'hello') {
      this.message = 'goodbye';
    } else {
      this.message = 'hello';
    }
  }
}
