import { Copy } from 'lucide-react'

export default function BookingDetails() {
  return (
    <div className="space-y-6 mt-10">
      <div
        className="rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center"
        style={{
          background: 'linear-gradient(180deg, #1A1A2E 0%, #16213E 100%)',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)',
        }}
      >
        <div className="flex-1 space-y-2">
          <p className="text-white text-sm">Booking Link</p>
          <div className="w-full rounded-xl px-4 py-3 bg-[#0B122C] border border-emerald-500/30 text-sm text-white truncate">
            https://techstore.com/book?id=store123
          </div>
        </div>

        <button className="h-11 px-5 rounded-xl bg-gradient-to-b from-white/20 to-white/10 text-white text-sm flex items-center justify-center gap-2 shrink-0 mt-6">
          <Copy size={16} />
          Copy Link
        </button>
      </div>

      <div
        className="rounded-2xl overflow-hidden"
        style={{
          backgroundColor: '#0E1735',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)',
        }}
      >
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-white">
                <th className="px-6 py-4 text-left font-medium">Client Name</th>
                <th className="px-6 py-4 text-left font-medium">
                  Client Phone
                </th>
                <th className="px-6 py-4 text-left font-medium">Client mail</th>
                <th className="px-6 py-4 text-left font-medium">Device</th>
                <th className="px-6 py-4 text-left font-medium">Repair Type</th>
                <th className="px-6 py-4 text-left font-medium">Date</th>
                <th className="px-6 py-4 text-left font-medium">Slot no</th>
                <th className="px-6 py-4 text-left font-medium">Start Time</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/10">
              {[...Array(6)].map((_, i) => (
                <tr key={i} className="text-white/80">
                  <td className="px-6 py-4 text-blue-400">Jane.D</td>
                  <td className="px-6 py-4">01960685765</td>
                  <td className="px-6 py-4">admin@gmail.com</td>
                  <td className="px-6 py-4">Apple/Iphone 13pro</td>
                  <td className="px-6 py-4">Screen</td>
                  <td className="px-6 py-4">02/06/2026</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">
                    {['09:00', '10:00', '11:00', '12:00', '02:00', '03:00'][i]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 text-sm text-white/60">
        <button className="flex items-center gap-1 hover:text-white">
          ‹<span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-2">
          <span style={{ color: '#0F62FE' }}>1</span>
          <span className="w-10 h-10 flex items-center justify-center bg-blue-200 text-blue-900 font-medium">
            2
          </span>
          <span style={{ color: '#0F62FE' }}>3</span>
          <span style={{ color: '#0F62FE' }}>4</span>
          <span style={{ color: '#0F62FE' }}>5</span>
          <span style={{ color: '#0F62FE' }}>…</span>
          <span style={{ color: '#0F62FE' }}>11</span>
        </div>

        <button
          style={{ color: '#0F62FE' }}
          className="flex items-center gap-1 hover:text-white"
        >
          <span style={{ color: '#0F62FE' }} className="hidden sm:inline">
            Next
          </span>
          ›
        </button>
      </div>
    </div>
  )
}
