import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { Header } from "../../components/Header";
import { WeatherCard } from "../../components/WeatherCard";
import { useGeolocalization } from "../../hooks/useGeolocation";

export function Home() {
    const { coords, geoError } = useGeolocalization();

    const { data, isLoading } = useQuery({
        queryKey: ["weather", coords],
        enabled: !!coords,
        queryFn: async () => {
            const res = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${coords!.lat}&longitude=${coords!.lon}&current=temperature_2m,relative_humidity_2m,is_day,rain,wind_speed_10m,weather_code,apparent_temperature`
            );
            if (!res.ok) throw new Error("Falha ao buscar clima");
            return res.json();
        },
    });

    if (geoError) {
        return (
            <div
                className={clsx(
                    'text-red-500 bg-neutral-600 rounded-lg border-2 border-red-400',
                    'font-semibold text-center m-4 p-4',
                    'text-lg md:text-xl'
                )}
            >
                Ops! Não conseguimos acessar sua localização. Ative o acesso no navegador para ver o clima da sua região.
            </div>
        );
    }
    return (
        <>
            <Header />
            <WeatherCard data={data} isLoading={isLoading} coords={coords} /></>
    );
}