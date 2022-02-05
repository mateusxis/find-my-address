import renderer from 'react-test-renderer';

import FormInput from './FormInput';

jest.mock('../../container/ButtonContainer', () => jest.fn(() => <></>));
jest.mock('../../container/InputContainer', () => jest.fn(() => <></>));
jest.mock('../../container/TableContainer', () => jest.fn(() => <></>));

describe('FormInput', () => {
  it('should render FormInput', () => {
    const tree = renderer.create(<FormInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
