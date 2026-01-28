import { Phone, Bot, ArrowLeftRight, Calendar, X, Clock } from 'lucide-react'
import StatCard from '../components/dashboard/StatCard'
import DashChart from '../components/dashboard/DashChart'
import DashboardExtras from '../components/dashboard/DashboardExtras'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router'

export default function Dashboard() {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Dashboard Overview')
  }, [setTitle])

  return (
    <div
      className="min-h-full px-8 py-6 space-y-8"
      style={{ backgroundColor: 'var(--dashboard-bg)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <StatCard
          title="Total Calls Today"
          value="127"
          change="+12%"
          icon={Phone}
          iconBg="bg-gradient-to-br from-[#2B7FFF] to-[#00B8DB]"
          positive
        />
        <StatCard
          title="AI-Handled Calls"
          value="98"
          change="+77%"
          icon={Bot}
          iconBg="bg-gradient-to-br from-[#AD46FF] to-[#F6339A]"
          positive
        />
        <StatCard
          title="Warm Transfer"
          value="23"
          change="+18%"
          icon={ArrowLeftRight}
          iconBg="bg-gradient-to-br from-[#FF6900] to-[#FB2C36]"
          positive
        />
        <StatCard
          title="Appointments Booked"
          value="34"
          change="+8%"
          icon={Calendar}
          iconBg="bg-gradient-to-br from-[#00C950] to-[#00BC7D]"
          positive
        />
        <StatCard
          title="Missed/Failed Calls"
          value="6"
          change="-3%"
          icon={X}
          iconBg="bg-gradient-to-br from-[#FB2C36] to-[#FF2056]"
          circle
        />
        <StatCard
          title="Avg Call Duration"
          value="3:42"
          change="+15%"
          icon={Clock}
          iconBg="bg-gradient-to-br from-[#615FFF] to-[#2B7FFF]"
          positive
        />
      </div>

      <DashChart />
      <DashboardExtras />
    </div>
  )
}
