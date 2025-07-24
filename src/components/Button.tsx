import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
}

export default function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`font-sf-mono btn-${variant} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`font-sf-mono btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}
