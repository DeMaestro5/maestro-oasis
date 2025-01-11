import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import Select from '../../ui/Select';
import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';

import { useCreateBooking } from '../../features/bookings/useCreateBooking';
import { useCabins } from '../cabins/useCabins';
import { useGuests } from '../guests/useGuests';

function CreateBookingsForm({ onCloseModal }) {
  const { createBooking } = useCreateBooking();

  const { register, handleSubmit, formState, watch, setValue } = useForm();
  const { errors } = formState;
  const { cabins, isLoading } = useCabins();
  const { guests, isLoading: isGuestsLoading } = useGuests();

  if (isLoading || isGuestsLoading) return <p>Loading...</p>;

  // Handle form submission
  function onSubmit(data) {
    const bookingData = {
      ...data,
      cabinId: data.cabinId,
      guestId: data.guestId,
    };
    createBooking(bookingData);
  }

  function onError(error) {
    console.error('Form validation errors:', error);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow label='Start Date' error={errors?.startDate?.message}>
        <Input
          type='date'
          id='startDate'
          {...register('startDate', {
            required: 'Start date is required',
          })}
        />
      </FormRow>

      <FormRow label='End Date' error={errors?.endDate?.message}>
        <Input
          type='date'
          id='endDate'
          {...register('endDate', {
            required: 'End date is required',
          })}
        />
      </FormRow>

      <FormRow label='Number of Nights' error={errors?.numNights?.message}>
        <Input
          type='number'
          id='numNights'
          {...register('numNights', {
            required: 'Number of nights is required',
          })}
        />
      </FormRow>

      <FormRow label='Number of Guests' error={errors?.numGuests?.message}>
        <Input
          type='number'
          id='numGuests'
          defaultValue={0}
          {...register('numGuests', {
            required: 'Number of guests is required',
          })}
        />
      </FormRow>

      <FormRow label='Cabin Price' error={errors?.cabinPrice?.message}>
        <Input
          type='number'
          id='cabinPrice'
          {...register('cabinPrice', {
            required: 'Cabin price is required',
          })}
        />
      </FormRow>

      <FormRow label='Extras Price' error={errors?.extrasPrice?.message}>
        <Input
          type='number'
          id='extrasPrice'
          {...register('extrasPrice', {
            required: 'Extras price is required',
          })}
        />
      </FormRow>

      <FormRow label='Total Price' error={errors?.totalPrice?.message}>
        <Input
          type='number'
          id='totalPrice'
          placeholder={
            Number(watch('cabinPrice')) + Number(watch('extrasPrice')) || 0
          }
          {...register('totalPrice')}
        />
      </FormRow>

      <FormRow label='Select Cabin' error={errors?.cabinId?.message}>
        <Select
          value={watch('cabinId')}
          onChange={(e) => setValue('cabinId', e.target.value)}
          options={cabins?.map((cabin) => ({
            value: cabin.id,
            label: cabin.name,
          }))}
          {...register('cabinId', {
            required: 'Cabin selection is required',
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label='Select Guest' error={errors?.guestId?.message}>
        <Select
          value={watch('guestId')}
          onChange={(e) => setValue('guestId', e.target.value)}
          options={guests.map((guest) => ({
            value: guest.id,
            label: guest.fullName,
          }))}
          {...register('guestId', {
            required: 'Guest selection is required',
          })}
        />
      </FormRow>

      <FormRow label='Status' error={errors?.status?.message}>
        <Select
          value={watch('status')}
          onChange={(e) => setValue('status', e.target.value)}
          options={[
            { value: '', label: 'Select a status' },
            { value: 'unconfirmed', label: 'Unconfirmed' },
            { value: 'checked-in', label: 'Checked-in' },
            { value: 'checked-out', label: 'Checked-out' },
          ]}
          {...register('status', {
            required: 'Status is required',
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation='secondary'
          type='reset'
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button>Create New Booking</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingsForm;
