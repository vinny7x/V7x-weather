export function getWeatherIcon(weatherCode: number, isDay: number) {
  const isDayString = isDay ? 'day' : 'night';
  
  switch (weatherCode) {

    // Céu limpo
    case 0:
    case 1:
      return `weatherIcons/clear-${isDayString}.svg`;

    // Parcialmente nublado
    case 2:
      return `weatherIcons/partly-cloudy-${isDayString}.svg`;

    // Nublado
    case 3:
      return `weatherIcons/overcast-${isDayString}.svg`;

    // Neblina / nevoeiro
    case 45:
    case 48:
      return `weatherIcons/fog-${isDayString}.svg`;

    // Chuvisco / drizzle
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return `weatherIcons/drizzle.svg`;

    // Chuva
    case 61:
    case 63:
    case 65:
      return `weatherIcons/rain.svg`;

    // Chuva congelante
    case 66:
    case 67:
      return `weatherIcons/sleet.svg`;

    // Neve
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return `weatherIcons/snow.svg`;

    // Pancadas de chuva
    case 80:
    case 81:
    case 82:
      return `weatherIcons/rain.svg`;

    // Tempestade sem granizo
    case 95:
      return `weatherIcons/thunderstorms-${isDayString}.svg`;

    // Tempestade com granizo
    case 96:
    case 99:
      return `weatherIcons/hail.svg`;
    default:
      return 'weatherIcons/not-available.svg';
  }
}
