import renderer from 'react-test-renderer';

import Footer from './Footer';

describe('Footer', () => {
  it('should render Footer', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
