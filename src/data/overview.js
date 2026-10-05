export const OVERVIEW_METRICS = [
  { id: 'area', label: 'Total Cultivated Area', value: '1,420 Acres', icon: 'fa-earth-americas', iconColor: 'text-emerald-400', noteIcon: 'fa-arrow-up', note: '+4.2% from last season', noteColor: 'text-emerald-400' },
  { id: 'nodes', label: 'Active IoT Nodes', value: '24 Units', icon: 'fa-wifi', iconColor: 'text-blue-400', noteIcon: 'fa-check', note: '100% operational status', noteColor: 'text-emerald-400' },
  { id: 'moisture', label: 'Avg Soil Moisture', value: '38.4%', icon: 'fa-droplet', iconColor: 'text-amber-400', noteIcon: 'fa-triangle-exclamation', note: '2 sectors need irrigation', noteColor: 'text-amber-400' },
  { id: 'health', label: 'Crop Health Index', value: '92.1 / 100', icon: 'fa-seedling', iconColor: 'text-emerald-400', noteIcon: 'fa-arrow-up', note: 'Optimal yield projected', noteColor: 'text-emerald-400' },
];

export const DASHBOARD_ALERTS = [
  { id: 'a1', tone: 'warning', title: 'East Valley Plot', message: 'Moisture dropped below 30% threshold.' },
  { id: 'a2', tone: 'success', title: 'Greenhouse Alpha', message: 'Automated drip irrigation cycle completed.' },
];

export const LORA_BANDS = ['EU868 (863-870 MHz)', 'US915 (902-928 MHz)', 'IN865 (865-867 MHz)'];
