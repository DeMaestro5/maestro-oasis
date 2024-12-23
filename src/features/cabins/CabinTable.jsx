import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import { useCabins } from './useCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (!cabins) return <Empty resourceName='cabins' />;

  if (isLoading) return <Spinner />;

  // 1) Filter
  const filteredValue = searchParams.get('discount') || 'all';

  let filteredCabins;

  if (filteredValue === 'all') filteredCabins = cabins;
  if (filteredValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  if (filteredValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  // 2) Sort

  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header>
          <div>Image</div>
          <div>Cabin</div>
          <div>Description</div>
          <div>Price</div>
          <div>Discount</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
