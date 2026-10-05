import PageContainer from '../components/common/PageContainer.jsx';
import TrendsChartCard from '../components/dashboard/TrendsChartCard.jsx';
import AlertsPanel from '../components/dashboard/AlertsPanel.jsx';

const todayLabel = () =>
  new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export default function DashboardPage() {
  return (
    <PageContainer>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Farm Operations Dashboard</h2>
          <p className="text-xs text-olive-400">Real-time telemetry and resource allocation</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-3 py-1.5 rounded-lg bg-olive-800 border border-olive-700 text-olive-300">
            <i className="fa-solid fa-calendar-days text-emerald-400 mr-1.5"></i> {todayLabel()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TrendsChartCard />
        <AlertsPanel />
      </div>
    </PageContainer>
  );
}
