import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  download,
  external,
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide transition-colors duration-200 rounded-none";
  const styles = {
    primary: "bg-ink text-paper hover:bg-accent",
    secondary:
      "border border-ink text-ink hover:bg-ink hover:text-paper",
    ghost: "text-ink underline underline-offset-4 hover:text-accent px-0 py-0",
  };

  if (download || external) {
    return (
      <a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(base, styles[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}
