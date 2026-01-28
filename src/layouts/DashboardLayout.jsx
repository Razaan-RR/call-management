import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/Topbar'

export default function DashboardLayout() {
  const [title, setTitle] = useState('Dashboard')

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex max-w-[1440px] min-h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <TopBar title={title} />

          <main className="flex-1">
            <Outlet context={{ setTitle }} />
          </main>
        </div>
      </div>
    </div>
  )
}
