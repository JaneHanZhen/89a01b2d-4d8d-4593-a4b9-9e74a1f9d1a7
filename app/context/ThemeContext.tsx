import React, { createContext, useContext, useState, useEffect } from 'react';

// Define our seasons
export type Season = 'spring' | 'summer' | 'fall' | 'winter';

// Define theme colors for each season
interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  tabBarActive: string;
}

interface ThemeContextType {
  currentSeason: Season;
  colors: ThemeColors;
  changeSeason: (season: Season) => void;
}

// Color palettes for each season
const seasonalColors: Record<Season, ThemeColors> = {
  spring: {
    primary: '#4CAF50', // Fresh green
    secondary: '#E91E63', // Pink blossom
    background: '#F9FBE7', // Light cream
    card: '#DCEDC8', // Light green
    text: '#33691E', // Dark green
    tabBarActive: '#8BC34A', // Lime green
  },
  summer: {
    primary: '#03A9F4', // Sky blue
    secondary: '#FF9800', // Orange sunset
    background: '#E3F2FD', // Light blue
    card: '#BBDEFB', // Pale blue
    text: '#01579B', // Deep blue
    tabBarActive: '#29B6F6', // Light blue
  },
  fall: {
    primary: '#FF5722', // Deep orange
    secondary: '#795548', // Brown
    background: '#FFF3E0', // Light orange
    card: '#FFCCBC', // Pale orange
    text: '#BF360C', // Dark orange
    tabBarActive: '#FF7043', // Light orange
  },
  winter: {
    primary: '#3F51B5', // Indigo
    secondary: '#CFD8DC', // Blue grey
    background: '#E8EAF6', // Light indigo
    card: '#C5CAE9', // Pale indigo
    text: '#1A237E', // Dark indigo
    tabBarActive: '#5C6BC0', // Light indigo
  },
};

// Utility function to determine current season based on date
export const getCurrentSeason = (): Season => {
  const now = new Date();
  const month = now.getMonth(); // 0-11 (Jan-Dec)
  
  // Northern hemisphere seasons
  if (month >= 2 && month <= 4) return 'spring'; // Mar-May
  if (month >= 5 && month <= 7) return 'summer'; // Jun-Aug
  if (month >= 8 && month <= 10) return 'fall';  // Sep-Nov
  return 'winter'; // Dec-Feb
};

// Create context with default values
const ThemeContext = createContext<ThemeContextType>({
  currentSeason: 'spring',
  colors: seasonalColors.spring,
  changeSeason: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSeason, setCurrentSeason] = useState<Season>(getCurrentSeason());
  
  // Set theme colors based on current season
  const colors = seasonalColors[currentSeason];
  
  // Function to manually change season
  const changeSeason = (season: Season) => {
    setCurrentSeason(season);
  };
  
  // Initialize season based on current date
  useEffect(() => {
    setCurrentSeason(getCurrentSeason());
  }, []);
  
  return (
    <ThemeContext.Provider value={{ currentSeason, colors, changeSeason }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);