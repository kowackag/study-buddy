import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label } from 'components/atoms/Label/Label.styled';
import { Input } from 'components/atoms/Input/Input.styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = ({ label, name, id, type = 'text', value, onChange }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        value={value}
        name={name}
        id={id}
        type={type}
        onChange={onChange}
      />
    </Wrapper>
  );
};
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};
export default FormField;
