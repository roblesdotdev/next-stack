import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import clsx from 'clsx'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-base font-medium outline-none ring-primary-variant ring-offset-4 ring-offset-canvas transition-colors focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-fg hover:bg-primary-variant',
        secondary: 'bg-canvas-muted text-fg hover:bg-canvas-muted/80',
        outline:
          'border-2 border-canvas-muted bg-transparent hover:bg-primary-variant hover:text-primary-fg',
        link: 'text-secondary underline-offset-4 ring-secondary-variant/50 hover:text-secondary-variant hover:underline',
      },
      size: {
        base: 'p-0.5 text-sm',
        default: 'px-6 py-3',
        sm: 'rounded-md px-4 py-2 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
