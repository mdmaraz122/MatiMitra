import { useState } from 'react';
import PageContainer from '../components/common/PageContainer.jsx';
import SettingRow from '../components/settings/SettingRow.jsx';
import { LORA_BANDS } from '../data/overview.js';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    dronePatrols: true,
    alerts: true,
    band: LORA_BANDS[1],
  });

  const toggle = (key) => () => setSettings((s) => ({ ...s, [key]: !s[key] }));

  return (
    <PageContainer maxWidth="max-w-4xl">
      <div>
        <h2 className="text-xl font-bold text-white">System Settings</h2>
        <p className="text-xs text-olive-400">Configure IoT gateway parameters and alert thresholds</p>
      </div>

      <div className="p-6 rounded-2xl bg-olive-800 border border-olive-700 space-y-4">
        <SettingRow
          title="Automated Drone Patrols"
          description="Schedule daily automated perimeter scans at 06:00 AM"
        >
          <input
            type="checkbox"
            checked={settings.dronePatrols}
            onChange={toggle('dronePatrols')}
            className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
          />
        </SettingRow>

        <SettingRow
          title="SMS & WhatsApp Alerts"
          description="Immediate notifications when soil moisture drops below 30%"
        >
          <input
            type="checkbox"
            checked={settings.alerts}
            onChange={toggle('alerts')}
            className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
          />
        </SettingRow>

        <SettingRow
          title="LoRaWAN Frequency Band"
          description="Select regional gateway frequency"
          divider={false}
        >
          <select
            value={settings.band}
            onChange={(e) => setSettings((s) => ({ ...s, band: e.target.value }))}
            className="bg-olive-900 text-xs text-olive-300 px-3 py-2 rounded-lg border border-olive-700"
          >
            {LORA_BANDS.map((band) => (
              <option key={band}>{band}</option>
            ))}
          </select>
        </SettingRow>
      </div>
    </PageContainer>
  );
}
