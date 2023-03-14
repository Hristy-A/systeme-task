export function convertToDtoStatus(status: Status): boolean | null {
  let dtoStatus: boolean | null;
  switch (status) {
    case 'active':
      return true;
    case 'inactive':
      return false;

    default:
      return null;
  }
}
