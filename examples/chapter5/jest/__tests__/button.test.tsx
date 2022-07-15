import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Button from '../Button';

describe('test', () => {
  test('default', () => {
    const component = renderer.create(
      <Button>hello, world</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});