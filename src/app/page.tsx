import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00542c] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-semibold text-gray-900">Bungoma National Polytechnic</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Programs</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Admissions</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">News</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="/students"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Student Portal
              </Link>
              <Link
                href="/staff"
                className="text-sm bg-[#00542c] text-white px-4 py-2 rounded-lg hover:bg-[#004d28]"
              >
                Staff Portal
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#00542c] to-[#003d1f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bungoma National Polytechnic
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Empowering the next generation through quality technical education.
              Join thousands of students building their future at TBNP.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white text-[#00542c] px-6 py-3 rounded-lg font-semibold hover:bg-green-50"
              >
                Apply Now
              </a>
              <a
                href="#"
                className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10"
              >
                View Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-bold text-center mb-12">Access Your Portal</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/students" className="block p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[#00542c]">school</span>
            </div>
            <h3 className="font-semibold mb-2">Student Portal</h3>
            <p className="text-sm text-gray-500">Check fees, results, register units, download exam cards</p>
          </Link>
          <Link href="/staff" className="block p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-blue-600">groups</span>
            </div>
            <h3 className="font-semibold mb-2">Staff Portal</h3>
            <p className="text-sm text-gray-500">Mark attendance, enter grades, manage courses</p>
          </Link>
          <Link href="/admin" className="block p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-amber-600">admin_panel_settings</span>
            </div>
            <h3 className="font-semibold mb-2">Admin Dashboard</h3>
            <p className="text-sm text-gray-500">Full control: admissions, finance, HR, settings</p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          &copy; 2026 Bungoma National Polytechnic. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
