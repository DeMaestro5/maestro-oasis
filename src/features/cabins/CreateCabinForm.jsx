import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { useForm } from 'react-hook-form';

import FormRow from '../../ui/FormRow';
import { useCreateCabin } from './useCreateCabin';
import { useUpdateCabin } from './useUpdateCabin';

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { createCabin, isCreating } = useCreateCabin();
  const { editCabin, isEditing } = useUpdateCabin();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];
    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image: image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
  }

  function onError(error) {
    // console.error(error);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow label='Cabin name' error={errors?.name?.message}>
        <Input
          type='text'
          id='name'
          disabled={isWorking}
          {...register('name', {
            required: 'Cabin name is required',
          })}
        />
      </FormRow>
      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input
          type='number'
          id='maxCapacity'
          disabled={isWorking}
          {...register('maxCapacity', {
            required: 'Maximum capacity is required',
            min: {
              value: 1,
              message: 'Min capacity is 1',
            },
          })}
        />
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input
          type='number'
          id='regularPrice'
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'Regular price is required',
            min: {
              value: 1,
              message: 'Min price is 1',
            },
          })}
        />
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input
          type='number'
          id='discount'
          disabled={isWorking}
          defaultValue={0}
          {...register('discount', {
            required: 'Discount is required',
            validate: (value) =>
              value <= getValues().regularPrice ||
              'Discount should be less than regular price',
          })}
        />
      </FormRow>

      <FormRow label='Description' error={errors?.description?.message}>
        <Textarea
          id='description'
          {...register('description', {
            required: 'Description is required',
          })}
        />
      </FormRow>

      <FormRow label='Cabin Photo'>
        <FileInput
          id='image'
          accept='image/*'
          disabled={isWorking}
          {...register('image', {
            required: isEditSession ? false : 'Image is required',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          type='reset'
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? 'Edit cabin' : 'Create new cabin'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
