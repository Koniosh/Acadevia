import { forwardRef } from 'react';
import { cn } from '@/utils/helpers';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'link';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant = 'primary',
        size = 'md',
        fullWidth = false,
        loading = false,
        disabled,
        children,
        ...props
    }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            primary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
            secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
            outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50 focus:ring-purple-500',
            ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-500',
            danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
            link: 'text-purple-600 underline-offset-4 hover:underline focus:ring-purple-500',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm rounded-lg',
            md: 'px-4 py-2 text-base rounded-lg',
            lg: 'px-6 py-3 text-lg rounded-xl',
        };

        return (
            <button
                ref={ref}
                disabled={disabled || loading}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    fullWidth && 'w-full',
                    className
                )}
                {...props}
            >
                {loading && (
                    <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                )}
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';