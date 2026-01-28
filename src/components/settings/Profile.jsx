import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-full py-2"
      style={{ backgroundColor: 'var(--dashboard-bg)' }}
    >
      <div className="max-w-4xl mx-auto sm:ml-0.5">
        <div className="mb-8">
          <div className="flex items-center gap-12 mb-6">
            <h1 className="text-white text-xl font-medium">Profile</h1>
            <span className="text-white/80 text-lg font-normal">
              Password Settings
            </span>
          </div>

          <p className="text-white text-base mb-6">Profile Image</p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-10">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/20">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={() => navigate('/edit-profile')}
              className="absolute -right-24 bottom-2 px-3 py-1 rounded-full text-xs text-white"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.28), rgba(255,255,255,0.12))',
                boxShadow:
                  '0 0 0 1px rgba(255,255,255,0.35), 0 0 18px rgba(255,255,255,0.45)',
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>

        <div className="space-y-6 max-w-xl">
          <InfoRow label="Full Name:" value="Jane D." />
          <InfoRow label="Email:" value="jane@gmail.com" />
          <InfoRow label="Store Name:" value="Ubreakifix Store" />
          <InfoRow
            label="Store Address:"
            value="123 Main Street, New York, NY 10001"
          />
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-10 border-b border-white/10 pb-3">
      <span className="w-40 text-sm text-white">{label}</span>
      <span className="text-sm text-white">{value}</span>
    </div>
  )
}
