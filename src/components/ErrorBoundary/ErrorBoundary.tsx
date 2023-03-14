import React from 'react';
import { isError } from 'utils/isError';
import styles from './ErrorBoundary.module.scss';

type ErrorBoundaryState = {
  hasError: boolean;
  message: string | null;
};

class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = {
      hasError: false,
      message: null,
    };
  }

  componentDidCatch(error: unknown) {
    this.setState({
      hasError: true,
      message: isError(error) ? error.message : 'unhandled error',
    });
  }

  render() {
    const { hasError, message } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1 className={styles.errorMessage}>{message}</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
