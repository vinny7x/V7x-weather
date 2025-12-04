import {
  CloudDrizzleIcon, CloudFogIcon, CloudLightningIcon, CloudRainIcon,
  CloudSnowIcon, CloudyIcon, HelpCircleIcon, SunIcon
} from "lucide-react";

export const weatherIcons: Record<string, React.ReactNode> = {
  "Céu limpo": <SunIcon />,
  "Parcialmente nublado": <CloudyIcon />,
  "Neblina": <CloudFogIcon />,
  "Chuvisco": <CloudDrizzleIcon />,
  "Neve": <CloudSnowIcon />,
  "Pancadas de chuva": <CloudRainIcon />,
  "Tempestade": <CloudLightningIcon />,
  "Desconhecido": <HelpCircleIcon />,
};