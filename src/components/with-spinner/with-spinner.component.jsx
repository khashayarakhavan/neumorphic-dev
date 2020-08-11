import React from 'react';
import Spinner2 from '../spinner/spinner.component2';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner2 /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
