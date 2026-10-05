import { useMemo } from 'react';
import { FIELDS } from '../data/fields.js';

/** Filters the field list by status and a free-text name/crop query. */
export function useFilteredFields(status, query) {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    return FIELDS.filter((f) => {
      if (status !== 'ALL' && f.status !== status) return false;
      if (q && !f.name.toLowerCase().includes(q) && !f.crop.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [status, query]);
}
