import StatCard from '../common/StatCard.jsx';
import { OVERVIEW_METRICS } from '../../data/overview.js';

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {OVERVIEW_METRICS.map(({ id, ...metric }) => (
        <StatCard key={id} {...metric} />
      ))}
    </div>
  );
}
