'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  icon: string;
  section?: string;
}

interface SidebarLayoutProps {
  children: React.ReactNode;
  title: string;
  navItems: NavItem[];
  userRole: string;
  userName: string;
}

export default function SidebarLayout({
  children,
  title,
  navItems,
  userRole,
  userName,
}: SidebarLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const sections = navItems.reduce<Record<string, NavItem[]>>((acc, item) => {
    const section = item.section || 'Main';
    if (!acc[section]) acc[section] = [];
    acc[section].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-toggle fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'portal-sidebar',
          sidebarOpen && 'open'
        )}
      >
        <div className="portal-sidebar-header">
          <div className="sidebar-logo">
            <div className="w-10 h-10 bg-[#00542c] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
          </div>
          <div className="sidebar-brand">
            <h3>{userName}</h3>
            <div className="user-role">{userRole}</div>
          </div>
        </div>

        <nav className="portal-sidebar-nav">
          {Object.entries(sections).map(([section, items]) => (
            <div key={section}>
              <div className="nav-section">{section}</div>
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'nav-item',
                    pathname === item.href && 'active'
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className="portal-sidebar-footer">
          <Link href="/" className="logout-btn">
            <span className="material-symbols-outlined">home</span>
            Main Website
          </Link>
          <a href="http://localhost:8080/login?logout=1" className="logout-btn">
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="portal-content">
        <div className="portal-topbar">
          <div className="topbar-left">
            <button
              className="mobile-menu-toggle md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div>
              <h4>{title}</h4>
              <div className="breadcrumb-bar">
                <Link href="/">Home</Link> / {title}
              </div>
            </div>
          </div>
          <div className="topbar-right">
            <div className="user-menu">
              <div className="user-avatar">
                {userName.charAt(0)}
              </div>
              <span className="user-info hidden sm:inline">Hi, {userName.split(' ')[0]}</span>
            </div>
          </div>
        </div>

        <div className="portal-main">
          {children}
        </div>
      </div>
    </div>
  );
}
