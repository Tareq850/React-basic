
function Button({ children, size = 'md', varient = 'primary', ...props }) {

    const sizes = {
        'sm': "px-3 py-1 text-sm",
        'md': "px-4 py-2 text-md",
        'lg': "px-6 py-4 text-lg"
    }

    const varients = {
        'primary': "bg-blue-800 hover:bg-blue-900 text-[#fff] rounded-lg shadow-md",
        'secondray': "bg-blue-500 hover:bg-blue-600 text-[#fff] rounded-lg shadow-md",
        'accent': "bg-orange-500 hover:bg-orange-600 text-[#fff] rounded-lg shadow-md",
    }

    return (
        <button className={`${sizes[size]} ${varients[varient]}`} {...props}>
            {children}
        </button>
    )
}

export default Button
