import { Phone, Search } from 'lucide-react'
import { useState } from 'react'

const calls = [
  {
    number: '+1 (555) 345-6789',
    time: '2025-12-16 • 09:42 AM',
    duration: '5:23',
    status: 'AI Resolved',
    statusColor: 'bg-emerald-500/20 text-emerald-400',
    tag: 'Screen',
    tagColor: 'bg-blue-500/20 text-blue-400',
    note: 'Quote Provided',
    active: true,
  },
  {
    number: '+1 (555) 345-6789',
    time: '2025-12-16 • 09:42 AM',
    duration: '5:23',
    status: 'Warm Transfer',
    statusColor: 'bg-orange-500/20 text-orange-400',
    tag: 'Software',
    tagColor: 'bg-indigo-500/20 text-indigo-400',
    note: 'Escalated to technician',
  },
  {
    number: '+1 (555) 345-6789',
    time: '2025-12-16 • 09:42 AM',
    duration: '5:23',
    status: 'Appointment',
    statusColor: 'bg-sky-500/20 text-sky-400',
    tag: 'Battery',
    tagColor: 'bg-emerald-500/20 text-emerald-400',
    note: 'Appointment Booked',
  },
  {
    number: '+1 (555) 345-6789',
    time: '2025-12-16 • 09:42 AM',
    duration: '0:20',
    status: 'Dropped',
    statusColor: 'bg-red-500/20 text-red-400',
    tag: 'Unknown',
    tagColor: 'bg-gray-500/20 text-gray-400',
    note: 'Call Dropped',
  },
]

export default function CallList() {
  const [search, setSearch] = useState('')

  const filteredCalls = calls.filter(
    (c) =>
      c.number.toLowerCase().includes(search.toLowerCase()) ||
      c.tag.toLowerCase().includes(search.toLowerCase()) ||
      c.note.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div
        className="flex items-center gap-3 px-5 py-3 rounded-xl"
        style={{
          backgroundColor: '#0E1735',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.05), 0 12px 24px rgba(0,0,0,0.35)',
        }}
      >
        <Search size={16} className="text-white/50" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by phone number, issue type..."
          className="w-full bg-transparent outline-none text-sm text-white placeholder:text-white/40"
        />
      </div>

      <div
        className="rounded-2xl overflow-hidden"
        style={{
          backgroundColor: '#0E1735',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)',
        }}
      >
        <div className="px-6 py-4 border-b border-white/5 text-white text-sm">
          Call List
        </div>

        <div className="divide-y divide-white/5">
          {filteredCalls.map((c, i) => (
            <div
              key={i}
              className={`px-6 py-4 flex gap-4 ${
                c.active ? 'bg-blue-500/10' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-white text-sm">{c.number}</p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${c.statusColor}`}
                  >
                    {c.status}
                  </span>
                </div>

                <p className="text-xs text-white/50 mt-0.5">{c.time}</p>

                <div className="flex items-center gap-3 mt-2 text-xs text-white/60">
                  <span>{c.duration}</span>
                  <span>{c.note}</span>
                  <span className={`px-2 py-0.5 rounded ${c.tagColor}`}>
                    {c.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {filteredCalls.length === 0 && (
            <div className="px-6 py-8 text-center text-sm text-white/50">
              No calls found
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
