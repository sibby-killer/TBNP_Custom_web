import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: string;
  color: 'green' | 'blue' | 'gold' | 'info' | 'red';
}

export function StatCard({ label, value, icon, color }: StatCardProps) {
  return (
    <div className={cn('stat-card', color)}>
      <div className="stat-icon">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="stat-info">
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
}

interface ContentCardProps {
  title: string;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function ContentCard({ title, headerAction, children, className }: ContentCardProps) {
  return (
    <div className={cn('content-card', className)}>
      <div className="content-card-header">
        <h2>{title}</h2>
        {headerAction}
      </div>
      <div className="content-card-body">
        {children}
      </div>
    </div>
  );
}

interface BadgeProps {
  variant: 'success' | 'danger' | 'warning' | 'info';
  children: React.ReactNode;
}

export function Badge({ variant, children }: BadgeProps) {
  return (
    <span className={cn('badge', `badge-${variant}`)}>
      {children}
    </span>
  );
}

interface EmptyStateProps {
  icon: string;
  message: string;
}

export function EmptyState({ icon, message }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <span className="material-symbols-outlined">{icon}</span>
      <p>{message}</p>
    </div>
  );
}
