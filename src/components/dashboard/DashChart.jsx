import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const chartData = [
  { day: 'Mon', calls: 45 },
  { day: 'Tue', calls: 62 },
  { day: 'Wed', calls: 58 },
  { day: 'Thu', calls: 72 },
  { day: 'Fri', calls: 88 },
  { day: 'Sat', calls: 95 },
  { day: 'Sun', calls: 56 },
]

export default function DashChart() {
  return (
    <div
      className="rounded-2xl px-6 py-5"
      style={{
        backgroundColor: '#0E1735',
        boxShadow:
          'inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-white text-lg font-arimo">
            Call Trends - This Week
          </h2>
          <p className="text-sm text-white/60 font-arimo">Total: 472 calls</p>
        </div>

        <button
          className="
    flex items-center gap-2
    px-5 py-2.5
    rounded-xl
    text-sm font-medium text-white
    font-arimo
    border border-white/10
  "
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.15), 0 8px 20px rgba(0,0,0,0.35)',
          }}
        >
          This Week
          <svg
            className="w-4 h-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.5 7.5L10 12l4.5-4.5H5.5z" />
          </svg>
        </button>
      </div>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="day"
              tick={{ fill: '#FFFFFF', fontSize: 12 }}
              tickLine={true}
              axisLine={true}
            />
            <YAxis
              tick={{ fill: '#FFFFFF', fontSize: 12 }}
              tickLine={true}
              axisLine={true}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0E1735',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
              }}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="url(#areaFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
