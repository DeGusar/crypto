import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

function isMatch(key: string, pathname: string) {
  return pathname === key || pathname.startsWith(`${key}/`);
}

function useSelectedNavMenuKeys(items: ItemType[]) {
  const { pathname } = useLocation();

  return useMemo(() => {
    const keys = items.map((item) => item!.key as string);
    const selected = keys.find((key) => isMatch(key, pathname));

    return selected ? [selected] : [];
  }, [pathname, items]);
}

export default useSelectedNavMenuKeys;
