import clsx from "clsx";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import { formatDate } from "../../utils/formatDate";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

type ForecastTableDataProps = {
    daily: {
        time: Array<string>;
        temperature_2m_max: Array<number>;
        temperature_2m_min: Array<number>;
        weather_code: Array<number>;
    };
};
const today = new Date().toISOString().split("T")[0];
export function ForecastTable({ daily }: ForecastTableDataProps) {
    return (
        <div className="flex flex-wrap gap-2 justify-center m-4">
            {daily.time
                .filter((time) => time != today)
                .map((time, i) => (
                    <div key={time} className={clsx(
                        "p-4",
                        "bg-neutral-600 rounded-lg border border-white text-white",
                        'shadow-lg shadow-white/30'
                    )}>
                        <img className="" src={getWeatherIcon(daily.weather_code[i], 1)}></img>
                        <p className="text-center">{formatDate(time)}</p>
                        <span className="flex">
                            <p className="flex">{Math.floor(daily.temperature_2m_min[i])} <ArrowDownIcon color="gray" /></p>
                            <p className="flex">{Math.floor(daily.temperature_2m_max[i])} <ArrowUpIcon color='gray' /></p>
                        </span>

                    </div>
                ))}
        </div>
    );
}
