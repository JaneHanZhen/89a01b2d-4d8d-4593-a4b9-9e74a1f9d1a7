import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme, getCurrentSeason } from '../context/ThemeContext';
import SeasonSelector from '../components/SeasonSelector';

export default function SeasonsScreen() {
  const { colors, currentSeason } = useTheme();
  const detectedSeason = getCurrentSeason();

  const getSeasonDescription = (season: string) => {
    switch (season) {
      case 'spring':
        return 'Spring brings renewal and growth with fresh greens and blooming flowers.';
      case 'summer':
        return 'Summer is vibrant and warm with bright blues and sunny energy.';
      case 'fall':
        return 'Fall features warm oranges and browns as leaves change and temperatures cool.';
      case 'winter':
        return 'Winter brings cool blues and whites with a calm, peaceful atmosphere.';
      default:
        return '';
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.header, { color: colors.text }]}>
          Seasonal Colors
        </Text>
        <Text style={[styles.subheader, { color: colors.text }]}>
          The app's color theme changes based on the current season.
        </Text>
        
        <View style={[styles.infoCard, { borderColor: colors.primary }]}>
          <Text style={[styles.infoTitle, { color: colors.primary }]}>
            Current Season: {currentSeason.charAt(0).toUpperCase() + currentSeason.slice(1)}
          </Text>
          <Text style={[styles.infoText, { color: colors.text }]}>
            {getSeasonDescription(currentSeason)}
          </Text>
        </View>

        <View style={[styles.infoCard, { borderColor: colors.primary }]}>
          <Text style={[styles.infoTitle, { color: colors.primary }]}>
            Detected Season: {detectedSeason.charAt(0).toUpperCase() + detectedSeason.slice(1)}
          </Text>
          <Text style={[styles.infoText, { color: colors.text }]}>
            Based on the current date on your device.
          </Text>
        </View>
      </View>

      <SeasonSelector />

      <View style={[styles.colorPreview, { backgroundColor: colors.card }]}>
        <Text style={[styles.colorTitle, { color: colors.text }]}>Current Color Palette</Text>
        
        <View style={styles.colorRow}>
          <View style={styles.colorItem}>
            <View style={[styles.colorSwatch, { backgroundColor: colors.primary }]} />
            <Text style={[styles.colorLabel, { color: colors.text }]}>Primary</Text>
          </View>
          
          <View style={styles.colorItem}>
            <View style={[styles.colorSwatch, { backgroundColor: colors.secondary }]} />
            <Text style={[styles.colorLabel, { color: colors.text }]}>Secondary</Text>
          </View>
        </View>
        
        <View style={styles.colorRow}>
          <View style={styles.colorItem}>
            <View style={[styles.colorSwatch, { backgroundColor: colors.background }]} />
            <Text style={[styles.colorLabel, { color: colors.text }]}>Background</Text>
          </View>
          
          <View style={styles.colorItem}>
            <View style={[styles.colorSwatch, { backgroundColor: colors.text }]} />
            <Text style={[styles.colorLabel, { color: colors.text }]}>Text</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    marginBottom: 16,
    opacity: 0.8,
  },
  infoCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
  },
  colorPreview: {
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  colorTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  colorItem: {
    alignItems: 'center',
  },
  colorSwatch: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  colorLabel: {
    fontSize: 14,
  },
});