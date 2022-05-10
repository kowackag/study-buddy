import React, { useState, useContext } from 'react';

import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UserContext } from 'providers/UsersProvider';

const AddUser = () => {
  const initialFormData = {
    name: '',
    attendance: '',
    average: '',
  };
  const [formValues, setFormValues] = useState(initialFormData);
  const context = useContext(UserContext);

  const changeValue = (e) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setFormValues({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    context.handleAddUser(formValues);
    setFormValues(initialFormData);
  };
  return (
    <ViewWrapper as="form" onSubmit={handleSubmit}>
      <Title>Add new student</Title>
      <FormField
        value={formValues.name}
        label="Name"
        id="name"
        name="name"
        onChange={changeValue}
      />
      <FormField
        value={formValues.attendance}
        label="Attendance"
        id="attendance"
        name="attendance"
        onChange={changeValue}
      />
      <FormField
        value={formValues.average}
        label="Average"
        id="average"
        name="average"
        onChange={changeValue}
      />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
