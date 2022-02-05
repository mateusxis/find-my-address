import renderer from 'react-test-renderer';

import HeaderTable from './HeaderTable';

describe('HeaderTable', () => {
  it('should render HeaderTable', () => {
    const tree = renderer
      .create(
        <HeaderTable>
          <td data-label="City" className="c1">
            City
          </td>
        </HeaderTable>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
