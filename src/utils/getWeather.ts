export function getWeather(weatherCode: number): string {
    switch (weatherCode) {

        case 0:
        case 1:    
            return 'Céu limpo'
        case 2:
            return 'Parcialmente nublado'
        case 3:
            return 'Nublado'
        case 45:
            return 'Neblina'
        case 48:
            return 'Neblina congelante'

        case 51:
            return 'Chuvisco leve'
        case 53:
            return 'Chuvisco moderado'
        case 55:
            return 'Chuvisco intenso'

        case 56:
            return 'Chuvisco congelante leve'
        case 57:
            return 'Chuvisco congelante intenso'

        case 61:
            return 'Chuva leve'
        case 63:
            return 'Chuva'
        case 65:
            return 'Chuva intensa'

        case 66:
            return 'Chuva congelante leve'
        case 67:
            return 'Chuva congelante intensa'

        case 71:
            return 'Neve leve'
        case 73:
            return 'Neve'
        case 75:
            return 'Neve intensa'

        case 77:
            return 'Neve granular'

        case 80:
            return 'Pancadas de chuva leves'
        case 81:
            return 'Pancadas de chuva moderadas'
        case 82:
            return 'Pancadas de chuva intensas'

        case 85:
            return 'Pancadas de neve leves'
        case 86:
            return 'Pancadas de neve intensas'

        case 95:
            return 'Tempestade'
        case 96:
            return 'Tempestade com granizo'
        case 99:
            return 'Tempestade com granizo forte'

        default:
            return ''
    }
}
