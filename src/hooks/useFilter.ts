import { useRef, useState, useCallback } from 'react';

export function useFilter(
  inputInitialValue: string,
  selectInitialValue: Status
) {
  const inputValue = useRef(inputInitialValue);
  const selectValue = useRef<Status>(selectInitialValue);

  const [isChanged, setIsChanged] = useState(false);
  const [search, setSearch] = useState(inputInitialValue);
  const [status, setStatus] = useState<Status>(selectInitialValue);

  const filterChange = useCallback(() => {
    if (
      (inputValue.current !== search || selectValue.current !== status) &&
      !isChanged
    ) {
      setIsChanged(true);
    }

    if (inputValue.current === search || selectValue.current === status)
      setIsChanged(true);
  }, [inputValue, selectValue, search, status, isChanged]);

  function apply(): void {
    if (!isChanged) return;

    setSearch(inputValue.current);
    setStatus(selectValue.current);
    setIsChanged(false);
  }

  const searchChange = useCallback(
    (searchValue: string) => {
      inputValue.current = searchValue;
      filterChange();
    },
    [inputValue, filterChange]
  );
  const statusChange = useCallback(
    (statusValue: Status) => {
      selectValue.current = statusValue;
      filterChange();
    },
    [selectValue, filterChange]
  );

  return { search, searchChange, status, statusChange, apply, isChanged };
}
