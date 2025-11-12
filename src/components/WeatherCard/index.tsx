import { useQuery } from "@tanstack/react-query";
import { SpinLoader } from "../SpinLoader";
import clsx from "clsx";
import { CloudDrizzleIcon, CloudFogIcon, CloudLightningIcon, CloudRainIcon, CloudSnowIcon, CloudyIcon, DropletIcon, HelpCircleIcon, MoonIcon, SunIcon, ThermometerIcon, WindIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getWeather } from "../../utils/getWeather";

export function WeatherCard() {
    const [coords, setCoords] = useState<{ lat: number, lon: number; } | null>(null);
    const [geoError, setGeoError] = useState(false);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setCoords({
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude,
                });
            },
            () => {
                setGeoError(true);
            });
    }, []);
    const { data, isLoading } = useQuery({
        queryKey: ["weather", coords],
        enabled: !!coords,
        queryFn: async () => {
            const res = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${coords!.lat}&longitude=${coords!.lon}&current=temperature_2m,relative_humidity_2m,is_day,rain,wind_speed_10m,weather_code`
            );
            if (!res.ok) throw new Error("Falha ao buscar clima");
            console.log(res);
            const json = await res.json();
            return json;
        },
    });
    if (geoError) {
        return (
            <div className={clsx(
                'text-red-500 bg-neutral-600 rounded-lg border-2 border-red-400 ',
                'font-semibold text-center m-4 p-4',
                'text-lg md:text-xl'
            )}>
                Ops! Não conseguimos acessar sua localização. Ative o acesso no navegador para ver o clima da sua região.
            </div>
        );
    }
    const weatherMap: Record<string, React.ReactNode> = {
        "Céu limpo": <SunIcon />,
        "Parcialmente nublado": <CloudyIcon />,
        "Neblina": <CloudFogIcon />,
        "Chuvisco": <CloudDrizzleIcon />,
        "Neve": <CloudSnowIcon />,
        "Pancadas de chuva": <CloudRainIcon />,
        "Tempestade": <CloudLightningIcon />,
        "Desconhecido": <HelpCircleIcon />,
    };
    return (
        <div className="flex justify-center">
            <div
                className={clsx(
                    "m-4 max-w-300 w-100 p-4",
                    "bg-neutral-600 rounded-lg border border-white",
                    'shadow-lg shadow-white/30'
                )}
            >

                {isLoading || !data ? <SpinLoader /> : (<>
                    <span className="fixed">
                        {data.current.is_day ? <SunIcon color="white" size='24' /> : <MoonIcon color="white" size='24' />}
                    </span>
                    <h2 className={clsx(
                        'text-3xl text-white text-center'
                    )}></h2>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-white">
                        <div className={clsx(
                            'flex flex-col items-center',
                            '[&_svg]:text-blue-400',
                            '[&_svg]:h-30 [&_svg]:w-30',
                            'md:[&_svg]:h-40 md:[&_svg]:w-40'
                        )}>{weatherMap[getWeather(data.current.weather_code)]}
                            <p>{getWeather(data.current.weather_code)}</p></div>
                        <div className={clsx(
                            'text-lg md:text-xl',
                            '[&_svg]:text-blue-200'
                        )}>
                            <div className="flex gap-2"><ThermometerIcon /><p className={clsx(
                                data?.current.temperature_2m <= 12 && "text-blue-300",
                                data?.current.temperature_2m > 12 &&
                                data?.current.temperature_2m <= 25 &&
                                "text-green-300",
                                data?.current.temperature_2m > 25 && "text-red-300"
                            )}>{data.current.temperature_2m} {data.current_units.temperature_2m}</p></div>
                            <div className="flex gap-2"><WindIcon /><p>{data.current.wind_speed_10m} {data.current_units.wind_speed_10m}</p></div>
                            <div className="flex gap-2"><DropletIcon /><p>{data.current.relative_humidity_2m} {data.current_units.relative_humidity_2m}</p></div>
                        </div>
                    </div>
                </>
                )}
            </div>
        </div>
    );
}
