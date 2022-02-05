import renderer from 'react-test-renderer';

import Input from './Input';
jest.mock('react-input-mask', () => jest.fn(() => <></>));

describe('Input', () => {
  it('should render Input', () => {
    const tree = renderer
      .create(<Input placeholder="Digit here" onChange={() => jest.fn()} value="Mathew" type="text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
