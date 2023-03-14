import { useCallback, useState } from 'react';

export function useModal() {
  const [modalVisible, setModalVisible] = useState(false);

  const open = useCallback(() => {
    setModalVisible(true);
  }, []);

  const close = useCallback(() => {
    setModalVisible(false);
  }, []);

  return { modalVisible, open, close };
}
