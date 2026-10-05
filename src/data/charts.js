const LEGEND_COLOR = '#bcd1b9';
const TICK_COLOR = '#9cb598';
const GRID_COLOR = 'rgba(56, 77, 53, 0.3)';

const legend = (extra = {}) => ({
  legend: { ...extra, labels: { color: LEGEND_COLOR, font: { size: 10 } } },
});

const baseOptions = { responsive: true, maintainAspectRatio: false };

export const dashboardChart = {
  data: {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', 'Now'],
    datasets: [
      {
        label: 'Soil Moisture (%)',
        data: [45, 44, 42, 39, 37, 40, 42.5],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Temperature (°C)',
        data: [22, 21, 25, 30, 32, 28, 26.8],
        borderColor: '#F59E0B',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    ...baseOptions,
    plugins: legend(),
    scales: {
      x: { grid: { color: GRID_COLOR }, ticks: { color: TICK_COLOR, font: { size: 10 } } },
      y: { grid: { color: GRID_COLOR }, ticks: { color: TICK_COLOR, font: { size: 10 } } },
    },
  },
};

export const yieldChart = {
  data: {
    labels: ['North Farm', 'East Valley', 'South Orchard', 'Greenhouse', 'West Ridge'],
    datasets: [
      {
        label: 'Projected Yield (Tons/Acre)',
        data: [4.8, 3.9, 5.2, 6.5, 4.2],
        backgroundColor: '#5a7855',
        borderRadius: 6,
      },
    ],
  },
  options: {
    ...baseOptions,
    plugins: legend(),
    scales: {
      x: { grid: { display: false }, ticks: { color: TICK_COLOR, font: { size: 10 } } },
      y: { grid: { color: GRID_COLOR }, ticks: { color: TICK_COLOR, font: { size: 10 } } },
    },
  },
};

export const waterChart = {
  data: {
    labels: ['Automated Drip', 'Sprinkler System', 'Manual Irrigation'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ['#10B981', '#3B82F6', '#F59E0B'],
        borderWidth: 0,
      },
    ],
  },
  options: {
    ...baseOptions,
    plugins: legend({ position: 'bottom' }),
  },
};
