window.ENEMY_CONFIG = {
  "meta": {
    "description": "Unified enemy balancing config. Keep gameplay tuning here (UFOs, space bugs, and per-level spawn setup).",
    "version": 2,
    "generatedAt": "2026-05-05T00:00:00.000Z"
  },
  "sections": {
    "ufoVariants": "UFO archetypes with recolor palettes and base combat stats.",
    "spaceBugs": "Space bug family stats, egg behavior, and hatch probabilities.",
    "levels": "Per-level spawn pacing and weighted enemy composition."
  },
  "basePalette": [
    "#222034",
    "#24d2c9",
    "#35427e",
    "#443a62",
    "#4c5458",
    "#5affe1",
    "#5b7ab8",
    "#5e6c72",
    "#84fff4",
    "#9aadb7",
    "#a5fefb",
    "#bacbd3",
    "#cafef5",
    "#feffff"
  ],
  "ufoVariants": [
    {
      "id": "ufo",
      "name": "UFO",
      "description": "Baseline saucer used as the default enemy body and color profile.",
      "stats": {
        "size": 82,
        "hp": 1,
        "speed": 0.65,
        "score": 150,
        "spawnWeight": 100
      },
      "palette": {}
    },
    {
      "id": "heavy_ufo",
      "name": "Heavy UFO",
      "description": "Tankier frontline UFO with lower speed and higher durability.",
      "stats": {
        "size": 82,
        "hp": 2,
        "speed": 0.55,
        "score": 250,
        "spawnWeight": 100
      },
      "palette": {
        "#24d2c9": "#d1cc23",
        "#5affe1": "#fcff5c",
        "#84fff4": "#f1ff85",
        "#cafef5": "#f8fecd",
        "#a5fefb": "#fdfea4",
        "#4c5458": "#424648",
        "#5e6c72": "#4b5458",
        "#5b7ab8": "#b2b95b",
        "#35427e": "#797e35",
        "#9aadb7": "#777f83",
        "#bacbd3": "#8b8b89"
      }
    },
    {
      "id": "elite_ufo",
      "name": "Elite UFO",
      "description": "High-threat UFO with strong durability and high score reward.",
      "stats": {
        "size": 82,
        "hp": 3,
        "speed": 0.6,
        "score": 500,
        "spawnWeight": 100
      },
      "palette": {
        "#24d2c9": "#d12323",
        "#35427e": "#7e3535",
        "#5affe1": "#ff5c5c",
        "#84fff4": "#ff8585",
        "#a5fefb": "#fea4a4",
        "#cafef5": "#fecdcd",
        "#5b7ab8": "#b95b5b",
        "#4c5458": "#3a3e40",
        "#5e6c72": "#383f43",
        "#9aadb7": "#6e7b81",
        "#bacbd3": "#848f94"
      }
    },
    {
      "id": "scout_ufo",
      "name": "Scout UFO",
      "description": "Fast skirmisher variant for pressure spikes and mobility threats.",
      "stats": {
        "size": 82,
        "hp": 1,
        "speed": 1.5,
        "score": 1000,
        "spawnWeight": 100
      },
      "palette": {
        "#24d2c9": "#23d146",
        "#5affe1": "#5cff7c",
        "#84fff4": "#85ff93",
        "#5b7ab8": "#5bb977",
        "#35427e": "#357e41",
        "#a5fefb": "#a4feb3",
        "#cafef5": "#cdfed5",
        "#9aadb7": "#dedbc9",
        "#4c5458": "#57574c",
        "#5e6c72": "#a9a293",
        "#bacbd3": "#d5d2be"
      }
    },
    {
      "id": "UFO_mothership",
      "name": "UFO Mothership",
      "description": "Boss-style carrier that can deploy additional enemies.",
      "stats": {
        "size": 150,
        "hp": 5,
        "speed": 0.9,
        "score": 1000,
        "spawnWeight": 100
      },
      "palette": {
        "#84fff4": "#000000",
        "#9aadb7": "#616465",
        "#bacbd3": "#858b8e",
        "#24d2c9": "#d18923",
        "#5affe1": "#ffcb5c",
        "#a5fefb": "#cb1a1a",
        "#5b7ab8": "#ce2727",
        "#cafef5": "#feeacd",
        "#feffff": "#f57600"
      }
    }
  ],
  "spaceBugs": {
    "description": "Organic enemy family. Mother bugs can lay eggs, eggs hatch into bug types.",
    "bug": {
      "description": "Common bug unit with moderate speed and low durability.",
      "hp": 2,
      "speed": 0.8,
      "size": 75.44,
      "score": 150,
      "growthDuration": 3,
      "juvenileHp": 1,
      "juvenileScale": 0.45,
      "juvenileSpeedMultiplier": 0.7,
      "canLayEgg": false,
      "eggSpawnInterval": 0
    },
    "mother_bug": {
      "description": "Larger bug that periodically spawns eggs.",
      "hp": 3,
      "speed": 0.55,
      "size": 95.12,
      "score": 300,
      "growthDuration": 5,
      "juvenileHp": 1,
      "juvenileScale": 0.45,
      "juvenileSpeedMultiplier": 0.9,
      "canLayEgg": true,
      "eggSpawnInterval": 2
    },
    "egg": {
      "description": "Stationary hatch object that opens after hatchTimer.",
      "hp": 1,
      "speed": 0,
      "size": 20.5,
      "score": 50,
      "hatchTimer": 3,
      "postHatchTimer": 0.7
    },
    "hatchWeightsDescription": "Relative chance for which adult type is spawned when an egg hatches.",
    "hatchWeights": [
      {
        "type": "bug",
        "weight": 80
      },
      {
        "type": "mother_bug",
        "weight": 20
      }
    ]
  },
  "levels": {
    "1": {
      "name": "Level 1",
      "description": "Intro wave with mostly basic UFOs and occasional heavy units.",
      "spawnInterval": [1.0, 2.0],
      "formationSpawnRate": 0.00,
      "enemyPool": [
        {
          "type": "ufo",
          "weight": 80
        },
        {
          "type": "heavy_ufo",
          "weight": 20
        }
      ]
    },
    "2": {
      "name": "Level 2",
      "description": "Mixed pressure: heavier UFOs plus first bug encounters.",
      "spawnInterval": [1.0, 2.0],
      "formationSpawnRate": 0.00,
      "enemyPool": [
        {
          "type": "heavy_ufo",
          "weight": 55
        },
        {
          "type": "elite_ufo",
          "weight": 15
        },
        {
          "type": "bug",
          "weight": 20
        }
      ]
    },
    "3": {
      "name": "Level 3",
      "description": "Bug-dominant level with elite UFO support.",
      "spawnInterval": [0.9, 1.75],
      "formationSpawnRate": 0.10,
      "enemyPool": [
        {
          "type": "bug",
          "weight": 55
        },
        {
          "type": "mother_bug",
          "weight": 25
        },
        {
          "type": "elite_ufo",
          "weight": 5
        },
        {
          "type": "heavy_ufo",
          "weight": 5
        }
      ]
    },
    "4": {
      "name": "Level 4",
      "description": "Late-game pressure with elites, UFO Mothership presence, and bug support.",
      "spawnInterval": [0.85, 1.1],
      "formationSpawnRate": 0.15,
      "enemyPool": [
        {
          "type": "elite_ufo",
          "weight": 45
        },
        {
          "type": "UFO_mothership",
          "weight": 35
        },
        {
          "type": "bug",
          "weight": 15
        },
        {
          "type": "mother_bug",
          "weight": 5
        }
      ]
    }
  },
  "formations": {
    "spawnRate": 0.10,
    "line": {
      "countMin": 5,
      "countMax": 10,
      "spacingMult": 0.9,
      "speedBonus": 1.2,
      "weight": 35
    },
    "v": {
      "sizeOptions": [5, 7, 9, 11],
      "spacingMult": 0.85,
      "spreadMult": 0.65,
      "speedBonus": 1.2,
      "weight": 35
    },
    "boss": {
      "orbitRadiusMult": 0.6,
      "orbitSpeed": 0.9,
      "minionsCount": 6,
      "weight": 30
    }
  },
  "endlessMode": {
    "enabled": true,
    "phase1Duration": 120,
    "phase2Duration": 300,
    "phase1StartLevel": 1,
    "phase1EndLevel": 4,
    "phase2MaxMultiplier": 2.0,
    "baseEnemyPool": [
      { "type": "elite_ufo", "weight": 45 },
      { "type": "UFO_mothership", "weight": 35 },
      { "type": "bug", "weight": 15 },
      { "type": "mother_bug", "weight": 10 }
    ],
    "spawnIntervalMin": 0.4,
    "spawnIntervalMax": 0.8
  }
}
;
