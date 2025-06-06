
import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Mail, User, LockKeyhole, Search } from "lucide-react";

function Input({ className, type = "text", icon, ...props }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === "password";

  const togglePassword = () => setShowPassword(!showPassword);

  const IconComponent = {
    mail: Mail,
    user: User,
    lock: LockKeyhole,
    search: Search,
  }[icon];

  return (
    <div className="relative flex items-center">
      {IconComponent && (
        <IconComponent className="absolute left-3 h-4 w-4 text-muted-foreground" />
      )}
      <input
        type={isPassword ? (showPassword ? "text" : "password") : type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 pl-9 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          onClick={togglePassword}
          className="absolute right-3 text-muted-foreground hover:text-foreground cursor-pointer"
          tabIndex={-1}
        >
          {showPassword ? (
            <Eye className="h-4 w-4" />
          ) : (
            <EyeOff className="h-4 w-4" />
          )}
        </button>
      )}
    </div>
  );
}

export { Input };