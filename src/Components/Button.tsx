import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  to?: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

function Button({ to, children, onClick, className = '' }: ButtonProps) {
  const classes = `nav-button ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
