import SidebarLayout from '@/components/layouts/SidebarLayout';
import { StatCard, ContentCard, Badge, EmptyState } from '@/components/ui/Cards';

const studentNav = [
  { label: 'Dashboard', href: '/students', icon: 'dashboard', section: 'Main' },
  { label: 'My Courses', href: '/students/courses', icon: 'menu_book', section: 'Academic' },
  { label: 'Results', href: '/students/results', icon: 'grade', section: 'Academic' },
  { label: 'Timetable', href: '/students/timetable', icon: 'calendar_month', section: 'Academic' },
  { label: 'Fees & Payments', href: '/students/fees', icon: 'paid', section: 'Finance' },
  { label: 'Exam Card', href: '/students/exam-card', icon: 'badge', section: 'Finance' },
  { label: 'Complaints', href: '/students/complaints', icon: 'feedback', section: 'Support' },
];

export default function StudentDashboard() {
  return (
    <SidebarLayout
      title="Student Dashboard"
      navItems={studentNav}
      userRole="Student"
      userName="Alfred Sibilike"
    >
      <div className="notice-banner">
        <span className="material-symbols-outlined">info</span>
        Welcome to the TBNP Student Portal. Check your fees, results, and course registrations.
      </div>

      <div className="stats-grid">
        <StatCard label="Course Units" value={6} icon="menu_book" color="green" />
        <StatCard label="Fee Balance" value="KES 45,000" icon="paid" color="blue" />
        <StatCard label="Attendance" value="92%" icon="check_circle" color="info" />
        <StatCard label="CGPA" value="3.4" icon="school" color="gold" />
      </div>

      <div className="two-col">
        <div>
          <ContentCard title="My Courses">
            <table className="tbnp-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Course Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CSC101</td>
                  <td>Introduction to Computing</td>
                  <td><Badge variant="success">Enrolled</Badge></td>
                </tr>
                <tr>
                  <td>CSC102</td>
                  <td>Programming Fundamentals</td>
                  <td><Badge variant="success">Enrolled</Badge></td>
                </tr>
                <tr>
                  <td>CSC103</td>
                  <td>Database Systems</td>
                  <td><Badge variant="success">Enrolled</Badge></td>
                </tr>
              </tbody>
            </table>
          </ContentCard>

          <ContentCard title="Recent Fee Payments">
            <table className="tbnp-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2026-01-15</td>
                  <td>Term 1 Tuition</td>
                  <td><Badge variant="success">KES 25,000</Badge></td>
                </tr>
                <tr>
                  <td>2026-01-15</td>
                  <td>Lab Fee</td>
                  <td><Badge variant="success">KES 5,000</Badge></td>
                </tr>
              </tbody>
            </table>
          </ContentCard>
        </div>

        <div>
          <ContentCard title="Quick Actions">
            <div className="quick-actions">
              <a href="http://localhost:8080/lms" target="_blank" className="quick-action">
                <span className="material-symbols-outlined">school</span>
                <span>E-Learning</span>
              </a>
              <div className="quick-action">
                <span className="material-symbols-outlined">receipt_long</span>
                <span>Fee Statement</span>
              </div>
              <div className="quick-action">
                <span className="material-symbols-outlined">download</span>
                <span>Exam Card</span>
              </div>
              <div className="quick-action">
                <span className="material-symbols-outlined">feedback</span>
                <span>Complaint</span>
              </div>
            </div>
          </ContentCard>

          <ContentCard title="Fee Summary">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Fees</span>
                <span className="font-semibold">KES 120,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Amount Paid</span>
                <span className="font-semibold text-green-600">KES 75,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Balance</span>
                <span className="font-semibold text-red-600">KES 45,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '62.5%' }}></div>
              </div>
              <p className="text-xs text-gray-400">62.5% paid</p>
            </div>
          </ContentCard>

          <ContentCard title="Academic Progress">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Current Semester</span>
                <span className="font-semibold">Term 1, 2026</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Program</span>
                <span className="font-semibold">Diploma in Computer Science</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Year</span>
                <span className="font-semibold">1st Year</span>
              </div>
            </div>
          </ContentCard>
        </div>
      </div>
    </SidebarLayout>
  );
}
