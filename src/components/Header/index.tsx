import clsx from "clsx";

export function Header() {
    return (

        <header
            className={clsx(
                "p-6 md:p-8",
                "m-4 md:m-8",
                'w-[200px] md:w-[400px] lg:w-[600px]',
                "rounded-2xl bg-neutral-700/80 backdrop-blur-sm",
                "shadow-lg shadow-black/30",
            )}
            >
            <h1
                className={clsx(
                    "text-center font-semibold tracking-tight",
                    "text-4xl md:text-5xl lg:text-6xl",
                    "text-neutral-100"
                )}
                >
                <span className="text-blue-400 font-bold">V7</span>
                <span className="text-neutral-300">Time</span>
            </h1>
        </header>
    );
}
