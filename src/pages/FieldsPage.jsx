import PageContainer from '../components/common/PageContainer.jsx';
import FieldBoundaryCard from '../components/fields/FieldBoundaryCard.jsx';
import { useNotification } from '../context/NotificationContext.jsx';
import { FIELDS } from '../data/fields.js';

export default function FieldsPage() {
  const { showNotification } = useNotification();

  return (
    <PageContainer>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Fields & Boundary Management</h2>
          <p className="text-xs text-olive-400">Manage acreage, crop types, and geofence coordinates</p>
        </div>
        <button
          type="button"
          onClick={() => showNotification('Geofence boundary editor mode activated.')}
          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2"
        >
          <i className="fa-solid fa-plus"></i> Add New Field
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FIELDS.map((field) => (
          <FieldBoundaryCard key={field.id} field={field} />
        ))}
      </div>
    </PageContainer>
  );
}
