import clsx from "clsx";

export function SpinLoader() {
    return (
        <div className={clsx(
            'flex',
            'items-center',
            'justify-center')}>
            <div className={clsx(
                'w-10 h-10',
                'border-5 border-t-blue-500 border-white',
                'rounded-full',
                'animate-spin'
            )}></div>
        </div>
    );
}