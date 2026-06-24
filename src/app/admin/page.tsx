import SidebarLayout from '@/components/layouts/SidebarLayout';
import { StatCard, ContentCard, Badge, EmptyState } from '@/components/ui/Cards';

const adminNav = [
  { label: 'Dashboard', href: '/admin', icon: 'dashboard', section: 'Main' },
  { label: 'Students', href: '/admin/students', icon: 'school', section: 'Academic' },
  { label: 'Staff', href: '/admin/staff', icon: 'groups', section: 'Academic' },
  { label: 'Programs', href: '/admin/programs', icon: 'account_tree', section: 'Academic' },
  { label: 'Finance', href: '/admin/finance', icon: 'paid', section: 'Finance' },
  { label: 'Admissions', href: '/admin/admissions', icon: 'how_to_reg', section: 'Operations' },
  { label: 'Reports', href: '/admin/reports', icon: 'assessment', section: 'Operations' },
  { label: 'Settings', href: '/admin/settings', icon: 'settings', section: 'System' },
];

export default function AdminDashboard() {
  return (
    <SidebarLayout
      title="Admin Dashboard"
      navItems={adminNav}
      userRole="Administrator"
      userName="System Admin"
    >
      <div className="notice-banner">
        <span className="material-symbols-outlined">shield</span>
        Administrator Dashboard - Full system control for Bungoma National Polytechnic.
      </div>

      <div className="stats-grid">
        <StatCard label="Total Students" value={1247} icon="school" color="green" />
        <StatCard label="Active Staff" value={89} icon="groups" color="blue" />
        <StatCard label="Revenue (June)" value="KES 2.4M" icon="paid" color="gold" />
        <StatCard label="Pending Admissions" value={23} icon="pending_actions" color="info" />
        <StatCard label="Programs" value={18} icon="account_tree" color="green" />
        <StatCard label="Courses" value={64} icon="menu_book" color="blue" />
      </div>

      <div className="two-col">
        <div>
          <ContentCard title="Recent Admissions">
            <table className="tbnp-table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Program</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>EDU-STU-2026-00001</td>
                  <td>Alfred Sibilike Nyongesa</td>
                  <td>Diploma in Computer Science</td>
                  <td><Badge variant="success">Active</Badge></td>
                </tr>
                <tr>
                  <td>EDU-STU-2026-00002</td>
                  <td>Mary Wanjiku Kamau</td>
                  <td>Diploma in Business</td>
                  <td><Badge variant="success">Active</Badge></td>
                </tr>
                <tr>
                  <td>EDU-STU-2026-00003</td>
                  <td>Peter Otieno Odhiambo</td>
                  <td>Certificate in Engineering</td>
                  <td><Badge variant="warning">Pending</Badge></td>
                </tr>
              </tbody>
            </table>
          </ContentCard>

          <ContentCard title="Departments">
            <table className="tbnp-table">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>HOD</th>
                  <th>Staff</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Computer Science</td>
                  <td>Dr. James Ochieng</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Business Studies</td>
                  <td>Mrs. Sarah Wambui</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Engineering</td>
                  <td>Eng. David Mutua</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>Applied Sciences</td>
                  <td>Dr. Grace Akinyi</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </ContentCard>
        </div>

        <div>
          <ContentCard title="Quick Actions">
            <div className="quick-actions">
              <div className="quick-action">
                <span className="material-symbols-outlined">person_add</span>
                <span>Add Student</span>
              </div>
              <div className="quick-action">
                <span className="material-symbols-outlined">group_add</span>
                <span>Add Staff</span>
              </div>
              <div className="quick-action">
                <span className="material-symbols-outlined">add_business</span>
                <span>Add Program</span>
              </div>
              <div className="quick-action">
                <span className="material-symbols-outlined">receipt_long</span>
                <span>Generate Invoice</span>
              </div>
              <div className="quick-action">
                <span className="material-symbols-outlined">assessment</span>
                <span>Reports</span>
              </div>
              <div className="quick-action">
                <span className="material-symbols-outlined">settings</span>
                <span>Settings</span>
              </div>
            </div>
          </ContentCard>

          <ContentCard title="Fee Collection Summary">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Expected</span>
                <span className="font-semibold">KES 15.6M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Collected</span>
                <span className="font-semibold text-green-600">KES 12.4M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Outstanding</span>
                <span className="font-semibold text-red-600">KES 3.2M</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '79.5%' }}></div>
              </div>
              <p className="text-xs text-gray-400">79.5% collection rate</p>
            </div>
          </ContentCard>

          <ContentCard title="System Overview">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">ERPNext Version</span>
                <span className="font-semibold">v16.23.1</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Database</span>
                <span className="font-semibold">MariaDB 11.6</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Status</span>
                <Badge variant="success">Operational</Badge>
              </div>
            </div>
          </ContentCard>
        </div>
      </div>
    </SidebarLayout>
  );
}
