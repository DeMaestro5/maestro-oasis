import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';

function Cabins() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All Cabin</Heading>
        <p>filter & sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
