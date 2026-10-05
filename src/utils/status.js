// Full class names are written out so Tailwind can detect them at build time.
export const STATUS_BADGE = {
  Optimal: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  Warning: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Critical: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export const STATUS_COLOR = {
  Optimal: '#10B981',
  Warning: '#F59E0B',
  Critical: '#EF4444',
};

export const getStatusBadge = (status) => STATUS_BADGE[status] ?? STATUS_BADGE.Optimal;
export const getStatusColor = (status) => STATUS_COLOR[status] ?? STATUS_COLOR.Optimal;
