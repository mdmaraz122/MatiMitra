export const FIELDS = [
  { id: 'f1', name: 'North Sector Farm', crop: 'Organic Wheat', lat: 23.4607, lng: 91.1809, moisture: 42.5, temp: 26.8, ph: 6.8, status: 'Optimal', lastUpdate: '2 mins ago', node: 'NODE-AG-801', area: '450 Acres' },
  { id: 'f2', name: 'East Valley Plot', crop: 'Basmati Rice', lat: 23.4521, lng: 91.195, moisture: 28.1, temp: 29.4, ph: 6.2, status: 'Warning', lastUpdate: 'Just now', node: 'NODE-AG-802', area: '320 Acres' },
  { id: 'f3', name: 'South Orchard', crop: 'Mango & Citrus', lat: 23.441, lng: 91.175, moisture: 19.4, temp: 31.2, ph: 5.5, status: 'Critical', lastUpdate: '5 mins ago', node: 'NODE-AG-803', area: '280 Acres' },
  { id: 'f4', name: 'Greenhouse Alpha', crop: 'Hydroponic Tomatoes', lat: 23.468, lng: 91.168, moisture: 68.0, temp: 24.5, ph: 7.0, status: 'Optimal', lastUpdate: '1 min ago', node: 'NODE-AG-804', area: '110 Acres' },
  { id: 'f5', name: 'West Ridge Field', crop: 'Yellow Maize', lat: 23.455, lng: 91.16, moisture: 45.2, temp: 27.1, ph: 6.7, status: 'Optimal', lastUpdate: '8 mins ago', node: 'NODE-AG-805', area: '260 Acres' },
];

export const STATUS_FILTERS = [
  { value: 'ALL', label: 'All', textClass: 'text-olive-400' },
  { value: 'Optimal', label: 'Optimal', textClass: 'text-emerald-400' },
  { value: 'Warning', label: 'Warning', textClass: 'text-amber-400' },
  { value: 'Critical', label: 'Critical', textClass: 'text-red-400' },
];

export const MAP_CENTER = [23.455, 91.178];
export const MAP_DEFAULT_ZOOM = 14;

export const DRONE_PATH = [
  [23.4607, 91.1809],
  [23.463, 91.175],
  [23.468, 91.168],
  [23.458, 91.162],
  [23.4521, 91.195],
  [23.441, 91.175],
  [23.4607, 91.1809],
];
export const DRONE_STEP_MS = 3000;
