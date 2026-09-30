import type { ReactNode } from 'react';

type TopBarProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

function TopBar({ eyebrow = 'Student Portal', title, children }: TopBarProps) {
  return (
    <header className="topbar">
      <div className="brand-group">
        <span className="brand-badge">SD</span>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
      </div>

      {children}
    </header>
  );
}

export default TopBar;
