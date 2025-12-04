import { useQuery } from "@tanstack/react-query";

export function useReverseGeocode(coords: { lat: number; lon: number; } | null) {
    return useQuery({
        queryKey: ['location', coords],
        enabled: !!coords,
        queryFn: async () => {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${coords?.lat}&lon=${coords?.lon}&format=json`
            );
            if (!res.ok) throw new Error("Falha ao buscar clima");
            return res.json();
        },
    });
}


