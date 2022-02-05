import renderer from 'react-test-renderer';

import Alert from './Alert';

describe('Alert', () => {
  it('should render Alert', () => {
    const tree = renderer.create(<Alert />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
