import styles from './button.module.css';

export interface ButtonProps {
  children: React.ReactNode; // Any React element (text, JSX, etc.)
  onClick?: () => void;     // Optional function to be called on click
  className?: string;      // Optional additional class name for styling
  color?: ButtonColor;         // Optional color prop
}

export enum ButtonColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  WARNING = "warning",
  DANGER = "danger",
  INFO = "info",
  SUCCESS = "success",
  LINK = "link",
}

export function Button({ children, onClick, className, color }: ButtonProps) {
  const colorClass = color ? styles[color] : ''; 
  return (
    <button className={`${styles.button} ${colorClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}