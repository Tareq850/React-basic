
function Input({ children, id, ...props }) {


    return (
        <div>
            <label htmlFor={id} className="text-sm font-bold">{children}</label>
            <input id={id} className="border rounded-md px-2 py-1" {...props} />
        </div>
    )
}

export default Input
