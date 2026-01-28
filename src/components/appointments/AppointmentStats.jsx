import { Calendar, CheckCircle2, AlertCircle } from 'lucide-react'

export default function AppointmentStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <div
        className="rounded-2xl px-5 sm:px-6 py-4 sm:py-5 space-y-3"
        style={{
          backgroundColor: '#0E1735',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)',
        }}
      >
        <div className="flex items-center gap-2 text-white/70 text-sm">
          <Calendar size={16} className="text-sky-400" />
          Total Booked
        </div>

        <p className="text-white text-2xl sm:text-3xl font-medium">34</p>

        <p className="text-emerald-400 text-xs">+8 this week</p>
      </div>

      <div
        className="rounded-2xl px-5 sm:px-6 py-4 sm:py-5 space-y-3"
        style={{
          backgroundColor: '#0E1735',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)',
        }}
      >
        <div className="flex items-center gap-2 text-white/70 text-sm">
          <CheckCircle2 size={16} className="text-emerald-400" />
          AI Booked
        </div>

        <p className="text-white text-2xl sm:text-3xl font-medium">28</p>

        <p className="text-white/50 text-xs">82% of total</p>
      </div>

      <div
        className="rounded-2xl px-5 sm:px-6 py-4 sm:py-5 space-y-3"
        style={{
          backgroundColor: '#0E1735',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)',
        }}
      >
        <div className="flex items-center gap-2 text-white/70 text-sm">
          <AlertCircle size={16} className="text-yellow-400" />
          Pending
        </div>

        <p className="text-white text-2xl sm:text-3xl font-medium">3</p>

        <p className="text-white/50 text-xs">Awaiting confirmation</p>
      </div>
    </div>
  )
}
