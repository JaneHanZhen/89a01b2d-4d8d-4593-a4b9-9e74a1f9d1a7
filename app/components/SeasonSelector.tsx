import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme, Season } from '../context/ThemeContext';

export default function SeasonSelector() {
  const { currentSeason, changeSeason, colors } = useTheme();
  
  const seasons: Season[] = ['spring', 'summer', 'fall', 'winter'];
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Change Season</Text>
      <View style={styles.buttonContainer}>
        {seasons.map((season) => (
          <TouchableOpacity
            key={season}
            style={[
              styles.seasonButton,
              { backgroundColor: season === currentSeason ? colors.primary : colors.card },
              { borderColor: colors.primary }
            ]}
            onPress={() => changeSeason(season)}
          >
            <Text
              style={[
                styles.seasonText,
                { color: season === currentSeason ? '#fff' : colors.text }
              ]}
            >
              {season.charAt(0).toUpperCase() + season.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  seasonButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginVertical: 4,
    width: '48%',
    alignItems: 'center',
    borderWidth: 1,
  },
  seasonText: {
    fontWeight: '500',
  },
});