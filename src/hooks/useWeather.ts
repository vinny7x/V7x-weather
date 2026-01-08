import { useQuery } from "@tanstack/react-query";
export function useWeather(coords: { lat: number; lon: number; } | null) {
    return useQuery({
        queryKey: ["weather", coords?.lat, coords?.lon],
        enabled: !!coords,
        placeholderData: (prev) => prev,
        queryFn: async () => {
            if (!coords) throw new Error("Coords ausentes");
            const res = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,relative_humidity_2m,is_day,rain,wind_speed_10m,weather_code,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weather_code`
            );
            if (!res.ok) throw new Error("Falha ao buscar clima");
            return res.json();
        },

    });
}