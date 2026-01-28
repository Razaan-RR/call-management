export default function DashboardExtras() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
      <RecentActivity />
      <TopRepairRequests />
    </div>
  )
}

function RecentActivity() {
  const items = [
    {
      text: 'AI booked appointment for iPhone 13 screen repair',
      time: '2 min ago',
      color: 'bg-emerald-400',
    },
    {
      text: 'Warm transfer to technician - Software issue',
      time: '5 min ago',
      color: 'bg-orange-400',
    },
    {
      text: 'Quote provided for iPad battery replacement',
      time: '8 min ago',
      color: 'bg-emerald-400',
    },
    {
      text: 'Call dropped after 12 seconds',
      time: '15 min ago',
      color: 'bg-red-400',
    },
  ]

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        backgroundColor: '#0E1735',
        boxShadow:
          'inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)',
      }}
    >
      <h2 className="text-white text-lg font-normal mb-4">Recent Activity</h2>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-xl px-4 py-3"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            <span className={`mt-1 w-2 h-2 rounded-full ${item.color}`} />
            <div>
              <p className="text-sm text-white font-normal">{item.text}</p>
              <p className="text-xs text-white/50">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TopRepairRequests() {
  const data = [
    { label: 'Screen Repair', value: 156 },
    { label: 'Battery Replacement', value: 89 },
    { label: 'Back Glass Repair', value: 67 },
    { label: 'Software Issues', value: 45 },
  ]

  const max = Math.max(...data.map((d) => d.value))

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        backgroundColor: '#0E1735',
        boxShadow:
          'inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)',
      }}
    >
      <h2 className="text-white text-lg font-normal mb-6">
        Top Repair Requests
      </h2>

      <div className="space-y-5">
        {data.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm text-white/70 mb-2">
              <span>{item.label}</span>
              <span>{item.value} requests</span>
            </div>

            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(item.value / max) * 100}%`,
                  background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
