export function getContains(caseInsensitive: boolean) {
  return function contains(text: string, subText: string) {
    return new RegExp(subText, caseInsensitive ? 'i' : '').test(text);
  };
}
