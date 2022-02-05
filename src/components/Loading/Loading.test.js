import renderer from 'react-test-renderer';

import Loading from './Loading';

describe('Loading', () => {
  it('should render Loading', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
