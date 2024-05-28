import React from 'react'

function Maintenance() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold">Maintenance</h1>
      <p className="mt-6 text-center text-2xl">
        Terima kasih atas ketidaknyamanan web kami saat ini. Kami akan segera memperbaiki
        kembali.
      </p>
      <p className="mt-6 text-center text-2xl">
        Jika Anda memiliki pertanya, silakan hubungi kami di <a className="underline" href="mailto:hi@wahyudi.dev">hi@wahyudi.dev</a>
      </p>
    </div>
  )
}

export default Maintenance