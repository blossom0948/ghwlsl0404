import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  children?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className = "", ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"

    const baseStyles =
      "inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"

    const combinedClassName = `${baseStyles} ${className}`

    if (asChild) {
      return (
        <Comp>
          {React.Children.map(props.children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child, { className: combinedClassName } as any)
              : child
          )}
        </Comp>
      )
    }

    return <button ref={ref} className={combinedClassName} {...props} />
  }
)

Button.displayName = "Button"
