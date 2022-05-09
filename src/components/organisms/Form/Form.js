import React from 'react';

import { Wrapper, StyledTitle } from './../UsersList/UsersList.styled';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const Form = ({ handleAddUser, formValues, changeValue }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
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
      </Wrapper>
    </>
  );
};

export default Form;
