import { Play, FileText, ChevronDown } from 'lucide-react'

export default function CallDetails() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Filter label="All Type" />
        <Filter label="All Issues" />
        <Filter label="Today" />
      </div>

      <div
        className="rounded-2xl p-6 space-y-6"
        style={{
          backgroundColor: '#0E1735',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)',
        }}
      >
        <h3 className="text-white text-sm font-normal">Call Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-4">
            <Detail label="Phone Number" value="+1 (555) 123-4567" />
            <Detail label="Date & Time" value="2025-12-16 10:45 AM" />
            <Detail label="Call Type" value="AI Resolved" badge />
          </div>

          <div className="space-y-4">
            <Detail label="Duration" value="4:32" />
            <Detail label="Issue Type" value="Screen" />
            <Detail label="Outcome" value="Quote provided" />
          </div>
        </div>

        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600/60 to-purple-500/40 text-white text-sm flex items-center justify-center gap-2">
          <Play size={16} />
          Play Audio Recording
        </button>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white text-sm">
            <FileText size={16} />
            Conversation Transcript
          </div>

          <div className="space-y-3 text-xs leading-relaxed">
            <p>
              <span className="text-emerald-400">AI Assistant:</span> Thank you
              for calling UBreakiFix! How can I help you today?
            </p>
            <p>
              <span className="text-sky-400">Customer:</span> Hi, my iPhone 13
              screen is cracked. How much would it cost to repair?
            </p>
            <p>
              <span className="text-emerald-400">AI Assistant:</span> For an
              iPhone 13 screen repair, the price is $199 with a 90-day warranty.
            </p>
            <p>
              <span className="text-sky-400">Customer:</span> When are you
              available?
            </p>
            <p>
              <span className="text-emerald-400">AI Assistant:</span> Today at
              2:00 PM or tomorrow at 10:00 AM.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Filter({ label }) {
  return (
    <button className="h-10 px-4 rounded-xl bg-[#0E1735] border border-white/5 text-sm text-white flex items-center gap-2">
      {label}
      <ChevronDown size={14} className="text-white/60" />
    </button>
  )
}

function Detail({ label, value, badge }) {
  return (
    <div>
      <p className="text-xs text-white/50">{label}</p>
      {badge ? (
        <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs bg-emerald-500/20 text-emerald-400">
          {value}
        </span>
      ) : (
        <p className="text-sm text-white mt-1">{value}</p>
      )}
    </div>
  )
}
