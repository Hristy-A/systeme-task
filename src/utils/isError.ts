export function isError(errorCandidate: unknown): errorCandidate is Error {
  return (
    typeof errorCandidate === 'object' &&
    errorCandidate !== null &&
    'message' in errorCandidate
  );
}
