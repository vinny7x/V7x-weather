export function getTempColor(temp: number) {
    if (temp <= 12) return "text-blue-300";
    if (temp <= 25) return "text-green-300";
    return "text-red-300";
}
