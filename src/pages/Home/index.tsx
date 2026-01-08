import clsx from "clsx";
import { Header } from "../../components/Header";
import { WeatherCard } from "../../components/WeatherCard";
import { useGeolocalization } from "../../hooks/useGeolocation";
import { useWeather } from "../../hooks/useWeather";
import { ForecastTable } from "../../components/ForecastTable";

export function Home() {
    const { coords, geoError } = useGeolocalization();
    const { data, isLoading } = useWeather(coords);

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
            {data && data.daily && (
                <>
                <h1 className="text-2xl text-center text-white">Clima atual</h1>
                    <WeatherCard data={data} isLoading={isLoading} coords={coords} />
                <h1 className="text-2xl text-center text-white">Previsão</h1>
                    <ForecastTable daily={data.daily} />
                </>
            )}

        </>
    );
}