export default function Contact() {
    return (
        <>
            {/* Added flex-col to stack items and items-center to center horizontally */}
            {/* justify-center centers vertically if the container has a specific height */}
            <div className="flex flex-col items-center justify-center mt-4 p-10 gap-2">
                <h1 className="text-indigo-500 hover:text-indigo-700 font-medium text-sm">
                    Contact information
                </h1>
                <a className="text-indigo-500 hover:text-indigo-700 font-medium text-sm">
                    Email: Sidushakya@gmail.com
                </a>
                <a href="https://github.com/Sidd4150" className="text-indigo-500 hover:text-indigo-700 font-medium text-sm">
                    GitHub: https://github.com/Sidd4150
                </a>
            </div>
        </>
    );
}