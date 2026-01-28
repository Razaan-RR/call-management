export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-[28px] font-semibold text-[var(--color-text)]">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <StatCard
          title="Total Calls Today"
          value="127"
          change="+12%"
        />
        <StatCard
          title="Appointments Booked"
          value="34"
          change="+8%"
        />
        <StatCard
          title="AI-Handled Calls"
          value="98"
          change="+77%"
        />
      </div>
    </div>
  );
}

function StatCard({ title, value, change }) {
  return (
    <div className="bg-white rounded-xl border border-black/70 px-6 py-5 flex flex-col justify-between h-[120px]">
      <p className="text-sm text-gray-600">{title}</p>

      <div className="flex items-end justify-between">
        <span className="text-[36px] font-semibold leading-none">
          {value}
        </span>
        <span className="text-sm font-medium text-green-600">
          {change}
        </span>
      </div>
    </div>
  );
}
