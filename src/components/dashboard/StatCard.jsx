export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconBg,
  positive,
  circle,
}) {
  return (
    <div
      className="rounded-2xl px-6 py-5 h-[130px] flex flex-col justify-between font-normal"
      style={{
        backgroundColor: '#0E1735',
        boxShadow:
          'inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)',
      }}
    >
      <div className="flex items-start justify-between">
        <p className="text-sm text-white/60">{title}</p>
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}
        >
          {circle ? (
            <div className="w-6 h-6 rounded-full border-[1.5px] border-white flex items-center justify-center">
              <Icon size={14} className="text-white" />
            </div>
          ) : (
            <Icon size={20} className="text-white" />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[30px] font-normal text-white leading-none">
          {value}
        </span>
        <span
          className={`pt-2 text-sm ${
            positive ? 'text-emerald-400' : 'text-red-400'
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  )
}
