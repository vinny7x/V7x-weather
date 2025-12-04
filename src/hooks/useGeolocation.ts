import { useEffect, useState } from "react";

export function useGeolocalization() {
    const [coords, setCoords] = useState<{ lat: number, lon: number; } | null>(null);
    const [geoError, setGeoError] = useState<boolean>(false);

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
            }
        );
    }, []);
    return { coords, geoError };
}