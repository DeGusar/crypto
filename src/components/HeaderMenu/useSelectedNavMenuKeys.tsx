import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { flattenDeep } from 'lodash';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

function flattenKeys(items: ItemType[]) {
  const keys: string[] = flattenDeep(
    items.map((x: ItemType) => [
      x!.key,
      x.children?.map((child) => child.key) ?? [],
    ])
  );

  return keys;
}

function isMatch(key: string, pathname: string) {
  return pathname === key || pathname.startsWith(`${key}/`);
}

function useSelectedNavMenuKeys(items: ItemType[]) {
  const { pathname } = useLocation();

  return useMemo(() => {
    const keys = flattenKeys(items);
    const selected = keys.find((x) => isMatch(x, pathname));
    return selected ? [selected] : [];
  }, [pathname, items]);
}

export default useSelectedNavMenuKeys;
