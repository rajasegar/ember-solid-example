import Modifier from 'ember-modifier';
import { render } from 'solid-js/web';
import { registerDestructor } from '@ember/destroyable';

export default class SolidModifier extends Modifier {
  modify(element, [App], props) {
    element.replaceChildren();
    const dispose = render(() => App(props), element);
    registerDestructor(this, () => dispose());
  }
}
