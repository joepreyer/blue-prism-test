type ButtonProps = {
    variant?: "filled" | "outlined"
    onClick: () => void
    children: React.ReactNode
    className?: string
}

const Button = ({ variant = "filled", onClick, children, className }: ButtonProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        onClick()
    }
    return (
        <button
            onClick={handleClick}
            className={`
            ${className}
            border-blue-500
                ${variant === "filled" ? "bg-blue-500 text-white" : "bg-white text-black"}
                ${variant === "filled" ? "hover:bg-blue-600 hover:text-white hover-border-blue-600" : "hover:bg-blue-500 hover:text-white"}
                px-4 py-2 rounded-lg border shadow-md hover:shadow-lg z-10
            `}
        >
            {children}
        </button>
    )
}

export default Button