import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
import TableOperations from '../../ui/TableOperations';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField='discount'
        options={[
          { label: 'All', value: 'all' },
          { label: 'With Discount', value: 'with-discount' },
          { label: 'No Discount', value: 'no-discount' },
        ]}
      />
      <SortBy
        options={[
          { label: 'Sort by name (A-Z)', value: 'name-asc' },
          { label: 'Sort by name (Z-A)', value: 'name-desc' },
          { label: 'Sort by Price (low first)', value: 'regularPrice-asc' },
          { label: 'Sort by Price (high first)', value: 'regularPrice-desc' },
          { label: 'Sort by Capacity (low first)', value: 'maxCapacity-asc' },
          { label: 'Sort by Capacity (high first)', value: 'maxCapacity-desc' },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
