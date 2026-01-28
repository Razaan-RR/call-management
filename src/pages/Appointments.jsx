import React from 'react'
import AppointmentStats from '../components/appointments/AppointmentStats'
import BookingDetails from '../components/appointments/BookingDetails'

function Appointments() {
  return (
    <div
      className="min-h-full px-8 py-6"
      style={{ backgroundColor: 'var(--dashboard-bg)' }}
    >
      <AppointmentStats />
      <BookingDetails />
    </div>
  )
}

export default Appointments
