import renderer from 'react-test-renderer';

import Table from './Table';

describe('Table', () => {
  it('should render Table', () => {
    const tree = renderer
      .create(
        <Table
          data={[
            {
              address: 'Street One',
              city: 'New York',
              zipCode: '12345-000',
              district: 'Queen',
              state: 'New York'
            }
          ]}
          title="My table"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
