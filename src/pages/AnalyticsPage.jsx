import { Bar, Doughnut } from 'react-chartjs-2';
import '../utils/chartSetup.js';
import PageContainer from '../components/common/PageContainer.jsx';
import ChartPanel from '../components/analytics/ChartPanel.jsx';
import { waterChart, yieldChart } from '../data/charts.js';

export default function AnalyticsPage() {
  return (
    <PageContainer>
      <div>
        <h2 className="text-xl font-bold text-white">Telemetry & Yield Analytics</h2>
        <p className="text-xs text-olive-400">Historical agricultural insights and predictive modeling</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartPanel title="Crop Yield Projections (Tons/Acre)">
          <Bar data={yieldChart.data} options={yieldChart.options} />
        </ChartPanel>
        <ChartPanel title="Water Usage Efficiency">
          <Doughnut data={waterChart.data} options={waterChart.options} />
        </ChartPanel>
      </div>
    </PageContainer>
  );
}
