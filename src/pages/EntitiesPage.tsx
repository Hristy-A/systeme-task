import Entities from 'components/Entities/Entities';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

const EntitiesPage = () => (
  <ErrorBoundary>
    <Entities />
  </ErrorBoundary>
);

export default EntitiesPage;
