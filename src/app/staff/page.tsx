import SidebarLayout from '@/components/layouts/SidebarLayout';
import { StatCard, ContentCard, Badge, EmptyState } from '@/components/ui/Cards';

const staffNav = [
  { label: 'Dashboard', href: '/staff', icon: 'dashboard', section: 'Main' },
  { label: 'My Courses', href: '/staff/courses', icon: 'menu_book', section: 'Teaching' },
  { label: 'Attendance', href: '/staff/attendance', icon: 'fact_check', section: 'Teaching' },
  { label: 'Grading', href: '/staff/grading', icon: 'grade', section: 'Teaching' },
  { label: 'Students', href: '/staff/students', icon: 'school', section: 'Management' },
  { label: 'Leave Applications', href: '/staff/leave', icon: 'event_busy', section: 'HR' },
  { label: 'My Profile', href: '/staff/profile', icon: 'person', section: 'HR' },
];

export default function StaffDashboard() {
  return (
    <SidebarLayout
      title="Staff Dashboard"
      navItems={staffNav}
      userRole="Lecturer"
      userName="Dr. James Ochieng"
    >
      <div className="notice-banner">
        <span className="material-symbols-outlined">info</span>
        Welcome to the TBNP Staff Portal. Manage your courses, attendance, and grading.
      </div>

      <div className="stats-grid">
        <StatCard label="My Students" value={124} icon="school" color="green" />
        <StatCard label="Courses Teaching" value={4} icon="menu_book" color="blue" />
        <StatCard label="Attendance Today" value="87%" icon="fact_check" color="info" />
        <StatCard label="Pending Grades" value={12} icon="pending_actions" color="gold" />
      </div>

      <div className="two-col">
        <div>
          <ContentCard title="My Courses">
            <table className="tbnp-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Course</th>
                  <th>Students</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CSC101</td>
                  <td>Introduction to Computing</td>
                  <td>42</td>
                  <td><Badge variant="success">Active</Badge></td>
                </tr>
                <tr>
                  <td>CSC102</td>
                  <td>Programming Fundamentals</td>
                  <td>38</td>
                  <td><Badge variant="success">Active</Badge></td>
                </tr>
                <tr>
                  <td>CSC201</td>
                  <td>Data Structures</td>
                  <td>28</td>
                  <td><Badge variant="success">Active</Badge></td>
                </tr>
                <tr>
                  <td>CSC202</td>
                  <td>Database Systems</td>
                  <td>16</td>
                  <td><Badge variant="info">Upcoming</Badge></td>
                </tr>
              </tbody>
            </table>
          </ContentCard>

          <ContentCard title="Recent Attendance">
            <table className="tbnp-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Course</th>
                  <th>Present</th>
                  <th>Absent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2026-06-23</td>
                  <td>CSC101</td>
                  <td><Badge variant="success">38</Badge></td>
                  <td><Badge variant="danger">4</Badge></td>
                </tr>
                <tr>
                  <td>2026-06-22</td>
                  <td>CSC102</td>
                  <td><Badge variant="success">35</Badge></td>
                  <td><Badge variant="danger">3</Badge></td>
                </tr>
              </tbody>
            </table>
          </ContentCard>
        </div>

        <div>
          <ContentCard title="Quick Actions">
            <div className="quick-actions">
              <a href="http://localhost:8080/lms" target="_blank" className="quick-action">
                <span className="material-symbols-outlined">upload_file</span>
                <span>Upload Materials</span>
              </a>
              <div className="quick-action">
                <span className="material-symbols-outlined">fact_check</span>
                <span>Mark Attendance</span>
              </div>
              <div className="quick-action">
                <span className="material-symbols-outlined">grade</span>
                <span>Enter Grades</span>
              </div>
              <div className="quick-action">
                <span className="material-symbols-outlined">download</span>
                <span>Reports</span>
              </div>
            </div>
          </ContentCard>

          <ContentCard title="Pending Tasks">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-600 text-sm">pending</span>
                  <span className="text-sm">Grade CSC102 Midterm</span>
                </div>
                <Badge variant="warning">12 pending</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-600 text-sm">upload_file</span>
                  <span className="text-sm">Upload CSC101 Materials</span>
                </div>
                <Badge variant="info">Due today</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600 text-sm">fact_check</span>
                  <span className="text-sm">Submit Attendance Report</span>
                </div>
                <Badge variant="success">Completed</Badge>
              </div>
            </div>
          </ContentCard>

          <ContentCard title="My Profile">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Department</span>
                <span className="font-semibold">Computer Science</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Designation</span>
                <span className="font-semibold">Senior Lecturer</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Employee ID</span>
                <span className="font-semibold">EMP-2024-001</span>
              </div>
            </div>
          </ContentCard>
        </div>
      </div>
    </SidebarLayout>
  );
}
