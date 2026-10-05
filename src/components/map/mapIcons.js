import L from 'leaflet';

const pinCache = {};

/** Round seedling pin coloured by field status. */
export function getFieldPinIcon(color) {
  if (!pinCache[color]) {
    pinCache[color] = L.divIcon({
      className: 'custom-map-pin',
      html: `<div style="background-color: ${color}; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid #ffffff; box-shadow: 0 4px 10px rgba(0,0,0,0.5); color: #fff; font-size: 11px; font-weight: bold;"><i class="fa-solid fa-seedling"></i></div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });
  }
  return pinCache[color];
}

export const droneIcon = L.divIcon({
  className: 'drone-marker',
  html: `<div style="background-color: #3B82F6; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid #ffffff; box-shadow: 0 0 15px #3B82F6; color: #fff; font-size: 13px;"><i class="fa-solid fa-plane"></i></div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});
