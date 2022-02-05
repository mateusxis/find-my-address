import renderer from 'react-test-renderer';

import Button from './Button';

jest.mock('../Loading', () => jest.fn(() => <></>));

describe('Button', () => {
  it('should render Button with props default values', () => {
    const tree = renderer.create(<Button onClick={() => jest.fn()}>Send</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Button with prop loading', () => {
    const tree = renderer
      .create(
        <Button onClick={() => jest.fn()} loading={true}>
          Send
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
