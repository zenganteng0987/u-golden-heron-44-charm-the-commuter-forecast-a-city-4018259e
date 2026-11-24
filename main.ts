// SPDX-License-Identifier: MIT
// Charm the Commuter: Forecast a City That Isn't
// Writes one line of weather forecast (120 characters) to /output/entry.txt.
// Chosen line: a morning broadcast greeting, a named invented city, real
// forecast numbers, and one concrete commuter detail (pigeons vs. sandwich).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Good morning, Nibblewick: cloudy, 16°C, with a 90% chance of pigeons stealing your sandwich before the 8:15 bus arrives.";

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ENTRY + "\n", "utf8");
