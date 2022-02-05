import renderer from 'react-test-renderer';

import ColumnTable from './ColumnTable';

describe('ColumnTable', () => {
  it('should render ColumnTable', () => {
    const tree = renderer
      .create(
        <ColumnTable data-label="City" className="c1">
          New York
        </ColumnTable>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
