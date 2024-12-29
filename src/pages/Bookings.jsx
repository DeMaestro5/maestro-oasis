import BookingTable from '../features/bookings/BookingTable';
import BookingTableOperations from '../features/bookings/BookingTableOperations';
import Heading from '../ui/Heading';

import AddBookings from '../features/bookings/AddBooking';

import Row from '../ui/Row';

function Bookings() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All bookings</Heading>
        <AddBookings />
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
