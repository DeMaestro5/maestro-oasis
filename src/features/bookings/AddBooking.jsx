import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import CreateBookingsForm from './CreateBookingsForm';

function AddBooking() {
  return (
    <div>
      <Modal>
        <Modal.Open opens='cabin-form'>
          <Button>Add Booking</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
          <CreateBookingsForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBooking;
