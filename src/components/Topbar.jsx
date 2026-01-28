import { Bell } from 'lucide-react'

export default function TopBar({ title }) {
  return (
    <div
      className="w-full h-16 px-6 flex items-center justify-between"
      style={{
        background:
          'linear-gradient(180deg, rgba(12,22,56,0.95), rgba(10,20,48,0.95))',
        boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.05)',
      }}
    >
      <h1 className="text-white text-lg font-medium tracking-wide">{title}</h1>

      <div className="flex items-center gap-4">
        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition">
          <Bell size={18} className="text-white/85" />
        </button>

        <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/20">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
