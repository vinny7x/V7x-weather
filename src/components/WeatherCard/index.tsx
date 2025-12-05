import { SpinLoader } from "../SpinLoader";
import clsx from "clsx";
import { ArrowDownIcon, ArrowUpIcon, DropletIcon, MapPinIcon, ThermometerIcon, ThermometerSunIcon, WindIcon } from "lucide-react";
import { getWeather } from "../../utils/getWeather";
import { useReverseGeocode } from "../../hooks/useReverseGeocode";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import { getTempColor } from "../../utils/getTempColor";

type data = {
    latitude: number;
    longitude: number;
    current_units: {
        is_day: string,
        weather_code: string,
        temperature_2m: string;
        wind_speed_10m: string;
        relative_humidity_2m: string;
        apparent_temperature: string;
    },
    daily: {
        temperature_2m_max: Array<number>;
        temperature_2m_min: Array<number>;
    };
    current: {
        is_day: number,
        weather_code: number,
        temperature_2m: number;
        wind_speed_10m: number;
        relative_humidity_2m: number;
        apparent_temperature: number;
    };
};

type WeatherCardProps = {
    isLoading: boolean;
    data: data;
    coords: { lat: number, lon: number; } | null;
};

export function WeatherCard({ data, isLoading, coords }: WeatherCardProps) {

    const location = useReverseGeocode(coords);
    const weatherLabel = getWeather(data?.current.weather_code);
    const weatherIcon = getWeatherIcon(data?.current.weather_code, data?.current.is_day);
    return (
        <div className="flex justify-center">
            <div
                className={clsx(
                    "m-4 w-auto p-4",
                    "bg-neutral-600 rounded-lg border border-white",
                    'shadow-lg shadow-white/30'
                )}
            >

                {isLoading || !data ? <SpinLoader /> : (<>

                    <h2 className={clsx(
                        'text-3xl text-white text-center'
                    )}></h2>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-white">

                        <div className={clsx(
                            'flex flex-col items-center gap-2',
                        )}>
                            <div className="flex items-center">
                                <img src={weatherIcon} alt="" className={
                                    clsx(
                                        'w-40'
                                    )
                                } />
                                <div>
                                    <p className="text-3xl flex items-baseline [&_svg]:text-blue-200"><ThermometerIcon /> <span className={clsx(
                                        getTempColor(data.current.temperature_2m)
                                    )}> {data.current.temperature_2m}{data.current_units.temperature_2m}</span></p>
                                    <p className="text-center flex justify-center gap-2"> <span className={clsx(
                                        getTempColor(data.daily.temperature_2m_min[0]),
                                        'flex'
                                    )}>{data.daily.temperature_2m_min[0]}<ArrowDownIcon color="gray" /></span>
                                        |
                                        <span className={clsx(
                                            getTempColor(data.daily.temperature_2m_max[0]),
                                            'flex'
                                        )}>{data.daily.temperature_2m_max[0]}<ArrowUpIcon color="gray" /></span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 [&_svg]:text-red-400">
                                <MapPinIcon />
                                {location.isLoading ? (
                                    <SpinLoader />
                                ) : (
                                    location.data && (
                                        <span>
                                            {location.data.address.town ||
                                                location.data.address.city ||
                                                location.data.address.village ||
                                                "Local desconhecido"} - {location.data.address.state}
                                        </span>
                                    )
                                )}
                            </div>
                            <p className="text-gray-400">{weatherLabel}</p>

                        </div>

                        <div
                            className={clsx(
                                'flex flex-col gap-1 justify-center items-start',
                                '[&_svg]:size-5'
                            )}
                        >
                            <p
                                className={clsx(
                                    'flex gap-2 justify-center items-center',
                                    '[&_svg]:text-orange-300',
                                    'text-sm md:text-base'
                                )}
                            >
                                <ThermometerSunIcon />
                                Sensação térmica:
                                <span className="font-semibold text-orange-300">
                                    {data.current.apparent_temperature} {data.current_units.apparent_temperature}
                                </span>
                            </p>

                            <p
                                className={clsx(
                                    'flex gap-2 justify-center items-center',
                                    '[&_svg]:text-blue-300',
                                    'text-sm md:text-base'
                                )}
                            >
                                <WindIcon />
                                Vento:
                                <span className="font-semibold text-blue-300">
                                    {data.current.wind_speed_10m} {data.current_units.wind_speed_10m}
                                </span>
                            </p>

                            <p
                                className={clsx(
                                    'flex gap-2 justify-center items-center',
                                    '[&_svg]:text-cyan-300',
                                    'text-sm md:text-base'
                                )}
                            >
                                <DropletIcon />
                                Umidade:
                                <span className="font-semibold text-cyan-300">
                                    {data.current.relative_humidity_2m} {data.current_units.relative_humidity_2m}
                                </span>
                            </p>
                        </div>

                    </div>
                </>
                )}
            </div>
        </div>
    );
}
