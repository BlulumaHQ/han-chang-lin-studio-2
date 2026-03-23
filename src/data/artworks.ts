// Batch 1
import emitFlow1109 from "@/assets/emit-flow-1109.webp";
import emitFlow1308 from "@/assets/emit-flow-1308.webp";
import emitFlow1506 from "@/assets/emit-flow-1506.webp";
import emitFlow1603 from "@/assets/emit-flow-1603.webp";
import emitFlow1609 from "@/assets/emit-flow-1609.webp";
import emitFlow1806 from "@/assets/emit-flow-1806.webp";
import emitFlow2102_1 from "@/assets/emit-flow-2102-1.webp";
import emitFlow2102_2 from "@/assets/emit-flow-2102-2.webp";
import emitFlow2102_3 from "@/assets/emit-flow-2102-3.webp";
import emitFlow2108 from "@/assets/emit-flow-2108.webp";
// Batch 2
import emitFlow1208 from "@/assets/emit-flow-1208.webp";
import emitFlow1305 from "@/assets/emit-flow-1305.webp";
import emitFlow1501 from "@/assets/emit-flow-1501.webp";
import emitFlow1608 from "@/assets/emit-flow-1608.webp";
import emitFlow1708 from "@/assets/emit-flow-1708.webp";
import emitFlow1903 from "@/assets/emit-flow-1903.webp";
import emitFlow2014 from "@/assets/emit-flow-2014.webp";
import emitFlow2103 from "@/assets/emit-flow-2103.webp";
import emitFlow2106 from "@/assets/emit-flow-2106.webp";
import emitFlow2509 from "@/assets/emit-flow-2509.webp";
// Batch 3
import emitFlow1108 from "@/assets/emit-flow-1108.webp";
import emitFlow1301 from "@/assets/emit-flow-1301.webp";
import emitFlow1304 from "@/assets/emit-flow-1304.webp";
import emitFlow1706 from "@/assets/emit-flow-1706.webp";
import emitFlow1803 from "@/assets/emit-flow-1803.webp";
import emitFlow2502 from "@/assets/emit-flow-2502.webp";
import emitFlow2506 from "@/assets/emit-flow-2506.webp";
import emitFlow2507 from "@/assets/emit-flow-2507.webp";
import emitFlow2508 from "@/assets/emit-flow-2508.webp";
import emitFlow2510 from "@/assets/emit-flow-2510.webp";
// Batch 4
import emitFlow1008 from "@/assets/emit-flow-1008.webp";
import emitFlow1008b from "@/assets/emit-flow-1008-b.webp";
import emitFlow1108b from "@/assets/emit-flow-1108-b.webp";
import emitFlow1302 from "@/assets/emit-flow-1302.webp";
import emitFlow1307 from "@/assets/emit-flow-1307.webp";
import emitFlow1508 from "@/assets/emit-flow-1508.webp";

export type ColorCategory = "Ocean Depths" | "Emerald Flow" | "Golden Light" | "Crimson Energy" | "Celestial Mist" | "Earth Tones";

export interface Artwork {
  id: string;
  title: string;
  year: number;
  medium: string;
  size: string;
  status: "Available" | "Private Collection";
  image: string;
  selected: boolean;
  hero: boolean;
  colorCategory: ColorCategory;
}

export const artworks: Artwork[] = [
  // Batch 1
  { id: "1109", title: "Emit Flow #1109", year: 2011, medium: "Mixed Media on Canvas", size: "32 × 52 in", status: "Private Collection", image: emitFlow1109, selected: false, hero: false, colorCategory: "Ocean Depths" },
  { id: "1308", title: "Emit Flow #1308", year: 2013, medium: "Mixed Media on Canvas", size: "36 × 48 in", status: "Private Collection", image: emitFlow1308, selected: false, hero: false, colorCategory: "Golden Light" },
  { id: "1506", title: "Emit Flow #1506", year: 2015, medium: "Mixed Media on Canvas", size: "32 × 36 in", status: "Available", image: emitFlow1506, selected: true, hero: false, colorCategory: "Ocean Depths" },
  { id: "1603", title: "Emit Flow #1603", year: 2016, medium: "Mixed Media on Canvas", size: "50 × 30 in", status: "Private Collection", image: emitFlow1603, selected: false, hero: false, colorCategory: "Ocean Depths" },
  { id: "1609", title: "Emit Flow #1609", year: 2016, medium: "Mixed Media on Canvas", size: "48 × 72 in", status: "Available", image: emitFlow1609, selected: true, hero: false, colorCategory: "Ocean Depths" },
  { id: "1806", title: "Emit Flow #1806", year: 2018, medium: "Mixed Media on Canvas", size: "32 × 52 in", status: "Available", image: emitFlow1806, selected: true, hero: false, colorCategory: "Emerald Flow" },
  { id: "2102-1", title: "Emit Flow #2102-1", year: 2021, medium: "Mixed Media on Canvas", size: "36 × 48 in", status: "Private Collection", image: emitFlow2102_1, selected: true, hero: false, colorCategory: "Earth Tones" },
  { id: "2102-2", title: "Emit Flow #2102-2", year: 2021, medium: "Mixed Media on Canvas", size: "36 × 48 in", status: "Private Collection", image: emitFlow2102_2, selected: false, hero: false, colorCategory: "Earth Tones" },
  { id: "2102-3", title: "Emit Flow #2102-3", year: 2021, medium: "Mixed Media on Canvas", size: "36 × 48 in", status: "Private Collection", image: emitFlow2102_3, selected: false, hero: false, colorCategory: "Earth Tones" },
  { id: "2108", title: "Emit Flow #2108", year: 2021, medium: "Mixed Media on Canvas", size: "30 × 58 in", status: "Private Collection", image: emitFlow2108, selected: false, hero: false, colorCategory: "Crimson Energy" },
  // Batch 2
  { id: "1208", title: "Emit Flow #1208", year: 2012, medium: "Mixed Media on Canvas", size: "30 × 40 in", status: "Available", image: emitFlow1208, selected: true, hero: false, colorCategory: "Emerald Flow" },
  { id: "1305", title: "Emit Flow #1305", year: 2013, medium: "Mixed Media on Canvas", size: "24 × 36 in", status: "Private Collection", image: emitFlow1305, selected: false, hero: false, colorCategory: "Crimson Energy" },
  { id: "1501", title: "Emit Flow #1501", year: 2015, medium: "Mixed Media on Canvas", size: "28 × 52 in", status: "Private Collection", image: emitFlow1501, selected: false, hero: false, colorCategory: "Crimson Energy" },
  { id: "1608", title: "Emit Flow #1608", year: 2016, medium: "Mixed Media on Canvas", size: "36 × 48 in", status: "Private Collection", image: emitFlow1608, selected: true, hero: false, colorCategory: "Celestial Mist" },
  { id: "1708", title: "Emit Flow #1708", year: 2017, medium: "Mixed Media on Canvas", size: "30 × 40 in", status: "Available", image: emitFlow1708, selected: true, hero: false, colorCategory: "Ocean Depths" },
  { id: "1903", title: "Emit Flow #1903", year: 2019, medium: "Mixed Media on Canvas", size: "30 × 40 in", status: "Available", image: emitFlow1903, selected: false, hero: false, colorCategory: "Ocean Depths" },
  { id: "2014", title: "Emit Flow #2014", year: 2020, medium: "Mixed Media on Canvas", size: "24 × 36 in", status: "Private Collection", image: emitFlow2014, selected: false, hero: false, colorCategory: "Golden Light" },
  { id: "2103", title: "Emit Flow #2103", year: 2021, medium: "Mixed Media on Canvas", size: "30 × 40 in", status: "Available", image: emitFlow2103, selected: false, hero: false, colorCategory: "Earth Tones" },
  { id: "2106", title: "Emit Flow #2106", year: 2021, medium: "Mixed Media on Canvas", size: "30 × 58 in", status: "Private Collection", image: emitFlow2106, selected: false, hero: false, colorCategory: "Emerald Flow" },
  { id: "2509", title: "Emit Flow #2509", year: 2025, medium: "Mixed Media on Canvas", size: "24 × 30 in", status: "Available", image: emitFlow2509, selected: true, hero: false, colorCategory: "Celestial Mist" },
  // Batch 3
  { id: "1103", title: "Emit Flow #1103", year: 2011, medium: "Mixed Media on Canvas", size: "24 × 24 in", status: "Private Collection", image: emitFlow1108, selected: false, hero: false, colorCategory: "Celestial Mist" },
  { id: "1301", title: "Emit Flow #1301", year: 2013, medium: "Mixed Media on Canvas", size: "18 × 36 in", status: "Private Collection", image: emitFlow1301, selected: true, hero: true, colorCategory: "Emerald Flow" },
  { id: "1304", title: "Emit Flow #1304", year: 2013, medium: "Mixed Media on Canvas", size: "20 × 52 in", status: "Private Collection", image: emitFlow1304, selected: false, hero: false, colorCategory: "Ocean Depths" },
  { id: "1706", title: "Emit Flow #1706", year: 2017, medium: "Mixed Media on Canvas", size: "22 × 26 in", status: "Private Collection", image: emitFlow1706, selected: true, hero: true, colorCategory: "Ocean Depths" },
  { id: "1803", title: "Emit Flow #1803", year: 2018, medium: "Mixed Media on Canvas", size: "16 × 20 in", status: "Private Collection", image: emitFlow1803, selected: true, hero: false, colorCategory: "Celestial Mist" },
  { id: "2502", title: "Emit Flow #2502", year: 2025, medium: "Mixed Media on Canvas", size: "20 × 30 in", status: "Private Collection", image: emitFlow2502, selected: true, hero: false, colorCategory: "Emerald Flow" },
  { id: "2506", title: "Emit Flow #2506", year: 2025, medium: "Mixed Media on Canvas", size: "22 × 26 in", status: "Available", image: emitFlow2506, selected: false, hero: false, colorCategory: "Emerald Flow" },
  { id: "2507", title: "Emit Flow #2507", year: 2025, medium: "Mixed Media on Canvas", size: "22 × 26 in", status: "Available", image: emitFlow2507, selected: false, hero: false, colorCategory: "Golden Light" },
  { id: "2508", title: "Emit Flow #2508", year: 2025, medium: "Mixed Media on Canvas", size: "22 × 26 in", status: "Available", image: emitFlow2508, selected: true, hero: true, colorCategory: "Celestial Mist" },
  { id: "2510", title: "Emit Flow #2510", year: 2025, medium: "Mixed Media on Canvas", size: "22 × 26 in", status: "Available", image: emitFlow2510, selected: false, hero: false, colorCategory: "Earth Tones" },
  // Batch 4
  { id: "1003", title: "Emit Flow #1003", year: 2010, medium: "Mixed Media on Canvas", size: "30 × 40 in", status: "Available", image: emitFlow1008, selected: false, hero: false, colorCategory: "Earth Tones" },
  { id: "1008-b", title: "Emit Flow #1008", year: 2010, medium: "Mixed Media on Canvas", size: "18 × 36 in", status: "Available", image: emitFlow1008b, selected: false, hero: false, colorCategory: "Earth Tones" },
  { id: "1108-b", title: "Emit Flow #1108", year: 2011, medium: "Mixed Media on Canvas", size: "22 × 28 in", status: "Private Collection", image: emitFlow1108b, selected: false, hero: false, colorCategory: "Emerald Flow" },
  { id: "1302", title: "Emit Flow #1302", year: 2013, medium: "Mixed Media on Canvas", size: "22 × 28 in", status: "Available", image: emitFlow1302, selected: true, hero: true, colorCategory: "Crimson Energy" },
  { id: "1307", title: "Emit Flow #1307", year: 2013, medium: "Mixed Media on Canvas", size: "22 × 32 in", status: "Private Collection", image: emitFlow1307, selected: false, hero: false, colorCategory: "Golden Light" },
  { id: "1508", title: "Emit Flow #1508", year: 2015, medium: "Mixed Media on Canvas", size: "22 × 32 in", status: "Private Collection", image: emitFlow1508, selected: false, hero: false, colorCategory: "Earth Tones" },
];

/** Shuffle array using Fisher-Yates */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Get randomized homepage data */
export function getRandomHomeArtworks() {
  let heroCandidates = artworks.filter((a) => a.hero);
  if (heroCandidates.length === 0) {
    heroCandidates = artworks.filter((a) => a.selected);
  }
  const heroArtworks = shuffle(heroCandidates).slice(0, 3);
  const heroIds = new Set(heroArtworks.map((a) => a.id));

  const selectedCandidates = artworks.filter((a) => a.selected && !heroIds.has(a.id));
  const remaining = artworks.filter((a) => !a.selected && !heroIds.has(a.id));
  const selectedWorks = shuffle([...selectedCandidates, ...remaining]).slice(0, 12);

  return { heroArtworks, selectedWorks };
}
