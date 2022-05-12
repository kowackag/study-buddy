import { useReducer } from 'react';

const useForm = (initialFormData) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_VALUE':
        const { name, value } = action.element;
        return { ...state, [name]: value };
      case 'RESET': {
        return initialFormData;
      }
      case 'CONSENT TOOGLE': {
        return { ...state, consent: !state.consent };
      }
      case 'THROW ERROR': {
        return { ...state, error: action.errValue };
      }
      default:
        return state;
    }
  };

  const [formValues, dispatch] = useReducer(reducer, initialFormData);

  const handleInputChange = (element) => {
    dispatch({ type: 'CHANGE_VALUE', element: element });
  };
  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  const handleError = (errMess) =>
    dispatch({ type: 'THROW ERROR', errValue: errMess });

  const handleToogleConsent = () => {
    dispatch({ type: 'CONSENT TOOGLE' });
  };
  return {
    formValues,
    handleInputChange,
    handleReset,
    handleError,
    handleToogleConsent,
  };
};

export default useForm;
