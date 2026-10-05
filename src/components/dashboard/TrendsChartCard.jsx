import { Line } from 'react-chartjs-2';
import '../../utils/chartSetup.js';
import { dashboardChart } from '../../data/charts.js';

export default function TrendsChartCard() {
  return (
    <div className="lg:col-span-2 p-6 rounded-2xl bg-olive-800 border border-olive-700">
      <h3 className="text-sm font-semibold text-white mb-4 flex items-center justify-between">
        <span>Soil Moisture & Temperature Trends</span>
        <span className="text-xs text-olive-400 font-normal">Past 24 Hours</span>
      </h3>
      <div className="h-64 relative">
        <Line data={dashboardChart.data} options={dashboardChart.options} />
      </div>
    </div>
  );
}
