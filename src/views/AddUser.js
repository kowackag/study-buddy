import React, { useContext } from 'react';

import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UserContext } from 'providers/UsersProvider';
import useForm from 'hooks/useForm';

const AddUser = () => {
  const initialFormData = {
    name: '',
    attendance: '',
    average: '',
    consent: false,
    error: '',
  };

  const context = useContext(UserContext);
  const {
    formValues,
    handleInputChange,
    handleReset,
    handleError,
    handleToogleConsent,
  } = useForm(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      context.handleAddUser(formValues);
      handleReset();
    } else {
      handleError('Check consent');
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmit}>
      <Title>Add new student</Title>
      <FormField
        value={formValues.name}
        label="Name"
        id="name"
        name="name"
        onChange={(e) => handleInputChange(e.target)}
      />
      <FormField
        value={formValues.attendance}
        label="Attendance"
        id="attendance"
        name="attendance"
        onChange={(e) => handleInputChange(e.target)}
      />
      <FormField
        value={formValues.average}
        label="Average"
        id="average"
        name="average"
        onChange={(e) => handleInputChange(e.target)}
      />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        type="checkbox"
        onChange={() => handleToogleConsent()}
      />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
