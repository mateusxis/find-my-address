import renderer from 'react-test-renderer';

import Container from './Container';

describe('Container', () => {
  it('should render Container', () => {
    const tree = renderer.create(<Container>Test</Container>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
