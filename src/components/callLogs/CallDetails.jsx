import { Play, FileText, ChevronDown } from 'lucide-react'


export default function CallDetails() {
  return (
    <div className="space-y-4">
      <div className="flex pl-20">
        <div className="flex flex-wrap gap-3">
          <Filter label="All Type" />
          <Filter label="All Issues" />
          <Filter label="Today" />
        </div>
      </div>

      <div
        className="rounded-2xl overflow-hidden"
        style={{
          backgroundColor: '#0E1735',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)',
        }}
      >
        <div className="px-6 py-4 border-b border-white/5">
          <h3 className="text-white text-sm font-normal">Call Details</h3>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
            <div className="space-y-4">
              <Detail label="Phone Number" value="+1 (555) 123-4567" />
              <Detail label="Date & Time" value="2025-12-16 10:45 AM" />
              <Detail label="Call Type" value="AI Resolved" badge />
              <Detail label="Outcome" value="Quote provided" />
            </div>

            <div className="space-y-4">
              <Detail label="Duration" value="4:32" />
              <Detail label="Issue Type" value="Screen" />
            </div>
          </div>

          <button
            className="w-full h-12 rounded-xl flex items-center justify-center gap-2 text-sm"
            style={{
              background: 'linear-gradient(90deg, #322565, #3F2043)',
              color: '#B170EB',
            }}
          >
            <img src="/play-icon.png" alt="Play" className="w-4 h-4" />
            Play Audio Recording
          </button>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white text-sm">
              <FileText size={16} className="text-sky-400" />
              Conversation Transcript
            </div>

            <div className="rounded-xl p-4 space-y-3 text-xs leading-relaxed bg-black/10">
              <p className="text-white">
                <span className="text-emerald-400 block">AI Assistant:</span>
                Thank you for calling UBreakiFix! How can I help you today?
              </p>
              <p className="text-white">
                <span className="text-sky-400 block">Customer:</span> Hi, my
                iPhone 13 screen is cracked. How much would it cost to repair?
              </p>
              <p className="text-white">
                <span className="text-emerald-400 block">AI Assistant:</span> I
                can help you with that! For an iPhone 13 screen repair, our
                price is $199. This includes parts, labor, and comes with a
                90-day warranty. Would you like to book an appointment?
              </p>
              <p className="text-white">
                <span className="text-sky-400 block">Customer:</span> Yes,
                please! When are you available?
              </p>
              <p className="text-white">
                <span className="text-emerald-400 block">AI Assistant:</span>{' '}
                Great! I have availability today at 2:00 PM or tomorrow at 10:00
                AM. Which works better for you?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Filter({ label }) {
  return (
    <button
      className="h-10 px-4 rounded-xl text-sm text-white flex items-center gap-2"
      style={{
        backgroundColor: '#0E1735',
        boxShadow:
          'inset 0 0 0 1px rgba(255,255,255,0.05), 0 8px 16px rgba(0,0,0,0.35)',
      }}
    >
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
