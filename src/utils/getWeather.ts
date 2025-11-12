export function getWeather(weatherCode:number):string {
    switch(weatherCode) {
        case 0:
            return 'Céu limpo'
        case 1:
        case 2:
        case 3:
            return 'Parcialmente nublado'
        case 45:
        case 46:
        case 47:
        case 48:
            return 'Neblina'
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
            return 'Chuvisco'
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
            return 'Neve'
        case 80:
        case 81:
        case 82:
            return 'Pancadas de chuva'
        case 95:
        case 96:
        case 97:
        case 98:
        case 99:
            return 'Tempestade'
        default:
      return "Desconhecido";
    }
}