import renderer from 'react-test-renderer';

import RowTable from './RowTable';

describe('RowTable', () => {
  it('should render RowTable', () => {
    const tree = renderer
      .create(
        <RowTable>
          <td data-label="City" className="c1">
            New York City
          </td>
        </RowTable>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
