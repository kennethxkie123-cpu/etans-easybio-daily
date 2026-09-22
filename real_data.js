/**
 * REAL LAYERHUB SYSTEM DATABASE EXPORT
 * Extracted directly from live SQLite database (layer_hub.sqlite)
 */

const REAL_SYSTEM_DATA = {
  dates: ["2026-07-11", "2026-07-12", "2026-07-13", "2026-07-14", "2026-07-15", "2026-07-16", "2026-07-17", "2026-07-18", "2026-07-19", "2026-07-20", "2026-07-21", "2026-07-22", "2026-07-23", "2026-07-24", "2026-07-25", "2026-07-26", "2026-07-27", "2026-07-28", "2026-07-29", "2026-07-30", "2026-07-31", "2026-08-01", "2026-08-02", "2026-08-03", "2026-08-04", "2026-08-05", "2026-08-06", "2026-08-07", "2026-08-08", "2026-08-09", "2026-08-10", "2026-08-11", "2026-08-12", "2026-08-13", "2026-08-14", "2026-08-15", "2026-08-16", "2026-08-17", "2026-08-18", "2026-08-19", "2026-08-20", "2026-08-21", "2026-08-22", "2026-08-23", "2026-08-24", "2026-08-25", "2026-08-26", "2026-08-27", "2026-08-28", "2026-08-29", "2026-08-30", "2026-08-31", "2026-09-01", "2026-09-02", "2026-09-03", "2026-09-04", "2026-09-05", "2026-09-06", "2026-09-07", "2026-09-08", "2026-09-09", "2026-09-10", "2026-09-11", "2026-09-12", "2026-09-13", "2026-09-14", "2026-09-15"],
  latestDate: "2026-09-15",
  buildings: [
  {
    "id": 1,
    "name": "Building A",
    "code": "A",
    "capacity": 7553,
    "status": "Healthy",
    "assignedFlokman": "Vicente",
    "flockId": 1,
    "birdCount": 7553,
    "strain": "HISEX WHITE",
    "ageWeeks": 79,
    "ageDays": 557,
    "isActive": true
  },
  {
    "id": 2,
    "name": "Building C",
    "code": "C",
    "capacity": 9708,
    "status": "Healthy",
    "assignedFlokman": "Reygie and Jemel",
    "flockId": 2,
    "birdCount": 9708,
    "strain": "HISEX WHITE",
    "ageWeeks": 51,
    "ageDays": 362,
    "isActive": true
  },
  {
    "id": 3,
    "name": "Building D",
    "code": "D",
    "capacity": 8626,
    "status": "Healthy",
    "assignedFlokman": "Dindo",
    "flockId": 3,
    "birdCount": 8626,
    "strain": "HISEX WHITE",
    "ageWeeks": 51,
    "ageDays": 357,
    "isActive": true
  },
  {
    "id": 5,
    "name": "Building H",
    "code": "H",
    "capacity": 12039,
    "status": "Healthy",
    "assignedFlokman": "Noel and Jerry",
    "flockId": 5,
    "birdCount": 12039,
    "strain": "BOBCOCK WHITE",
    "ageWeeks": 28,
    "ageDays": 197,
    "isActive": true
  },
  {
    "id": 6,
    "name": "Building G",
    "code": "G",
    "capacity": 9624,
    "status": "Healthy",
    "assignedFlokman": "Reymund",
    "flockId": 6,
    "birdCount": 9624,
    "strain": "HISEX WHITE",
    "ageWeeks": 102,
    "ageDays": 716,
    "isActive": false
  }
],
  flocks: [
  {
    "id": 1,
    "farm_id": 1,
    "building_id": 1,
    "bird_count": 7553,
    "start_date": 1783771669,
    "strain": "HISEX WHITE",
    "age_at_loading_weeks": 79,
    "age_at_loading_days": 4,
    "is_active": 1,
    "cull_date": null
  },
  {
    "id": 2,
    "farm_id": 1,
    "building_id": 2,
    "bird_count": 9708,
    "start_date": 1784371977,
    "strain": "HISEX WHITE",
    "age_at_loading_weeks": 51,
    "age_at_loading_days": 5,
    "is_active": 1,
    "cull_date": null
  },
  {
    "id": 3,
    "farm_id": 1,
    "building_id": 3,
    "bird_count": 8626,
    "start_date": 1784372047,
    "strain": "HISEX WHITE",
    "age_at_loading_weeks": 51,
    "age_at_loading_days": 0,
    "is_active": 1,
    "cull_date": null
  },
  {
    "id": 5,
    "farm_id": 1,
    "building_id": 5,
    "bird_count": 12039,
    "start_date": 1784372123,
    "strain": "BOBCOCK WHITE",
    "age_at_loading_weeks": 28,
    "age_at_loading_days": 1,
    "is_active": 1,
    "cull_date": null
  },
  {
    "id": 6,
    "farm_id": 1,
    "building_id": 6,
    "bird_count": 9624,
    "start_date": 1784372502,
    "strain": "HISEX WHITE",
    "age_at_loading_weeks": 102,
    "age_at_loading_days": 2,
    "is_active": 0,
    "cull_date": 1787907016
  }
],
  dailyRecordsMap: {
  "2026-07-11_1": {
    "date": "2026-07-11",
    "flockId": 1,
    "currentHeads": 7553,
    "mortalities": 1,
    "culls": 2,
    "cases": 18,
    "trays": 0,
    "totalPieces": 6480,
    "goodCrackPieces": 136,
    "badCrackPieces": 40,
    "misshapenPieces": 12,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 112.5,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 36.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "kenneth",
    "flockman": "VICENTE",
    "eggSorter": "amielyn"
  },
  "2026-07-18_1": {
    "date": "2026-07-18",
    "flockId": 1,
    "currentHeads": 7470,
    "mortalities": 3,
    "culls": 0,
    "cases": 17,
    "trays": 0,
    "totalPieces": 6120,
    "goodCrackPieces": 92,
    "badCrackPieces": 42,
    "misshapenPieces": 7,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 113.8,
    "weatherAm": "Hot",
    "weatherPm": "Rainy",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Amielyn"
  },
  "2026-07-18_2": {
    "date": "2026-07-18",
    "flockId": 2,
    "currentHeads": 9708,
    "mortalities": 3,
    "culls": 0,
    "cases": 21,
    "trays": 4,
    "totalPieces": 7680,
    "goodCrackPieces": 133,
    "badCrackPieces": 15,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.5,
    "gramsPerBird": 115.9,
    "weatherAm": "Hot",
    "weatherPm": "Rainy",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "elmer"
  },
  "2026-07-18_3": {
    "date": "2026-07-18",
    "flockId": 3,
    "currentHeads": 8620,
    "mortalities": 6,
    "culls": 0,
    "cases": 17,
    "trays": 10,
    "totalPieces": 6420,
    "goodCrackPieces": 162,
    "badCrackPieces": 72,
    "misshapenPieces": 7,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 110.2,
    "weatherAm": "Hot",
    "weatherPm": "Rainy",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "s/h120 2500 dose NCD+NDV+IBD vaccination",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-07-18_6": {
    "date": "2026-07-18",
    "flockId": 6,
    "currentHeads": 9617,
    "mortalities": 7,
    "culls": 0,
    "cases": 19,
    "trays": 10,
    "totalPieces": 7140,
    "goodCrackPieces": 209,
    "badCrackPieces": 77,
    "misshapenPieces": 12,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 22.0,
    "gramsPerBird": 114.4,
    "weatherAm": "Hot",
    "weatherPm": "Rainy",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Leonardo (Reymund absent)",
    "eggSorter": "jen"
  },
  "2026-07-18_5": {
    "date": "2026-07-18",
    "flockId": 5,
    "currentHeads": 12031,
    "mortalities": 8,
    "culls": 0,
    "cases": 28,
    "trays": 1,
    "totalPieces": 10110,
    "goodCrackPieces": 135,
    "badCrackPieces": 52,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 24.0,
    "gramsPerBird": 99.7,
    "weatherAm": "Hot",
    "weatherPm": "Rainy",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Admin",
    "flockman": "Noel and Wanie",
    "eggSorter": "Noraiza, Jen"
  },
  "2026-07-19_1": {
    "date": "2026-07-19",
    "flockId": 1,
    "currentHeads": 7467,
    "mortalities": 6,
    "culls": 15,
    "cases": 17,
    "trays": 1,
    "totalPieces": 6150,
    "goodCrackPieces": 74,
    "badCrackPieces": 53,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 113.8,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-07-19_2": {
    "date": "2026-07-19",
    "flockId": 2,
    "currentHeads": 9705,
    "mortalities": 6,
    "culls": 0,
    "cases": 21,
    "trays": 1,
    "totalPieces": 7590,
    "goodCrackPieces": 90,
    "badCrackPieces": 47,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 113.3,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "less half bag of feeds",
    "reportBy": "Kenneth",
    "flockman": "Rodson and Jemel",
    "eggSorter": "surren and Hasna"
  },
  "2026-07-19_3": {
    "date": "2026-07-19",
    "flockId": 3,
    "currentHeads": 8620,
    "mortalities": 13,
    "culls": 0,
    "cases": 17,
    "trays": 10,
    "totalPieces": 6420,
    "goodCrackPieces": 165,
    "badCrackPieces": 68,
    "misshapenPieces": 21,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 110.2,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Jesabel"
  },
  "2026-07-19_6": {
    "date": "2026-07-19",
    "flockId": 6,
    "currentHeads": 9617,
    "mortalities": 7,
    "culls": 0,
    "cases": 19,
    "trays": 7,
    "totalPieces": 7050,
    "goodCrackPieces": 170,
    "badCrackPieces": 62,
    "misshapenPieces": 6,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 22.0,
    "gramsPerBird": 114.4,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry (Reymund absent)",
    "eggSorter": "jenifer"
  },
  "2026-07-19_5": {
    "date": "2026-07-19",
    "flockId": 5,
    "currentHeads": 12031,
    "mortalities": 8,
    "culls": 0,
    "cases": 28,
    "trays": 6,
    "totalPieces": 10260,
    "goodCrackPieces": 126,
    "badCrackPieces": 349,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 24.0,
    "gramsPerBird": 99.7,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Noraiza abd Jen"
  },
  "2026-07-20_1": {
    "date": "2026-07-20",
    "flockId": 1,
    "currentHeads": 7446,
    "mortalities": 5,
    "culls": 6,
    "cases": 17,
    "trays": 2,
    "totalPieces": 6180,
    "goodCrackPieces": 77,
    "badCrackPieces": 52,
    "misshapenPieces": 6,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 114.2,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "s/h120 2,500 dose vaccination",
    "reportBy": "kenneth",
    "flockman": "Vicente",
    "eggSorter": "amielyn"
  },
  "2026-07-16_1": {
    "date": "2026-07-16",
    "flockId": 1,
    "currentHeads": 7510,
    "mortalities": 3,
    "culls": 21,
    "cases": 0,
    "trays": 0,
    "totalPieces": 0,
    "goodCrackPieces": 0,
    "badCrackPieces": 0,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 113.2,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Admin",
    "flockman": "Vicente",
    "eggSorter": null
  },
  "2026-07-17_1": {
    "date": "2026-07-17",
    "flockId": 1,
    "currentHeads": 7486,
    "mortalities": 2,
    "culls": 14,
    "cases": 0,
    "trays": 0,
    "totalPieces": 0,
    "goodCrackPieces": 0,
    "badCrackPieces": 0,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 113.5,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Admin",
    "flockman": "Vicente",
    "eggSorter": null
  },
  "2026-07-12_1": {
    "date": "2026-07-12",
    "flockId": 1,
    "currentHeads": 7550,
    "mortalities": 4,
    "culls": 4,
    "cases": 0,
    "trays": 0,
    "totalPieces": 0,
    "goodCrackPieces": 0,
    "badCrackPieces": 0,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 112.6,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Admin",
    "flockman": "VICENTE",
    "eggSorter": null
  },
  "2026-07-13_1": {
    "date": "2026-07-13",
    "flockId": 1,
    "currentHeads": 7542,
    "mortalities": 6,
    "culls": 2,
    "cases": 0,
    "trays": 0,
    "totalPieces": 0,
    "goodCrackPieces": 0,
    "badCrackPieces": 0,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 112.7,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Admin",
    "flockman": "VICENTE",
    "eggSorter": null
  },
  "2026-07-14_1": {
    "date": "2026-07-14",
    "flockId": 1,
    "currentHeads": 7534,
    "mortalities": 3,
    "culls": 10,
    "cases": 0,
    "trays": 0,
    "totalPieces": 0,
    "goodCrackPieces": 0,
    "badCrackPieces": 0,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 112.8,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Admin",
    "flockman": "VICENTE",
    "eggSorter": null
  },
  "2026-07-15_1": {
    "date": "2026-07-15",
    "flockId": 1,
    "currentHeads": 7521,
    "mortalities": 3,
    "culls": 8,
    "cases": 0,
    "trays": 0,
    "totalPieces": 0,
    "goodCrackPieces": 0,
    "badCrackPieces": 0,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 113.0,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Admin",
    "flockman": "VICENTE",
    "eggSorter": null
  },
  "2026-07-20_2": {
    "date": "2026-07-20",
    "flockId": 2,
    "currentHeads": 9699,
    "mortalities": 4,
    "culls": 0,
    "cases": 21,
    "trays": 8,
    "totalPieces": 7800,
    "goodCrackPieces": 78,
    "badCrackPieces": 30,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 113.4,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-07-20_3": {
    "date": "2026-07-20",
    "flockId": 3,
    "currentHeads": 8607,
    "mortalities": 6,
    "culls": 0,
    "cases": 17,
    "trays": 10,
    "totalPieces": 6420,
    "goodCrackPieces": 142,
    "badCrackPieces": 57,
    "misshapenPieces": 8,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 110.4,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-07-20_6": {
    "date": "2026-07-20",
    "flockId": 6,
    "currentHeads": 9610,
    "mortalities": 6,
    "culls": 0,
    "cases": 19,
    "trays": 6,
    "totalPieces": 7020,
    "goodCrackPieces": 138,
    "badCrackPieces": 76,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 22.0,
    "gramsPerBird": 114.5,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "kenneth",
    "flockman": "Jerry",
    "eggSorter": "Elmer"
  },
  "2026-07-20_5": {
    "date": "2026-07-20",
    "flockId": 5,
    "currentHeads": 12023,
    "mortalities": 8,
    "culls": 0,
    "cases": 28,
    "trays": 8,
    "totalPieces": 10320,
    "goodCrackPieces": 114,
    "badCrackPieces": 51,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 24.0,
    "gramsPerBird": 99.8,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Noraiza"
  },
  "2026-07-21_1": {
    "date": "2026-07-21",
    "flockId": 1,
    "currentHeads": 7435,
    "mortalities": 6,
    "culls": 0,
    "cases": 17,
    "trays": 4,
    "totalPieces": 6240,
    "goodCrackPieces": 91,
    "badCrackPieces": 32,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 114.3,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 36.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "kenneth",
    "flockman": "Vicente",
    "eggSorter": "All"
  },
  "2026-07-21_2": {
    "date": "2026-07-21",
    "flockId": 2,
    "currentHeads": 9695,
    "mortalities": 4,
    "culls": 0,
    "cases": 21,
    "trays": 9,
    "totalPieces": 7830,
    "goodCrackPieces": 112,
    "badCrackPieces": 54,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 113.5,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 36.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "kenneth",
    "flockman": "Reygie and Jerry",
    "eggSorter": "Noraiza"
  },
  "2026-07-21_3": {
    "date": "2026-07-21",
    "flockId": 3,
    "currentHeads": 8601,
    "mortalities": 10,
    "culls": 5,
    "cases": 18,
    "trays": 4,
    "totalPieces": 6600,
    "goodCrackPieces": 131,
    "badCrackPieces": 54,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 110.5,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 36.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "5 heads lame",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-07-21_6": {
    "date": "2026-07-21",
    "flockId": 6,
    "currentHeads": 9604,
    "mortalities": 11,
    "culls": 0,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 212,
    "badCrackPieces": 97,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 22.0,
    "gramsPerBird": 114.5,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 36.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "kenneth",
    "flockman": "Reymund",
    "eggSorter": "Jennifer"
  },
  "2026-07-21_5": {
    "date": "2026-07-21",
    "flockId": 5,
    "currentHeads": 12015,
    "mortalities": 3,
    "culls": 0,
    "cases": 28,
    "trays": 8,
    "totalPieces": 10320,
    "goodCrackPieces": 70,
    "badCrackPieces": 50,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 24.0,
    "gramsPerBird": 99.9,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 36.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Hasna"
  },
  "2026-07-22_1": {
    "date": "2026-07-22",
    "flockId": 1,
    "currentHeads": 7429,
    "mortalities": 4,
    "culls": 0,
    "cases": 17,
    "trays": 6,
    "totalPieces": 6300,
    "goodCrackPieces": 100,
    "badCrackPieces": 39,
    "misshapenPieces": 4,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 114.4,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-07-22_2": {
    "date": "2026-07-22",
    "flockId": 2,
    "currentHeads": 9691,
    "mortalities": 4,
    "culls": 0,
    "cases": 22,
    "trays": 0,
    "totalPieces": 7920,
    "goodCrackPieces": 108,
    "badCrackPieces": 28,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 113.5,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-07-22_3": {
    "date": "2026-07-22",
    "flockId": 3,
    "currentHeads": 8586,
    "mortalities": 12,
    "culls": 0,
    "cases": 18,
    "trays": 8,
    "totalPieces": 6720,
    "goodCrackPieces": 210,
    "badCrackPieces": 41,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 104.8,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "*clening of water pipes\n*less 1 bag of feeds",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "elmer"
  },
  "2026-07-22_6": {
    "date": "2026-07-22",
    "flockId": 6,
    "currentHeads": 9593,
    "mortalities": 10,
    "culls": 7,
    "cases": 19,
    "trays": 10,
    "totalPieces": 7140,
    "goodCrackPieces": 260,
    "badCrackPieces": 90,
    "misshapenPieces": 7,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 109.5,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Less 1 bag of feeds",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "jenifer"
  },
  "2026-07-22_5": {
    "date": "2026-07-22",
    "flockId": 5,
    "currentHeads": 12012,
    "mortalities": 6,
    "culls": 0,
    "cases": 28,
    "trays": 9,
    "totalPieces": 10350,
    "goodCrackPieces": 122,
    "badCrackPieces": 49,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 24.0,
    "gramsPerBird": 99.9,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Noraiza"
  },
  "2026-07-23_1": {
    "date": "2026-07-23",
    "flockId": 1,
    "currentHeads": 7425,
    "mortalities": 4,
    "culls": 0,
    "cases": 17,
    "trays": 6,
    "totalPieces": 6300,
    "goodCrackPieces": 97,
    "badCrackPieces": 78,
    "misshapenPieces": 5,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 114.5,
    "weatherAm": "Cloudy",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-07-23_2": {
    "date": "2026-07-23",
    "flockId": 2,
    "currentHeads": 9687,
    "mortalities": 5,
    "culls": 0,
    "cases": 21,
    "trays": 7,
    "totalPieces": 7770,
    "goodCrackPieces": 110,
    "badCrackPieces": 35,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 113.6,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-07-23_3": {
    "date": "2026-07-23",
    "flockId": 3,
    "currentHeads": 8574,
    "mortalities": 7,
    "culls": 0,
    "cases": 18,
    "trays": 8,
    "totalPieces": 6720,
    "goodCrackPieces": 165,
    "badCrackPieces": 63,
    "misshapenPieces": 15,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 110.8,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "*add 1 bag\n*Cleaning of water pipes",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Jesabel"
  },
  "2026-07-23_6": {
    "date": "2026-07-23",
    "flockId": 6,
    "currentHeads": 9576,
    "mortalities": 6,
    "culls": 12,
    "cases": 19,
    "trays": 9,
    "totalPieces": 7110,
    "goodCrackPieces": 246,
    "badCrackPieces": 99,
    "misshapenPieces": 12,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 109.6,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "jenifer"
  },
  "2026-07-23_5": {
    "date": "2026-07-23",
    "flockId": 5,
    "currentHeads": 12006,
    "mortalities": 5,
    "culls": 0,
    "cases": 28,
    "trays": 5,
    "totalPieces": 10230,
    "goodCrackPieces": 143,
    "badCrackPieces": 49,
    "misshapenPieces": 18,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 24.0,
    "gramsPerBird": 100.0,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Noraiza,Elmer,Jennifer"
  },
  "2026-07-24_1": {
    "date": "2026-07-24",
    "flockId": 1,
    "currentHeads": 7421,
    "mortalities": 6,
    "culls": 0,
    "cases": 17,
    "trays": 7,
    "totalPieces": 6330,
    "goodCrackPieces": 90,
    "badCrackPieces": 52,
    "misshapenPieces": 9,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 114.5,
    "weatherAm": "Cloudy",
    "weatherPm": "Cloudy",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-07-24_2": {
    "date": "2026-07-24",
    "flockId": 2,
    "currentHeads": 9682,
    "mortalities": 4,
    "culls": 0,
    "cases": 21,
    "trays": 11,
    "totalPieces": 7890,
    "goodCrackPieces": 107,
    "badCrackPieces": 47,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 113.6,
    "weatherAm": "Cloudy",
    "weatherPm": "Cloudy",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-07-24_3": {
    "date": "2026-07-24",
    "flockId": 3,
    "currentHeads": 8567,
    "mortalities": 8,
    "culls": 3,
    "cases": 18,
    "trays": 10,
    "totalPieces": 6780,
    "goodCrackPieces": 122,
    "badCrackPieces": 74,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 105.1,
    "weatherAm": "Cloudy",
    "weatherPm": "Cloudy",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "-cleaning of water pipes\n-less 1 bg of feeds",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-07-24_6": {
    "date": "2026-07-24",
    "flockId": 6,
    "currentHeads": 9558,
    "mortalities": 10,
    "culls": 9,
    "cases": 19,
    "trays": 11,
    "totalPieces": 7170,
    "goodCrackPieces": 208,
    "badCrackPieces": 97,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 109.9,
    "weatherAm": "Cloudy",
    "weatherPm": "Cloudy",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "jenifer"
  },
  "2026-07-24_5": {
    "date": "2026-07-24",
    "flockId": 5,
    "currentHeads": 12001,
    "mortalities": 3,
    "culls": 0,
    "cases": 28,
    "trays": 0,
    "totalPieces": 10080,
    "goodCrackPieces": 77,
    "badCrackPieces": 18,
    "misshapenPieces": 8,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 24.0,
    "gramsPerBird": 100.0,
    "weatherAm": "Cloudy",
    "weatherPm": "Cloudy",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry and Wanie",
    "eggSorter": "Elmer"
  },
  "2026-07-25_1": {
    "date": "2026-07-25",
    "flockId": 1,
    "currentHeads": 7415,
    "mortalities": 0,
    "culls": 1,
    "cases": 17,
    "trays": 7,
    "totalPieces": 6330,
    "goodCrackPieces": 85,
    "badCrackPieces": 38,
    "misshapenPieces": 5,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 114.6,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Amielyn"
  },
  "2026-07-25_2": {
    "date": "2026-07-25",
    "flockId": 2,
    "currentHeads": 9678,
    "mortalities": 7,
    "culls": 0,
    "cases": 22,
    "trays": 0,
    "totalPieces": 7920,
    "goodCrackPieces": 160,
    "badCrackPieces": 47,
    "misshapenPieces": 18,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 113.7,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Noraiza"
  },
  "2026-07-25_3": {
    "date": "2026-07-25",
    "flockId": 3,
    "currentHeads": 8556,
    "mortalities": 12,
    "culls": 0,
    "cases": 19,
    "trays": 4,
    "totalPieces": 6960,
    "goodCrackPieces": 156,
    "badCrackPieces": 62,
    "misshapenPieces": 19,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 105.2,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "-clening of water pipes",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-07-25_6": {
    "date": "2026-07-25",
    "flockId": 6,
    "currentHeads": 9539,
    "mortalities": 6,
    "culls": 36,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 191,
    "badCrackPieces": 79,
    "misshapenPieces": 16,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 110.1,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "29 cullss-sold\n7 culls (thin) -food consumption",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "jenifer"
  },
  "2026-07-25_5": {
    "date": "2026-07-25",
    "flockId": 5,
    "currentHeads": 11998,
    "mortalities": 6,
    "culls": 0,
    "cases": 28,
    "trays": 7,
    "totalPieces": 10290,
    "goodCrackPieces": 107,
    "badCrackPieces": 29,
    "misshapenPieces": 5,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 24.0,
    "gramsPerBird": 100.0,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "elmer"
  },
  "2026-07-26_1": {
    "date": "2026-07-26",
    "flockId": 1,
    "currentHeads": 7414,
    "mortalities": 4,
    "culls": 0,
    "cases": 17,
    "trays": 7,
    "totalPieces": 6330,
    "goodCrackPieces": 76,
    "badCrackPieces": 40,
    "misshapenPieces": 14,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 114.6,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 33.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-07-26_2": {
    "date": "2026-07-26",
    "flockId": 2,
    "currentHeads": 9671,
    "mortalities": 3,
    "culls": 0,
    "cases": 22,
    "trays": 1,
    "totalPieces": 7950,
    "goodCrackPieces": 79,
    "badCrackPieces": 38,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 113.7,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 33.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-07-26_3": {
    "date": "2026-07-26",
    "flockId": 3,
    "currentHeads": 8544,
    "mortalities": 8,
    "culls": 5,
    "cases": 19,
    "trays": 4,
    "totalPieces": 6960,
    "goodCrackPieces": 141,
    "badCrackPieces": 68,
    "misshapenPieces": 17,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 105.3,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 33.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-07-26_6": {
    "date": "2026-07-26",
    "flockId": 6,
    "currentHeads": 9497,
    "mortalities": 4,
    "culls": 14,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 208,
    "badCrackPieces": 75,
    "misshapenPieces": 20,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 110.6,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 33.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "jenifer"
  },
  "2026-07-26_5": {
    "date": "2026-07-26",
    "flockId": 5,
    "currentHeads": 11992,
    "mortalities": 5,
    "culls": 0,
    "cases": 28,
    "trays": 8,
    "totalPieces": 10320,
    "goodCrackPieces": 157,
    "badCrackPieces": 30,
    "misshapenPieces": 20,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 24.0,
    "gramsPerBird": 100.1,
    "weatherAm": "Cloudy",
    "weatherPm": "Sunny",
    "temperature": 33.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Noraiza,Jen,Hasna"
  },
  "2026-07-27_1": {
    "date": "2026-07-27",
    "flockId": 1,
    "currentHeads": 7410,
    "mortalities": 3,
    "culls": 0,
    "cases": 17,
    "trays": 7,
    "totalPieces": 6330,
    "goodCrackPieces": 76,
    "badCrackPieces": 43,
    "misshapenPieces": 5,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 114.7,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-07-27_2": {
    "date": "2026-07-27",
    "flockId": 2,
    "currentHeads": 9668,
    "mortalities": 6,
    "culls": 0,
    "cases": 22,
    "trays": 2,
    "totalPieces": 7980,
    "goodCrackPieces": 122,
    "badCrackPieces": 30,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 113.8,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-07-27_3": {
    "date": "2026-07-27",
    "flockId": 3,
    "currentHeads": 8531,
    "mortalities": 9,
    "culls": 0,
    "cases": 19,
    "trays": 1,
    "totalPieces": 6870,
    "goodCrackPieces": 161,
    "badCrackPieces": 51,
    "misshapenPieces": 13,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 105.5,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-07-27_6": {
    "date": "2026-07-27",
    "flockId": 6,
    "currentHeads": 9479,
    "mortalities": 2,
    "culls": 1,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 190,
    "badCrackPieces": 117,
    "misshapenPieces": 12,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 110.8,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": null
  },
  "2026-07-27_5": {
    "date": "2026-07-27",
    "flockId": 5,
    "currentHeads": 11987,
    "mortalities": 10,
    "culls": 0,
    "cases": 28,
    "trays": 10,
    "totalPieces": 10380,
    "goodCrackPieces": 78,
    "badCrackPieces": 21,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 24.0,
    "gramsPerBird": 100.1,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Elmer2"
  },
  "2026-07-28_1": {
    "date": "2026-07-28",
    "flockId": 1,
    "currentHeads": 7407,
    "mortalities": 5,
    "culls": 0,
    "cases": 17,
    "trays": 6,
    "totalPieces": 6300,
    "goodCrackPieces": 70,
    "badCrackPieces": 48,
    "misshapenPieces": 17,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 114.8,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 34.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Noraiza"
  },
  "2026-07-28_2": {
    "date": "2026-07-28",
    "flockId": 2,
    "currentHeads": 9662,
    "mortalities": 3,
    "culls": 0,
    "cases": 22,
    "trays": 2,
    "totalPieces": 7980,
    "goodCrackPieces": 99,
    "badCrackPieces": 1,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 113.8,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 34.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-07-28_3": {
    "date": "2026-07-28",
    "flockId": 3,
    "currentHeads": 8522,
    "mortalities": 8,
    "culls": 0,
    "cases": 19,
    "trays": 2,
    "totalPieces": 6900,
    "goodCrackPieces": 138,
    "badCrackPieces": 64,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 105.6,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 34.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "-Water pipes cleaning-DONE",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel4"
  },
  "2026-07-28_6": {
    "date": "2026-07-28",
    "flockId": 6,
    "currentHeads": 9476,
    "mortalities": 8,
    "culls": 2,
    "cases": 20,
    "trays": 9,
    "totalPieces": 7470,
    "goodCrackPieces": 214,
    "badCrackPieces": 60,
    "misshapenPieces": 17,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 110.8,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 34.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "jenifer"
  },
  "2026-07-28_5": {
    "date": "2026-07-28",
    "flockId": 5,
    "currentHeads": 11977,
    "mortalities": 5,
    "culls": 0,
    "cases": 29,
    "trays": 2,
    "totalPieces": 10500,
    "goodCrackPieces": 93,
    "badCrackPieces": 16,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 24.0,
    "gramsPerBird": 100.2,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 34.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Elmer"
  },
  "2026-07-29_1": {
    "date": "2026-07-29",
    "flockId": 1,
    "currentHeads": 7402,
    "mortalities": 5,
    "culls": 0,
    "cases": 17,
    "trays": 6,
    "totalPieces": 6300,
    "goodCrackPieces": 68,
    "badCrackPieces": 34,
    "misshapenPieces": 15,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 114.8,
    "weatherAm": "Rainy",
    "weatherPm": "Cloudy",
    "temperature": 28.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": null
  },
  "2026-07-29_2": {
    "date": "2026-07-29",
    "flockId": 2,
    "currentHeads": 9659,
    "mortalities": 3,
    "culls": 0,
    "cases": 22,
    "trays": 3,
    "totalPieces": 8010,
    "goodCrackPieces": 165,
    "badCrackPieces": 15,
    "misshapenPieces": 7,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 113.9,
    "weatherAm": "Rainy",
    "weatherPm": "Cloudy",
    "temperature": 28.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Noraiza,Amielyn.Rodel"
  },
  "2026-07-29_3": {
    "date": "2026-07-29",
    "flockId": 3,
    "currentHeads": 8514,
    "mortalities": 5,
    "culls": 0,
    "cases": 19,
    "trays": 3,
    "totalPieces": 6930,
    "goodCrackPieces": 152,
    "badCrackPieces": 2,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 105.7,
    "weatherAm": "Rainy",
    "weatherPm": "Cloudy",
    "temperature": 28.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza,Amielyn"
  },
  "2026-07-29_6": {
    "date": "2026-07-29",
    "flockId": 6,
    "currentHeads": 9466,
    "mortalities": 6,
    "culls": 8,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 184,
    "badCrackPieces": 92,
    "misshapenPieces": 9,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 110.9,
    "weatherAm": "Rainy",
    "weatherPm": "Cloudy",
    "temperature": 28.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Jennifer"
  },
  "2026-07-29_5": {
    "date": "2026-07-29",
    "flockId": 5,
    "currentHeads": 11972,
    "mortalities": 1,
    "culls": 0,
    "cases": 29,
    "trays": 0,
    "totalPieces": 10440,
    "goodCrackPieces": 73,
    "badCrackPieces": 30,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 24.0,
    "gramsPerBird": 100.2,
    "weatherAm": "Rainy",
    "weatherPm": "Cloudy",
    "temperature": 28.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Elmer"
  },
  "2026-07-30_1": {
    "date": "2026-07-30",
    "flockId": 1,
    "currentHeads": 7397,
    "mortalities": 1,
    "culls": 0,
    "cases": 17,
    "trays": 6,
    "totalPieces": 6300,
    "goodCrackPieces": 92,
    "badCrackPieces": 49,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 114.9,
    "weatherAm": "Cloudy",
    "weatherPm": "Cloudy",
    "temperature": 29.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-07-30_2": {
    "date": "2026-07-30",
    "flockId": 2,
    "currentHeads": 9656,
    "mortalities": 3,
    "culls": 0,
    "cases": 22,
    "trays": 2,
    "totalPieces": 7980,
    "goodCrackPieces": 159,
    "badCrackPieces": 46,
    "misshapenPieces": 19,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 113.9,
    "weatherAm": "Cloudy",
    "weatherPm": "Cloudy",
    "temperature": 29.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Noraiza"
  },
  "2026-07-30_3": {
    "date": "2026-07-30",
    "flockId": 3,
    "currentHeads": 8509,
    "mortalities": 5,
    "culls": 0,
    "cases": 19,
    "trays": 3,
    "totalPieces": 6930,
    "goodCrackPieces": 125,
    "badCrackPieces": 45,
    "misshapenPieces": 13,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 105.8,
    "weatherAm": "Cloudy",
    "weatherPm": "Cloudy",
    "temperature": 29.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "jesabel"
  },
  "2026-07-30_6": {
    "date": "2026-07-30",
    "flockId": 6,
    "currentHeads": 9452,
    "mortalities": 6,
    "culls": 30,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 156,
    "badCrackPieces": 58,
    "misshapenPieces": 15,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 111.1,
    "weatherAm": "Cloudy",
    "weatherPm": "Cloudy",
    "temperature": 29.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Jennifer"
  },
  "2026-07-30_5": {
    "date": "2026-07-30",
    "flockId": 5,
    "currentHeads": 11971,
    "mortalities": 3,
    "culls": 0,
    "cases": 29,
    "trays": 2,
    "totalPieces": 10500,
    "goodCrackPieces": 134,
    "badCrackPieces": 34,
    "misshapenPieces": 7,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 25.0,
    "gramsPerBird": 104.4,
    "weatherAm": "Cloudy",
    "weatherPm": "Cloudy",
    "temperature": 29.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "add 1 bag of feeds",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Elmer"
  },
  "2026-07-31_1": {
    "date": "2026-07-31",
    "flockId": 1,
    "currentHeads": 7396,
    "mortalities": 4,
    "culls": 0,
    "cases": 17,
    "trays": 7,
    "totalPieces": 6330,
    "goodCrackPieces": 101,
    "badCrackPieces": 41,
    "misshapenPieces": 11,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 114.9,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "deloused",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-07-31_2": {
    "date": "2026-07-31",
    "flockId": 2,
    "currentHeads": 9653,
    "mortalities": 3,
    "culls": 0,
    "cases": 22,
    "trays": 4,
    "totalPieces": 8040,
    "goodCrackPieces": 113,
    "badCrackPieces": 37,
    "misshapenPieces": 18,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.0,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "deloused",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "jesabel"
  },
  "2026-07-31_3": {
    "date": "2026-07-31",
    "flockId": 3,
    "currentHeads": 8504,
    "mortalities": 11,
    "culls": 0,
    "cases": 19,
    "trays": 10,
    "totalPieces": 7140,
    "goodCrackPieces": 197,
    "badCrackPieces": 51,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 105.8,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "deloused",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Hasna"
  },
  "2026-07-31_6": {
    "date": "2026-07-31",
    "flockId": 6,
    "currentHeads": 9416,
    "mortalities": 15,
    "culls": 0,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 172,
    "badCrackPieces": 65,
    "misshapenPieces": 17,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 111.5,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "deloused",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Jennifer"
  },
  "2026-07-31_5": {
    "date": "2026-07-31",
    "flockId": 5,
    "currentHeads": 11968,
    "mortalities": 5,
    "culls": 0,
    "cases": 29,
    "trays": 2,
    "totalPieces": 10500,
    "goodCrackPieces": 96,
    "badCrackPieces": 0,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 25.0,
    "gramsPerBird": 104.4,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 35.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "deloused",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Elmer"
  },
  "2026-08-01_1": {
    "date": "2026-08-01",
    "flockId": 1,
    "currentHeads": 7392,
    "mortalities": 2,
    "culls": 0,
    "cases": 17,
    "trays": 7,
    "totalPieces": 6330,
    "goodCrackPieces": 87,
    "badCrackPieces": 49,
    "misshapenPieces": 4,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.0,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 33.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Amielyn"
  },
  "2026-08-01_2": {
    "date": "2026-08-01",
    "flockId": 2,
    "currentHeads": 9650,
    "mortalities": 3,
    "culls": 0,
    "cases": 22,
    "trays": 6,
    "totalPieces": 8100,
    "goodCrackPieces": 86,
    "badCrackPieces": 33,
    "misshapenPieces": 15,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.0,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 33.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "jesabel"
  },
  "2026-08-01_3": {
    "date": "2026-08-01",
    "flockId": 3,
    "currentHeads": 8493,
    "mortalities": 15,
    "culls": 0,
    "cases": 19,
    "trays": 10,
    "totalPieces": 7140,
    "goodCrackPieces": 152,
    "badCrackPieces": 86,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 106.0,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 33.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Hasna"
  },
  "2026-08-01_6": {
    "date": "2026-08-01",
    "flockId": 6,
    "currentHeads": 9401,
    "mortalities": 7,
    "culls": 0,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 210,
    "badCrackPieces": 66,
    "misshapenPieces": 17,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 111.7,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 33.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "jenifer"
  },
  "2026-08-01_5": {
    "date": "2026-08-01",
    "flockId": 5,
    "currentHeads": 11963,
    "mortalities": 5,
    "culls": 0,
    "cases": 29,
    "trays": 0,
    "totalPieces": 10440,
    "goodCrackPieces": 191,
    "badCrackPieces": 63,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 25.0,
    "gramsPerBird": 104.5,
    "weatherAm": "Sunny",
    "weatherPm": "Cloudy",
    "temperature": 33.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "nabasag ni jennifer- PW (2 trays 16 pcs)-to 1 tray badcrack:  1 tray 16 pcs good cracks",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Noraiza"
  },
  "2026-08-02_1": {
    "date": "2026-08-02",
    "flockId": 1,
    "currentHeads": 7390,
    "mortalities": 0,
    "culls": 0,
    "cases": 17,
    "trays": 8,
    "totalPieces": 6360,
    "goodCrackPieces": 86,
    "badCrackPieces": 48,
    "misshapenPieces": 16,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.0,
    "weatherAm": "Rainy",
    "weatherPm": "Rainy",
    "temperature": 27.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-08-02_2": {
    "date": "2026-08-02",
    "flockId": 2,
    "currentHeads": 9647,
    "mortalities": 2,
    "culls": 0,
    "cases": 22,
    "trays": 9,
    "totalPieces": 8190,
    "goodCrackPieces": 64,
    "badCrackPieces": 36,
    "misshapenPieces": 9,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.0,
    "weatherAm": "Rainy",
    "weatherPm": "Rainy",
    "temperature": 27.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "jemel and Jerry",
    "eggSorter": "Hasna and Jen"
  },
  "2026-08-02_3": {
    "date": "2026-08-02",
    "flockId": 3,
    "currentHeads": 8478,
    "mortalities": 8,
    "culls": 0,
    "cases": 19,
    "trays": 11,
    "totalPieces": 7170,
    "goodCrackPieces": 130,
    "badCrackPieces": 50,
    "misshapenPieces": 12,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 106.2,
    "weatherAm": "Rainy",
    "weatherPm": "Rainy",
    "temperature": 27.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "jesabel"
  },
  "2026-08-02_6": {
    "date": "2026-08-02",
    "flockId": 6,
    "currentHeads": 9394,
    "mortalities": 5,
    "culls": 0,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 167,
    "badCrackPieces": 95,
    "misshapenPieces": 13,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 111.8,
    "weatherAm": "Rainy",
    "weatherPm": "Rainy",
    "temperature": 27.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Jennifer"
  },
  "2026-08-02_5": {
    "date": "2026-08-02",
    "flockId": 5,
    "currentHeads": 11958,
    "mortalities": 8,
    "culls": 0,
    "cases": 28,
    "trays": 6,
    "totalPieces": 10260,
    "goodCrackPieces": 139,
    "badCrackPieces": 35,
    "misshapenPieces": 11,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 25.0,
    "gramsPerBird": 104.5,
    "weatherAm": "Rainy",
    "weatherPm": "Rainy",
    "temperature": 27.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Noraiza,Surren,Rodel"
  },
  "2026-08-03_1": {
    "date": "2026-08-03",
    "flockId": 1,
    "currentHeads": 7390,
    "mortalities": 3,
    "culls": 0,
    "cases": 17,
    "trays": 8,
    "totalPieces": 6360,
    "goodCrackPieces": 79,
    "badCrackPieces": 55,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.0,
    "weatherAm": "Rainy",
    "weatherPm": "Rainy",
    "temperature": 28.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn and Hasna"
  },
  "2026-08-03_2": {
    "date": "2026-08-03",
    "flockId": 2,
    "currentHeads": 9645,
    "mortalities": 6,
    "culls": 0,
    "cases": 23,
    "trays": 0,
    "totalPieces": 8280,
    "goodCrackPieces": 88,
    "badCrackPieces": 29,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.0,
    "weatherAm": "Rainy",
    "weatherPm": "Rainy",
    "temperature": 27.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "jemel and Jerry",
    "eggSorter": "Hasna"
  },
  "2026-08-03_3": {
    "date": "2026-08-03",
    "flockId": 3,
    "currentHeads": 8470,
    "mortalities": 5,
    "culls": 0,
    "cases": 19,
    "trays": 10,
    "totalPieces": 7140,
    "goodCrackPieces": 124,
    "badCrackPieces": 39,
    "misshapenPieces": 7,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 106.3,
    "weatherAm": "Rainy",
    "weatherPm": "Sunny",
    "temperature": 27.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "jesabel"
  },
  "2026-08-03_6": {
    "date": "2026-08-03",
    "flockId": 6,
    "currentHeads": 9389,
    "mortalities": 7,
    "culls": 0,
    "cases": 20,
    "trays": 2,
    "totalPieces": 7260,
    "goodCrackPieces": 159,
    "badCrackPieces": 79,
    "misshapenPieces": 13,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 111.8,
    "weatherAm": "Rainy",
    "weatherPm": "Rainy",
    "temperature": 27.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Elmer and Jesabel"
  },
  "2026-08-03_5": {
    "date": "2026-08-03",
    "flockId": 5,
    "currentHeads": 11950,
    "mortalities": 1,
    "culls": 0,
    "cases": 28,
    "trays": 0,
    "totalPieces": 10080,
    "goodCrackPieces": 97,
    "badCrackPieces": 32,
    "misshapenPieces": 14,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 25.0,
    "gramsPerBird": 104.6,
    "weatherAm": "Rainy",
    "weatherPm": "Rainy",
    "temperature": 27.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Noraiza and Hasna"
  },
  "2026-08-04_1": {
    "date": "2026-08-04",
    "flockId": 1,
    "currentHeads": 7387,
    "mortalities": 3,
    "culls": 0,
    "cases": 17,
    "trays": 9,
    "totalPieces": 6390,
    "goodCrackPieces": 95,
    "badCrackPieces": 51,
    "misshapenPieces": 18,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.1,
    "weatherAm": "Cloudy",
    "weatherPm": "Sunny",
    "temperature": 29.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-08-04_2": {
    "date": "2026-08-04",
    "flockId": 2,
    "currentHeads": 9639,
    "mortalities": 3,
    "culls": 0,
    "cases": 23,
    "trays": 0,
    "totalPieces": 8280,
    "goodCrackPieces": 105,
    "badCrackPieces": 38,
    "misshapenPieces": 12,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.1,
    "weatherAm": "Cloudy",
    "weatherPm": "Sunny",
    "temperature": 28.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jerry",
    "eggSorter": "Hasna"
  },
  "2026-08-04_3": {
    "date": "2026-08-04",
    "flockId": 3,
    "currentHeads": 8465,
    "mortalities": 4,
    "culls": 0,
    "cases": 19,
    "trays": 10,
    "totalPieces": 7140,
    "goodCrackPieces": 132,
    "badCrackPieces": 51,
    "misshapenPieces": 11,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 106.3,
    "weatherAm": "Cloudy",
    "weatherPm": "Sunny",
    "temperature": 28.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-08-04_6": {
    "date": "2026-08-04",
    "flockId": 6,
    "currentHeads": 9382,
    "mortalities": 9,
    "culls": 0,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 150,
    "badCrackPieces": 76,
    "misshapenPieces": 14,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 111.9,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "jenifer"
  },
  "2026-08-04_5": {
    "date": "2026-08-04",
    "flockId": 5,
    "currentHeads": 11949,
    "mortalities": 6,
    "culls": 0,
    "cases": 28,
    "trays": 6,
    "totalPieces": 10260,
    "goodCrackPieces": 121,
    "badCrackPieces": 35,
    "misshapenPieces": 8,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 25.0,
    "gramsPerBird": 104.6,
    "weatherAm": "Cloudy",
    "weatherPm": "Sunny",
    "temperature": 28.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Noraiza and Elmer"
  },
  "2026-08-05_1": {
    "date": "2026-08-05",
    "flockId": 1,
    "currentHeads": 7384,
    "mortalities": 0,
    "culls": 0,
    "cases": 17,
    "trays": 9,
    "totalPieces": 6390,
    "goodCrackPieces": 133,
    "badCrackPieces": 28,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.1,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 32.0,
    "highTemp": 31.1,
    "lowTemp": 25.2,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-08-05_2": {
    "date": "2026-08-05",
    "flockId": 2,
    "currentHeads": 9636,
    "mortalities": 4,
    "culls": 0,
    "cases": 22,
    "trays": 11,
    "totalPieces": 8250,
    "goodCrackPieces": 96,
    "badCrackPieces": 20,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.2,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-08-05_3": {
    "date": "2026-08-05",
    "flockId": 3,
    "currentHeads": 8461,
    "mortalities": 9,
    "culls": 0,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 174,
    "badCrackPieces": 65,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 106.4,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "All"
  },
  "2026-08-05_6": {
    "date": "2026-08-05",
    "flockId": 6,
    "currentHeads": 9373,
    "mortalities": 6,
    "culls": 0,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 249,
    "badCrackPieces": 18,
    "misshapenPieces": 16,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 112.0,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "jenifer"
  },
  "2026-08-05_5": {
    "date": "2026-08-05",
    "flockId": 5,
    "currentHeads": 11943,
    "mortalities": 9,
    "culls": 0,
    "cases": 28,
    "trays": 3,
    "totalPieces": 10170,
    "goodCrackPieces": 86,
    "badCrackPieces": 12,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 108.9,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 32.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Elmer"
  },
  "2026-08-06_1": {
    "date": "2026-08-06",
    "flockId": 1,
    "currentHeads": 7384,
    "mortalities": 2,
    "culls": 0,
    "cases": 17,
    "trays": 11,
    "totalPieces": 6450,
    "goodCrackPieces": 102,
    "badCrackPieces": 19,
    "misshapenPieces": 15,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.1,
    "weatherAm": "Thunderstorm (25.4\u00b0C)",
    "weatherPm": "Heavy Rain (25.9\u00b0C)",
    "temperature": 25.6,
    "highTemp": 26.7,
    "lowTemp": 24.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": null
  },
  "2026-08-06_2": {
    "date": "2026-08-06",
    "flockId": 2,
    "currentHeads": 9632,
    "mortalities": 6,
    "culls": 0,
    "cases": 23,
    "trays": 2,
    "totalPieces": 8340,
    "goodCrackPieces": 111,
    "badCrackPieces": 11,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.2,
    "weatherAm": "Thunderstorm (25.4\u00b0C)",
    "weatherPm": "Heavy Rain (25.9\u00b0C)",
    "temperature": 25.6,
    "highTemp": 26.7,
    "lowTemp": 24.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-08-06_3": {
    "date": "2026-08-06",
    "flockId": 3,
    "currentHeads": 8452,
    "mortalities": 5,
    "culls": 0,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 185,
    "badCrackPieces": 14,
    "misshapenPieces": 11,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 106.5,
    "weatherAm": "Thunderstorm (25.4\u00b0C)",
    "weatherPm": "Heavy Rain (25.9\u00b0C)",
    "temperature": 25.6,
    "highTemp": 26.7,
    "lowTemp": 24.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "jesabel"
  },
  "2026-08-06_6": {
    "date": "2026-08-06",
    "flockId": 6,
    "currentHeads": 9367,
    "mortalities": 10,
    "culls": 0,
    "cases": 20,
    "trays": 2,
    "totalPieces": 7260,
    "goodCrackPieces": 172,
    "badCrackPieces": 67,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 112.1,
    "weatherAm": "Thunderstorm (25.4\u00b0C)",
    "weatherPm": "Heavy Rain (25.9\u00b0C)",
    "temperature": 25.6,
    "highTemp": 26.7,
    "lowTemp": 24.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "jenifer"
  },
  "2026-08-06_5": {
    "date": "2026-08-06",
    "flockId": 5,
    "currentHeads": 11934,
    "mortalities": 3,
    "culls": 0,
    "cases": 29,
    "trays": 0,
    "totalPieces": 10440,
    "goodCrackPieces": 100,
    "badCrackPieces": 13,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 108.9,
    "weatherAm": "Thunderstorm (25.4\u00b0C)",
    "weatherPm": "Heavy Rain (25.9\u00b0C)",
    "temperature": 25.6,
    "highTemp": 26.7,
    "lowTemp": 24.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Elmer"
  },
  "2026-08-07_3": {
    "date": "2026-08-07",
    "flockId": 3,
    "currentHeads": 8447,
    "mortalities": 6,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 182,
    "badCrackPieces": 39,
    "misshapenPieces": 7,
    "softShellPieces": 18,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 106.5,
    "weatherAm": "Sunny (26.1\u00b0C)",
    "weatherPm": "Thunderstorm (30.0\u00b0C)",
    "temperature": 27.4,
    "highTemp": 31.4,
    "lowTemp": 23.8,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Dindo",
    "eggSorter": "Jessa"
  },
  "2026-08-07_1": {
    "date": "2026-08-07",
    "flockId": 1,
    "currentHeads": 7382,
    "mortalities": 3,
    "culls": 0,
    "cases": 18,
    "trays": 0,
    "totalPieces": 6480,
    "goodCrackPieces": 108,
    "badCrackPieces": 32,
    "misshapenPieces": 15,
    "softShellPieces": 22,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.1,
    "weatherAm": "Partly Cloudy (26.4\u00b0C)",
    "weatherPm": "Thunderstorm (29.8\u00b0C)",
    "temperature": 27.1,
    "highTemp": 31.5,
    "lowTemp": 23.9,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-08-07_2": {
    "date": "2026-08-07",
    "flockId": 2,
    "currentHeads": 9626,
    "mortalities": 3,
    "culls": 0,
    "cases": 23,
    "trays": 4,
    "totalPieces": 8400,
    "goodCrackPieces": 103,
    "badCrackPieces": 16,
    "misshapenPieces": 0,
    "softShellPieces": 11,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.3,
    "weatherAm": "Partly Cloudy (26.4\u00b0C)",
    "weatherPm": "Thunderstorm (29.8\u00b0C)",
    "temperature": 27.1,
    "highTemp": 31.5,
    "lowTemp": 23.9,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-08-07_6": {
    "date": "2026-08-07",
    "flockId": 6,
    "currentHeads": 9357,
    "mortalities": 5,
    "culls": 2,
    "cases": 20,
    "trays": 5,
    "totalPieces": 7350,
    "goodCrackPieces": 176,
    "badCrackPieces": 67,
    "misshapenPieces": 19,
    "softShellPieces": 6,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 112.2,
    "weatherAm": "Partly Cloudy (26.4\u00b0C)",
    "weatherPm": "Thunderstorm (29.8\u00b0C)",
    "temperature": 27.1,
    "highTemp": 31.5,
    "lowTemp": 23.9,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Reymund",
    "eggSorter": "Jen"
  },
  "2026-08-07_5": {
    "date": "2026-08-07",
    "flockId": 5,
    "currentHeads": 11931,
    "mortalities": 2,
    "culls": 0,
    "cases": 28,
    "trays": 4,
    "totalPieces": 10200,
    "goodCrackPieces": 74,
    "badCrackPieces": 19,
    "misshapenPieces": 0,
    "softShellPieces": 6,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.0,
    "weatherAm": "Partly Cloudy (26.4\u00b0C)",
    "weatherPm": "Thunderstorm (29.8\u00b0C)",
    "temperature": 27.1,
    "highTemp": 31.5,
    "lowTemp": 23.9,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Noel and Wanie",
    "eggSorter": "Elmer"
  },
  "2026-08-08_1": {
    "date": "2026-08-08",
    "flockId": 1,
    "currentHeads": 7379,
    "mortalities": 1,
    "culls": 0,
    "cases": 18,
    "trays": 5,
    "totalPieces": 6630,
    "goodCrackPieces": 116,
    "badCrackPieces": 42,
    "misshapenPieces": 11,
    "softShellPieces": 20,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.2,
    "weatherAm": "Partly Cloudy (27.3\u00b0C)",
    "weatherPm": "Rain Showers (32.1\u00b0C)",
    "temperature": 28.6,
    "highTemp": 32.8,
    "lowTemp": 24.9,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Leonardo take over",
    "eggSorter": "Amielyn"
  },
  "2026-08-08_2": {
    "date": "2026-08-08",
    "flockId": 2,
    "currentHeads": 9623,
    "mortalities": 7,
    "culls": 0,
    "cases": 23,
    "trays": 3,
    "totalPieces": 8370,
    "goodCrackPieces": 118,
    "badCrackPieces": 18,
    "misshapenPieces": 0,
    "softShellPieces": 21,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.3,
    "weatherAm": "Partly Cloudy (27.3\u00b0C)",
    "weatherPm": "Rain Showers (32.1\u00b0C)",
    "temperature": 28.6,
    "highTemp": 32.8,
    "lowTemp": 24.9,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Reygie and Jemel",
    "eggSorter": "elmer"
  },
  "2026-08-08_3": {
    "date": "2026-08-08",
    "flockId": 3,
    "currentHeads": 8441,
    "mortalities": 6,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 203,
    "badCrackPieces": 42,
    "misshapenPieces": 15,
    "softShellPieces": 12,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 106.6,
    "weatherAm": "Partly Cloudy (27.3\u00b0C)",
    "weatherPm": "Rain Showers (32.1\u00b0C)",
    "temperature": 28.6,
    "highTemp": 32.8,
    "lowTemp": 24.9,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Dindo",
    "eggSorter": "Jesabel"
  },
  "2026-08-08_6": {
    "date": "2026-08-08",
    "flockId": 6,
    "currentHeads": 9350,
    "mortalities": 9,
    "culls": 9,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 190,
    "badCrackPieces": 72,
    "misshapenPieces": 14,
    "softShellPieces": 7,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 112.3,
    "weatherAm": "Partly Cloudy (27.3\u00b0C)",
    "weatherPm": "Rain Showers (32.1\u00b0C)",
    "temperature": 28.6,
    "highTemp": 32.8,
    "lowTemp": 24.9,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Reymund",
    "eggSorter": "jen"
  },
  "2026-08-08_5": {
    "date": "2026-08-08",
    "flockId": 5,
    "currentHeads": 11929,
    "mortalities": 4,
    "culls": 0,
    "cases": 28,
    "trays": 4,
    "totalPieces": 10200,
    "goodCrackPieces": 98,
    "badCrackPieces": 25,
    "misshapenPieces": 0,
    "softShellPieces": 8,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.0,
    "weatherAm": "Partly Cloudy (27.3\u00b0C)",
    "weatherPm": "Rain Showers (32.1\u00b0C)",
    "temperature": 28.6,
    "highTemp": 32.8,
    "lowTemp": 24.9,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Noel and Wanie",
    "eggSorter": "Noraiza"
  },
  "2026-08-09_1": {
    "date": "2026-08-09",
    "flockId": 1,
    "currentHeads": 7378,
    "mortalities": 8,
    "culls": 0,
    "cases": 18,
    "trays": 0,
    "totalPieces": 6480,
    "goodCrackPieces": 99,
    "badCrackPieces": 30,
    "misshapenPieces": 0,
    "softShellPieces": 21,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.2,
    "weatherAm": "Rainy (27.4\u00b0C)",
    "weatherPm": "Drizzling (31.9\u00b0C)",
    "temperature": 28.4,
    "highTemp": 32.4,
    "lowTemp": 24.7,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-08-09_2": {
    "date": "2026-08-09",
    "flockId": 2,
    "currentHeads": 9616,
    "mortalities": 2,
    "culls": 0,
    "cases": 23,
    "trays": 5,
    "totalPieces": 8430,
    "goodCrackPieces": 120,
    "badCrackPieces": 38,
    "misshapenPieces": 0,
    "softShellPieces": 13,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.4,
    "weatherAm": "Rainy (27.4\u00b0C)",
    "weatherPm": "Drizzling (31.9\u00b0C)",
    "temperature": 28.4,
    "highTemp": 32.4,
    "lowTemp": 24.7,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Jerry and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-08-09_3": {
    "date": "2026-08-09",
    "flockId": 3,
    "currentHeads": 8435,
    "mortalities": 4,
    "culls": 0,
    "cases": 20,
    "trays": 3,
    "totalPieces": 7290,
    "goodCrackPieces": 171,
    "badCrackPieces": 42,
    "misshapenPieces": 0,
    "softShellPieces": 12,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 106.7,
    "weatherAm": "Rainy (27.4\u00b0C)",
    "weatherPm": "Drizzling (31.9\u00b0C)",
    "temperature": 28.4,
    "highTemp": 32.4,
    "lowTemp": 24.7,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Dindo",
    "eggSorter": "Jessa"
  },
  "2026-08-09_6": {
    "date": "2026-08-09",
    "flockId": 6,
    "currentHeads": 9332,
    "mortalities": 4,
    "culls": 20,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 214,
    "badCrackPieces": 68,
    "misshapenPieces": 23,
    "softShellPieces": 8,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 112.5,
    "weatherAm": "Rainy (27.4\u00b0C)",
    "weatherPm": "Drizzling (31.9\u00b0C)",
    "temperature": 28.4,
    "highTemp": 32.4,
    "lowTemp": 24.7,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Reymund",
    "eggSorter": "Jennifer"
  },
  "2026-08-09_5": {
    "date": "2026-08-09",
    "flockId": 5,
    "currentHeads": 11925,
    "mortalities": 2,
    "culls": 0,
    "cases": 29,
    "trays": 0,
    "totalPieces": 10440,
    "goodCrackPieces": 85,
    "badCrackPieces": 29,
    "misshapenPieces": 11,
    "softShellPieces": 4,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.0,
    "weatherAm": "Rainy (27.4\u00b0C)",
    "weatherPm": "Drizzling (31.9\u00b0C)",
    "temperature": 28.4,
    "highTemp": 32.4,
    "lowTemp": 24.7,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Noel and Wanie",
    "eggSorter": "Noraiza&Hasna"
  },
  "2026-08-10_1": {
    "date": "2026-08-10",
    "flockId": 1,
    "currentHeads": 7370,
    "mortalities": 4,
    "culls": 0,
    "cases": 18,
    "trays": 0,
    "totalPieces": 6480,
    "goodCrackPieces": 109,
    "badCrackPieces": 26,
    "misshapenPieces": 24,
    "softShellPieces": 24,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.3,
    "weatherAm": "Drizzling (28.1\u00b0C)",
    "weatherPm": "Partly Cloudy (33.3\u00b0C)",
    "temperature": 29.0,
    "highTemp": 33.6,
    "lowTemp": 25.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "All"
  },
  "2026-08-10_2": {
    "date": "2026-08-10",
    "flockId": 2,
    "currentHeads": 9614,
    "mortalities": 4,
    "culls": 0,
    "cases": 23,
    "trays": 8,
    "totalPieces": 8520,
    "goodCrackPieces": 114,
    "badCrackPieces": 20,
    "misshapenPieces": 9,
    "softShellPieces": 12,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.4,
    "weatherAm": "Drizzling (28.1\u00b0C)",
    "weatherPm": "Partly Cloudy (33.3\u00b0C)",
    "temperature": 29.0,
    "highTemp": 33.6,
    "lowTemp": 25.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry and Jemel",
    "eggSorter": "jesabel"
  },
  "2026-08-10_3": {
    "date": "2026-08-10",
    "flockId": 3,
    "currentHeads": 8431,
    "mortalities": 4,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 149,
    "badCrackPieces": 61,
    "misshapenPieces": 0,
    "softShellPieces": 24,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 106.7,
    "weatherAm": "Drizzling (28.1\u00b0C)",
    "weatherPm": "Partly Cloudy (33.3\u00b0C)",
    "temperature": 29.0,
    "highTemp": 33.6,
    "lowTemp": 25.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Amielyn"
  },
  "2026-08-10_6": {
    "date": "2026-08-10",
    "flockId": 6,
    "currentHeads": 9308,
    "mortalities": 4,
    "culls": 0,
    "cases": 20,
    "trays": 5,
    "totalPieces": 7350,
    "goodCrackPieces": 167,
    "badCrackPieces": 136,
    "misshapenPieces": 22,
    "softShellPieces": 9,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 112.8,
    "weatherAm": "Drizzling (28.1\u00b0C)",
    "weatherPm": "Partly Cloudy (33.3\u00b0C)",
    "temperature": 29.0,
    "highTemp": 33.6,
    "lowTemp": 25.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Noraiza"
  },
  "2026-08-10_5": {
    "date": "2026-08-10",
    "flockId": 5,
    "currentHeads": 11923,
    "mortalities": 7,
    "culls": 0,
    "cases": 29,
    "trays": 0,
    "totalPieces": 10440,
    "goodCrackPieces": 73,
    "badCrackPieces": 23,
    "misshapenPieces": 0,
    "softShellPieces": 2,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.0,
    "weatherAm": "Drizzling (28.1\u00b0C)",
    "weatherPm": "Partly Cloudy (33.3\u00b0C)",
    "temperature": 29.0,
    "highTemp": 33.6,
    "lowTemp": 25.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Elmer"
  },
  "2026-08-11_1": {
    "date": "2026-08-11",
    "flockId": 1,
    "currentHeads": 7366,
    "mortalities": 1,
    "culls": 0,
    "cases": 17,
    "trays": 9,
    "totalPieces": 6390,
    "goodCrackPieces": 126,
    "badCrackPieces": 34,
    "misshapenPieces": 11,
    "softShellPieces": 15,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.4,
    "weatherAm": "Partly Cloudy (28.2\u00b0C)",
    "weatherPm": "Thunderstorm (33.4\u00b0C)",
    "temperature": 28.8,
    "highTemp": 34.5,
    "lowTemp": 26.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-08-11_2": {
    "date": "2026-08-11",
    "flockId": 2,
    "currentHeads": 9610,
    "mortalities": 3,
    "culls": 0,
    "cases": 23,
    "trays": 4,
    "totalPieces": 8400,
    "goodCrackPieces": 99,
    "badCrackPieces": 35,
    "misshapenPieces": 0,
    "softShellPieces": 17,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.5,
    "weatherAm": "Partly Cloudy (28.2\u00b0C)",
    "weatherPm": "Thunderstorm (33.4\u00b0C)",
    "temperature": 28.8,
    "highTemp": 34.5,
    "lowTemp": 26.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-08-11_3": {
    "date": "2026-08-11",
    "flockId": 3,
    "currentHeads": 8427,
    "mortalities": 7,
    "culls": 0,
    "cases": 20,
    "trays": 5,
    "totalPieces": 7350,
    "goodCrackPieces": 216,
    "badCrackPieces": 54,
    "misshapenPieces": 7,
    "softShellPieces": 12,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 106.8,
    "weatherAm": "Partly Cloudy (28.2\u00b0C)",
    "weatherPm": "Thunderstorm (33.4\u00b0C)",
    "temperature": 28.8,
    "highTemp": 34.5,
    "lowTemp": 26.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-08-11_6": {
    "date": "2026-08-11",
    "flockId": 6,
    "currentHeads": 9304,
    "mortalities": 8,
    "culls": 11,
    "cases": 20,
    "trays": 2,
    "totalPieces": 7260,
    "goodCrackPieces": 217,
    "badCrackPieces": 66,
    "misshapenPieces": 9,
    "softShellPieces": 16,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 112.9,
    "weatherAm": "Partly Cloudy (28.2\u00b0C)",
    "weatherPm": "Thunderstorm (33.4\u00b0C)",
    "temperature": 28.8,
    "highTemp": 34.5,
    "lowTemp": 26.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund and Jerry",
    "eggSorter": "Jennifer"
  },
  "2026-08-11_5": {
    "date": "2026-08-11",
    "flockId": 5,
    "currentHeads": 11916,
    "mortalities": 6,
    "culls": 0,
    "cases": 28,
    "trays": 5,
    "totalPieces": 10230,
    "goodCrackPieces": 124,
    "badCrackPieces": 37,
    "misshapenPieces": 10,
    "softShellPieces": 7,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.1,
    "weatherAm": "Partly Cloudy (28.2\u00b0C)",
    "weatherPm": "Thunderstorm (33.4\u00b0C)",
    "temperature": 28.8,
    "highTemp": 34.5,
    "lowTemp": 26.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Noraiza,Jesabel"
  },
  "2026-08-12_1": {
    "date": "2026-08-12",
    "flockId": 1,
    "currentHeads": 7365,
    "mortalities": 1,
    "culls": 0,
    "cases": 17,
    "trays": 9,
    "totalPieces": 6390,
    "goodCrackPieces": 145,
    "badCrackPieces": 42,
    "misshapenPieces": 6,
    "softShellPieces": 23,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.4,
    "weatherAm": "Partly Cloudy (28.5\u00b0C)",
    "weatherPm": "Rainy",
    "temperature": 29.4,
    "highTemp": 33.3,
    "lowTemp": 26.5,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-08-12_2": {
    "date": "2026-08-12",
    "flockId": 2,
    "currentHeads": 9607,
    "mortalities": 3,
    "culls": 0,
    "cases": 23,
    "trays": 4,
    "totalPieces": 8400,
    "goodCrackPieces": 121,
    "badCrackPieces": 24,
    "misshapenPieces": 0,
    "softShellPieces": 8,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.5,
    "weatherAm": "Partly Cloudy (28.5\u00b0C)",
    "weatherPm": "Rainy",
    "temperature": 29.4,
    "highTemp": 33.3,
    "lowTemp": 26.5,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-08-12_3": {
    "date": "2026-08-12",
    "flockId": 3,
    "currentHeads": 8420,
    "mortalities": 7,
    "culls": 0,
    "cases": 20,
    "trays": 5,
    "totalPieces": 7350,
    "goodCrackPieces": 292,
    "badCrackPieces": 101,
    "misshapenPieces": 0,
    "softShellPieces": 19,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 106.9,
    "weatherAm": "Partly Cloudy (28.5\u00b0C)",
    "weatherPm": "Rainy",
    "temperature": 29.4,
    "highTemp": 33.3,
    "lowTemp": 26.5,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza"
  },
  "2026-08-12_6": {
    "date": "2026-08-12",
    "flockId": 6,
    "currentHeads": 9285,
    "mortalities": 7,
    "culls": 4,
    "cases": 19,
    "trays": 11,
    "totalPieces": 7170,
    "goodCrackPieces": 234,
    "badCrackPieces": 111,
    "misshapenPieces": 13,
    "softShellPieces": 13,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 113.1,
    "weatherAm": "Partly Cloudy (28.5\u00b0C)",
    "weatherPm": "Rainy",
    "temperature": 29.4,
    "highTemp": 33.3,
    "lowTemp": 26.5,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund and Jerry",
    "eggSorter": "Jenifer"
  },
  "2026-08-12_5": {
    "date": "2026-08-12",
    "flockId": 5,
    "currentHeads": 11910,
    "mortalities": 5,
    "culls": 0,
    "cases": 28,
    "trays": 9,
    "totalPieces": 10350,
    "goodCrackPieces": 80,
    "badCrackPieces": 18,
    "misshapenPieces": 0,
    "softShellPieces": 4,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.2,
    "weatherAm": "Partly Cloudy (28.5\u00b0C)",
    "weatherPm": "Rainy",
    "temperature": 29.4,
    "highTemp": 33.3,
    "lowTemp": 26.5,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Elmer"
  },
  "2026-08-13_1": {
    "date": "2026-08-13",
    "flockId": 1,
    "currentHeads": 7364,
    "mortalities": 6,
    "culls": 0,
    "cases": 17,
    "trays": 10,
    "totalPieces": 6420,
    "goodCrackPieces": 150,
    "badCrackPieces": 34,
    "misshapenPieces": 0,
    "softShellPieces": 13,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.4,
    "weatherAm": "Partly Cloudy (28.6\u00b0C)",
    "weatherPm": "Cloudy (32.9\u00b0C)",
    "temperature": 29.5,
    "highTemp": 33.2,
    "lowTemp": 26.6,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Elmer"
  },
  "2026-08-13_2": {
    "date": "2026-08-13",
    "flockId": 2,
    "currentHeads": 9604,
    "mortalities": 1,
    "culls": 0,
    "cases": 23,
    "trays": 4,
    "totalPieces": 8400,
    "goodCrackPieces": 140,
    "badCrackPieces": 42,
    "misshapenPieces": 0,
    "softShellPieces": 6,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.5,
    "weatherAm": "Partly Cloudy (28.6\u00b0C)",
    "weatherPm": "Cloudy (32.9\u00b0C)",
    "temperature": 29.5,
    "highTemp": 33.2,
    "lowTemp": 26.6,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-08-13_3": {
    "date": "2026-08-13",
    "flockId": 3,
    "currentHeads": 8413,
    "mortalities": 5,
    "culls": 0,
    "cases": 20,
    "trays": 6,
    "totalPieces": 7380,
    "goodCrackPieces": 236,
    "badCrackPieces": 69,
    "misshapenPieces": 0,
    "softShellPieces": 13,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 107.0,
    "weatherAm": "Partly Cloudy (28.6\u00b0C)",
    "weatherPm": "Cloudy (32.9\u00b0C)",
    "temperature": 29.5,
    "highTemp": 33.2,
    "lowTemp": 26.6,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza"
  },
  "2026-08-13_6": {
    "date": "2026-08-13",
    "flockId": 6,
    "currentHeads": 9274,
    "mortalities": 7,
    "culls": 6,
    "cases": 19,
    "trays": 11,
    "totalPieces": 7170,
    "goodCrackPieces": 239,
    "badCrackPieces": 106,
    "misshapenPieces": 14,
    "softShellPieces": 13,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 113.2,
    "weatherAm": "Partly Cloudy (28.6\u00b0C)",
    "weatherPm": "Cloudy (32.9\u00b0C)",
    "temperature": 29.5,
    "highTemp": 33.2,
    "lowTemp": 26.6,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Jennifer"
  },
  "2026-08-13_5": {
    "date": "2026-08-13",
    "flockId": 5,
    "currentHeads": 11905,
    "mortalities": 2,
    "culls": 0,
    "cases": 28,
    "trays": 9,
    "totalPieces": 10350,
    "goodCrackPieces": 94,
    "badCrackPieces": 33,
    "misshapenPieces": 8,
    "softShellPieces": 12,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.2,
    "weatherAm": "Partly Cloudy (28.6\u00b0C)",
    "weatherPm": "Cloudy (32.9\u00b0C)",
    "temperature": 29.5,
    "highTemp": 33.2,
    "lowTemp": 26.6,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "jesabel"
  },
  "2026-08-14_1": {
    "date": "2026-08-14",
    "flockId": 1,
    "currentHeads": 7358,
    "mortalities": 3,
    "culls": 0,
    "cases": 17,
    "trays": 11,
    "totalPieces": 6450,
    "goodCrackPieces": 153,
    "badCrackPieces": 31,
    "misshapenPieces": 7,
    "softShellPieces": 19,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.5,
    "weatherAm": "Partly Cloudy",
    "weatherPm": "Thunderstorm (29.6\u00b0C)",
    "temperature": 27.4,
    "highTemp": 30.2,
    "lowTemp": 25.2,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-08-14_2": {
    "date": "2026-08-14",
    "flockId": 2,
    "currentHeads": 9603,
    "mortalities": 1,
    "culls": 0,
    "cases": 23,
    "trays": 5,
    "totalPieces": 8430,
    "goodCrackPieces": 114,
    "badCrackPieces": 36,
    "misshapenPieces": 0,
    "softShellPieces": 6,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.5,
    "weatherAm": "Partly Cloudy",
    "weatherPm": "Rainy (27.8\u00b0C)",
    "temperature": 27.0,
    "highTemp": 28.6,
    "lowTemp": 25.2,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-08-14_3": {
    "date": "2026-08-14",
    "flockId": 3,
    "currentHeads": 8408,
    "mortalities": 5,
    "culls": 0,
    "cases": 20,
    "trays": 6,
    "totalPieces": 7380,
    "goodCrackPieces": 202,
    "badCrackPieces": 41,
    "misshapenPieces": 7,
    "softShellPieces": 10,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 107.0,
    "weatherAm": "Partly Cloudy",
    "weatherPm": "Rainy (27.8\u00b0C)",
    "temperature": 27.0,
    "highTemp": 28.6,
    "lowTemp": 25.2,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo-half day :take over by Jerry",
    "eggSorter": "jesabel,Jennifer,Hasna"
  },
  "2026-08-14_6": {
    "date": "2026-08-14",
    "flockId": 6,
    "currentHeads": 9261,
    "mortalities": 10,
    "culls": 3,
    "cases": 19,
    "trays": 11,
    "totalPieces": 7170,
    "goodCrackPieces": 265,
    "badCrackPieces": 111,
    "misshapenPieces": 16,
    "softShellPieces": 13,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 113.4,
    "weatherAm": "Partly Cloudy",
    "weatherPm": "Rainy (27.8\u00b0C)",
    "temperature": 27.0,
    "highTemp": 28.6,
    "lowTemp": 25.2,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Jennifer"
  },
  "2026-08-14_5": {
    "date": "2026-08-14",
    "flockId": 5,
    "currentHeads": 11903,
    "mortalities": 3,
    "culls": 0,
    "cases": 28,
    "trays": 4,
    "totalPieces": 10200,
    "goodCrackPieces": 74,
    "badCrackPieces": 18,
    "misshapenPieces": 0,
    "softShellPieces": 9,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.2,
    "weatherAm": "Rainy (26.4\u00b0C)",
    "weatherPm": "Rainy (27.8\u00b0C)",
    "temperature": 27.0,
    "highTemp": 28.6,
    "lowTemp": 25.2,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": " Wanie (Noel day off)",
    "eggSorter": "Elmer"
  },
  "2026-08-15_1": {
    "date": "2026-08-15",
    "flockId": 1,
    "currentHeads": 7355,
    "mortalities": 4,
    "culls": 0,
    "cases": 18,
    "trays": 0,
    "totalPieces": 6480,
    "goodCrackPieces": 148,
    "badCrackPieces": 26,
    "misshapenPieces": 8,
    "softShellPieces": 17,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.6,
    "weatherAm": "Partly Cloudy",
    "weatherPm": "Partly Cloudy",
    "temperature": 27.9,
    "highTemp": 30.4,
    "lowTemp": 25.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Amielyn"
  },
  "2026-08-15_2": {
    "date": "2026-08-15",
    "flockId": 2,
    "currentHeads": 9602,
    "mortalities": 1,
    "culls": 0,
    "cases": 24,
    "trays": 0,
    "totalPieces": 8640,
    "goodCrackPieces": 136,
    "badCrackPieces": 35,
    "misshapenPieces": 0,
    "softShellPieces": 14,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.6,
    "weatherAm": "Partly Cloudy",
    "weatherPm": "Partly Cloudy",
    "temperature": 27.9,
    "highTemp": 30.4,
    "lowTemp": 25.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Noraiza, Hasna"
  },
  "2026-08-15_3": {
    "date": "2026-08-15",
    "flockId": 3,
    "currentHeads": 8403,
    "mortalities": 10,
    "culls": 0,
    "cases": 20,
    "trays": 8,
    "totalPieces": 7440,
    "goodCrackPieces": 261,
    "badCrackPieces": 66,
    "misshapenPieces": 8,
    "softShellPieces": 19,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 107.1,
    "weatherAm": "Partly Cloudy",
    "weatherPm": "Partly Cloudy",
    "temperature": 27.9,
    "highTemp": 30.4,
    "lowTemp": 25.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-08-15_6": {
    "date": "2026-08-15",
    "flockId": 6,
    "currentHeads": 9248,
    "mortalities": 10,
    "culls": 1,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 283,
    "badCrackPieces": 94,
    "misshapenPieces": 10,
    "softShellPieces": 9,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 113.5,
    "weatherAm": "Partly Cloudy",
    "weatherPm": "Partly Cloudy",
    "temperature": 27.9,
    "highTemp": 30.4,
    "lowTemp": 25.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Jennifer"
  },
  "2026-08-15_5": {
    "date": "2026-08-15",
    "flockId": 5,
    "currentHeads": 11900,
    "mortalities": 4,
    "culls": 0,
    "cases": 28,
    "trays": 6,
    "totalPieces": 10260,
    "goodCrackPieces": 112,
    "badCrackPieces": 20,
    "misshapenPieces": 0,
    "softShellPieces": 9,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.2,
    "weatherAm": "Partly Cloudy",
    "weatherPm": "Partly Cloudy",
    "temperature": 27.9,
    "highTemp": 30.4,
    "lowTemp": 25.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": " Wanie (Noel day off)",
    "eggSorter": "Elmer"
  },
  "2026-08-16_1": {
    "date": "2026-08-16",
    "flockId": 1,
    "currentHeads": 7351,
    "mortalities": 5,
    "culls": 0,
    "cases": 18,
    "trays": 0,
    "totalPieces": 6480,
    "goodCrackPieces": 156,
    "badCrackPieces": 51,
    "misshapenPieces": 8,
    "softShellPieces": 25,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.6,
    "weatherAm": "Cloudy (27.6\u00b0C)",
    "weatherPm": "Thunderstorm (31.9\u00b0C)",
    "temperature": 28.3,
    "highTemp": 32.7,
    "lowTemp": 26.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "amielyn"
  },
  "2026-08-16_2": {
    "date": "2026-08-16",
    "flockId": 2,
    "currentHeads": 9601,
    "mortalities": 4,
    "culls": 0,
    "cases": 23,
    "trays": 8,
    "totalPieces": 8520,
    "goodCrackPieces": 135,
    "badCrackPieces": 1,
    "misshapenPieces": 0,
    "softShellPieces": 14,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.6,
    "weatherAm": "Cloudy (27.6\u00b0C)",
    "weatherPm": "Thunderstorm (31.9\u00b0C)",
    "temperature": 28.3,
    "highTemp": 32.7,
    "lowTemp": 26.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry and Jemel",
    "eggSorter": "surren and Hasna"
  },
  "2026-08-16_5": {
    "date": "2026-08-16",
    "flockId": 5,
    "currentHeads": 11896,
    "mortalities": 4,
    "culls": 0,
    "cases": 28,
    "trays": 4,
    "totalPieces": 10200,
    "goodCrackPieces": 111,
    "badCrackPieces": 19,
    "misshapenPieces": 9,
    "softShellPieces": 11,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.3,
    "weatherAm": "Cloudy (27.6\u00b0C)",
    "weatherPm": "Thunderstorm (31.9\u00b0C)",
    "temperature": 28.3,
    "highTemp": 32.7,
    "lowTemp": 26.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Reneboy",
    "eggSorter": "jenifer"
  },
  "2026-08-16_3": {
    "date": "2026-08-16",
    "flockId": 3,
    "currentHeads": 8393,
    "mortalities": 6,
    "culls": 0,
    "cases": 20,
    "trays": 6,
    "totalPieces": 7380,
    "goodCrackPieces": 231,
    "badCrackPieces": 51,
    "misshapenPieces": 5,
    "softShellPieces": 14,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 107.2,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (31.4\u00b0C)",
    "temperature": 28.0,
    "highTemp": 32.3,
    "lowTemp": 26.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-08-16_6": {
    "date": "2026-08-16",
    "flockId": 6,
    "currentHeads": 9237,
    "mortalities": 7,
    "culls": 6,
    "cases": 19,
    "trays": 10,
    "totalPieces": 7140,
    "goodCrackPieces": 231,
    "badCrackPieces": 173,
    "misshapenPieces": 4,
    "softShellPieces": 15,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 113.7,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (31.4\u00b0C)",
    "temperature": 28.0,
    "highTemp": 32.3,
    "lowTemp": 26.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Noraiza"
  },
  "2026-08-17_2": {
    "date": "2026-08-17",
    "flockId": 2,
    "currentHeads": 9597,
    "mortalities": 4,
    "culls": 0,
    "cases": 23,
    "trays": 5,
    "totalPieces": 8430,
    "goodCrackPieces": 126,
    "badCrackPieces": 12,
    "misshapenPieces": 0,
    "softShellPieces": 15,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.6,
    "weatherAm": "Cloudy (26.7\u00b0C)",
    "weatherPm": "Light Rain (29.7\u00b0C)",
    "temperature": 27.2,
    "highTemp": 30.5,
    "lowTemp": 25.7,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Amielyn and Hasna"
  },
  "2026-08-17_1": {
    "date": "2026-08-17",
    "flockId": 1,
    "currentHeads": 7346,
    "mortalities": 3,
    "culls": 0,
    "cases": 18,
    "trays": 0,
    "totalPieces": 6480,
    "goodCrackPieces": 106,
    "badCrackPieces": 27,
    "misshapenPieces": 0,
    "softShellPieces": 14,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.7,
    "weatherAm": "Light Rain (26.9\u00b0C)",
    "weatherPm": "Drizzling (30.4\u00b0C)",
    "temperature": 27.5,
    "highTemp": 30.8,
    "lowTemp": 25.7,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Elmer"
  },
  "2026-08-17_3": {
    "date": "2026-08-17",
    "flockId": 3,
    "currentHeads": 8387,
    "mortalities": 7,
    "culls": 0,
    "cases": 20,
    "trays": 6,
    "totalPieces": 7380,
    "goodCrackPieces": 199,
    "badCrackPieces": 56,
    "misshapenPieces": 12,
    "softShellPieces": 15,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 107.3,
    "weatherAm": "Light Rain (26.9\u00b0C)",
    "weatherPm": "Drizzling (30.4\u00b0C)",
    "temperature": 27.5,
    "highTemp": 30.8,
    "lowTemp": 25.7,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-08-17_6": {
    "date": "2026-08-17",
    "flockId": 6,
    "currentHeads": 9224,
    "mortalities": 7,
    "culls": 0,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 214,
    "badCrackPieces": 338,
    "misshapenPieces": 11,
    "softShellPieces": 6,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 113.8,
    "weatherAm": "Light Rain (26.9\u00b0C)",
    "weatherPm": "Drizzling (30.4\u00b0C)",
    "temperature": 27.5,
    "highTemp": 30.8,
    "lowTemp": 25.7,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Noraiza"
  },
  "2026-08-17_5": {
    "date": "2026-08-17",
    "flockId": 5,
    "currentHeads": 11892,
    "mortalities": 2,
    "culls": 0,
    "cases": 28,
    "trays": 5,
    "totalPieces": 10230,
    "goodCrackPieces": 100,
    "badCrackPieces": 24,
    "misshapenPieces": 4,
    "softShellPieces": 7,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.3,
    "weatherAm": "Light Rain (26.9\u00b0C)",
    "weatherPm": "Drizzling (30.4\u00b0C)",
    "temperature": 27.5,
    "highTemp": 30.8,
    "lowTemp": 25.7,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Jennifer"
  },
  "2026-08-18_1": {
    "date": "2026-08-18",
    "flockId": 1,
    "currentHeads": 7343,
    "mortalities": 2,
    "culls": 0,
    "cases": 17,
    "trays": 11,
    "totalPieces": 6450,
    "goodCrackPieces": 101,
    "badCrackPieces": 25,
    "misshapenPieces": 0,
    "softShellPieces": 16,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.8,
    "weatherAm": "Light Rain (26.6\u00b0C)",
    "weatherPm": "Rain Showers",
    "temperature": 27.0,
    "highTemp": 30.8,
    "lowTemp": 25.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Elmer"
  },
  "2026-08-18_2": {
    "date": "2026-08-18",
    "flockId": 2,
    "currentHeads": 9593,
    "mortalities": 4,
    "culls": 0,
    "cases": 23,
    "trays": 5,
    "totalPieces": 8430,
    "goodCrackPieces": 97,
    "badCrackPieces": 20,
    "misshapenPieces": 0,
    "softShellPieces": 5,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.7,
    "weatherAm": "Light Rain (26.6\u00b0C)",
    "weatherPm": "Rain Showers",
    "temperature": 27.0,
    "highTemp": 30.8,
    "lowTemp": 25.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jerry",
    "eggSorter": "Hasna"
  },
  "2026-08-18_3": {
    "date": "2026-08-18",
    "flockId": 3,
    "currentHeads": 8380,
    "mortalities": 5,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 169,
    "badCrackPieces": 52,
    "misshapenPieces": 0,
    "softShellPieces": 10,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 107.4,
    "weatherAm": "Light Rain (26.6\u00b0C)",
    "weatherPm": "Rain Showers",
    "temperature": 27.0,
    "highTemp": 30.8,
    "lowTemp": 25.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-08-18_6": {
    "date": "2026-08-18",
    "flockId": 6,
    "currentHeads": 9217,
    "mortalities": 13,
    "culls": 2,
    "cases": 19,
    "trays": 8,
    "totalPieces": 7080,
    "goodCrackPieces": 301,
    "badCrackPieces": 102,
    "misshapenPieces": 0,
    "softShellPieces": 7,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 113.9,
    "weatherAm": "Light Rain (26.6\u00b0C)",
    "weatherPm": "Rain Showers",
    "temperature": 27.0,
    "highTemp": 30.8,
    "lowTemp": 25.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Noraiza"
  },
  "2026-08-18_5": {
    "date": "2026-08-18",
    "flockId": 5,
    "currentHeads": 11890,
    "mortalities": 2,
    "culls": 0,
    "cases": 28,
    "trays": 1,
    "totalPieces": 10110,
    "goodCrackPieces": 97,
    "badCrackPieces": 17,
    "misshapenPieces": 7,
    "softShellPieces": 5,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.3,
    "weatherAm": "Light Rain (26.6\u00b0C)",
    "weatherPm": "Rain Showers",
    "temperature": 27.0,
    "highTemp": 30.8,
    "lowTemp": 25.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Jennifer"
  },
  "2026-08-19_1": {
    "date": "2026-08-19",
    "flockId": 1,
    "currentHeads": 7341,
    "mortalities": 1,
    "culls": 0,
    "cases": 17,
    "trays": 6,
    "totalPieces": 6300,
    "goodCrackPieces": 115,
    "badCrackPieces": 31,
    "misshapenPieces": 0,
    "softShellPieces": 24,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.8,
    "weatherAm": "Rainy (26.1\u00b0C)",
    "weatherPm": "Thunderstorm (28.9\u00b0C)",
    "temperature": 27.1,
    "highTemp": 30.1,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Elemer and Surren"
  },
  "2026-08-19_2": {
    "date": "2026-08-19",
    "flockId": 2,
    "currentHeads": 9589,
    "mortalities": 3,
    "culls": 0,
    "cases": 23,
    "trays": 3,
    "totalPieces": 8370,
    "goodCrackPieces": 106,
    "badCrackPieces": 20,
    "misshapenPieces": 0,
    "softShellPieces": 9,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.7,
    "weatherAm": "Rainy (26.1\u00b0C)",
    "weatherPm": "Thunderstorm (28.9\u00b0C)",
    "temperature": 27.1,
    "highTemp": 30.1,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna and Amielyn"
  },
  "2026-08-19_3": {
    "date": "2026-08-19",
    "flockId": 3,
    "currentHeads": 8375,
    "mortalities": 6,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 183,
    "badCrackPieces": 50,
    "misshapenPieces": 7,
    "softShellPieces": 8,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 18.0,
    "gramsPerBird": 107.5,
    "weatherAm": "Rainy (26.1\u00b0C)",
    "weatherPm": "Thunderstorm (28.9\u00b0C)",
    "temperature": 27.1,
    "highTemp": 30.1,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Jesabel"
  },
  "2026-08-19_6": {
    "date": "2026-08-19",
    "flockId": 6,
    "currentHeads": 9202,
    "mortalities": 7,
    "culls": 5,
    "cases": 19,
    "trays": 5,
    "totalPieces": 6990,
    "goodCrackPieces": 204,
    "badCrackPieces": 77,
    "misshapenPieces": 14,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 114.1,
    "weatherAm": "Rainy (26.1\u00b0C)",
    "weatherPm": "Thunderstorm (28.9\u00b0C)",
    "temperature": 27.1,
    "highTemp": 30.1,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Noraiza"
  },
  "2026-08-19_5": {
    "date": "2026-08-19",
    "flockId": 5,
    "currentHeads": 11888,
    "mortalities": 4,
    "culls": 0,
    "cases": 28,
    "trays": 2,
    "totalPieces": 10140,
    "goodCrackPieces": 71,
    "badCrackPieces": 18,
    "misshapenPieces": 4,
    "softShellPieces": 6,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.4,
    "weatherAm": "Rainy (26.1\u00b0C)",
    "weatherPm": "Thunderstorm (28.9\u00b0C)",
    "temperature": 27.1,
    "highTemp": 30.1,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Jennifer"
  },
  "2026-08-20_3": {
    "date": "2026-08-20",
    "flockId": 3,
    "currentHeads": 8369,
    "mortalities": 11,
    "culls": 0,
    "cases": 20,
    "trays": 1,
    "totalPieces": 7230,
    "goodCrackPieces": 131,
    "badCrackPieces": 27,
    "misshapenPieces": 0,
    "softShellPieces": 14,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 113.5,
    "weatherAm": "Cloudy (27.3\u00b0C)",
    "weatherPm": "Cloudy (33.0\u00b0C)",
    "temperature": 28.6,
    "highTemp": 33.3,
    "lowTemp": 24.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "jesabel"
  },
  "2026-08-20_6": {
    "date": "2026-08-20",
    "flockId": 6,
    "currentHeads": 9190,
    "mortalities": 13,
    "culls": 4,
    "cases": 19,
    "trays": 6,
    "totalPieces": 7020,
    "goodCrackPieces": 135,
    "badCrackPieces": 86,
    "misshapenPieces": 0,
    "softShellPieces": 10,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 114.3,
    "weatherAm": "Cloudy (27.3\u00b0C)",
    "weatherPm": "Cloudy (33.0\u00b0C)",
    "temperature": 28.6,
    "highTemp": 33.3,
    "lowTemp": 24.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Elmer"
  },
  "2026-08-20_2": {
    "date": "2026-08-20",
    "flockId": 2,
    "currentHeads": 9586,
    "mortalities": 3,
    "culls": 0,
    "cases": 23,
    "trays": 5,
    "totalPieces": 8430,
    "goodCrackPieces": 119,
    "badCrackPieces": 0,
    "misshapenPieces": 0,
    "softShellPieces": 12,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.8,
    "weatherAm": "Cloudy (27.3\u00b0C)",
    "weatherPm": "Cloudy (33.0\u00b0C)",
    "temperature": 28.6,
    "highTemp": 33.3,
    "lowTemp": 24.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna,Elmer,Jesabel"
  },
  "2026-08-20_1": {
    "date": "2026-08-20",
    "flockId": 1,
    "currentHeads": 7340,
    "mortalities": 3,
    "culls": 0,
    "cases": 17,
    "trays": 4,
    "totalPieces": 6240,
    "goodCrackPieces": 98,
    "badCrackPieces": 35,
    "misshapenPieces": 0,
    "softShellPieces": 17,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.8,
    "weatherAm": "Cloudy (27.3\u00b0C)",
    "weatherPm": "Cloudy (33.0\u00b0C)",
    "temperature": 28.6,
    "highTemp": 33.3,
    "lowTemp": 24.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-08-20_5": {
    "date": "2026-08-20",
    "flockId": 5,
    "currentHeads": 11884,
    "mortalities": 5,
    "culls": 0,
    "cases": 28,
    "trays": 7,
    "totalPieces": 10290,
    "goodCrackPieces": 115,
    "badCrackPieces": 22,
    "misshapenPieces": 0,
    "softShellPieces": 7,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.4,
    "weatherAm": "Cloudy (27.6\u00b0C)",
    "weatherPm": "Cloudy (32.6\u00b0C)",
    "temperature": 28.6,
    "highTemp": 32.8,
    "lowTemp": 24.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "jenifer"
  },
  "2026-08-21_5": {
    "date": "2026-08-21",
    "flockId": 5,
    "currentHeads": 11879,
    "mortalities": 1,
    "culls": 0,
    "cases": 27,
    "trays": 1,
    "totalPieces": 9750,
    "goodCrackPieces": 60,
    "badCrackPieces": 9,
    "misshapenPieces": 0,
    "softShellPieces": 9,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.4,
    "weatherAm": "Cloudy (26.5\u00b0C)",
    "weatherPm": "Cloudy (32.1\u00b0C)",
    "temperature": 28.3,
    "highTemp": 33.0,
    "lowTemp": 24.2,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry and Wanie",
    "eggSorter": "jenifer"
  },
  "2026-08-21_3": {
    "date": "2026-08-21",
    "flockId": 3,
    "currentHeads": 8358,
    "mortalities": 5,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 145,
    "badCrackPieces": 47,
    "misshapenPieces": 0,
    "softShellPieces": 20,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 113.7,
    "weatherAm": "Cloudy (26.5\u00b0C)",
    "weatherPm": "Cloudy (32.1\u00b0C)",
    "temperature": 28.3,
    "highTemp": 33.0,
    "lowTemp": 24.2,
    "happenings": "add 1 bag of feeds",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Elmer"
  },
  "2026-08-21_1": {
    "date": "2026-08-21",
    "flockId": 1,
    "currentHeads": 7337,
    "mortalities": 6,
    "culls": 0,
    "cases": 17,
    "trays": 5,
    "totalPieces": 6270,
    "goodCrackPieces": 94,
    "badCrackPieces": 43,
    "misshapenPieces": 0,
    "softShellPieces": 20,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.9,
    "weatherAm": "Cloudy (26.5\u00b0C)",
    "weatherPm": "Cloudy (32.1\u00b0C)",
    "temperature": 28.3,
    "highTemp": 33.0,
    "lowTemp": 24.2,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-08-21_2": {
    "date": "2026-08-21",
    "flockId": 2,
    "currentHeads": 9583,
    "mortalities": 5,
    "culls": 0,
    "cases": 23,
    "trays": 5,
    "totalPieces": 8430,
    "goodCrackPieces": 115,
    "badCrackPieces": 15,
    "misshapenPieces": 0,
    "softShellPieces": 15,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.8,
    "weatherAm": "Cloudy (26.8\u00b0C)",
    "weatherPm": "Cloudy (32.2\u00b0C)",
    "temperature": 28.6,
    "highTemp": 32.8,
    "lowTemp": 24.2,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-08-21_6": {
    "date": "2026-08-21",
    "flockId": 6,
    "currentHeads": 9173,
    "mortalities": 4,
    "culls": 5,
    "cases": 19,
    "trays": 5,
    "totalPieces": 6990,
    "goodCrackPieces": 306,
    "badCrackPieces": 82,
    "misshapenPieces": 24,
    "softShellPieces": 17,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 21.0,
    "gramsPerBird": 114.5,
    "weatherAm": "Cloudy (26.8\u00b0C)",
    "weatherPm": "Cloudy (32.2\u00b0C)",
    "temperature": 28.6,
    "highTemp": 32.8,
    "lowTemp": 24.2,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Noraiza"
  },
  "2026-08-22_1": {
    "date": "2026-08-22",
    "flockId": 1,
    "currentHeads": 7331,
    "mortalities": 2,
    "culls": 0,
    "cases": 17,
    "trays": 5,
    "totalPieces": 6270,
    "goodCrackPieces": 105,
    "badCrackPieces": 28,
    "misshapenPieces": 0,
    "softShellPieces": 15,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 115.9,
    "weatherAm": "Cloudy (26.9\u00b0C)",
    "weatherPm": "Light Rain (32.9\u00b0C)",
    "temperature": 28.3,
    "highTemp": 33.7,
    "lowTemp": 24.8,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Elmer"
  },
  "2026-08-22_2": {
    "date": "2026-08-22",
    "flockId": 2,
    "currentHeads": 9578,
    "mortalities": 6,
    "culls": 0,
    "cases": 23,
    "trays": 7,
    "totalPieces": 8490,
    "goodCrackPieces": 137,
    "badCrackPieces": 8,
    "misshapenPieces": 0,
    "softShellPieces": 8,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.8,
    "weatherAm": "Cloudy (26.9\u00b0C)",
    "weatherPm": "Light Rain (32.9\u00b0C)",
    "temperature": 28.3,
    "highTemp": 33.7,
    "lowTemp": 24.8,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna and Amielyn"
  },
  "2026-08-22_3": {
    "date": "2026-08-22",
    "flockId": 3,
    "currentHeads": 8353,
    "mortalities": 12,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 243,
    "badCrackPieces": 67,
    "misshapenPieces": 0,
    "softShellPieces": 19,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 113.7,
    "weatherAm": "Cloudy (26.9\u00b0C)",
    "weatherPm": "Light Rain (32.9\u00b0C)",
    "temperature": 28.3,
    "highTemp": 33.7,
    "lowTemp": 24.8,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-08-22_6": {
    "date": "2026-08-22",
    "flockId": 6,
    "currentHeads": 9164,
    "mortalities": 6,
    "culls": 0,
    "cases": 19,
    "trays": 0,
    "totalPieces": 6840,
    "goodCrackPieces": 295,
    "badCrackPieces": 145,
    "misshapenPieces": 6,
    "softShellPieces": 11,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 16.0,
    "gramsPerBird": 87.3,
    "weatherAm": "Cloudy (26.9\u00b0C)",
    "weatherPm": "Light Rain (32.9\u00b0C)",
    "temperature": 28.3,
    "highTemp": 33.7,
    "lowTemp": 24.8,
    "happenings": "less 5 bags- to be cull by tommorrow",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Noraiza"
  },
  "2026-08-22_5": {
    "date": "2026-08-22",
    "flockId": 5,
    "currentHeads": 11878,
    "mortalities": 5,
    "culls": 0,
    "cases": 27,
    "trays": 5,
    "totalPieces": 9870,
    "goodCrackPieces": 116,
    "badCrackPieces": 26,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.4,
    "weatherAm": "Cloudy (26.9\u00b0C)",
    "weatherPm": "Light Rain (32.9\u00b0C)",
    "temperature": 28.3,
    "highTemp": 33.7,
    "lowTemp": 24.8,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Jennifer"
  },
  "2026-08-23_2": {
    "date": "2026-08-23",
    "flockId": 2,
    "currentHeads": 9572,
    "mortalities": 3,
    "culls": 0,
    "cases": 23,
    "trays": 9,
    "totalPieces": 8550,
    "goodCrackPieces": 77,
    "badCrackPieces": 38,
    "misshapenPieces": 0,
    "softShellPieces": 13,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 114.9,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (31.5\u00b0C)",
    "temperature": 28.1,
    "highTemp": 32.4,
    "lowTemp": 26.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry and Jemel",
    "eggSorter": "Hasna and Jesabel"
  },
  "2026-08-23_1": {
    "date": "2026-08-23",
    "flockId": 1,
    "currentHeads": 7329,
    "mortalities": 3,
    "culls": 0,
    "cases": 17,
    "trays": 6,
    "totalPieces": 6300,
    "goodCrackPieces": 119,
    "badCrackPieces": 33,
    "misshapenPieces": 7,
    "softShellPieces": 22,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.0,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (31.5\u00b0C)",
    "temperature": 28.1,
    "highTemp": 32.4,
    "lowTemp": 26.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-08-23_3": {
    "date": "2026-08-23",
    "flockId": 3,
    "currentHeads": 8341,
    "mortalities": 4,
    "culls": 0,
    "cases": 20,
    "trays": 6,
    "totalPieces": 7380,
    "goodCrackPieces": 150,
    "badCrackPieces": 34,
    "misshapenPieces": 12,
    "softShellPieces": 12,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 113.9,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (31.5\u00b0C)",
    "temperature": 28.1,
    "highTemp": 32.4,
    "lowTemp": 26.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "jesabel"
  },
  "2026-08-23_6": {
    "date": "2026-08-23",
    "flockId": 6,
    "currentHeads": 9158,
    "mortalities": 5,
    "culls": 4724,
    "cases": 19,
    "trays": 1,
    "totalPieces": 6870,
    "goodCrackPieces": 220,
    "badCrackPieces": 113,
    "misshapenPieces": 7,
    "softShellPieces": 13,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 6.0,
    "gramsPerBird": 32.8,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (31.5\u00b0C)",
    "temperature": 28.1,
    "highTemp": 32.4,
    "lowTemp": 26.0,
    "happenings": "CULLED OUT-4,704\nREJECTS FOOD CONSUMPTION-20 HEADS",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Noraiza"
  },
  "2026-08-23_5": {
    "date": "2026-08-23",
    "flockId": 5,
    "currentHeads": 11873,
    "mortalities": 1,
    "culls": 0,
    "cases": 28,
    "trays": 7,
    "totalPieces": 10290,
    "goodCrackPieces": 88,
    "badCrackPieces": 8,
    "misshapenPieces": 6,
    "softShellPieces": 16,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.5,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (31.5\u00b0C)",
    "temperature": 28.1,
    "highTemp": 32.4,
    "lowTemp": 26.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "jenifer"
  },
  "2026-08-24_6": {
    "date": "2026-08-24",
    "flockId": 6,
    "currentHeads": 4429,
    "mortalities": 11,
    "culls": 1307,
    "cases": 9,
    "trays": 3,
    "totalPieces": 3330,
    "goodCrackPieces": 80,
    "badCrackPieces": 18,
    "misshapenPieces": 0,
    "softShellPieces": 5,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 6.0,
    "gramsPerBird": 67.7,
    "weatherAm": "Cloudy (27.0\u00b0C)",
    "weatherPm": "Stormy (31.0\u00b0C)",
    "temperature": 27.8,
    "highTemp": 32.1,
    "lowTemp": 25.5,
    "happenings": "culling out",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Elmer"
  },
  "2026-08-24_1": {
    "date": "2026-08-24",
    "flockId": 1,
    "currentHeads": 7326,
    "mortalities": 2,
    "culls": 0,
    "cases": 17,
    "trays": 7,
    "totalPieces": 6330,
    "goodCrackPieces": 105,
    "badCrackPieces": 32,
    "misshapenPieces": 8,
    "softShellPieces": 20,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.0,
    "weatherAm": "Cloudy (27.0\u00b0C)",
    "weatherPm": "Stormy (31.0\u00b0C)",
    "temperature": 27.8,
    "highTemp": 32.1,
    "lowTemp": 25.5,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Noraiza,Amielyn"
  },
  "2026-08-24_2": {
    "date": "2026-08-24",
    "flockId": 2,
    "currentHeads": 9569,
    "mortalities": 1,
    "culls": 0,
    "cases": 23,
    "trays": 6,
    "totalPieces": 8460,
    "goodCrackPieces": 103,
    "badCrackPieces": 19,
    "misshapenPieces": 3,
    "softShellPieces": 8,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.0,
    "weatherAm": "Cloudy (27.0\u00b0C)",
    "weatherPm": "Stormy (31.0\u00b0C)",
    "temperature": 27.8,
    "highTemp": 32.1,
    "lowTemp": 25.5,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna and Noraiza"
  },
  "2026-08-24_3": {
    "date": "2026-08-24",
    "flockId": 3,
    "currentHeads": 8337,
    "mortalities": 3,
    "culls": 0,
    "cases": 20,
    "trays": 8,
    "totalPieces": 7440,
    "goodCrackPieces": 202,
    "badCrackPieces": 39,
    "misshapenPieces": 0,
    "softShellPieces": 7,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 113.9,
    "weatherAm": "Cloudy (27.0\u00b0C)",
    "weatherPm": "Stormy (31.0\u00b0C)",
    "temperature": 27.8,
    "highTemp": 32.1,
    "lowTemp": 25.5,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Jesabel"
  },
  "2026-08-24_5": {
    "date": "2026-08-24",
    "flockId": 5,
    "currentHeads": 11872,
    "mortalities": 5,
    "culls": 0,
    "cases": 28,
    "trays": 7,
    "totalPieces": 10290,
    "goodCrackPieces": 87,
    "badCrackPieces": 9,
    "misshapenPieces": 6,
    "softShellPieces": 5,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.5,
    "weatherAm": "Cloudy (27.0\u00b0C)",
    "weatherPm": "Stormy (31.0\u00b0C)",
    "temperature": 27.8,
    "highTemp": 32.1,
    "lowTemp": 25.5,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Jennifer and Noraiza"
  },
  "2026-08-25_2": {
    "date": "2026-08-25",
    "flockId": 2,
    "currentHeads": 9568,
    "mortalities": 2,
    "culls": 0,
    "cases": 23,
    "trays": 5,
    "totalPieces": 8430,
    "goodCrackPieces": 95,
    "badCrackPieces": 27,
    "misshapenPieces": 0,
    "softShellPieces": 8,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.0,
    "weatherAm": "Light Rain (26.6\u00b0C)",
    "weatherPm": "Partly Cloudy (31.2\u00b0C)",
    "temperature": 27.6,
    "highTemp": 31.9,
    "lowTemp": 25.2,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jerry",
    "eggSorter": "Hasna,Elmer,Amielyn"
  },
  "2026-08-25_1": {
    "date": "2026-08-25",
    "flockId": 1,
    "currentHeads": 7324,
    "mortalities": 3,
    "culls": 0,
    "cases": 17,
    "trays": 8,
    "totalPieces": 6360,
    "goodCrackPieces": 86,
    "badCrackPieces": 46,
    "misshapenPieces": 15,
    "softShellPieces": 24,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.1,
    "weatherAm": "Light Rain (26.6\u00b0C)",
    "weatherPm": "Partly Cloudy (31.2\u00b0C)",
    "temperature": 27.6,
    "highTemp": 31.9,
    "lowTemp": 25.2,
    "happenings": "Normal operations.",
    "reportBy": "kenneth",
    "flockman": "Vicente",
    "eggSorter": "jesabel"
  },
  "2026-08-25_3": {
    "date": "2026-08-25",
    "flockId": 3,
    "currentHeads": 8334,
    "mortalities": 5,
    "culls": 0,
    "cases": 20,
    "trays": 7,
    "totalPieces": 7410,
    "goodCrackPieces": 189,
    "badCrackPieces": 78,
    "misshapenPieces": 0,
    "softShellPieces": 11,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.0,
    "weatherAm": "Light Rain (26.6\u00b0C)",
    "weatherPm": "Partly Cloudy (31.2\u00b0C)",
    "temperature": 27.6,
    "highTemp": 31.9,
    "lowTemp": 25.2,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza6"
  },
  "2026-08-25_6": {
    "date": "2026-08-25",
    "flockId": 6,
    "currentHeads": 3111,
    "mortalities": 10,
    "culls": 1403,
    "cases": 6,
    "trays": 1,
    "totalPieces": 2190,
    "goodCrackPieces": 75,
    "badCrackPieces": 36,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 4.0,
    "gramsPerBird": 64.3,
    "weatherAm": "Light Rain (26.6\u00b0C)",
    "weatherPm": "Partly Cloudy (31.2\u00b0C)",
    "temperature": 27.6,
    "highTemp": 31.9,
    "lowTemp": 25.2,
    "happenings": "culling out",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Elmer, Jesabel"
  },
  "2026-08-25_5": {
    "date": "2026-08-25",
    "flockId": 5,
    "currentHeads": 11867,
    "mortalities": 4,
    "culls": 0,
    "cases": 27,
    "trays": 8,
    "totalPieces": 9960,
    "goodCrackPieces": 83,
    "badCrackPieces": 14,
    "misshapenPieces": 0,
    "softShellPieces": 5,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.5,
    "weatherAm": "Light Rain (26.6\u00b0C)",
    "weatherPm": "Partly Cloudy (31.2\u00b0C)",
    "temperature": 27.6,
    "highTemp": 31.9,
    "lowTemp": 25.2,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "jenifer"
  },
  "2026-08-26_1": {
    "date": "2026-08-26",
    "flockId": 1,
    "currentHeads": 7321,
    "mortalities": 2,
    "culls": 0,
    "cases": 17,
    "trays": 9,
    "totalPieces": 6390,
    "goodCrackPieces": 130,
    "badCrackPieces": 42,
    "misshapenPieces": 0,
    "softShellPieces": 19,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.1,
    "weatherAm": "Cloudy (27.5\u00b0C)",
    "weatherPm": "Thunderstorm (32.6\u00b0C)",
    "temperature": 28.2,
    "highTemp": 33.3,
    "lowTemp": 25.6,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Amielyn"
  },
  "2026-08-26_2": {
    "date": "2026-08-26",
    "flockId": 2,
    "currentHeads": 9566,
    "mortalities": 6,
    "culls": 0,
    "cases": 23,
    "trays": 8,
    "totalPieces": 8520,
    "goodCrackPieces": 122,
    "badCrackPieces": 24,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.0,
    "weatherAm": "Cloudy (27.5\u00b0C)",
    "weatherPm": "Thunderstorm (32.6\u00b0C)",
    "temperature": 28.2,
    "highTemp": 33.3,
    "lowTemp": 25.6,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jerry",
    "eggSorter": "Elmer and Hasna"
  },
  "2026-08-26_3": {
    "date": "2026-08-26",
    "flockId": 3,
    "currentHeads": 8329,
    "mortalities": 11,
    "culls": 0,
    "cases": 20,
    "trays": 6,
    "totalPieces": 7380,
    "goodCrackPieces": 241,
    "badCrackPieces": 107,
    "misshapenPieces": 0,
    "softShellPieces": 14,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.1,
    "weatherAm": "Cloudy (27.5\u00b0C)",
    "weatherPm": "Thunderstorm (32.6\u00b0C)",
    "temperature": 28.2,
    "highTemp": 33.3,
    "lowTemp": 25.6,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza"
  },
  "2026-08-26_6": {
    "date": "2026-08-26",
    "flockId": 6,
    "currentHeads": 1698,
    "mortalities": 9,
    "culls": 1338,
    "cases": 2,
    "trays": 10,
    "totalPieces": 1020,
    "goodCrackPieces": 43,
    "badCrackPieces": 33,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 4.0,
    "gramsPerBird": 117.8,
    "weatherAm": "Cloudy (27.5\u00b0C)",
    "weatherPm": "Thunderstorm (32.6\u00b0C)",
    "temperature": 28.2,
    "highTemp": 33.3,
    "lowTemp": 25.6,
    "happenings": "6-heads food consumption",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": "Amielyn and Elmer"
  },
  "2026-08-26_5": {
    "date": "2026-08-26",
    "flockId": 5,
    "currentHeads": 11863,
    "mortalities": 2,
    "culls": 0,
    "cases": 28,
    "trays": 0,
    "totalPieces": 10080,
    "goodCrackPieces": 104,
    "badCrackPieces": 25,
    "misshapenPieces": 8,
    "softShellPieces": 5,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.6,
    "weatherAm": "Cloudy (27.5\u00b0C)",
    "weatherPm": "Thunderstorm (32.6\u00b0C)",
    "temperature": 28.2,
    "highTemp": 33.3,
    "lowTemp": 25.6,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Jennifer"
  },
  "2026-08-27_1": {
    "date": "2026-08-27",
    "flockId": 1,
    "currentHeads": 7319,
    "mortalities": 3,
    "culls": 0,
    "cases": 17,
    "trays": 9,
    "totalPieces": 6390,
    "goodCrackPieces": 86,
    "badCrackPieces": 37,
    "misshapenPieces": 18,
    "softShellPieces": 30,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.1,
    "weatherAm": "Cloudy (27.5\u00b0C)",
    "weatherPm": "Stormy (31.1\u00b0C)",
    "temperature": 28.0,
    "highTemp": 32.3,
    "lowTemp": 25.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Jesabel"
  },
  "2026-08-27_2": {
    "date": "2026-08-27",
    "flockId": 2,
    "currentHeads": 9560,
    "mortalities": 2,
    "culls": 0,
    "cases": 23,
    "trays": 4,
    "totalPieces": 8400,
    "goodCrackPieces": 128,
    "badCrackPieces": 30,
    "misshapenPieces": 0,
    "softShellPieces": 12,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.1,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (30.8\u00b0C)",
    "temperature": 28.0,
    "highTemp": 33.1,
    "lowTemp": 25.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna and Elmer"
  },
  "2026-08-27_3": {
    "date": "2026-08-27",
    "flockId": 3,
    "currentHeads": 8318,
    "mortalities": 8,
    "culls": 0,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 219,
    "badCrackPieces": 55,
    "misshapenPieces": 0,
    "softShellPieces": 17,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.2,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (30.8\u00b0C)",
    "temperature": 28.0,
    "highTemp": 33.1,
    "lowTemp": 25.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza"
  },
  "2026-08-27_6": {
    "date": "2026-08-27",
    "flockId": 6,
    "currentHeads": 190,
    "mortalities": 20,
    "culls": 19,
    "cases": 0,
    "trays": 0,
    "totalPieces": 0,
    "goodCrackPieces": 0,
    "badCrackPieces": 0,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 4.0,
    "gramsPerBird": 1052.6,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (30.8\u00b0C)",
    "temperature": 28.0,
    "highTemp": 33.1,
    "lowTemp": 25.9,
    "happenings": "10-heads for food consumption",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": null
  },
  "2026-08-27_5": {
    "date": "2026-08-27",
    "flockId": 5,
    "currentHeads": 11861,
    "mortalities": 3,
    "culls": 0,
    "cases": 27,
    "trays": 0,
    "totalPieces": 9720,
    "goodCrackPieces": 76,
    "badCrackPieces": 19,
    "misshapenPieces": 4,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.6,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (30.8\u00b0C)",
    "temperature": 28.0,
    "highTemp": 33.1,
    "lowTemp": 25.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Jennifer and Amielyn"
  },
  "2026-08-28_1": {
    "date": "2026-08-28",
    "flockId": 1,
    "currentHeads": 7316,
    "mortalities": 2,
    "culls": 0,
    "cases": 17,
    "trays": 9,
    "totalPieces": 6390,
    "goodCrackPieces": 65,
    "badCrackPieces": 27,
    "misshapenPieces": 0,
    "softShellPieces": 27,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.2,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (32.0\u00b0C)",
    "temperature": 28.4,
    "highTemp": 32.9,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Jesabel"
  },
  "2026-08-28_2": {
    "date": "2026-08-28",
    "flockId": 2,
    "currentHeads": 9558,
    "mortalities": 3,
    "culls": 0,
    "cases": 23,
    "trays": 6,
    "totalPieces": 8460,
    "goodCrackPieces": 123,
    "badCrackPieces": 16,
    "misshapenPieces": 0,
    "softShellPieces": 13,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.1,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (32.0\u00b0C)",
    "temperature": 28.4,
    "highTemp": 32.9,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna and Elmer"
  },
  "2026-08-28_3": {
    "date": "2026-08-28",
    "flockId": 3,
    "currentHeads": 8310,
    "mortalities": 1,
    "culls": 0,
    "cases": 20,
    "trays": 6,
    "totalPieces": 7380,
    "goodCrackPieces": 135,
    "badCrackPieces": 33,
    "misshapenPieces": 0,
    "softShellPieces": 13,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.3,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (32.0\u00b0C)",
    "temperature": 28.4,
    "highTemp": 32.9,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Amielyn"
  },
  "2026-08-28_5": {
    "date": "2026-08-28",
    "flockId": 5,
    "currentHeads": 11858,
    "mortalities": 3,
    "culls": 0,
    "cases": 27,
    "trays": 5,
    "totalPieces": 9870,
    "goodCrackPieces": 54,
    "badCrackPieces": 14,
    "misshapenPieces": 3,
    "softShellPieces": 4,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.6,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (32.0\u00b0C)",
    "temperature": 28.4,
    "highTemp": 32.9,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry and Wanie",
    "eggSorter": "Jennifer"
  },
  "2026-08-28_6": {
    "date": "2026-08-28",
    "flockId": 6,
    "currentHeads": 151,
    "mortalities": 12,
    "culls": 0,
    "cases": 0,
    "trays": 0,
    "totalPieces": 0,
    "goodCrackPieces": 0,
    "badCrackPieces": 0,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Speciatist",
    "feedBags": 1.0,
    "gramsPerBird": 331.1,
    "weatherAm": "Cloudy (27.7\u00b0C)",
    "weatherPm": "Thunderstorm (32.0\u00b0C)",
    "temperature": 28.4,
    "highTemp": 32.9,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reymund",
    "eggSorter": null
  },
  "2026-08-29_2": {
    "date": "2026-08-29",
    "flockId": 2,
    "currentHeads": 9555,
    "mortalities": 4,
    "culls": 0,
    "cases": 23,
    "trays": 6,
    "totalPieces": 8460,
    "goodCrackPieces": 116,
    "badCrackPieces": 23,
    "misshapenPieces": 0,
    "softShellPieces": 7,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.1,
    "weatherAm": "Cloudy",
    "weatherPm": "Cloudy",
    "temperature": 26.7,
    "highTemp": 28.9,
    "lowTemp": 24.8,
    "happenings": "deworm",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Noraiza, Hasna"
  },
  "2026-08-29_1": {
    "date": "2026-08-29",
    "flockId": 1,
    "currentHeads": 7314,
    "mortalities": 1,
    "culls": 0,
    "cases": 17,
    "trays": 9,
    "totalPieces": 6390,
    "goodCrackPieces": 95,
    "badCrackPieces": 37,
    "misshapenPieces": 17,
    "softShellPieces": 23,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.2,
    "weatherAm": "Partly Cloudy",
    "weatherPm": "Partly Cloudy",
    "temperature": 26.7,
    "highTemp": 28.9,
    "lowTemp": 24.8,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "jesabel"
  },
  "2026-08-29_3": {
    "date": "2026-08-29",
    "flockId": 3,
    "currentHeads": 8309,
    "mortalities": 4,
    "culls": 0,
    "cases": 20,
    "trays": 6,
    "totalPieces": 7380,
    "goodCrackPieces": 208,
    "badCrackPieces": 27,
    "misshapenPieces": 0,
    "softShellPieces": 16,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.3,
    "weatherAm": "Cloudy",
    "weatherPm": "Cloudy",
    "temperature": 26.7,
    "highTemp": 28.9,
    "lowTemp": 24.8,
    "happenings": "deworm",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "elmer"
  },
  "2026-08-29_5": {
    "date": "2026-08-29",
    "flockId": 5,
    "currentHeads": 11855,
    "mortalities": 4,
    "culls": 0,
    "cases": 27,
    "trays": 7,
    "totalPieces": 9930,
    "goodCrackPieces": 110,
    "badCrackPieces": 15,
    "misshapenPieces": 7,
    "softShellPieces": 7,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.7,
    "weatherAm": "Cloudy",
    "weatherPm": "Cloudy",
    "temperature": 26.7,
    "highTemp": 28.9,
    "lowTemp": 24.8,
    "happenings": "deworm",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Jennifer and Amielyn"
  },
  "2026-08-30_1": {
    "date": "2026-08-30",
    "flockId": 1,
    "currentHeads": 7313,
    "mortalities": 4,
    "culls": 0,
    "cases": 17,
    "trays": 9,
    "totalPieces": 6390,
    "goodCrackPieces": 102,
    "badCrackPieces": 32,
    "misshapenPieces": 25,
    "softShellPieces": 19,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.2,
    "weatherAm": "Rain Showers (26.1\u00b0C)",
    "weatherPm": "Stormy (29.7\u00b0C)",
    "temperature": 27.2,
    "highTemp": 30.2,
    "lowTemp": 25.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Jesabel"
  },
  "2026-08-30_2": {
    "date": "2026-08-30",
    "flockId": 2,
    "currentHeads": 9551,
    "mortalities": 5,
    "culls": 0,
    "cases": 23,
    "trays": 8,
    "totalPieces": 8520,
    "goodCrackPieces": 100,
    "badCrackPieces": 10,
    "misshapenPieces": 0,
    "softShellPieces": 8,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.2,
    "weatherAm": "Rain Showers (26.1\u00b0C)",
    "weatherPm": "Stormy (29.7\u00b0C)",
    "temperature": 27.2,
    "highTemp": 30.2,
    "lowTemp": 25.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry and Jemel",
    "eggSorter": "Elmer, Hasna"
  },
  "2026-08-30_3": {
    "date": "2026-08-30",
    "flockId": 3,
    "currentHeads": 8305,
    "mortalities": 5,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 167,
    "badCrackPieces": 64,
    "misshapenPieces": 0,
    "softShellPieces": 5,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.4,
    "weatherAm": "Rain Showers (26.1\u00b0C)",
    "weatherPm": "Stormy (29.7\u00b0C)",
    "temperature": 27.2,
    "highTemp": 30.2,
    "lowTemp": 25.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza"
  },
  "2026-08-30_5": {
    "date": "2026-08-30",
    "flockId": 5,
    "currentHeads": 11851,
    "mortalities": 4,
    "culls": 0,
    "cases": 27,
    "trays": 0,
    "totalPieces": 9720,
    "goodCrackPieces": 66,
    "badCrackPieces": 20,
    "misshapenPieces": 0,
    "softShellPieces": 4,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.7,
    "weatherAm": "Rain Showers (26.1\u00b0C)",
    "weatherPm": "Stormy (29.7\u00b0C)",
    "temperature": 27.2,
    "highTemp": 30.2,
    "lowTemp": 25.1,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Reymund",
    "eggSorter": "Jennifer and Amielyn"
  },
  "2026-08-31_1": {
    "date": "2026-08-31",
    "flockId": 1,
    "currentHeads": 7309,
    "mortalities": 2,
    "culls": 0,
    "cases": 17,
    "trays": 8,
    "totalPieces": 6360,
    "goodCrackPieces": 87,
    "badCrackPieces": 33,
    "misshapenPieces": 25,
    "softShellPieces": 22,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.3,
    "weatherAm": "Drizzling (26.9\u00b0C)",
    "weatherPm": "Cloudy (32.0\u00b0C)",
    "temperature": 28.1,
    "highTemp": 32.5,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Jesabel"
  },
  "2026-08-31_2": {
    "date": "2026-08-31",
    "flockId": 2,
    "currentHeads": 9546,
    "mortalities": 0,
    "culls": 0,
    "cases": 23,
    "trays": 8,
    "totalPieces": 8520,
    "goodCrackPieces": 107,
    "badCrackPieces": 12,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.2,
    "weatherAm": "Drizzling (26.9\u00b0C)",
    "weatherPm": "Cloudy (32.0\u00b0C)",
    "temperature": 28.1,
    "highTemp": 32.5,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Amielyn and Hasna"
  },
  "2026-08-31_3": {
    "date": "2026-08-31",
    "flockId": 3,
    "currentHeads": 8300,
    "mortalities": 4,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 163,
    "badCrackPieces": 35,
    "misshapenPieces": 0,
    "softShellPieces": 10,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.5,
    "weatherAm": "Drizzling (26.9\u00b0C)",
    "weatherPm": "Cloudy (32.0\u00b0C)",
    "temperature": 28.1,
    "highTemp": 32.5,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza"
  },
  "2026-08-31_5": {
    "date": "2026-08-31",
    "flockId": 5,
    "currentHeads": 11847,
    "mortalities": 5,
    "culls": 0,
    "cases": 27,
    "trays": 2,
    "totalPieces": 9780,
    "goodCrackPieces": 57,
    "badCrackPieces": 14,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.7,
    "weatherAm": "Drizzling (26.9\u00b0C)",
    "weatherPm": "Cloudy (32.0\u00b0C)",
    "temperature": 28.1,
    "highTemp": 32.5,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Amielyn and Elmer"
  },
  "2026-09-01_1": {
    "date": "2026-09-01",
    "flockId": 1,
    "currentHeads": 7307,
    "mortalities": 3,
    "culls": 0,
    "cases": 17,
    "trays": 4,
    "totalPieces": 6240,
    "goodCrackPieces": 108,
    "badCrackPieces": 39,
    "misshapenPieces": 25,
    "softShellPieces": 25,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.3,
    "weatherAm": "Cloudy (28.6\u00b0C)",
    "weatherPm": "Cloudy (32.0\u00b0C)",
    "temperature": 29.2,
    "highTemp": 32.4,
    "lowTemp": 26.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Jesabel"
  },
  "2026-09-01_2": {
    "date": "2026-09-01",
    "flockId": 2,
    "currentHeads": 9546,
    "mortalities": 7,
    "culls": 0,
    "cases": 23,
    "trays": 4,
    "totalPieces": 8400,
    "goodCrackPieces": 136,
    "badCrackPieces": 26,
    "misshapenPieces": 0,
    "softShellPieces": 10,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.2,
    "weatherAm": "Cloudy (28.6\u00b0C)",
    "weatherPm": "Cloudy (32.0\u00b0C)",
    "temperature": 29.2,
    "highTemp": 32.4,
    "lowTemp": 26.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-09-01_3": {
    "date": "2026-09-01",
    "flockId": 3,
    "currentHeads": 8296,
    "mortalities": 6,
    "culls": 0,
    "cases": 20,
    "trays": 5,
    "totalPieces": 7350,
    "goodCrackPieces": 162,
    "badCrackPieces": 26,
    "misshapenPieces": 0,
    "softShellPieces": 12,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.5,
    "weatherAm": "Cloudy (28.6\u00b0C)",
    "weatherPm": "Cloudy (32.0\u00b0C)",
    "temperature": 29.2,
    "highTemp": 32.4,
    "lowTemp": 26.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Elmer"
  },
  "2026-09-01_5": {
    "date": "2026-09-01",
    "flockId": 5,
    "currentHeads": 11842,
    "mortalities": 4,
    "culls": 0,
    "cases": 26,
    "trays": 4,
    "totalPieces": 9480,
    "goodCrackPieces": 93,
    "badCrackPieces": 11,
    "misshapenPieces": 5,
    "softShellPieces": 7,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.8,
    "weatherAm": "Cloudy (28.6\u00b0C)",
    "weatherPm": "Cloudy (32.0\u00b0C)",
    "temperature": 29.2,
    "highTemp": 32.4,
    "lowTemp": 26.9,
    "happenings": "fed with building G feeds",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Jennifer and Noraiza"
  },
  "2026-09-02_1": {
    "date": "2026-09-02",
    "flockId": 1,
    "currentHeads": 7304,
    "mortalities": 2,
    "culls": 0,
    "cases": 17,
    "trays": 5,
    "totalPieces": 6270,
    "goodCrackPieces": 132,
    "badCrackPieces": 15,
    "misshapenPieces": 0,
    "softShellPieces": 13,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.4,
    "weatherAm": "Partly Cloudy (28.4\u00b0C)",
    "weatherPm": "Partly Cloudy (32.7\u00b0C)",
    "temperature": 29.3,
    "highTemp": 33.0,
    "lowTemp": 26.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Elmer and Amielyn"
  },
  "2026-09-02_2": {
    "date": "2026-09-02",
    "flockId": 2,
    "currentHeads": 9539,
    "mortalities": 2,
    "culls": 0,
    "cases": 23,
    "trays": 9,
    "totalPieces": 8550,
    "goodCrackPieces": 123,
    "badCrackPieces": 24,
    "misshapenPieces": 0,
    "softShellPieces": 3,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.3,
    "weatherAm": "Partly Cloudy (28.4\u00b0C)",
    "weatherPm": "Partly Cloudy (32.7\u00b0C)",
    "temperature": 29.3,
    "highTemp": 33.0,
    "lowTemp": 26.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-09-02_3": {
    "date": "2026-09-02",
    "flockId": 3,
    "currentHeads": 8290,
    "mortalities": 8,
    "culls": 0,
    "cases": 20,
    "trays": 3,
    "totalPieces": 7290,
    "goodCrackPieces": 218,
    "badCrackPieces": 75,
    "misshapenPieces": 0,
    "softShellPieces": 10,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.6,
    "weatherAm": "Partly Cloudy (28.4\u00b0C)",
    "weatherPm": "Partly Cloudy (32.7\u00b0C)",
    "temperature": 29.3,
    "highTemp": 33.0,
    "lowTemp": 26.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza and Jennifer"
  },
  "2026-09-02_5": {
    "date": "2026-09-02",
    "flockId": 5,
    "currentHeads": 11838,
    "mortalities": 6,
    "culls": 0,
    "cases": 24,
    "trays": 1,
    "totalPieces": 8670,
    "goodCrackPieces": 77,
    "badCrackPieces": 17,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.8,
    "weatherAm": "Partly Cloudy (28.4\u00b0C)",
    "weatherPm": "Partly Cloudy (32.7\u00b0C)",
    "temperature": 29.3,
    "highTemp": 33.0,
    "lowTemp": 26.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Jennifer and Amielyn"
  },
  "2026-09-03_1": {
    "date": "2026-09-03",
    "flockId": 1,
    "currentHeads": 7302,
    "mortalities": 2,
    "culls": 1,
    "cases": 17,
    "trays": 5,
    "totalPieces": 6270,
    "goodCrackPieces": 111,
    "badCrackPieces": 23,
    "misshapenPieces": 18,
    "softShellPieces": 23,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.4,
    "weatherAm": "Cloudy (29.2\u00b0C)",
    "weatherPm": "Cloudy (32.6\u00b0C)",
    "temperature": 29.5,
    "highTemp": 32.9,
    "lowTemp": 26.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "jesabel"
  },
  "2026-09-03_2": {
    "date": "2026-09-03",
    "flockId": 2,
    "currentHeads": 9537,
    "mortalities": 6,
    "culls": 0,
    "cases": 23,
    "trays": 6,
    "totalPieces": 8460,
    "goodCrackPieces": 120,
    "badCrackPieces": 15,
    "misshapenPieces": 0,
    "softShellPieces": 1,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.3,
    "weatherAm": "Cloudy (29.2\u00b0C)",
    "weatherPm": "Cloudy (32.6\u00b0C)",
    "temperature": 29.5,
    "highTemp": 32.9,
    "lowTemp": 26.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna and Elmer"
  },
  "2026-09-03_3": {
    "date": "2026-09-03",
    "flockId": 3,
    "currentHeads": 8282,
    "mortalities": 4,
    "culls": 0,
    "cases": 19,
    "trays": 11,
    "totalPieces": 7170,
    "goodCrackPieces": 233,
    "badCrackPieces": 38,
    "misshapenPieces": 0,
    "softShellPieces": 4,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.7,
    "weatherAm": "Cloudy (29.2\u00b0C)",
    "weatherPm": "Cloudy (32.6\u00b0C)",
    "temperature": 29.5,
    "highTemp": 32.9,
    "lowTemp": 26.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "Noraiza and Amielyn"
  },
  "2026-09-03_5": {
    "date": "2026-09-03",
    "flockId": 5,
    "currentHeads": 11832,
    "mortalities": 6,
    "culls": 0,
    "cases": 24,
    "trays": 7,
    "totalPieces": 8850,
    "goodCrackPieces": 80,
    "badCrackPieces": 17,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.9,
    "weatherAm": "Cloudy (29.2\u00b0C)",
    "weatherPm": "Cloudy (32.6\u00b0C)",
    "temperature": 29.5,
    "highTemp": 32.9,
    "lowTemp": 26.4,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "Jennifer"
  },
  "2026-09-04_1": {
    "date": "2026-09-04",
    "flockId": 1,
    "currentHeads": 7299,
    "mortalities": 5,
    "culls": 3,
    "cases": 17,
    "trays": 6,
    "totalPieces": 6300,
    "goodCrackPieces": 130,
    "badCrackPieces": 53,
    "misshapenPieces": 23,
    "softShellPieces": 28,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.5,
    "weatherAm": "Cloudy (27.8\u00b0C)",
    "weatherPm": "Drizzling (32.5\u00b0C)",
    "temperature": 28.4,
    "highTemp": 33.3,
    "lowTemp": 25.8,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Vicente",
    "eggSorter": "Jessa"
  },
  "2026-09-04_2": {
    "date": "2026-09-04",
    "flockId": 2,
    "currentHeads": 9531,
    "mortalities": 3,
    "culls": 0,
    "cases": 23,
    "trays": 4,
    "totalPieces": 8400,
    "goodCrackPieces": 95,
    "badCrackPieces": 17,
    "misshapenPieces": 0,
    "softShellPieces": 3,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.4,
    "weatherAm": "Cloudy (27.8\u00b0C)",
    "weatherPm": "Drizzling (32.5\u00b0C)",
    "temperature": 28.4,
    "highTemp": 33.3,
    "lowTemp": 25.8,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Jessa"
  },
  "2026-09-04_3": {
    "date": "2026-09-04",
    "flockId": 3,
    "currentHeads": 8278,
    "mortalities": 3,
    "culls": 0,
    "cases": 20,
    "trays": 2,
    "totalPieces": 7260,
    "goodCrackPieces": 238,
    "badCrackPieces": 43,
    "misshapenPieces": 4,
    "softShellPieces": 6,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.8,
    "weatherAm": "Cloudy (27.8\u00b0C)",
    "weatherPm": "Drizzling (32.5\u00b0C)",
    "temperature": 28.4,
    "highTemp": 33.3,
    "lowTemp": 25.8,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Dindo & Reymund",
    "eggSorter": "Amielyn"
  },
  "2026-09-04_5": {
    "date": "2026-09-04",
    "flockId": 5,
    "currentHeads": 11826,
    "mortalities": 5,
    "culls": 0,
    "cases": 24,
    "trays": 1,
    "totalPieces": 8670,
    "goodCrackPieces": 56,
    "badCrackPieces": 22,
    "misshapenPieces": 5,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 109.9,
    "weatherAm": "Cloudy (27.8\u00b0C)",
    "weatherPm": "Drizzling (32.5\u00b0C)",
    "temperature": 28.4,
    "highTemp": 33.3,
    "lowTemp": 25.8,
    "happenings": "Noel day off",
    "reportBy": "Glyne",
    "flockman": "Jerry and Wanie",
    "eggSorter": "Jen & Elmer"
  },
  "2026-09-05_1": {
    "date": "2026-09-05",
    "flockId": 1,
    "currentHeads": 7291,
    "mortalities": 1,
    "culls": 2,
    "cases": 17,
    "trays": 4,
    "totalPieces": 6240,
    "goodCrackPieces": 138,
    "badCrackPieces": 28,
    "misshapenPieces": 24,
    "softShellPieces": 33,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.6,
    "weatherAm": "Cloudy (27.0\u00b0C)",
    "weatherPm": "Thunderstorm (29.1\u00b0C)",
    "temperature": 27.1,
    "highTemp": 30.5,
    "lowTemp": 25.3,
    "happenings": "Vicente day off",
    "reportBy": "Glyne",
    "flockman": "Jerry",
    "eggSorter": "Jessa"
  },
  "2026-09-05_2": {
    "date": "2026-09-05",
    "flockId": 2,
    "currentHeads": 9528,
    "mortalities": 4,
    "culls": 0,
    "cases": 23,
    "trays": 8,
    "totalPieces": 8520,
    "goodCrackPieces": 155,
    "badCrackPieces": 16,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.4,
    "weatherAm": "Cloudy (27.0\u00b0C)",
    "weatherPm": "Thunderstorm (29.1\u00b0C)",
    "temperature": 27.1,
    "highTemp": 30.5,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Elmer"
  },
  "2026-09-05_3": {
    "date": "2026-09-05",
    "flockId": 3,
    "currentHeads": 8275,
    "mortalities": 5,
    "culls": 0,
    "cases": 20,
    "trays": 2,
    "totalPieces": 7260,
    "goodCrackPieces": 212,
    "badCrackPieces": 60,
    "misshapenPieces": 11,
    "softShellPieces": 7,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.8,
    "weatherAm": "Cloudy (27.0\u00b0C)",
    "weatherPm": "Thunderstorm (29.1\u00b0C)",
    "temperature": 27.1,
    "highTemp": 30.5,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Dindo & Reymund",
    "eggSorter": "Noraiza & Amielyn"
  },
  "2026-09-05_5": {
    "date": "2026-09-05",
    "flockId": 5,
    "currentHeads": 11821,
    "mortalities": 2,
    "culls": 0,
    "cases": 23,
    "trays": 6,
    "totalPieces": 8460,
    "goodCrackPieces": 97,
    "badCrackPieces": 12,
    "misshapenPieces": 0,
    "softShellPieces": 5,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 110.0,
    "weatherAm": "Cloudy (27.0\u00b0C)",
    "weatherPm": "Thunderstorm (29.1\u00b0C)",
    "temperature": 27.1,
    "highTemp": 30.5,
    "lowTemp": 25.3,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Noel and Wanie",
    "eggSorter": "Jennifer"
  },
  "2026-09-06_1": {
    "date": "2026-09-06",
    "flockId": 1,
    "currentHeads": 7288,
    "mortalities": 3,
    "culls": 9,
    "cases": 17,
    "trays": 5,
    "totalPieces": 6270,
    "goodCrackPieces": 114,
    "badCrackPieces": 32,
    "misshapenPieces": 2,
    "softShellPieces": 19,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.6,
    "weatherAm": "Cloudy (27.3\u00b0C)",
    "weatherPm": "Light Rain (32.0\u00b0C)",
    "temperature": 28.3,
    "highTemp": 32.6,
    "lowTemp": 25.4,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Vicente",
    "eggSorter": "Jessa"
  },
  "2026-09-06_2": {
    "date": "2026-09-06",
    "flockId": 2,
    "currentHeads": 9524,
    "mortalities": 8,
    "culls": 0,
    "cases": 23,
    "trays": 9,
    "totalPieces": 8550,
    "goodCrackPieces": 95,
    "badCrackPieces": 25,
    "misshapenPieces": 0,
    "softShellPieces": 7,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.5,
    "weatherAm": "Cloudy (27.3\u00b0C)",
    "weatherPm": "Light Rain (32.0\u00b0C)",
    "temperature": 28.3,
    "highTemp": 32.6,
    "lowTemp": 25.4,
    "happenings": "Reygie's day off",
    "reportBy": "Glyne",
    "flockman": "Jerry and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-09-06_3": {
    "date": "2026-09-06",
    "flockId": 3,
    "currentHeads": 8270,
    "mortalities": 4,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 187,
    "badCrackPieces": 76,
    "misshapenPieces": 7,
    "softShellPieces": 9,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.9,
    "weatherAm": "Cloudy (27.3\u00b0C)",
    "weatherPm": "Light Rain (32.0\u00b0C)",
    "temperature": 28.3,
    "highTemp": 32.6,
    "lowTemp": 25.4,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Dindo & Reymund",
    "eggSorter": "Noraiza"
  },
  "2026-09-06_5": {
    "date": "2026-09-06",
    "flockId": 5,
    "currentHeads": 11819,
    "mortalities": 1,
    "culls": 0,
    "cases": 23,
    "trays": 4,
    "totalPieces": 8400,
    "goodCrackPieces": 125,
    "badCrackPieces": 23,
    "misshapenPieces": 0,
    "softShellPieces": 0,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 110.0,
    "weatherAm": "Cloudy (27.3\u00b0C)",
    "weatherPm": "Light Rain (32.0\u00b0C)",
    "temperature": 28.3,
    "highTemp": 32.6,
    "lowTemp": 25.4,
    "happenings": "Normal operations.",
    "reportBy": "Glyne",
    "flockman": "Noel and Wanie",
    "eggSorter": "Jennifer"
  },
  "2026-09-07_1": {
    "date": "2026-09-07",
    "flockId": 1,
    "currentHeads": 7276,
    "mortalities": 4,
    "culls": 2,
    "cases": 17,
    "trays": 6,
    "totalPieces": 6300,
    "goodCrackPieces": 95,
    "badCrackPieces": 19,
    "misshapenPieces": 19,
    "softShellPieces": 29,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.8,
    "weatherAm": "Partly Cloudy (27.2\u00b0C)",
    "weatherPm": "Stormy (30.0\u00b0C)",
    "temperature": 27.2,
    "highTemp": 32.7,
    "lowTemp": 25.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "Jesabel"
  },
  "2026-09-07_2": {
    "date": "2026-09-07",
    "flockId": 2,
    "currentHeads": 9516,
    "mortalities": 1,
    "culls": 0,
    "cases": 23,
    "trays": 9,
    "totalPieces": 8550,
    "goodCrackPieces": 142,
    "badCrackPieces": 19,
    "misshapenPieces": 0,
    "softShellPieces": 2,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.6,
    "weatherAm": "Partly Cloudy (27.2\u00b0C)",
    "weatherPm": "Stormy (30.0\u00b0C)",
    "temperature": 27.2,
    "highTemp": 32.7,
    "lowTemp": 25.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-09-07_3": {
    "date": "2026-09-07",
    "flockId": 3,
    "currentHeads": 8266,
    "mortalities": 6,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 210,
    "badCrackPieces": 45,
    "misshapenPieces": 0,
    "softShellPieces": 15,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 114.9,
    "weatherAm": "Partly Cloudy (27.2\u00b0C)",
    "weatherPm": "Stormy (30.0\u00b0C)",
    "temperature": 27.2,
    "highTemp": 32.7,
    "lowTemp": 25.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza and Hasna"
  },
  "2026-09-07_5": {
    "date": "2026-09-07",
    "flockId": 5,
    "currentHeads": 11818,
    "mortalities": 7,
    "culls": 0,
    "cases": 22,
    "trays": 0,
    "totalPieces": 7920,
    "goodCrackPieces": 120,
    "badCrackPieces": 28,
    "misshapenPieces": 0,
    "softShellPieces": 5,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 110.0,
    "weatherAm": "Partly Cloudy (27.2\u00b0C)",
    "weatherPm": "Stormy (30.0\u00b0C)",
    "temperature": 27.2,
    "highTemp": 32.7,
    "lowTemp": 25.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Wanie",
    "eggSorter": "22"
  },
  "2026-09-08_1": {
    "date": "2026-09-08",
    "flockId": 1,
    "currentHeads": 7270,
    "mortalities": 1,
    "culls": 11,
    "cases": 17,
    "trays": 3,
    "totalPieces": 6210,
    "goodCrackPieces": 132,
    "badCrackPieces": 39,
    "misshapenPieces": 0,
    "softShellPieces": 6,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 116.9,
    "weatherAm": "Light Rain (25.7\u00b0C)",
    "weatherPm": "Stormy (30.2\u00b0C)",
    "temperature": 26.1,
    "highTemp": 31.7,
    "lowTemp": 23.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "All"
  },
  "2026-09-08_2": {
    "date": "2026-09-08",
    "flockId": 2,
    "currentHeads": 9515,
    "mortalities": 3,
    "culls": 0,
    "cases": 23,
    "trays": 8,
    "totalPieces": 8520,
    "goodCrackPieces": 115,
    "badCrackPieces": 12,
    "misshapenPieces": 0,
    "softShellPieces": 9,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.6,
    "weatherAm": "Light Rain (25.7\u00b0C)",
    "weatherPm": "Stormy (30.2\u00b0C)",
    "temperature": 26.1,
    "highTemp": 31.7,
    "lowTemp": 23.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-09-08_3": {
    "date": "2026-09-08",
    "flockId": 3,
    "currentHeads": 8260,
    "mortalities": 2,
    "culls": 0,
    "cases": 20,
    "trays": 2,
    "totalPieces": 7260,
    "goodCrackPieces": 202,
    "badCrackPieces": 70,
    "misshapenPieces": 0,
    "softShellPieces": 8,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 115.0,
    "weatherAm": "Light Rain (25.7\u00b0C)",
    "weatherPm": "Stormy (30.2\u00b0C)",
    "temperature": 26.1,
    "highTemp": 31.7,
    "lowTemp": 23.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza and Amielyn"
  },
  "2026-09-08_5": {
    "date": "2026-09-08",
    "flockId": 5,
    "currentHeads": 11811,
    "mortalities": 5,
    "culls": 0,
    "cases": 21,
    "trays": 0,
    "totalPieces": 7560,
    "goodCrackPieces": 120,
    "badCrackPieces": 26,
    "misshapenPieces": 0,
    "softShellPieces": 4,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 26.0,
    "gramsPerBird": 110.1,
    "weatherAm": "Light Rain (25.7\u00b0C)",
    "weatherPm": "Stormy (30.2\u00b0C)",
    "temperature": 26.1,
    "highTemp": 31.7,
    "lowTemp": 23.9,
    "happenings": "3-heads still alive/sacrificed for necropsy/unproductive",
    "reportBy": "Kenneth",
    "flockman": "Noel",
    "eggSorter": "Jennifer"
  },
  "2026-09-09_5": {
    "date": "2026-09-09",
    "flockId": 5,
    "currentHeads": 11806,
    "mortalities": 9,
    "culls": 0,
    "cases": 21,
    "trays": 0,
    "totalPieces": 7560,
    "goodCrackPieces": 91,
    "badCrackPieces": 18,
    "misshapenPieces": 10,
    "softShellPieces": 6,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 25.0,
    "gramsPerBird": 105.9,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "-water pipe cleaning-3 hallways done\n-less 1 bag of feeds",
    "reportBy": "Kenneth",
    "flockman": "Noel and Reymund",
    "eggSorter": "Jennifer"
  },
  "2026-09-09_1": {
    "date": "2026-09-09",
    "flockId": 1,
    "currentHeads": 7258,
    "mortalities": 5,
    "culls": 13,
    "cases": 17,
    "trays": 1,
    "totalPieces": 6150,
    "goodCrackPieces": 90,
    "badCrackPieces": 30,
    "misshapenPieces": 19,
    "softShellPieces": 19,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 117.1,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "jesabel"
  },
  "2026-09-09_2": {
    "date": "2026-09-09",
    "flockId": 2,
    "currentHeads": 9512,
    "mortalities": 4,
    "culls": 0,
    "cases": 23,
    "trays": 7,
    "totalPieces": 8490,
    "goodCrackPieces": 125,
    "badCrackPieces": 17,
    "misshapenPieces": 0,
    "softShellPieces": 4,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.6,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-09-09_3": {
    "date": "2026-09-09",
    "flockId": 3,
    "currentHeads": 8258,
    "mortalities": 7,
    "culls": 0,
    "cases": 20,
    "trays": 2,
    "totalPieces": 7260,
    "goodCrackPieces": 175,
    "badCrackPieces": 55,
    "misshapenPieces": 0,
    "softShellPieces": 17,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 115.0,
    "weatherAm": "Sunny",
    "weatherPm": "Sunny",
    "temperature": 30.0,
    "highTemp": 33.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza"
  },
  "2026-09-10_1": {
    "date": "2026-09-10",
    "flockId": 1,
    "currentHeads": 7240,
    "mortalities": 1,
    "culls": 5,
    "cases": 17,
    "trays": 2,
    "totalPieces": 6180,
    "goodCrackPieces": 104,
    "badCrackPieces": 32,
    "misshapenPieces": 21,
    "softShellPieces": 18,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 117.4,
    "weatherAm": "Rainy (25.1\u00b0C)",
    "weatherPm": "Thunderstorm (29.1\u00b0C)",
    "temperature": 25.9,
    "highTemp": 30.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "jesabel"
  },
  "2026-09-10_2": {
    "date": "2026-09-10",
    "flockId": 2,
    "currentHeads": 9508,
    "mortalities": 2,
    "culls": 0,
    "cases": 23,
    "trays": 7,
    "totalPieces": 8490,
    "goodCrackPieces": 83,
    "badCrackPieces": 16,
    "misshapenPieces": 0,
    "softShellPieces": 3,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.7,
    "weatherAm": "Rainy (25.1\u00b0C)",
    "weatherPm": "Thunderstorm (29.1\u00b0C)",
    "temperature": 25.9,
    "highTemp": 30.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna, Elmer, Amielyn"
  },
  "2026-09-10_3": {
    "date": "2026-09-10",
    "flockId": 3,
    "currentHeads": 8251,
    "mortalities": 8,
    "culls": 0,
    "cases": 20,
    "trays": 1,
    "totalPieces": 7230,
    "goodCrackPieces": 145,
    "badCrackPieces": 26,
    "misshapenPieces": 0,
    "softShellPieces": 9,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 115.1,
    "weatherAm": "Rainy (25.1\u00b0C)",
    "weatherPm": "Thunderstorm (29.1\u00b0C)",
    "temperature": 25.9,
    "highTemp": 30.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza"
  },
  "2026-09-10_5": {
    "date": "2026-09-10",
    "flockId": 5,
    "currentHeads": 11797,
    "mortalities": 5,
    "culls": 0,
    "cases": 20,
    "trays": 0,
    "totalPieces": 7200,
    "goodCrackPieces": 63,
    "badCrackPieces": 11,
    "misshapenPieces": 0,
    "softShellPieces": 2,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 25.0,
    "gramsPerBird": 106.0,
    "weatherAm": "Rainy (25.1\u00b0C)",
    "weatherPm": "Thunderstorm (29.1\u00b0C)",
    "temperature": 25.9,
    "highTemp": 30.0,
    "lowTemp": 24.0,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Reymund",
    "eggSorter": "Jennifer"
  },
  "2026-09-11_1": {
    "date": "2026-09-11",
    "flockId": 1,
    "currentHeads": 7234,
    "mortalities": 3,
    "culls": 0,
    "cases": 17,
    "trays": 2,
    "totalPieces": 6180,
    "goodCrackPieces": 92,
    "badCrackPieces": 34,
    "misshapenPieces": 0,
    "softShellPieces": 26,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 117.5,
    "weatherAm": "Light Rain (25.8\u00b0C)",
    "weatherPm": "Stormy (29.1\u00b0C)",
    "temperature": 26.0,
    "highTemp": 30.4,
    "lowTemp": 23.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "jesabel"
  },
  "2026-09-11_2": {
    "date": "2026-09-11",
    "flockId": 2,
    "currentHeads": 9506,
    "mortalities": 5,
    "culls": 0,
    "cases": 23,
    "trays": 7,
    "totalPieces": 8490,
    "goodCrackPieces": 90,
    "badCrackPieces": 16,
    "misshapenPieces": 0,
    "softShellPieces": 3,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.7,
    "weatherAm": "Light Rain (25.8\u00b0C)",
    "weatherPm": "Stormy (29.1\u00b0C)",
    "temperature": 26.0,
    "highTemp": 30.4,
    "lowTemp": 23.9,
    "happenings": "water pipes cleaning by Jerry",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-09-11_3": {
    "date": "2026-09-11",
    "flockId": 3,
    "currentHeads": 8243,
    "mortalities": 13,
    "culls": 0,
    "cases": 20,
    "trays": 5,
    "totalPieces": 7350,
    "goodCrackPieces": 137,
    "badCrackPieces": 44,
    "misshapenPieces": 2,
    "softShellPieces": 8,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 115.2,
    "weatherAm": "Light Rain (25.8\u00b0C)",
    "weatherPm": "Stormy (29.1\u00b0C)",
    "temperature": 26.0,
    "highTemp": 30.4,
    "lowTemp": 23.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Elmer and Amielyn"
  },
  "2026-09-11_5": {
    "date": "2026-09-11",
    "flockId": 5,
    "currentHeads": 11792,
    "mortalities": 3,
    "culls": 0,
    "cases": 21,
    "trays": 6,
    "totalPieces": 7740,
    "goodCrackPieces": 61,
    "badCrackPieces": 7,
    "misshapenPieces": 4,
    "softShellPieces": 3,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 25.0,
    "gramsPerBird": 106.0,
    "weatherAm": "Light Rain (25.8\u00b0C)",
    "weatherPm": "Stormy (29.1\u00b0C)",
    "temperature": 26.0,
    "highTemp": 30.4,
    "lowTemp": 23.9,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Reymund",
    "eggSorter": "Jennifer"
  },
  "2026-09-12_1": {
    "date": "2026-09-12",
    "flockId": 1,
    "currentHeads": 7231,
    "mortalities": 0,
    "culls": 0,
    "cases": 17,
    "trays": 3,
    "totalPieces": 6210,
    "goodCrackPieces": 89,
    "badCrackPieces": 33,
    "misshapenPieces": 14,
    "softShellPieces": 28,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 117.5,
    "weatherAm": "Drizzling (25.3\u00b0C)",
    "weatherPm": "Thunderstorm (29.5\u00b0C)",
    "temperature": 25.6,
    "highTemp": 30.7,
    "lowTemp": 23.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Jerry",
    "eggSorter": "jesabel"
  },
  "2026-09-12_2": {
    "date": "2026-09-12",
    "flockId": 2,
    "currentHeads": 9501,
    "mortalities": 3,
    "culls": 0,
    "cases": 23,
    "trays": 7,
    "totalPieces": 8490,
    "goodCrackPieces": 97,
    "badCrackPieces": 11,
    "misshapenPieces": 0,
    "softShellPieces": 3,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.8,
    "weatherAm": "Drizzling (25.3\u00b0C)",
    "weatherPm": "Thunderstorm (29.5\u00b0C)",
    "temperature": 25.6,
    "highTemp": 30.7,
    "lowTemp": 23.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna and Amielyn"
  },
  "2026-09-12_3": {
    "date": "2026-09-12",
    "flockId": 3,
    "currentHeads": 8230,
    "mortalities": 7,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 184,
    "badCrackPieces": 59,
    "misshapenPieces": 0,
    "softShellPieces": 9,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 115.4,
    "weatherAm": "Drizzling (25.3\u00b0C)",
    "weatherPm": "Thunderstorm (29.5\u00b0C)",
    "temperature": 25.6,
    "highTemp": 30.7,
    "lowTemp": 23.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza and Amielyn"
  },
  "2026-09-12_5": {
    "date": "2026-09-12",
    "flockId": 5,
    "currentHeads": 11789,
    "mortalities": 6,
    "culls": 0,
    "cases": 21,
    "trays": 8,
    "totalPieces": 7800,
    "goodCrackPieces": 45,
    "badCrackPieces": 10,
    "misshapenPieces": 9,
    "softShellPieces": 6,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 25.0,
    "gramsPerBird": 106.0,
    "weatherAm": "Drizzling (25.3\u00b0C)",
    "weatherPm": "Thunderstorm (29.5\u00b0C)",
    "temperature": 25.6,
    "highTemp": 30.7,
    "lowTemp": 23.3,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Reymund",
    "eggSorter": "jenifer"
  },
  "2026-09-13_1": {
    "date": "2026-09-13",
    "flockId": 1,
    "currentHeads": 7231,
    "mortalities": 3,
    "culls": 0,
    "cases": 17,
    "trays": 4,
    "totalPieces": 6240,
    "goodCrackPieces": 90,
    "badCrackPieces": 33,
    "misshapenPieces": 1,
    "softShellPieces": 29,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 117.5,
    "weatherAm": "Light Rain (25.4\u00b0C)",
    "weatherPm": "Thunderstorm (27.5\u00b0C)",
    "temperature": 25.3,
    "highTemp": 29.1,
    "lowTemp": 23.4,
    "happenings": "-pag pag",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "jesabel"
  },
  "2026-09-13_2": {
    "date": "2026-09-13",
    "flockId": 2,
    "currentHeads": 9498,
    "mortalities": 6,
    "culls": 0,
    "cases": 23,
    "trays": 8,
    "totalPieces": 8520,
    "goodCrackPieces": 83,
    "badCrackPieces": 23,
    "misshapenPieces": 0,
    "softShellPieces": 4,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.8,
    "weatherAm": "Light Rain (25.4\u00b0C)",
    "weatherPm": "Thunderstorm (27.5\u00b0C)",
    "temperature": 25.3,
    "highTemp": 29.1,
    "lowTemp": 23.4,
    "happenings": "-pag pag",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna and Amielyn"
  },
  "2026-09-13_3": {
    "date": "2026-09-13",
    "flockId": 3,
    "currentHeads": 8223,
    "mortalities": 4,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 135,
    "badCrackPieces": 47,
    "misshapenPieces": 7,
    "softShellPieces": 11,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 115.5,
    "weatherAm": "Light Rain (25.4\u00b0C)",
    "weatherPm": "Thunderstorm (27.5\u00b0C)",
    "temperature": 25.3,
    "highTemp": 29.1,
    "lowTemp": 23.4,
    "happenings": "-water pipes compressor/cleaning by :Jerry",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Hasna and Noraiza"
  },
  "2026-09-13_5": {
    "date": "2026-09-13",
    "flockId": 5,
    "currentHeads": 11783,
    "mortalities": 2,
    "culls": 0,
    "cases": 21,
    "trays": 8,
    "totalPieces": 7800,
    "goodCrackPieces": 50,
    "badCrackPieces": 5,
    "misshapenPieces": 8,
    "softShellPieces": 5,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 25.0,
    "gramsPerBird": 106.1,
    "weatherAm": "Light Rain (25.4\u00b0C)",
    "weatherPm": "Thunderstorm (27.5\u00b0C)",
    "temperature": 25.3,
    "highTemp": 29.1,
    "lowTemp": 23.4,
    "happenings": "-pag pag",
    "reportBy": "Kenneth",
    "flockman": "Noel and Reymund",
    "eggSorter": "Jennifer"
  },
  "2026-09-14_1": {
    "date": "2026-09-14",
    "flockId": 1,
    "currentHeads": 7228,
    "mortalities": 1,
    "culls": 0,
    "cases": 17,
    "trays": 5,
    "totalPieces": 6270,
    "goodCrackPieces": 84,
    "badCrackPieces": 27,
    "misshapenPieces": 30,
    "softShellPieces": 25,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 117.6,
    "weatherAm": "Drizzling (25.7\u00b0C)",
    "weatherPm": "Light Rain (30.5\u00b0C)",
    "temperature": 26.4,
    "highTemp": 31.1,
    "lowTemp": 23.6,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "jesabel"
  },
  "2026-09-14_2": {
    "date": "2026-09-14",
    "flockId": 2,
    "currentHeads": 9492,
    "mortalities": 6,
    "culls": 0,
    "cases": 23,
    "trays": 8,
    "totalPieces": 8520,
    "goodCrackPieces": 91,
    "badCrackPieces": 19,
    "misshapenPieces": 0,
    "softShellPieces": 7,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 115.9,
    "weatherAm": "Drizzling (25.7\u00b0C)",
    "weatherPm": "Light Rain (30.5\u00b0C)",
    "temperature": 26.4,
    "highTemp": 31.1,
    "lowTemp": 23.6,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna and Amielyn"
  },
  "2026-09-14_3": {
    "date": "2026-09-14",
    "flockId": 3,
    "currentHeads": 8219,
    "mortalities": 5,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 169,
    "badCrackPieces": 75,
    "misshapenPieces": 8,
    "softShellPieces": 5,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 115.6,
    "weatherAm": "Drizzling (25.7\u00b0C)",
    "weatherPm": "Light Rain (30.5\u00b0C)",
    "temperature": 26.4,
    "highTemp": 31.1,
    "lowTemp": 23.6,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza and Hasna"
  },
  "2026-09-14_5": {
    "date": "2026-09-14",
    "flockId": 5,
    "currentHeads": 11781,
    "mortalities": 5,
    "culls": 0,
    "cases": 22,
    "trays": 0,
    "totalPieces": 7920,
    "goodCrackPieces": 34,
    "badCrackPieces": 6,
    "misshapenPieces": 0,
    "softShellPieces": 7,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 25.0,
    "gramsPerBird": 106.1,
    "weatherAm": "Drizzling (25.7\u00b0C)",
    "weatherPm": "Light Rain (30.5\u00b0C)",
    "temperature": 26.4,
    "highTemp": 31.1,
    "lowTemp": 23.6,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Jerry",
    "eggSorter": "Elmer and Amielyn"
  },
  "2026-09-15_1": {
    "date": "2026-09-15",
    "flockId": 1,
    "currentHeads": 7227,
    "mortalities": 2,
    "culls": 0,
    "cases": 17,
    "trays": 7,
    "totalPieces": 6330,
    "goodCrackPieces": 86,
    "badCrackPieces": 22,
    "misshapenPieces": 16,
    "softShellPieces": 26,
    "feedBrand": "Layer 1 -Agri Specialist",
    "feedBags": 17.0,
    "gramsPerBird": 117.6,
    "weatherAm": "Light Rain (25.5\u00b0C)",
    "weatherPm": "Stormy (29.7\u00b0C)",
    "temperature": 26.0,
    "highTemp": 30.9,
    "lowTemp": 23.7,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Vicente",
    "eggSorter": "jesabel"
  },
  "2026-09-15_2": {
    "date": "2026-09-15",
    "flockId": 2,
    "currentHeads": 9486,
    "mortalities": 2,
    "culls": 0,
    "cases": 23,
    "trays": 10,
    "totalPieces": 8580,
    "goodCrackPieces": 107,
    "badCrackPieces": 17,
    "misshapenPieces": 0,
    "softShellPieces": 2,
    "feedBrand": "Layer 1- Nutrilay",
    "feedBags": 22.0,
    "gramsPerBird": 116.0,
    "weatherAm": "Light Rain (25.5\u00b0C)",
    "weatherPm": "Stormy (29.7\u00b0C)",
    "temperature": 26.0,
    "highTemp": 30.9,
    "lowTemp": 23.7,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Reygie and Jemel",
    "eggSorter": "Hasna"
  },
  "2026-09-15_3": {
    "date": "2026-09-15",
    "flockId": 3,
    "currentHeads": 8214,
    "mortalities": 5,
    "culls": 0,
    "cases": 20,
    "trays": 4,
    "totalPieces": 7320,
    "goodCrackPieces": 166,
    "badCrackPieces": 61,
    "misshapenPieces": 4,
    "softShellPieces": 0,
    "feedBrand": "Layer 1 -Nutrilay",
    "feedBags": 19.0,
    "gramsPerBird": 115.7,
    "weatherAm": "Light Rain (25.5\u00b0C)",
    "weatherPm": "Stormy (29.7\u00b0C)",
    "temperature": 26.0,
    "highTemp": 30.9,
    "lowTemp": 23.7,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Dindo",
    "eggSorter": "Noraiza"
  },
  "2026-09-15_5": {
    "date": "2026-09-15",
    "flockId": 5,
    "currentHeads": 11776,
    "mortalities": 3,
    "culls": 0,
    "cases": 22,
    "trays": 8,
    "totalPieces": 8160,
    "goodCrackPieces": 52,
    "badCrackPieces": 18,
    "misshapenPieces": 7,
    "softShellPieces": 10,
    "feedBrand": "Layer 1-Agri Specialist",
    "feedBags": 25.0,
    "gramsPerBird": 106.1,
    "weatherAm": "Light Rain (25.5\u00b0C)",
    "weatherPm": "Stormy (29.7\u00b0C)",
    "temperature": 26.0,
    "highTemp": 30.9,
    "lowTemp": 23.7,
    "happenings": "Normal operations.",
    "reportBy": "Kenneth",
    "flockman": "Noel and Jerry",
    "eggSorter": "jennifer"
  }
},
  eggSizesMap: {
  "2026-07-11_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 16,
      "totalPieces": 136
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 10,
      "totalPieces": 280
    },
    "PT": {
      "cases": 2,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 975
    },
    "PW": {
      "cases": 3,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1380
    },
    "S": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "M": {
      "cases": 2,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1020
    },
    "L": {
      "cases": 1,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 590
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 26,
      "totalPieces": 176
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-18_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 2,
      "totalPieces": 92
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NV": {
      "cases": 0,
      "trays": 9,
      "pieces": 25,
      "totalPieces": 295
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 405
    },
    "PT": {
      "cases": 2,
      "trays": 10,
      "pieces": 25,
      "totalPieces": 1045
    },
    "PW": {
      "cases": 3,
      "trays": 10,
      "pieces": 10,
      "totalPieces": 1390
    },
    "S": {
      "cases": 4,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 1545
    },
    "M": {
      "cases": 2,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 855
    },
    "L": {
      "cases": 1,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 390
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 14,
      "totalPieces": 134
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    }
  },
  "2026-07-18_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 13,
      "totalPieces": 133
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 24,
      "totalPieces": 174
    },
    "NW": {
      "cases": 1,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 475
    },
    "PT": {
      "cases": 2,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 960
    },
    "PW": {
      "cases": 4,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1620
    },
    "S": {
      "cases": 6,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2460
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "L": {
      "cases": 0,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 330
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 28,
      "totalPieces": 148
    },
    "BO": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    }
  },
  "2026-07-18_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 12,
      "totalPieces": 162
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 12,
      "totalPieces": 72
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NV": {
      "cases": 0,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 230
    },
    "NW": {
      "cases": 2,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 810
    },
    "PT": {
      "cases": 3,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1380
    },
    "PW": {
      "cases": 4,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1560
    },
    "S": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "M": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 24,
      "totalPieces": 234
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-07-18_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 29,
      "totalPieces": 209
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 17,
      "totalPieces": 77
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 9,
      "totalPieces": 159
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 1,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 570
    },
    "PW": {
      "cases": 3,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 1195
    },
    "S": {
      "cases": 6,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 2270
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "L": {
      "cases": 1,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 630
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 16,
      "totalPieces": 286
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-07-18_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 52
    },
    "NNV": {
      "cases": 0,
      "trays": 11,
      "pieces": 21,
      "totalPieces": 351
    },
    "NV": {
      "cases": 1,
      "trays": 10,
      "pieces": 2,
      "totalPieces": 662
    },
    "NW": {
      "cases": 5,
      "trays": 4,
      "pieces": 2,
      "totalPieces": 1922
    },
    "PT": {
      "cases": 8,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 3210
    },
    "PW": {
      "cases": 7,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 2745
    },
    "S": {
      "cases": 2,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 840
    },
    "M": {
      "cases": 0,
      "trays": 2,
      "pieces": 17,
      "totalPieces": 77
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 27,
      "totalPieces": 27
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 51
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 7,
      "totalPieces": 187
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-07-19_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 17,
      "totalPieces": 47
    },
    "NV": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "NW": {
      "cases": 1,
      "trays": 10,
      "pieces": 20,
      "totalPieces": 680
    },
    "PT": {
      "cases": 4,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 1670
    },
    "PW": {
      "cases": 6,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 2190
    },
    "S": {
      "cases": 5,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2010
    },
    "M": {
      "cases": 1,
      "trays": 6,
      "pieces": 25,
      "totalPieces": 565
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 17,
      "totalPieces": 137
    },
    "BO": {
      "cases": 0,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 43
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-19_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 15,
      "totalPieces": 165
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "NV": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "NW": {
      "cases": 2,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 770
    },
    "PT": {
      "cases": 3,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1380
    },
    "PW": {
      "cases": 3,
      "trays": 8,
      "pieces": 24,
      "totalPieces": 1344
    },
    "S": {
      "cases": 5,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1890
    },
    "M": {
      "cases": 1,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 475
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 23,
      "totalPieces": 233
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    }
  },
  "2026-07-19_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 170
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 2,
      "totalPieces": 62
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 1,
      "trays": 9,
      "pieces": 15,
      "totalPieces": 645
    },
    "PW": {
      "cases": 3,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1200
    },
    "S": {
      "cases": 5,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2130
    },
    "M": {
      "cases": 3,
      "trays": 9,
      "pieces": 20,
      "totalPieces": 1370
    },
    "L": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 22,
      "totalPieces": 232
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    }
  },
  "2026-07-19_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 6,
      "totalPieces": 126
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 11,
      "pieces": 19,
      "totalPieces": 349
    },
    "NNV": {
      "cases": 0,
      "trays": 8,
      "pieces": 5,
      "totalPieces": 245
    },
    "NV": {
      "cases": 1,
      "trays": 9,
      "pieces": 13,
      "totalPieces": 643
    },
    "NW": {
      "cases": 5,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1890
    },
    "PT": {
      "cases": 10,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 3608
    },
    "PW": {
      "cases": 8,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 2902
    },
    "S": {
      "cases": 1,
      "trays": 8,
      "pieces": 7,
      "totalPieces": 607
    },
    "M": {
      "cases": 0,
      "trays": 2,
      "pieces": 23,
      "totalPieces": 83
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 25,
      "totalPieces": 175
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-07-19_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 14,
      "totalPieces": 74
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 23,
      "totalPieces": 53
    },
    "NV": {
      "cases": 0,
      "trays": 7,
      "pieces": 25,
      "totalPieces": 235
    },
    "NW": {
      "cases": 0,
      "trays": 10,
      "pieces": 19,
      "totalPieces": 319
    },
    "PT": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "PW": {
      "cases": 3,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 1130
    },
    "S": {
      "cases": 4,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 1610
    },
    "M": {
      "cases": 4,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1560
    },
    "L": {
      "cases": 2,
      "trays": 11,
      "pieces": 25,
      "totalPieces": 1075
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 7,
      "totalPieces": 127
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    }
  },
  "2026-07-20_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 17,
      "totalPieces": 77
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 52
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "NV": {
      "cases": 0,
      "trays": 8,
      "pieces": 28,
      "totalPieces": 268
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 383
    },
    "PT": {
      "cases": 3,
      "trays": 5,
      "pieces": 19,
      "totalPieces": 1249
    },
    "PW": {
      "cases": 4,
      "trays": 7,
      "pieces": 10,
      "totalPieces": 1660
    },
    "S": {
      "cases": 4,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1530
    },
    "M": {
      "cases": 1,
      "trays": 8,
      "pieces": 24,
      "totalPieces": 624
    },
    "L": {
      "cases": 0,
      "trays": 9,
      "pieces": 25,
      "totalPieces": 295
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 9,
      "totalPieces": 129
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-07-20_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 18,
      "totalPieces": 78
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "NV": {
      "cases": 0,
      "trays": 8,
      "pieces": 14,
      "totalPieces": 254
    },
    "NW": {
      "cases": 2,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 780
    },
    "PT": {
      "cases": 4,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1560
    },
    "PW": {
      "cases": 6,
      "trays": 10,
      "pieces": 8,
      "totalPieces": 2468
    },
    "S": {
      "cases": 5,
      "trays": 8,
      "pieces": 17,
      "totalPieces": 2057
    },
    "M": {
      "cases": 1,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 455
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 1,
      "totalPieces": 31
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 108
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-07-20_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 22,
      "totalPieces": 142
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 27,
      "totalPieces": 57
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NV": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "NW": {
      "cases": 1,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 690
    },
    "PT": {
      "cases": 3,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 1195
    },
    "PW": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "S": {
      "cases": 5,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 1940
    },
    "M": {
      "cases": 1,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 630
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 19,
      "totalPieces": 199
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-20_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 18,
      "totalPieces": 138
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 76
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "NW": {
      "cases": 0,
      "trays": 11,
      "pieces": 27,
      "totalPieces": 357
    },
    "PT": {
      "cases": 1,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 468
    },
    "PW": {
      "cases": 2,
      "trays": 3,
      "pieces": 12,
      "totalPieces": 822
    },
    "S": {
      "cases": 4,
      "trays": 8,
      "pieces": 4,
      "totalPieces": 1684
    },
    "M": {
      "cases": 5,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2010
    },
    "L": {
      "cases": 2,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1050
    },
    "XL": {
      "cases": 0,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 230
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 4,
      "totalPieces": 214
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-07-20_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 24,
      "totalPieces": 114
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 51
    },
    "NNV": {
      "cases": 0,
      "trays": 4,
      "pieces": 17,
      "totalPieces": 137
    },
    "NV": {
      "cases": 1,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 412
    },
    "NW": {
      "cases": 5,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 1935
    },
    "PT": {
      "cases": 10,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 3620
    },
    "PW": {
      "cases": 8,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 3010
    },
    "S": {
      "cases": 2,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 745
    },
    "M": {
      "cases": 0,
      "trays": 5,
      "pieces": 12,
      "totalPieces": 162
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 17,
      "totalPieces": 47
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 15,
      "totalPieces": 165
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    }
  },
  "2026-07-21_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 1,
      "totalPieces": 91
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 225
    },
    "PT": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "PW": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "S": {
      "cases": 6,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 2220
    },
    "M": {
      "cases": 3,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1320
    },
    "L": {
      "cases": 1,
      "trays": 3,
      "pieces": 12,
      "totalPieces": 462
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 3,
      "totalPieces": 123
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-21_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 22,
      "totalPieces": 112
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 24,
      "totalPieces": 54
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 19,
      "totalPieces": 139
    },
    "NW": {
      "cases": 0,
      "trays": 11,
      "pieces": 25,
      "totalPieces": 355
    },
    "PT": {
      "cases": 3,
      "trays": 1,
      "pieces": 19,
      "totalPieces": 1129
    },
    "PW": {
      "cases": 6,
      "trays": 5,
      "pieces": 24,
      "totalPieces": 2334
    },
    "S": {
      "cases": 6,
      "trays": 7,
      "pieces": 9,
      "totalPieces": 2379
    },
    "M": {
      "cases": 2,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 930
    },
    "L": {
      "cases": 0,
      "trays": 8,
      "pieces": 22,
      "totalPieces": 262
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 12,
      "totalPieces": 102
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 16,
      "totalPieces": 166
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    }
  },
  "2026-07-21_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 11,
      "totalPieces": 131
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 24,
      "totalPieces": 54
    },
    "NV": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "NW": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "PT": {
      "cases": 3,
      "trays": 10,
      "pieces": 17,
      "totalPieces": 1397
    },
    "PW": {
      "cases": 4,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1500
    },
    "S": {
      "cases": 5,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1920
    },
    "M": {
      "cases": 1,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 570
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 3,
      "totalPieces": 63
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 6,
      "totalPieces": 186
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-07-21_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 2,
      "totalPieces": 212
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 97
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 100
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 20,
      "totalPieces": 290
    },
    "PT": {
      "cases": 1,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 590
    },
    "PW": {
      "cases": 3,
      "trays": 6,
      "pieces": 20,
      "totalPieces": 1280
    },
    "S": {
      "cases": 6,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 2280
    },
    "M": {
      "cases": 3,
      "trays": 10,
      "pieces": 10,
      "totalPieces": 1390
    },
    "L": {
      "cases": 1,
      "trays": 10,
      "pieces": 20,
      "totalPieces": 680
    },
    "XL": {
      "cases": 0,
      "trays": 7,
      "pieces": 10,
      "totalPieces": 220
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 10,
      "pieces": 9,
      "totalPieces": 309
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-07-21_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 70
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "NNV": {
      "cases": 1,
      "trays": 1,
      "pieces": 7,
      "totalPieces": 397
    },
    "NV": {
      "cases": 2,
      "trays": 6,
      "pieces": 23,
      "totalPieces": 923
    },
    "NW": {
      "cases": 6,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 2340
    },
    "PT": {
      "cases": 10,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 3810
    },
    "PW": {
      "cases": 5,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 2070
    },
    "S": {
      "cases": 1,
      "trays": 5,
      "pieces": 11,
      "totalPieces": 521
    },
    "M": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 3,
      "totalPieces": 123
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-22_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 41
    },
    "NNV": {
      "cases": 0,
      "trays": 6,
      "pieces": 11,
      "totalPieces": 191
    },
    "NV": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "NW": {
      "cases": 1,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 690
    },
    "PT": {
      "cases": 2,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 900
    },
    "PW": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "S": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 21,
      "totalPieces": 1251
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 24,
      "totalPieces": 174
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 11,
      "totalPieces": 251
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-22_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 8,
      "pieces": 20,
      "totalPieces": 260
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 6,
      "totalPieces": 156
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 1,
      "trays": 10,
      "pieces": 10,
      "totalPieces": 670
    },
    "PW": {
      "cases": 4,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1470
    },
    "S": {
      "cases": 6,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 2200
    },
    "M": {
      "cases": 3,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1260
    },
    "L": {
      "cases": 1,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 470
    },
    "XL": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 41
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 11,
      "pieces": 20,
      "totalPieces": 350
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    }
  },
  "2026-07-22_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 2,
      "totalPieces": 122
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 19,
      "totalPieces": 49
    },
    "NNV": {
      "cases": 0,
      "trays": 7,
      "pieces": 14,
      "totalPieces": 224
    },
    "NV": {
      "cases": 1,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 585
    },
    "NW": {
      "cases": 5,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1950
    },
    "PT": {
      "cases": 9,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 3420
    },
    "PW": {
      "cases": 7,
      "trays": 10,
      "pieces": 24,
      "totalPieces": 2844
    },
    "S": {
      "cases": 2,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 828
    },
    "M": {
      "cases": 0,
      "trays": 4,
      "pieces": 21,
      "totalPieces": 141
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 29,
      "totalPieces": 29
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "SJ": {
      "cases": 0,
      "trays": 2,
      "pieces": 7,
      "totalPieces": 67
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 21,
      "totalPieces": 171
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    }
  },
  "2026-07-23_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 97
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 18,
      "totalPieces": 78
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "NV": {
      "cases": 0,
      "trays": 9,
      "pieces": 21,
      "totalPieces": 291
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 18,
      "totalPieces": 408
    },
    "PT": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "PW": {
      "cases": 4,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 1510
    },
    "S": {
      "cases": 4,
      "trays": 7,
      "pieces": 12,
      "totalPieces": 1662
    },
    "M": {
      "cases": 2,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 825
    },
    "L": {
      "cases": 0,
      "trays": 9,
      "pieces": 26,
      "totalPieces": 296
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 25,
      "totalPieces": 175
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    }
  },
  "2026-07-23_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 110
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 5,
      "totalPieces": 35
    },
    "NNV": {
      "cases": 0,
      "trays": 4,
      "pieces": 13,
      "totalPieces": 133
    },
    "NV": {
      "cases": 0,
      "trays": 8,
      "pieces": 12,
      "totalPieces": 252
    },
    "NW": {
      "cases": 2,
      "trays": 3,
      "pieces": 11,
      "totalPieces": 821
    },
    "PT": {
      "cases": 3,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1200
    },
    "PW": {
      "cases": 6,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2460
    },
    "S": {
      "cases": 5,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 2040
    },
    "M": {
      "cases": 1,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 630
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 14,
      "totalPieces": 44
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-07-23_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 15,
      "totalPieces": 165
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 3,
      "totalPieces": 63
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "NW": {
      "cases": 1,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 510
    },
    "PT": {
      "cases": 3,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 1220
    },
    "PW": {
      "cases": 4,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1680
    },
    "S": {
      "cases": 6,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2160
    },
    "M": {
      "cases": 1,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 660
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 75
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 18,
      "totalPieces": 228
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-07-23_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 8,
      "pieces": 6,
      "totalPieces": 246
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 9,
      "totalPieces": 99
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NV": {
      "cases": 0,
      "trays": 8,
      "pieces": 10,
      "totalPieces": 250
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 20,
      "totalPieces": 290
    },
    "PT": {
      "cases": 2,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 735
    },
    "PW": {
      "cases": 4,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1470
    },
    "S": {
      "cases": 6,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 2220
    },
    "M": {
      "cases": 3,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 1090
    },
    "L": {
      "cases": 1,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 480
    },
    "XL": {
      "cases": 0,
      "trays": 5,
      "pieces": 25,
      "totalPieces": 175
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 11,
      "pieces": 15,
      "totalPieces": 345
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-07-23_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 23,
      "totalPieces": 143
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 19,
      "totalPieces": 49
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NNV": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "NV": {
      "cases": 0,
      "trays": 10,
      "pieces": 19,
      "totalPieces": 319
    },
    "NW": {
      "cases": 4,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1560
    },
    "PT": {
      "cases": 7,
      "trays": 10,
      "pieces": 18,
      "totalPieces": 2838
    },
    "PW": {
      "cases": 8,
      "trays": 10,
      "pieces": 11,
      "totalPieces": 3191
    },
    "S": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "M": {
      "cases": 1,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 378
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "J": {
      "cases": 0,
      "trays": 2,
      "pieces": 3,
      "totalPieces": 63
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 12,
      "totalPieces": 192
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    }
  },
  "2026-07-24_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 52
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 65
    },
    "NV": {
      "cases": 0,
      "trays": 10,
      "pieces": 20,
      "totalPieces": 320
    },
    "NW": {
      "cases": 1,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 460
    },
    "PT": {
      "cases": 3,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1110
    },
    "PW": {
      "cases": 3,
      "trays": 9,
      "pieces": 10,
      "totalPieces": 1360
    },
    "S": {
      "cases": 4,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 1506
    },
    "M": {
      "cases": 2,
      "trays": 6,
      "pieces": 10,
      "totalPieces": 910
    },
    "L": {
      "cases": 1,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 399
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 22,
      "totalPieces": 142
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    }
  },
  "2026-07-24_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 17,
      "totalPieces": 107
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 17,
      "totalPieces": 47
    },
    "NNV": {
      "cases": 0,
      "trays": 3,
      "pieces": 1,
      "totalPieces": 91
    },
    "NV": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "NW": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "PT": {
      "cases": 3,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1290
    },
    "PW": {
      "cases": 6,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 2220
    },
    "S": {
      "cases": 6,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 2250
    },
    "M": {
      "cases": 2,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 810
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 4,
      "totalPieces": 154
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 28
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-07-24_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 2,
      "totalPieces": 122
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 14,
      "totalPieces": 74
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "NW": {
      "cases": 1,
      "trays": 9,
      "pieces": 10,
      "totalPieces": 640
    },
    "PT": {
      "cases": 3,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1350
    },
    "PW": {
      "cases": 4,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1740
    },
    "S": {
      "cases": 5,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2010
    },
    "M": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 25,
      "totalPieces": 85
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 13,
      "totalPieces": 193
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-07-24_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 28,
      "totalPieces": 208
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 97
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 270
    },
    "PT": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "PW": {
      "cases": 3,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1260
    },
    "S": {
      "cases": 6,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 2310
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "L": {
      "cases": 1,
      "trays": 10,
      "pieces": 25,
      "totalPieces": 685
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 195
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 10,
      "pieces": 5,
      "totalPieces": 305
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    }
  },
  "2026-07-24_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 17,
      "totalPieces": 77
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NNV": {
      "cases": 0,
      "trays": 10,
      "pieces": 10,
      "totalPieces": 310
    },
    "NV": {
      "cases": 3,
      "trays": 11,
      "pieces": 15,
      "totalPieces": 1425
    },
    "NW": {
      "cases": 7,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 2700
    },
    "PT": {
      "cases": 9,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 3330
    },
    "PW": {
      "cases": 4,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1680
    },
    "S": {
      "cases": 1,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 383
    },
    "M": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 24,
      "totalPieces": 54
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 95
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-07-25_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 10,
      "totalPieces": 160
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 17,
      "totalPieces": 47
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 10,
      "totalPieces": 250
    },
    "PT": {
      "cases": 2,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 960
    },
    "PW": {
      "cases": 5,
      "trays": 9,
      "pieces": 15,
      "totalPieces": 2085
    },
    "S": {
      "cases": 6,
      "trays": 8,
      "pieces": 19,
      "totalPieces": 2419
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 19,
      "totalPieces": 1249
    },
    "L": {
      "cases": 1,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 450
    },
    "XL": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 27,
      "totalPieces": 207
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-07-25_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 6,
      "totalPieces": 156
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 2,
      "totalPieces": 62
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "NW": {
      "cases": 1,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 585
    },
    "PT": {
      "cases": 3,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1290
    },
    "PW": {
      "cases": 4,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1770
    },
    "S": {
      "cases": 5,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2130
    },
    "M": {
      "cases": 1,
      "trays": 9,
      "pieces": 15,
      "totalPieces": 645
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 8,
      "totalPieces": 218
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    }
  },
  "2026-07-25_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 11,
      "totalPieces": 191
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 19,
      "totalPieces": 79
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "NW": {
      "cases": 0,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 330
    },
    "PT": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "PW": {
      "cases": 3,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1290
    },
    "S": {
      "cases": 6,
      "trays": 6,
      "pieces": 6,
      "totalPieces": 2346
    },
    "M": {
      "cases": 4,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1500
    },
    "L": {
      "cases": 1,
      "trays": 6,
      "pieces": 20,
      "totalPieces": 560
    },
    "XL": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 270
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-25_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 17,
      "totalPieces": 107
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 29,
      "totalPieces": 29
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "NNV": {
      "cases": 1,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 555
    },
    "NV": {
      "cases": 4,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1500
    },
    "NW": {
      "cases": 7,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 2640
    },
    "PT": {
      "cases": 9,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 3300
    },
    "PW": {
      "cases": 4,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1620
    },
    "S": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "M": {
      "cases": 0,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 66
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 19,
      "totalPieces": 49
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 1,
      "totalPieces": 31
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 16,
      "totalPieces": 136
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-07-25_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 25,
      "totalPieces": 85
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 66
    },
    "NV": {
      "cases": 0,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 300
    },
    "NW": {
      "cases": 1,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 510
    },
    "PT": {
      "cases": 3,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1140
    },
    "PW": {
      "cases": 4,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 1610
    },
    "S": {
      "cases": 4,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 1540
    },
    "M": {
      "cases": 1,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 660
    },
    "L": {
      "cases": 0,
      "trays": 10,
      "pieces": 25,
      "totalPieces": 325
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 7,
      "totalPieces": 37
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 3,
      "totalPieces": 123
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    }
  },
  "2026-07-26_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 76
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "NW": {
      "cases": 1,
      "trays": 2,
      "pieces": 4,
      "totalPieces": 424
    },
    "PT": {
      "cases": 3,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1110
    },
    "PW": {
      "cases": 4,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1560
    },
    "S": {
      "cases": 4,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1770
    },
    "M": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "L": {
      "cases": 0,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 330
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 26,
      "totalPieces": 116
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    }
  },
  "2026-07-26_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 19,
      "totalPieces": 79
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "NNV": {
      "cases": 0,
      "trays": 3,
      "pieces": 4,
      "totalPieces": 94
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "NW": {
      "cases": 1,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 570
    },
    "PT": {
      "cases": 3,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1200
    },
    "PW": {
      "cases": 6,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2160
    },
    "S": {
      "cases": 6,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2490
    },
    "M": {
      "cases": 2,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 990
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 27,
      "totalPieces": 117
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-26_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 21,
      "totalPieces": 141
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 140
    },
    "NW": {
      "cases": 1,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 480
    },
    "PT": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "PW": {
      "cases": 4,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1710
    },
    "S": {
      "cases": 6,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 2280
    },
    "M": {
      "cases": 2,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 810
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 12,
      "totalPieces": 102
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 29,
      "totalPieces": 209
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-07-26_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 28,
      "totalPieces": 208
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 75
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 100
    },
    "NW": {
      "cases": 0,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 330
    },
    "PT": {
      "cases": 1,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 690
    },
    "PW": {
      "cases": 4,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1470
    },
    "S": {
      "cases": 6,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 2280
    },
    "M": {
      "cases": 3,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 1335
    },
    "L": {
      "cases": 1,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 510
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 13,
      "totalPieces": 283
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    }
  },
  "2026-07-26_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 7,
      "totalPieces": 157
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NNV": {
      "cases": 0,
      "trays": 4,
      "pieces": 6,
      "totalPieces": 126
    },
    "NV": {
      "cases": 1,
      "trays": 3,
      "pieces": 13,
      "totalPieces": 463
    },
    "NW": {
      "cases": 5,
      "trays": 2,
      "pieces": 3,
      "totalPieces": 1863
    },
    "PT": {
      "cases": 9,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 3337
    },
    "PW": {
      "cases": 8,
      "trays": 6,
      "pieces": 8,
      "totalPieces": 3068
    },
    "S": {
      "cases": 2,
      "trays": 6,
      "pieces": 6,
      "totalPieces": 906
    },
    "M": {
      "cases": 0,
      "trays": 4,
      "pieces": 23,
      "totalPieces": 143
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 14,
      "totalPieces": 44
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 18,
      "totalPieces": 48
    },
    "SJ": {
      "cases": 0,
      "trays": 3,
      "pieces": 11,
      "totalPieces": 101
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 7,
      "totalPieces": 187
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-07-22_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 100
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "NV": {
      "cases": 0,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 270
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 385
    },
    "PT": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "PW": {
      "cases": 4,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1590
    },
    "S": {
      "cases": 4,
      "trays": 9,
      "pieces": 20,
      "totalPieces": 1730
    },
    "M": {
      "cases": 1,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 660
    },
    "L": {
      "cases": 0,
      "trays": 9,
      "pieces": 10,
      "totalPieces": 280
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 19,
      "totalPieces": 139
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-22_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 108
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 28
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "NV": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "NW": {
      "cases": 2,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 800
    },
    "PT": {
      "cases": 4,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1500
    },
    "PW": {
      "cases": 6,
      "trays": 2,
      "pieces": 13,
      "totalPieces": 2233
    },
    "S": {
      "cases": 5,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2100
    },
    "M": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 70
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 16,
      "totalPieces": 136
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-27_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 76
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 43
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 14,
      "totalPieces": 44
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 13,
      "totalPieces": 163
    },
    "NW": {
      "cases": 0,
      "trays": 10,
      "pieces": 5,
      "totalPieces": 305
    },
    "PT": {
      "cases": 2,
      "trays": 11,
      "pieces": 12,
      "totalPieces": 1062
    },
    "PW": {
      "cases": 4,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 1535
    },
    "S": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "M": {
      "cases": 2,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 810
    },
    "L": {
      "cases": 1,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 430
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 29,
      "totalPieces": 119
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-07-27_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 2,
      "totalPieces": 122
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NNV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "NW": {
      "cases": 1,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 630
    },
    "PT": {
      "cases": 3,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1410
    },
    "PW": {
      "cases": 6,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2160
    },
    "S": {
      "cases": 6,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 2430
    },
    "M": {
      "cases": 2,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 785
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 2,
      "totalPieces": 152
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    }
  },
  "2026-07-27_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 11,
      "totalPieces": 161
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 51
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 21,
      "totalPieces": 111
    },
    "NW": {
      "cases": 1,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 505
    },
    "PT": {
      "cases": 3,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1350
    },
    "PW": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "S": {
      "cases": 5,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2130
    },
    "M": {
      "cases": 1,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 630
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 2,
      "totalPieces": 212
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-27_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 10,
      "totalPieces": 190
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 27,
      "totalPieces": 117
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 3,
      "totalPieces": 213
    },
    "PT": {
      "cases": 1,
      "trays": 6,
      "pieces": 6,
      "totalPieces": 546
    },
    "PW": {
      "cases": 3,
      "trays": 8,
      "pieces": 22,
      "totalPieces": 1342
    },
    "S": {
      "cases": 5,
      "trays": 6,
      "pieces": 18,
      "totalPieces": 1998
    },
    "M": {
      "cases": 4,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 1505
    },
    "L": {
      "cases": 2,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 817
    },
    "XL": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 10,
      "pieces": 7,
      "totalPieces": 307
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    }
  },
  "2026-07-27_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 18,
      "totalPieces": 78
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "NNV": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "NV": {
      "cases": 2,
      "trays": 5,
      "pieces": 25,
      "totalPieces": 895
    },
    "NW": {
      "cases": 6,
      "trays": 11,
      "pieces": 13,
      "totalPieces": 2503
    },
    "PT": {
      "cases": 10,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 3750
    },
    "PW": {
      "cases": 5,
      "trays": 11,
      "pieces": 21,
      "totalPieces": 2151
    },
    "S": {
      "cases": 1,
      "trays": 5,
      "pieces": 12,
      "totalPieces": 522
    },
    "M": {
      "cases": 0,
      "trays": 3,
      "pieces": 16,
      "totalPieces": 106
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 19,
      "totalPieces": 49
    },
    "SJ": {
      "cases": 0,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 66
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 9,
      "totalPieces": 99
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-07-28_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 70
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 18,
      "totalPieces": 48
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 2,
      "totalPieces": 62
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 27,
      "totalPieces": 177
    },
    "PT": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "PW": {
      "cases": 3,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1410
    },
    "S": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "M": {
      "cases": 3,
      "trays": 6,
      "pieces": 24,
      "totalPieces": 1284
    },
    "L": {
      "cases": 2,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 733
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 11,
      "totalPieces": 71
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 28,
      "totalPieces": 118
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-07-28_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 9,
      "totalPieces": 99
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 65
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 195
    },
    "NW": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "PT": {
      "cases": 3,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1260
    },
    "PW": {
      "cases": 6,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2160
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "M": {
      "cases": 2,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 870
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 9,
      "totalPieces": 129
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-28_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 18,
      "totalPieces": 138
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 4,
      "totalPieces": 64
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 27,
      "totalPieces": 87
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 405
    },
    "PT": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "PW": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "S": {
      "cases": 6,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 2340
    },
    "M": {
      "cases": 2,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 800
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 22,
      "totalPieces": 202
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-07-28_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 4,
      "totalPieces": 214
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 375
    },
    "PT": {
      "cases": 2,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 780
    },
    "PW": {
      "cases": 4,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 1540
    },
    "S": {
      "cases": 6,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2370
    },
    "M": {
      "cases": 3,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1320
    },
    "L": {
      "cases": 1,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 450
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 25,
      "totalPieces": 85
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 4,
      "totalPieces": 274
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-28_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 3,
      "totalPieces": 93
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NNV": {
      "cases": 0,
      "trays": 4,
      "pieces": 1,
      "totalPieces": 121
    },
    "NV": {
      "cases": 1,
      "trays": 8,
      "pieces": 22,
      "totalPieces": 622
    },
    "NW": {
      "cases": 6,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 2270
    },
    "PT": {
      "cases": 10,
      "trays": 11,
      "pieces": 16,
      "totalPieces": 3946
    },
    "PW": {
      "cases": 6,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2460
    },
    "S": {
      "cases": 1,
      "trays": 11,
      "pieces": 15,
      "totalPieces": 705
    },
    "M": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "J": {
      "cases": 0,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 75
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 7,
      "totalPieces": 37
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 19,
      "totalPieces": 109
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    }
  },
  "2026-07-29_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 16,
      "totalPieces": 46
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "NW": {
      "cases": 0,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 330
    },
    "PT": {
      "cases": 2,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 850
    },
    "PW": {
      "cases": 3,
      "trays": 3,
      "pieces": 24,
      "totalPieces": 1194
    },
    "S": {
      "cases": 5,
      "trays": 11,
      "pieces": 20,
      "totalPieces": 2150
    },
    "M": {
      "cases": 3,
      "trays": 2,
      "pieces": 19,
      "totalPieces": 1159
    },
    "L": {
      "cases": 0,
      "trays": 8,
      "pieces": 9,
      "totalPieces": 249
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 12,
      "totalPieces": 102
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-07-29_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 15,
      "totalPieces": 165
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 23,
      "totalPieces": 173
    },
    "NW": {
      "cases": 2,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 760
    },
    "PT": {
      "cases": 4,
      "trays": 9,
      "pieces": 25,
      "totalPieces": 1735
    },
    "PW": {
      "cases": 5,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1950
    },
    "S": {
      "cases": 5,
      "trays": 5,
      "pieces": 19,
      "totalPieces": 1969
    },
    "M": {
      "cases": 2,
      "trays": 4,
      "pieces": 6,
      "totalPieces": 846
    },
    "L": {
      "cases": 0,
      "trays": 9,
      "pieces": 5,
      "totalPieces": 275
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 14,
      "totalPieces": 44
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-07-29_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 2,
      "totalPieces": 152
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NV": {
      "cases": 0,
      "trays": 8,
      "pieces": 25,
      "totalPieces": 265
    },
    "NW": {
      "cases": 1,
      "trays": 7,
      "pieces": 14,
      "totalPieces": 584
    },
    "PT": {
      "cases": 4,
      "trays": 9,
      "pieces": 7,
      "totalPieces": 1717
    },
    "PW": {
      "cases": 6,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 2177
    },
    "S": {
      "cases": 3,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 1083
    },
    "M": {
      "cases": 1,
      "trays": 9,
      "pieces": 17,
      "totalPieces": 647
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 14,
      "totalPieces": 164
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 2,
      "totalPieces": 212
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-07-29_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 4,
      "totalPieces": 184
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 2,
      "totalPieces": 92
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 225
    },
    "PT": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "PW": {
      "cases": 4,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 1485
    },
    "S": {
      "cases": 5,
      "trays": 8,
      "pieces": 20,
      "totalPieces": 2060
    },
    "M": {
      "cases": 4,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1680
    },
    "L": {
      "cases": 1,
      "trays": 8,
      "pieces": 20,
      "totalPieces": 620
    },
    "XL": {
      "cases": 0,
      "trays": 4,
      "pieces": 8,
      "totalPieces": 128
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 24,
      "totalPieces": 294
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-07-29_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 13,
      "totalPieces": 73
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NNV": {
      "cases": 0,
      "trays": 9,
      "pieces": 24,
      "totalPieces": 294
    },
    "NV": {
      "cases": 3,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 1225
    },
    "NW": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "PT": {
      "cases": 8,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 3020
    },
    "PW": {
      "cases": 5,
      "trays": 10,
      "pieces": 15,
      "totalPieces": 2115
    },
    "S": {
      "cases": 2,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 990
    },
    "M": {
      "cases": 0,
      "trays": 2,
      "pieces": 2,
      "totalPieces": 62
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "J": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 13,
      "totalPieces": 103
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    }
  },
  "2026-07-30_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 2,
      "totalPieces": 92
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 19,
      "totalPieces": 49
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 100
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "PT": {
      "cases": 2,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 820
    },
    "PW": {
      "cases": 4,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 1465
    },
    "S": {
      "cases": 5,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 1970
    },
    "M": {
      "cases": 2,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 950
    },
    "L": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 21,
      "totalPieces": 141
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    }
  },
  "2026-07-30_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 9,
      "totalPieces": 159
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 16,
      "totalPieces": 46
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 12,
      "totalPieces": 102
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 18,
      "totalPieces": 168
    },
    "PT": {
      "cases": 2,
      "trays": 3,
      "pieces": 11,
      "totalPieces": 821
    },
    "PW": {
      "cases": 6,
      "trays": 3,
      "pieces": 23,
      "totalPieces": 2273
    },
    "S": {
      "cases": 7,
      "trays": 6,
      "pieces": 10,
      "totalPieces": 2710
    },
    "M": {
      "cases": 3,
      "trays": 1,
      "pieces": 26,
      "totalPieces": 1136
    },
    "L": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "XL": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 25,
      "totalPieces": 205
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-07-30_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 5,
      "totalPieces": 125
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 18,
      "totalPieces": 408
    },
    "PT": {
      "cases": 2,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 990
    },
    "PW": {
      "cases": 4,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1680
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "M": {
      "cases": 2,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 900
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 170
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-07-30_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 6,
      "totalPieces": 156
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 28,
      "totalPieces": 58
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 100
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 270
    },
    "PT": {
      "cases": 1,
      "trays": 6,
      "pieces": 25,
      "totalPieces": 565
    },
    "PW": {
      "cases": 3,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1260
    },
    "S": {
      "cases": 6,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 2340
    },
    "M": {
      "cases": 4,
      "trays": 6,
      "pieces": 20,
      "totalPieces": 1640
    },
    "L": {
      "cases": 1,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 585
    },
    "XL": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 4,
      "totalPieces": 214
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-07-30_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 14,
      "totalPieces": 134
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 11,
      "totalPieces": 71
    },
    "NV": {
      "cases": 1,
      "trays": 6,
      "pieces": 18,
      "totalPieces": 558
    },
    "NW": {
      "cases": 6,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2160
    },
    "PT": {
      "cases": 9,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 3240
    },
    "PW": {
      "cases": 6,
      "trays": 10,
      "pieces": 10,
      "totalPieces": 2470
    },
    "S": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "M": {
      "cases": 0,
      "trays": 7,
      "pieces": 25,
      "totalPieces": 235
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "SJ": {
      "cases": 0,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 75
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 18,
      "totalPieces": 168
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-07-31_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 11,
      "totalPieces": 101
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 41
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 230
    },
    "PT": {
      "cases": 2,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 765
    },
    "PW": {
      "cases": 4,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 1585
    },
    "S": {
      "cases": 5,
      "trays": 3,
      "pieces": 4,
      "totalPieces": 1894
    },
    "M": {
      "cases": 2,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 960
    },
    "L": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 22,
      "totalPieces": 142
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    }
  },
  "2026-07-31_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 23,
      "totalPieces": 113
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 7,
      "totalPieces": 37
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "NW": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "PT": {
      "cases": 3,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1350
    },
    "PW": {
      "cases": 5,
      "trays": 5,
      "pieces": 9,
      "totalPieces": 1959
    },
    "S": {
      "cases": 7,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 2550
    },
    "M": {
      "cases": 3,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 1118
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    }
  },
  "2026-07-31_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 17,
      "totalPieces": 197
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 51
    },
    "NV": {
      "cases": 0,
      "trays": 10,
      "pieces": 22,
      "totalPieces": 322
    },
    "NW": {
      "cases": 2,
      "trays": 5,
      "pieces": 12,
      "totalPieces": 882
    },
    "PT": {
      "cases": 3,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1410
    },
    "PW": {
      "cases": 4,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 1670
    },
    "S": {
      "cases": 5,
      "trays": 2,
      "pieces": 4,
      "totalPieces": 1864
    },
    "M": {
      "cases": 1,
      "trays": 9,
      "pieces": 5,
      "totalPieces": 635
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 4,
      "totalPieces": 64
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 8,
      "totalPieces": 248
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    }
  },
  "2026-07-31_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 22,
      "totalPieces": 172
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 65
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "NW": {
      "cases": 0,
      "trays": 10,
      "pieces": 10,
      "totalPieces": 310
    },
    "PT": {
      "cases": 1,
      "trays": 8,
      "pieces": 10,
      "totalPieces": 610
    },
    "PW": {
      "cases": 3,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1290
    },
    "S": {
      "cases": 6,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 2330
    },
    "M": {
      "cases": 4,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 1515
    },
    "L": {
      "cases": 1,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 590
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 27,
      "totalPieces": 237
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    }
  },
  "2026-07-31_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 6,
      "totalPieces": 96
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 18,
      "totalPieces": 138
    },
    "NW": {
      "cases": 2,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 860
    },
    "PT": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "PW": {
      "cases": 11,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 3960
    },
    "S": {
      "cases": 6,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 2185
    },
    "M": {
      "cases": 1,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 510
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "J": {
      "cases": 0,
      "trays": 3,
      "pieces": 6,
      "totalPieces": 96
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-01_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 27,
      "totalPieces": 87
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 19,
      "totalPieces": 49
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "PT": {
      "cases": 1,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 630
    },
    "PW": {
      "cases": 3,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 1275
    },
    "S": {
      "cases": 5,
      "trays": 8,
      "pieces": 10,
      "totalPieces": 2050
    },
    "M": {
      "cases": 3,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1200
    },
    "L": {
      "cases": 1,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 630
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 16,
      "totalPieces": 136
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    }
  },
  "2026-08-01_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 26,
      "totalPieces": 86
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 95
    },
    "NW": {
      "cases": 1,
      "trays": 5,
      "pieces": 9,
      "totalPieces": 519
    },
    "PT": {
      "cases": 3,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1260
    },
    "PW": {
      "cases": 6,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 2199
    },
    "S": {
      "cases": 7,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 2790
    },
    "M": {
      "cases": 2,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 900
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 29,
      "totalPieces": 119
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-01_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 2,
      "totalPieces": 152
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 26,
      "totalPieces": 86
    },
    "NV": {
      "cases": 1,
      "trays": 2,
      "pieces": 18,
      "totalPieces": 438
    },
    "NW": {
      "cases": 2,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 855
    },
    "PT": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "PW": {
      "cases": 4,
      "trays": 5,
      "pieces": 15,
      "totalPieces": 1605
    },
    "S": {
      "cases": 5,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1830
    },
    "M": {
      "cases": 1,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 630
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 28,
      "totalPieces": 238
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-01_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 66
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 7,
      "totalPieces": 157
    },
    "NW": {
      "cases": 0,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 330
    },
    "PT": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "PW": {
      "cases": 3,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1290
    },
    "S": {
      "cases": 6,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 2340
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "L": {
      "cases": 1,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 555
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 100
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 6,
      "totalPieces": 276
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-01_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 11,
      "totalPieces": 191
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 3,
      "totalPieces": 63
    },
    "NNV": {
      "cases": 0,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 108
    },
    "NV": {
      "cases": 0,
      "trays": 9,
      "pieces": 5,
      "totalPieces": 275
    },
    "NW": {
      "cases": 3,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1290
    },
    "PT": {
      "cases": 9,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 3248
    },
    "PW": {
      "cases": 9,
      "trays": 9,
      "pieces": 2,
      "totalPieces": 3512
    },
    "S": {
      "cases": 3,
      "trays": 8,
      "pieces": 6,
      "totalPieces": 1326
    },
    "M": {
      "cases": 0,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 225
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 24,
      "totalPieces": 54
    },
    "J": {
      "cases": 0,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 75
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 14,
      "totalPieces": 254
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    }
  },
  "2026-08-02_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 26,
      "totalPieces": 86
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 18,
      "totalPieces": 48
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 140
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "PT": {
      "cases": 2,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 830
    },
    "PW": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "S": {
      "cases": 5,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1920
    },
    "M": {
      "cases": 2,
      "trays": 9,
      "pieces": 15,
      "totalPieces": 1005
    },
    "L": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 14,
      "totalPieces": 134
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-02_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 4,
      "totalPieces": 64
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "NW": {
      "cases": 1,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 450
    },
    "PT": {
      "cases": 3,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1140
    },
    "PW": {
      "cases": 6,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2370
    },
    "S": {
      "cases": 7,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2850
    },
    "M": {
      "cases": 2,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 960
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 100
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    }
  },
  "2026-08-02_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 130
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 18,
      "totalPieces": 168
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 405
    },
    "PT": {
      "cases": 2,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 990
    },
    "PW": {
      "cases": 5,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2010
    },
    "S": {
      "cases": 6,
      "trays": 4,
      "pieces": 13,
      "totalPieces": 2293
    },
    "M": {
      "cases": 2,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 840
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 10,
      "totalPieces": 160
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    }
  },
  "2026-08-02_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 17,
      "totalPieces": 167
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 95
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 1,
      "trays": 8,
      "pieces": 20,
      "totalPieces": 620
    },
    "PW": {
      "cases": 3,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1140
    },
    "S": {
      "cases": 5,
      "trays": 10,
      "pieces": 20,
      "totalPieces": 2120
    },
    "M": {
      "cases": 4,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1500
    },
    "L": {
      "cases": 2,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 795
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 20,
      "totalPieces": 200
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 22,
      "totalPieces": 262
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    }
  },
  "2026-08-02_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 19,
      "totalPieces": 139
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 5,
      "totalPieces": 35
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "NNV": {
      "cases": 0,
      "trays": 3,
      "pieces": 11,
      "totalPieces": 101
    },
    "NV": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "NW": {
      "cases": 2,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1050
    },
    "PT": {
      "cases": 8,
      "trays": 6,
      "pieces": 12,
      "totalPieces": 3072
    },
    "PW": {
      "cases": 10,
      "trays": 7,
      "pieces": 18,
      "totalPieces": 3828
    },
    "S": {
      "cases": 3,
      "trays": 9,
      "pieces": 11,
      "totalPieces": 1361
    },
    "M": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "J": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 26,
      "totalPieces": 56
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 19,
      "totalPieces": 169
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    }
  },
  "2026-08-03_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 19,
      "totalPieces": 79
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 29,
      "totalPieces": 59
    },
    "NW": {
      "cases": 0,
      "trays": 3,
      "pieces": 28,
      "totalPieces": 118
    },
    "PT": {
      "cases": 1,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 460
    },
    "PW": {
      "cases": 3,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1200
    },
    "S": {
      "cases": 5,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2100
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 25,
      "totalPieces": 1255
    },
    "L": {
      "cases": 2,
      "trays": 4,
      "pieces": 22,
      "totalPieces": 862
    },
    "XL": {
      "cases": 0,
      "trays": 4,
      "pieces": 7,
      "totalPieces": 127
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 14,
      "totalPieces": 134
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    }
  },
  "2026-08-03_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 28,
      "totalPieces": 88
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 29,
      "totalPieces": 29
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 51
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 6,
      "totalPieces": 96
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 372
    },
    "PT": {
      "cases": 3,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1110
    },
    "PW": {
      "cases": 6,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2370
    },
    "S": {
      "cases": 7,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 2750
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1230
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 27,
      "totalPieces": 117
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    }
  },
  "2026-08-03_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 4,
      "totalPieces": 124
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 2,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1020
    },
    "PW": {
      "cases": 5,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1950
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "M": {
      "cases": 2,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 810
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 13,
      "totalPieces": 163
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-03_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 9,
      "totalPieces": 159
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 19,
      "totalPieces": 79
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 13,
      "totalPieces": 73
    },
    "NW": {
      "cases": 0,
      "trays": 10,
      "pieces": 19,
      "totalPieces": 319
    },
    "PT": {
      "cases": 1,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 570
    },
    "PW": {
      "cases": 2,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1020
    },
    "S": {
      "cases": 5,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1830
    },
    "M": {
      "cases": 5,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1830
    },
    "L": {
      "cases": 2,
      "trays": 11,
      "pieces": 25,
      "totalPieces": 1075
    },
    "XL": {
      "cases": 0,
      "trays": 9,
      "pieces": 13,
      "totalPieces": 283
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 28,
      "totalPieces": 238
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-08-03_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 97
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 9,
      "totalPieces": 69
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 19,
      "totalPieces": 199
    },
    "NW": {
      "cases": 2,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 761
    },
    "PT": {
      "cases": 5,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2100
    },
    "PW": {
      "cases": 11,
      "trays": 4,
      "pieces": 19,
      "totalPieces": 4099
    },
    "S": {
      "cases": 5,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 1995
    },
    "M": {
      "cases": 1,
      "trays": 4,
      "pieces": 11,
      "totalPieces": 491
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 7,
      "totalPieces": 67
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "SJ": {
      "cases": 0,
      "trays": 2,
      "pieces": 19,
      "totalPieces": 79
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 9,
      "totalPieces": 129
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-04_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 95
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 51
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "NW": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "PT": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PW": {
      "cases": 2,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1020
    },
    "S": {
      "cases": 5,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 2040
    },
    "M": {
      "cases": 3,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1410
    },
    "L": {
      "cases": 2,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1050
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 8,
      "totalPieces": 188
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 26,
      "totalPieces": 146
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    }
  },
  "2026-08-04_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "NW": {
      "cases": 1,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 570
    },
    "PT": {
      "cases": 3,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1350
    },
    "PW": {
      "cases": 6,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 2400
    },
    "S": {
      "cases": 7,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 2550
    },
    "M": {
      "cases": 2,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 950
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 27,
      "totalPieces": 27
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 23,
      "totalPieces": 143
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    }
  },
  "2026-08-04_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 132
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 51
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 41
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 2,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 930
    },
    "PW": {
      "cases": 5,
      "trays": 2,
      "pieces": 11,
      "totalPieces": 1871
    },
    "S": {
      "cases": 7,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 2640
    },
    "M": {
      "cases": 2,
      "trays": 5,
      "pieces": 7,
      "totalPieces": 877
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 140
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 3,
      "totalPieces": 183
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-04_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 76
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 110
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 255
    },
    "PT": {
      "cases": 1,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 510
    },
    "PW": {
      "cases": 3,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1110
    },
    "S": {
      "cases": 6,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 2250
    },
    "M": {
      "cases": 4,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1680
    },
    "L": {
      "cases": 2,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 780
    },
    "XL": {
      "cases": 0,
      "trays": 7,
      "pieces": 25,
      "totalPieces": 235
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 16,
      "totalPieces": 226
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-04_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 1,
      "totalPieces": 121
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 5,
      "totalPieces": 35
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NV": {
      "cases": 0,
      "trays": 7,
      "pieces": 17,
      "totalPieces": 227
    },
    "NW": {
      "cases": 2,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 750
    },
    "PT": {
      "cases": 4,
      "trays": 6,
      "pieces": 21,
      "totalPieces": 1641
    },
    "PW": {
      "cases": 9,
      "trays": 5,
      "pieces": 15,
      "totalPieces": 3405
    },
    "S": {
      "cases": 9,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 3260
    },
    "M": {
      "cases": 1,
      "trays": 5,
      "pieces": 19,
      "totalPieces": 529
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 76
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 7,
      "totalPieces": 37
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 28,
      "totalPieces": 58
    },
    "SJ": {
      "cases": 0,
      "trays": 2,
      "pieces": 26,
      "totalPieces": 86
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 6,
      "totalPieces": 156
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-08-05_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 13,
      "totalPieces": 133
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 28
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 65
    },
    "NW": {
      "cases": 0,
      "trays": 4,
      "pieces": 6,
      "totalPieces": 126
    },
    "PT": {
      "cases": 1,
      "trays": 5,
      "pieces": 5,
      "totalPieces": 515
    },
    "PW": {
      "cases": 3,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1140
    },
    "S": {
      "cases": 5,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1860
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 17,
      "totalPieces": 1247
    },
    "L": {
      "cases": 2,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1050
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 11,
      "totalPieces": 161
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    }
  },
  "2026-08-05_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 6,
      "totalPieces": 96
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 14,
      "totalPieces": 74
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 3,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 1180
    },
    "PW": {
      "cases": 7,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 2610
    },
    "S": {
      "cases": 7,
      "trays": 5,
      "pieces": 10,
      "totalPieces": 2680
    },
    "M": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 3,
      "totalPieces": 93
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 26,
      "totalPieces": 116
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    }
  },
  "2026-08-05_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 24,
      "totalPieces": 174
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 65
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 7,
      "totalPieces": 37
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 25,
      "totalPieces": 205
    },
    "NW": {
      "cases": 1,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 570
    },
    "PT": {
      "cases": 3,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1110
    },
    "PW": {
      "cases": 4,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 1670
    },
    "S": {
      "cases": 5,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2130
    },
    "M": {
      "cases": 2,
      "trays": 9,
      "pieces": 15,
      "totalPieces": 1005
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 29,
      "totalPieces": 239
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-08-05_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 26,
      "totalPieces": 86
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 97
    },
    "NW": {
      "cases": 2,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 870
    },
    "PT": {
      "cases": 6,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 2385
    },
    "PW": {
      "cases": 10,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 3660
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 2530
    },
    "M": {
      "cases": 1,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 367
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 51
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 8,
      "totalPieces": 98
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-08-05_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 8,
      "pieces": 9,
      "totalPieces": 249
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "PT": {
      "cases": 1,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 495
    },
    "PW": {
      "cases": 3,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 1095
    },
    "S": {
      "cases": 6,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 2310
    },
    "M": {
      "cases": 4,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1620
    },
    "L": {
      "cases": 2,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 835
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 10,
      "totalPieces": 190
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 5,
      "totalPieces": 35
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 27,
      "totalPieces": 297
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    }
  },
  "2026-08-06_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 12,
      "totalPieces": 102
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NV": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 7,
      "totalPieces": 157
    },
    "PT": {
      "cases": 1,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 450
    },
    "PW": {
      "cases": 3,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 1090
    },
    "S": {
      "cases": 6,
      "trays": 9,
      "pieces": 12,
      "totalPieces": 2442
    },
    "M": {
      "cases": 4,
      "trays": 4,
      "pieces": 9,
      "totalPieces": 1569
    },
    "L": {
      "cases": 1,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 480
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 18,
      "totalPieces": 48
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 1,
      "totalPieces": 151
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-06_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 21,
      "totalPieces": 111
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 19,
      "totalPieces": 139
    },
    "NW": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "PT": {
      "cases": 4,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1710
    },
    "PW": {
      "cases": 6,
      "trays": 9,
      "pieces": 18,
      "totalPieces": 2448
    },
    "S": {
      "cases": 6,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2160
    },
    "M": {
      "cases": 2,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 810
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 76
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 2,
      "totalPieces": 122
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    }
  },
  "2026-08-06_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 5,
      "totalPieces": 185
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 108
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 2,
      "trays": 8,
      "pieces": 25,
      "totalPieces": 985
    },
    "PW": {
      "cases": 5,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1980
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "M": {
      "cases": 2,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 810
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 140
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 19,
      "totalPieces": 199
    },
    "BO": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    }
  },
  "2026-08-06_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 22,
      "totalPieces": 172
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 7,
      "totalPieces": 67
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 7,
      "totalPieces": 37
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 255
    },
    "PT": {
      "cases": 1,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 510
    },
    "PW": {
      "cases": 3,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 1130
    },
    "S": {
      "cases": 6,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 2210
    },
    "M": {
      "cases": 4,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1590
    },
    "L": {
      "cases": 2,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 840
    },
    "XL": {
      "cases": 0,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 270
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 41
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 29,
      "totalPieces": 239
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-06_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 100
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 43
    },
    "NW": {
      "cases": 1,
      "trays": 6,
      "pieces": 20,
      "totalPieces": 560
    },
    "PT": {
      "cases": 4,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 1480
    },
    "PW": {
      "cases": 9,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 3420
    },
    "S": {
      "cases": 9,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 3510
    },
    "M": {
      "cases": 2,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1050
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 70
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "J": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "SJ": {
      "cases": 0,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 75
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 23,
      "totalPieces": 113
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    }
  },
  "2026-08-07_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 13,
      "totalPieces": 103
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 95
    },
    "NW": {
      "cases": 1,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 435
    },
    "PT": {
      "cases": 3,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1200
    },
    "PW": {
      "cases": 6,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 2430
    },
    "S": {
      "cases": 7,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2820
    },
    "M": {
      "cases": 3,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1110
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 29,
      "totalPieces": 119
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-07_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 2,
      "totalPieces": 182
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 12,
      "totalPieces": 72
    },
    "NW": {
      "cases": 1,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 440
    },
    "PT": {
      "cases": 2,
      "trays": 9,
      "pieces": 19,
      "totalPieces": 1009
    },
    "PW": {
      "cases": 5,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2010
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "M": {
      "cases": 2,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 825
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 11,
      "totalPieces": 221
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-07_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 26,
      "totalPieces": 176
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 7,
      "totalPieces": 67
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "PT": {
      "cases": 1,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 500
    },
    "PW": {
      "cases": 2,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 975
    },
    "S": {
      "cases": 6,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2160
    },
    "M": {
      "cases": 4,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1710
    },
    "L": {
      "cases": 2,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 960
    },
    "XL": {
      "cases": 1,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 405
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 3,
      "totalPieces": 243
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-07_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 14,
      "totalPieces": 74
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 15,
      "totalPieces": 165
    },
    "NW": {
      "cases": 1,
      "trays": 7,
      "pieces": 18,
      "totalPieces": 588
    },
    "PT": {
      "cases": 4,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1500
    },
    "PW": {
      "cases": 8,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 3135
    },
    "S": {
      "cases": 9,
      "trays": 7,
      "pieces": 16,
      "totalPieces": 3466
    },
    "M": {
      "cases": 2,
      "trays": 9,
      "pieces": 20,
      "totalPieces": 1010
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 110
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "SJ": {
      "cases": 0,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 75
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 3,
      "totalPieces": 93
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    }
  },
  "2026-08-07_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 108
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "NW": {
      "cases": 0,
      "trays": 4,
      "pieces": 7,
      "totalPieces": 127
    },
    "PT": {
      "cases": 1,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 510
    },
    "PW": {
      "cases": 3,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1110
    },
    "S": {
      "cases": 5,
      "trays": 8,
      "pieces": 25,
      "totalPieces": 2065
    },
    "M": {
      "cases": 3,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1320
    },
    "L": {
      "cases": 2,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 960
    },
    "XL": {
      "cases": 0,
      "trays": 5,
      "pieces": 12,
      "totalPieces": 162
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 140
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    }
  },
  "2026-08-08_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 26,
      "totalPieces": 116
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 21,
      "totalPieces": 171
    },
    "PT": {
      "cases": 1,
      "trays": 6,
      "pieces": 20,
      "totalPieces": 560
    },
    "PW": {
      "cases": 3,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 1180
    },
    "S": {
      "cases": 5,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 1940
    },
    "M": {
      "cases": 3,
      "trays": 9,
      "pieces": 10,
      "totalPieces": 1360
    },
    "L": {
      "cases": 2,
      "trays": 8,
      "pieces": 3,
      "totalPieces": 963
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 8,
      "totalPieces": 158
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    }
  },
  "2026-08-08_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 28,
      "totalPieces": 118
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 52
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 8,
      "totalPieces": 188
    },
    "PT": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "PW": {
      "cases": 4,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1500
    },
    "S": {
      "cases": 8,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2880
    },
    "M": {
      "cases": 6,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 2340
    },
    "L": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 52
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 16,
      "totalPieces": 136
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-08_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 23,
      "totalPieces": 203
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 25,
      "totalPieces": 85
    },
    "NW": {
      "cases": 1,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 435
    },
    "PT": {
      "cases": 2,
      "trays": 9,
      "pieces": 20,
      "totalPieces": 1010
    },
    "PW": {
      "cases": 5,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1980
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "M": {
      "cases": 2,
      "trays": 4,
      "pieces": 5,
      "totalPieces": 845
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 5,
      "totalPieces": 245
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-08_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 10,
      "totalPieces": 190
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 12,
      "totalPieces": 72
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "PT": {
      "cases": 1,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 505
    },
    "PW": {
      "cases": 3,
      "trays": 2,
      "pieces": 11,
      "totalPieces": 1151
    },
    "S": {
      "cases": 6,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 2190
    },
    "M": {
      "cases": 4,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1620
    },
    "L": {
      "cases": 2,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 840
    },
    "XL": {
      "cases": 0,
      "trays": 9,
      "pieces": 10,
      "totalPieces": 280
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 22,
      "totalPieces": 262
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    }
  },
  "2026-08-08_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 8,
      "totalPieces": 98
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 8,
      "totalPieces": 98
    },
    "NW": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "PT": {
      "cases": 5,
      "trays": 5,
      "pieces": 10,
      "totalPieces": 1960
    },
    "PW": {
      "cases": 10,
      "trays": 8,
      "pieces": 5,
      "totalPieces": 3845
    },
    "S": {
      "cases": 7,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 2652
    },
    "M": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 11,
      "totalPieces": 101
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 7,
      "totalPieces": 67
    },
    "J": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 3,
      "totalPieces": 123
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-09_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 9,
      "totalPieces": 99
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 17,
      "totalPieces": 47
    },
    "NW": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "PT": {
      "cases": 1,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 495
    },
    "PW": {
      "cases": 2,
      "trays": 8,
      "pieces": 20,
      "totalPieces": 980
    },
    "S": {
      "cases": 6,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2160
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1230
    },
    "L": {
      "cases": 2,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1050
    },
    "XL": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 9,
      "totalPieces": 129
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    }
  },
  "2026-08-09_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 70
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 410
    },
    "PT": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "PW": {
      "cases": 7,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 2550
    },
    "S": {
      "cases": 7,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 2610
    },
    "M": {
      "cases": 3,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1200
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 12,
      "totalPieces": 162
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 8,
      "totalPieces": 158
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-08-09_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 21,
      "totalPieces": 171
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 11,
      "totalPieces": 101
    },
    "NW": {
      "cases": 1,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 465
    },
    "PT": {
      "cases": 3,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 1185
    },
    "PW": {
      "cases": 6,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 2190
    },
    "S": {
      "cases": 6,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 2220
    },
    "M": {
      "cases": 2,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 780
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 65
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 3,
      "totalPieces": 213
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-09_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 4,
      "totalPieces": 214
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 16,
      "totalPieces": 46
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 270
    },
    "PT": {
      "cases": 1,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 420
    },
    "PW": {
      "cases": 2,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 990
    },
    "S": {
      "cases": 6,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 2205
    },
    "M": {
      "cases": 4,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1620
    },
    "L": {
      "cases": 2,
      "trays": 6,
      "pieces": 20,
      "totalPieces": 920
    },
    "XL": {
      "cases": 1,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 370
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 12,
      "totalPieces": 282
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-09_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 25,
      "totalPieces": 85
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 29,
      "totalPieces": 29
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "SOFT SHELL": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 41
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 132
    },
    "NW": {
      "cases": 1,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 660
    },
    "PT": {
      "cases": 6,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 2400
    },
    "PW": {
      "cases": 11,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 4020
    },
    "S": {
      "cases": 6,
      "trays": 2,
      "pieces": 11,
      "totalPieces": 2231
    },
    "M": {
      "cases": 1,
      "trays": 6,
      "pieces": 6,
      "totalPieces": 546
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 132
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 14,
      "totalPieces": 44
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 14,
      "totalPieces": 44
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 24,
      "totalPieces": 114
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-08-10_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 19,
      "totalPieces": 109
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "PT": {
      "cases": 1,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 530
    },
    "PW": {
      "cases": 2,
      "trays": 6,
      "pieces": 20,
      "totalPieces": 920
    },
    "S": {
      "cases": 5,
      "trays": 9,
      "pieces": 6,
      "totalPieces": 2076
    },
    "M": {
      "cases": 4,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1680
    },
    "L": {
      "cases": 1,
      "trays": 10,
      "pieces": 25,
      "totalPieces": 685
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    }
  },
  "2026-08-10_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 24,
      "totalPieces": 114
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 100
    },
    "NW": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "PT": {
      "cases": 3,
      "trays": 6,
      "pieces": 10,
      "totalPieces": 1270
    },
    "PW": {
      "cases": 6,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 2190
    },
    "S": {
      "cases": 8,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 2970
    },
    "M": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 170
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 14,
      "totalPieces": 134
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    }
  },
  "2026-08-10_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 29,
      "totalPieces": 149
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 1,
      "totalPieces": 61
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 29,
      "totalPieces": 179
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 3,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 1097
    },
    "PW": {
      "cases": 5,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1950
    },
    "S": {
      "cases": 6,
      "trays": 7,
      "pieces": 27,
      "totalPieces": 2397
    },
    "M": {
      "cases": 2,
      "trays": 3,
      "pieces": 17,
      "totalPieces": 827
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 28
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    }
  },
  "2026-08-10_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 17,
      "totalPieces": 167
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 16,
      "totalPieces": 136
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 52
    },
    "NW": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "PT": {
      "cases": 2,
      "trays": 9,
      "pieces": 17,
      "totalPieces": 1007
    },
    "PW": {
      "cases": 5,
      "trays": 8,
      "pieces": 19,
      "totalPieces": 2059
    },
    "S": {
      "cases": 5,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2130
    },
    "M": {
      "cases": 2,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 786
    },
    "L": {
      "cases": 1,
      "trays": 11,
      "pieces": 8,
      "totalPieces": 698
    },
    "XL": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 10,
      "pieces": 3,
      "totalPieces": 303
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    }
  },
  "2026-08-10_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 13,
      "totalPieces": 73
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 23,
      "totalPieces": 53
    },
    "NV": {
      "cases": 0,
      "trays": 8,
      "pieces": 2,
      "totalPieces": 242
    },
    "NW": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "PT": {
      "cases": 5,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2010
    },
    "PW": {
      "cases": 9,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 3420
    },
    "S": {
      "cases": 7,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 2640
    },
    "M": {
      "cases": 1,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 690
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 18,
      "totalPieces": 48
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 6,
      "totalPieces": 96
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-11_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 6,
      "totalPieces": 126
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "NW": {
      "cases": 0,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 100
    },
    "PT": {
      "cases": 1,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 480
    },
    "PW": {
      "cases": 2,
      "trays": 9,
      "pieces": 11,
      "totalPieces": 1001
    },
    "S": {
      "cases": 5,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2100
    },
    "M": {
      "cases": 3,
      "trays": 6,
      "pieces": 20,
      "totalPieces": 1280
    },
    "L": {
      "cases": 2,
      "trays": 9,
      "pieces": 15,
      "totalPieces": 1005
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 5,
      "totalPieces": 185
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 10,
      "totalPieces": 160
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    }
  },
  "2026-08-11_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 9,
      "totalPieces": 99
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 5,
      "totalPieces": 35
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 17,
      "totalPieces": 77
    },
    "NW": {
      "cases": 1,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 510
    },
    "PT": {
      "cases": 4,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1560
    },
    "PW": {
      "cases": 7,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 2628
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "M": {
      "cases": 2,
      "trays": 3,
      "pieces": 24,
      "totalPieces": 834
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 14,
      "totalPieces": 134
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    }
  },
  "2026-08-11_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 6,
      "totalPieces": 216
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 24,
      "totalPieces": 54
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 1,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 430
    },
    "PT": {
      "cases": 2,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 900
    },
    "PW": {
      "cases": 5,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 1880
    },
    "S": {
      "cases": 7,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 2670
    },
    "M": {
      "cases": 2,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 870
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 5,
      "totalPieces": 155
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 27,
      "totalPieces": 27
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 270
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    }
  },
  "2026-08-11_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 7,
      "totalPieces": 217
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 66
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 10,
      "totalPieces": 280
    },
    "PT": {
      "cases": 1,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 570
    },
    "PW": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "S": {
      "cases": 6,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 2170
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "L": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "XL": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 5,
      "totalPieces": 35
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 13,
      "totalPieces": 283
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-11_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 4,
      "totalPieces": 124
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 7,
      "totalPieces": 37
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 5,
      "totalPieces": 35
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "PT": {
      "cases": 5,
      "trays": 5,
      "pieces": 22,
      "totalPieces": 1972
    },
    "PW": {
      "cases": 11,
      "trays": 4,
      "pieces": 26,
      "totalPieces": 4106
    },
    "S": {
      "cases": 6,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 2415
    },
    "M": {
      "cases": 1,
      "trays": 8,
      "pieces": 4,
      "totalPieces": 604
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 6,
      "totalPieces": 96
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 28,
      "totalPieces": 58
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 41
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 11,
      "totalPieces": 161
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-08-12_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 23,
      "totalPieces": 53
    },
    "NW": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "PT": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "PW": {
      "cases": 3,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 1105
    },
    "S": {
      "cases": 5,
      "trays": 9,
      "pieces": 20,
      "totalPieces": 2090
    },
    "M": {
      "cases": 3,
      "trays": 6,
      "pieces": 10,
      "totalPieces": 1270
    },
    "L": {
      "cases": 2,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 785
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 7,
      "totalPieces": 187
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    }
  },
  "2026-08-12_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 1,
      "totalPieces": 121
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 13,
      "totalPieces": 103
    },
    "NW": {
      "cases": 1,
      "trays": 6,
      "pieces": 22,
      "totalPieces": 562
    },
    "PT": {
      "cases": 4,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1740
    },
    "PW": {
      "cases": 6,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2490
    },
    "S": {
      "cases": 6,
      "trays": 9,
      "pieces": 6,
      "totalPieces": 2436
    },
    "M": {
      "cases": 2,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 780
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 66
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    }
  },
  "2026-08-12_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 9,
      "pieces": 22,
      "totalPieces": 292
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 11,
      "totalPieces": 101
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 2,
      "totalPieces": 62
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 401
    },
    "PT": {
      "cases": 2,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 810
    },
    "PW": {
      "cases": 3,
      "trays": 10,
      "pieces": 18,
      "totalPieces": 1398
    },
    "S": {
      "cases": 6,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2490
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1230
    },
    "L": {
      "cases": 1,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 381
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 5,
      "totalPieces": 35
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "BR": {
      "cases": 1,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 398
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-12_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 24,
      "totalPieces": 234
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 21,
      "totalPieces": 111
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 132
    },
    "NW": {
      "cases": 0,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 300
    },
    "PT": {
      "cases": 1,
      "trays": 7,
      "pieces": 10,
      "totalPieces": 580
    },
    "PW": {
      "cases": 3,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 1105
    },
    "S": {
      "cases": 5,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2100
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "L": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "XL": {
      "cases": 1,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 370
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 26,
      "totalPieces": 56
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 11,
      "pieces": 15,
      "totalPieces": 345
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-12_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 80
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NV": {
      "cases": 0,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 225
    },
    "NW": {
      "cases": 2,
      "trays": 10,
      "pieces": 15,
      "totalPieces": 1035
    },
    "PT": {
      "cases": 6,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2460
    },
    "PW": {
      "cases": 9,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 3480
    },
    "S": {
      "cases": 6,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2370
    },
    "M": {
      "cases": 1,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 480
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 70
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 17,
      "totalPieces": 47
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 8,
      "totalPieces": 98
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    }
  },
  "2026-08-13_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 52
    },
    "NW": {
      "cases": 0,
      "trays": 2,
      "pieces": 11,
      "totalPieces": 71
    },
    "PT": {
      "cases": 0,
      "trays": 10,
      "pieces": 3,
      "totalPieces": 303
    },
    "PW": {
      "cases": 2,
      "trays": 2,
      "pieces": 17,
      "totalPieces": 797
    },
    "S": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "M": {
      "cases": 6,
      "trays": 7,
      "pieces": 7,
      "totalPieces": 2377
    },
    "L": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 23,
      "totalPieces": 83
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 4,
      "totalPieces": 184
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-13_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 140
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 110
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 410
    },
    "PT": {
      "cases": 3,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1260
    },
    "PW": {
      "cases": 6,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 2340
    },
    "S": {
      "cases": 7,
      "trays": 4,
      "pieces": 18,
      "totalPieces": 2658
    },
    "M": {
      "cases": 3,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 1146
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 195
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 2,
      "totalPieces": 182
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-13_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 26,
      "totalPieces": 236
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 9,
      "totalPieces": 69
    },
    "NNV": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 9,
      "totalPieces": 189
    },
    "NW": {
      "cases": 1,
      "trays": 5,
      "pieces": 7,
      "totalPieces": 517
    },
    "PT": {
      "cases": 3,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1200
    },
    "PW": {
      "cases": 5,
      "trays": 10,
      "pieces": 17,
      "totalPieces": 2117
    },
    "S": {
      "cases": 6,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 2164
    },
    "M": {
      "cases": 1,
      "trays": 5,
      "pieces": 21,
      "totalPieces": 531
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 8,
      "totalPieces": 158
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "BR": {
      "cases": 0,
      "trays": 10,
      "pieces": 5,
      "totalPieces": 305
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-13_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 29,
      "totalPieces": 239
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 16,
      "totalPieces": 106
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "NW": {
      "cases": 0,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 300
    },
    "PT": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "PW": {
      "cases": 3,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 1190
    },
    "S": {
      "cases": 6,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 2235
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "L": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "XL": {
      "cases": 0,
      "trays": 9,
      "pieces": 4,
      "totalPieces": 274
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 11,
      "pieces": 15,
      "totalPieces": 345
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    }
  },
  "2026-08-13_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 4,
      "totalPieces": 94
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 14,
      "totalPieces": 44
    },
    "NV": {
      "cases": 0,
      "trays": 7,
      "pieces": 5,
      "totalPieces": 215
    },
    "NW": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "PT": {
      "cases": 6,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 2310
    },
    "PW": {
      "cases": 10,
      "trays": 3,
      "pieces": 19,
      "totalPieces": 3709
    },
    "S": {
      "cases": 6,
      "trays": 9,
      "pieces": 12,
      "totalPieces": 2442
    },
    "M": {
      "cases": 0,
      "trays": 10,
      "pieces": 3,
      "totalPieces": 303
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 7,
      "totalPieces": 127
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-14_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 24,
      "totalPieces": 114
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 13,
      "totalPieces": 73
    },
    "NW": {
      "cases": 0,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 300
    },
    "PT": {
      "cases": 3,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1230
    },
    "PW": {
      "cases": 6,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 2430
    },
    "S": {
      "cases": 7,
      "trays": 10,
      "pieces": 12,
      "totalPieces": 2832
    },
    "M": {
      "cases": 3,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 1180
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-08-14_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 22,
      "totalPieces": 202
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 41
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 52
    },
    "NV": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "NW": {
      "cases": 2,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 810
    },
    "PT": {
      "cases": 4,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1680
    },
    "PW": {
      "cases": 6,
      "trays": 6,
      "pieces": 10,
      "totalPieces": 2350
    },
    "S": {
      "cases": 3,
      "trays": 6,
      "pieces": 5,
      "totalPieces": 1265
    },
    "M": {
      "cases": 0,
      "trays": 1,
      "pieces": 17,
      "totalPieces": 47
    },
    "L": {
      "cases": 0,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 300
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 3,
      "totalPieces": 243
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-14_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 8,
      "pieces": 25,
      "totalPieces": 265
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 21,
      "totalPieces": 111
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 14,
      "totalPieces": 134
    },
    "NW": {
      "cases": 0,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 330
    },
    "PT": {
      "cases": 1,
      "trays": 9,
      "pieces": 10,
      "totalPieces": 640
    },
    "PW": {
      "cases": 3,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1140
    },
    "S": {
      "cases": 6,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2160
    },
    "M": {
      "cases": 3,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1410
    },
    "L": {
      "cases": 1,
      "trays": 9,
      "pieces": 25,
      "totalPieces": 655
    },
    "XL": {
      "cases": 0,
      "trays": 9,
      "pieces": 5,
      "totalPieces": 275
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 1,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 376
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-14_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 14,
      "totalPieces": 74
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 2,
      "totalPieces": 152
    },
    "NW": {
      "cases": 1,
      "trays": 10,
      "pieces": 16,
      "totalPieces": 676
    },
    "PT": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "PW": {
      "cases": 9,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 3450
    },
    "S": {
      "cases": 8,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 3060
    },
    "M": {
      "cases": 2,
      "trays": 2,
      "pieces": 12,
      "totalPieces": 792
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 2,
      "totalPieces": 62
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 27,
      "totalPieces": 27
    },
    "SJ": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 2,
      "totalPieces": 92
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    }
  },
  "2026-08-14_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 3,
      "totalPieces": 153
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 1,
      "totalPieces": 31
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "NW": {
      "cases": 0,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 130
    },
    "PT": {
      "cases": 1,
      "trays": 7,
      "pieces": 12,
      "totalPieces": 582
    },
    "PW": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "S": {
      "cases": 5,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1920
    },
    "M": {
      "cases": 4,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 1483
    },
    "L": {
      "cases": 2,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 780
    },
    "XL": {
      "cases": 0,
      "trays": 4,
      "pieces": 4,
      "totalPieces": 124
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 4,
      "totalPieces": 184
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-15_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 28,
      "totalPieces": 148
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 23,
      "totalPieces": 53
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "PT": {
      "cases": 2,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 730
    },
    "PW": {
      "cases": 3,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1230
    },
    "S": {
      "cases": 5,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 1845
    },
    "M": {
      "cases": 3,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1380
    },
    "L": {
      "cases": 2,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 786
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 108
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 24,
      "totalPieces": 174
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    }
  },
  "2026-08-15_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 8,
      "pieces": 21,
      "totalPieces": 261
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 66
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 26,
      "totalPieces": 116
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 2,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 810
    },
    "PW": {
      "cases": 4,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 1695
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "M": {
      "cases": 3,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1140
    },
    "L": {
      "cases": 0,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 330
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 10,
      "pieces": 27,
      "totalPieces": 327
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-15_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 16,
      "totalPieces": 136
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 5,
      "totalPieces": 35
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 9,
      "totalPieces": 69
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 20,
      "totalPieces": 290
    },
    "PT": {
      "cases": 2,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1050
    },
    "PW": {
      "cases": 7,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 2550
    },
    "S": {
      "cases": 7,
      "trays": 11,
      "pieces": 22,
      "totalPieces": 2872
    },
    "M": {
      "cases": 3,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1290
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 27,
      "totalPieces": 207
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 66
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 21,
      "totalPieces": 171
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-08-15_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 9,
      "pieces": 13,
      "totalPieces": 283
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 4,
      "totalPieces": 94
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "PT": {
      "cases": 1,
      "trays": 6,
      "pieces": 18,
      "totalPieces": 558
    },
    "PW": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "S": {
      "cases": 6,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2160
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "L": {
      "cases": 2,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 735
    },
    "XL": {
      "cases": 1,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 380
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 1,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 377
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    }
  },
  "2026-08-15_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 22,
      "totalPieces": 112
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "NW": {
      "cases": 2,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 780
    },
    "PT": {
      "cases": 5,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 2040
    },
    "PW": {
      "cases": 10,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 3666
    },
    "S": {
      "cases": 7,
      "trays": 5,
      "pieces": 19,
      "totalPieces": 2689
    },
    "M": {
      "cases": 1,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 590
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 14,
      "totalPieces": 74
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 52
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 132
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    }
  },
  "2026-08-16_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 12,
      "totalPieces": 102
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 4,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 1460
    },
    "PW": {
      "cases": 7,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 2570
    },
    "S": {
      "cases": 7,
      "trays": 7,
      "pieces": 25,
      "totalPieces": 2755
    },
    "M": {
      "cases": 2,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 930
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 28
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 15,
      "totalPieces": 165
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-16_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 6,
      "totalPieces": 156
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 51
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 70
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 10,
      "totalPieces": 190
    },
    "PT": {
      "cases": 1,
      "trays": 11,
      "pieces": 3,
      "totalPieces": 693
    },
    "PW": {
      "cases": 3,
      "trays": 8,
      "pieces": 5,
      "totalPieces": 1325
    },
    "S": {
      "cases": 5,
      "trays": 3,
      "pieces": 3,
      "totalPieces": 1893
    },
    "M": {
      "cases": 3,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 1215
    },
    "L": {
      "cases": 2,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 740
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 97
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 27,
      "totalPieces": 207
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    }
  },
  "2026-08-16_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 21,
      "totalPieces": 231
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 51
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 26,
      "totalPieces": 146
    },
    "NW": {
      "cases": 1,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 450
    },
    "PT": {
      "cases": 2,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1020
    },
    "PW": {
      "cases": 4,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1710
    },
    "S": {
      "cases": 7,
      "trays": 4,
      "pieces": 17,
      "totalPieces": 2657
    },
    "M": {
      "cases": 2,
      "trays": 5,
      "pieces": 5,
      "totalPieces": 875
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 140
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 27,
      "totalPieces": 27
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 26,
      "totalPieces": 266
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    }
  },
  "2026-08-16_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 21,
      "totalPieces": 231
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 23,
      "totalPieces": 173
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "PT": {
      "cases": 1,
      "trays": 5,
      "pieces": 17,
      "totalPieces": 527
    },
    "PW": {
      "cases": 4,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1680
    },
    "S": {
      "cases": 6,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 2211
    },
    "M": {
      "cases": 3,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1200
    },
    "L": {
      "cases": 1,
      "trays": 6,
      "pieces": 10,
      "totalPieces": 550
    },
    "XL": {
      "cases": 0,
      "trays": 10,
      "pieces": 8,
      "totalPieces": 308
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 1,
      "trays": 1,
      "pieces": 14,
      "totalPieces": 404
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    }
  },
  "2026-08-16_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 21,
      "totalPieces": 111
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "NW": {
      "cases": 2,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 840
    },
    "PT": {
      "cases": 5,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 2040
    },
    "PW": {
      "cases": 9,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 3435
    },
    "S": {
      "cases": 8,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2880
    },
    "M": {
      "cases": 1,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 510
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 130
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-08-17_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 16,
      "totalPieces": 106
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 27,
      "totalPieces": 27
    },
    "NV": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "NW": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "PT": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PW": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "S": {
      "cases": 4,
      "trays": 8,
      "pieces": 19,
      "totalPieces": 1699
    },
    "M": {
      "cases": 6,
      "trays": 9,
      "pieces": 12,
      "totalPieces": 2442
    },
    "L": {
      "cases": 2,
      "trays": 5,
      "pieces": 1,
      "totalPieces": 871
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 13,
      "totalPieces": 133
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    }
  },
  "2026-08-17_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 6,
      "totalPieces": 126
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 80
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 16,
      "totalPieces": 286
    },
    "PT": {
      "cases": 2,
      "trays": 8,
      "pieces": 22,
      "totalPieces": 982
    },
    "PW": {
      "cases": 6,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 2340
    },
    "S": {
      "cases": 8,
      "trays": 3,
      "pieces": 19,
      "totalPieces": 2989
    },
    "M": {
      "cases": 3,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1350
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 195
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 18,
      "totalPieces": 138
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-17_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 19,
      "totalPieces": 199
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 26,
      "totalPieces": 56
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 170
    },
    "NW": {
      "cases": 1,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 500
    },
    "PT": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "PW": {
      "cases": 4,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1740
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "M": {
      "cases": 2,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 780
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 140
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 255
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    }
  },
  "2026-08-17_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 4,
      "totalPieces": 214
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 11,
      "pieces": 8,
      "totalPieces": 338
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 66
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "PT": {
      "cases": 1,
      "trays": 7,
      "pieces": 9,
      "totalPieces": 579
    },
    "PW": {
      "cases": 4,
      "trays": 3,
      "pieces": 8,
      "totalPieces": 1538
    },
    "S": {
      "cases": 6,
      "trays": 2,
      "pieces": 9,
      "totalPieces": 2229
    },
    "M": {
      "cases": 3,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1410
    },
    "L": {
      "cases": 1,
      "trays": 8,
      "pieces": 27,
      "totalPieces": 627
    },
    "XL": {
      "cases": 0,
      "trays": 10,
      "pieces": 15,
      "totalPieces": 315
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 22,
      "totalPieces": 262
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-08-17_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 100
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NV": {
      "cases": 0,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 300
    },
    "NW": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "PT": {
      "cases": 5,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 2025
    },
    "PW": {
      "cases": 9,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 3240
    },
    "S": {
      "cases": 7,
      "trays": 5,
      "pieces": 10,
      "totalPieces": 2680
    },
    "M": {
      "cases": 1,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 480
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 70
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 23,
      "totalPieces": 53
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 4,
      "totalPieces": 124
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    }
  },
  "2026-08-18_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 11,
      "totalPieces": 101
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "NV": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "NW": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "PT": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "PW": {
      "cases": 1,
      "trays": 7,
      "pieces": 5,
      "totalPieces": 575
    },
    "S": {
      "cases": 4,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1560
    },
    "M": {
      "cases": 5,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2130
    },
    "L": {
      "cases": 4,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1500
    },
    "XL": {
      "cases": 0,
      "trays": 8,
      "pieces": 12,
      "totalPieces": 252
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 6,
      "totalPieces": 126
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-18_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 97
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 17,
      "totalPieces": 47
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 2,
      "trays": 7,
      "pieces": 12,
      "totalPieces": 942
    },
    "PW": {
      "cases": 7,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 2562
    },
    "S": {
      "cases": 8,
      "trays": 7,
      "pieces": 19,
      "totalPieces": 3109
    },
    "M": {
      "cases": 3,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 1146
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 27,
      "totalPieces": 117
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-08-18_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 19,
      "totalPieces": 169
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 52
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "NW": {
      "cases": 1,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 420
    },
    "PT": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "PW": {
      "cases": 5,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 1870
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "M": {
      "cases": 2,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 900
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 28
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 11,
      "totalPieces": 221
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-18_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 10,
      "pieces": 1,
      "totalPieces": 301
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 12,
      "totalPieces": 102
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 18,
      "totalPieces": 48
    },
    "NW": {
      "cases": 0,
      "trays": 4,
      "pieces": 7,
      "totalPieces": 127
    },
    "PT": {
      "cases": 0,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 270
    },
    "PW": {
      "cases": 3,
      "trays": 4,
      "pieces": 2,
      "totalPieces": 1202
    },
    "S": {
      "cases": 5,
      "trays": 6,
      "pieces": 25,
      "totalPieces": 2005
    },
    "M": {
      "cases": 4,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1650
    },
    "L": {
      "cases": 2,
      "trays": 6,
      "pieces": 26,
      "totalPieces": 926
    },
    "XL": {
      "cases": 1,
      "trays": 2,
      "pieces": 12,
      "totalPieces": 432
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 1,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 403
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-08-18_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 97
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 17,
      "totalPieces": 167
    },
    "NW": {
      "cases": 2,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 990
    },
    "PT": {
      "cases": 5,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2100
    },
    "PW": {
      "cases": 8,
      "trays": 11,
      "pieces": 10,
      "totalPieces": 3220
    },
    "S": {
      "cases": 7,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 2745
    },
    "M": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 80
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 41
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 24,
      "totalPieces": 114
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-19_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 1,
      "totalPieces": 31
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 21,
      "totalPieces": 261
    },
    "PT": {
      "cases": 1,
      "trays": 6,
      "pieces": 25,
      "totalPieces": 565
    },
    "PW": {
      "cases": 2,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 825
    },
    "S": {
      "cases": 4,
      "trays": 6,
      "pieces": 16,
      "totalPieces": 1636
    },
    "M": {
      "cases": 5,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1890
    },
    "L": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 26,
      "totalPieces": 146
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-08-19_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 16,
      "totalPieces": 106
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 10,
      "totalPieces": 280
    },
    "PT": {
      "cases": 2,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 930
    },
    "PW": {
      "cases": 6,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 2305
    },
    "S": {
      "cases": 8,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 3090
    },
    "M": {
      "cases": 3,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 1275
    },
    "L": {
      "cases": 0,
      "trays": 7,
      "pieces": 7,
      "totalPieces": 217
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 6,
      "totalPieces": 126
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    }
  },
  "2026-08-19_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 3,
      "totalPieces": 183
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 5,
      "totalPieces": 185
    },
    "NW": {
      "cases": 1,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 495
    },
    "PT": {
      "cases": 2,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 990
    },
    "PW": {
      "cases": 4,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1620
    },
    "S": {
      "cases": 6,
      "trays": 6,
      "pieces": 25,
      "totalPieces": 2365
    },
    "M": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "L": {
      "cases": 0,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 225
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 5,
      "totalPieces": 35
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 23,
      "totalPieces": 233
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-08-19_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 24,
      "totalPieces": 204
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 17,
      "totalPieces": 77
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "NW": {
      "cases": 0,
      "trays": 2,
      "pieces": 19,
      "totalPieces": 79
    },
    "PT": {
      "cases": 2,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1050
    },
    "PW": {
      "cases": 5,
      "trays": 9,
      "pieces": 22,
      "totalPieces": 2092
    },
    "S": {
      "cases": 4,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 1516
    },
    "M": {
      "cases": 3,
      "trays": 2,
      "pieces": 18,
      "totalPieces": 1158
    },
    "L": {
      "cases": 1,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 530
    },
    "XL": {
      "cases": 0,
      "trays": 7,
      "pieces": 4,
      "totalPieces": 214
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 11,
      "totalPieces": 281
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-08-19_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 11,
      "totalPieces": 71
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 10,
      "totalPieces": 160
    },
    "NW": {
      "cases": 2,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 760
    },
    "PT": {
      "cases": 5,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 1870
    },
    "PW": {
      "cases": 9,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 3420
    },
    "S": {
      "cases": 8,
      "trays": 6,
      "pieces": 20,
      "totalPieces": 3080
    },
    "M": {
      "cases": 1,
      "trays": 7,
      "pieces": 25,
      "totalPieces": 595
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 2,
      "pieces": 29,
      "totalPieces": 89
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    }
  },
  "2026-08-20_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 8,
      "totalPieces": 98
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 5,
      "totalPieces": 35
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "PT": {
      "cases": 1,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 615
    },
    "PW": {
      "cases": 3,
      "trays": 3,
      "pieces": 16,
      "totalPieces": 1186
    },
    "S": {
      "cases": 4,
      "trays": 11,
      "pieces": 19,
      "totalPieces": 1789
    },
    "M": {
      "cases": 3,
      "trays": 8,
      "pieces": 6,
      "totalPieces": 1326
    },
    "L": {
      "cases": 2,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 820
    },
    "XL": {
      "cases": 0,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 130
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 13,
      "totalPieces": 133
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-20_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 29,
      "totalPieces": 119
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 4,
      "totalPieces": 94
    },
    "NW": {
      "cases": 1,
      "trays": 5,
      "pieces": 22,
      "totalPieces": 532
    },
    "PT": {
      "cases": 3,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1230
    },
    "PW": {
      "cases": 6,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 2340
    },
    "S": {
      "cases": 7,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 2596
    },
    "M": {
      "cases": 3,
      "trays": 7,
      "pieces": 24,
      "totalPieces": 1314
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 11,
      "totalPieces": 101
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-20_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 11,
      "totalPieces": 131
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 27,
      "totalPieces": 27
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 130
    },
    "NW": {
      "cases": 1,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 450
    },
    "PT": {
      "cases": 2,
      "trays": 9,
      "pieces": 15,
      "totalPieces": 1005
    },
    "PW": {
      "cases": 4,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1650
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "M": {
      "cases": 2,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1020
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 25,
      "totalPieces": 205
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 8,
      "totalPieces": 158
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    }
  },
  "2026-08-20_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 26,
      "totalPieces": 86
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 97
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "PT": {
      "cases": 1,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 420
    },
    "PW": {
      "cases": 2,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 810
    },
    "S": {
      "cases": 5,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1890
    },
    "M": {
      "cases": 5,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1950
    },
    "L": {
      "cases": 3,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1110
    },
    "XL": {
      "cases": 0,
      "trays": 10,
      "pieces": 20,
      "totalPieces": 320
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 11,
      "totalPieces": 221
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    }
  },
  "2026-08-20_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 8,
      "totalPieces": 128
    },
    "NW": {
      "cases": 2,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 780
    },
    "PT": {
      "cases": 5,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 1945
    },
    "PW": {
      "cases": 9,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 3290
    },
    "S": {
      "cases": 8,
      "trays": 10,
      "pieces": 25,
      "totalPieces": 3205
    },
    "M": {
      "cases": 1,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 660
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 17,
      "totalPieces": 137
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    }
  },
  "2026-08-21_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 4,
      "totalPieces": 94
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 43
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 195
    },
    "PT": {
      "cases": 2,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 750
    },
    "PW": {
      "cases": 3,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1350
    },
    "S": {
      "cases": 4,
      "trays": 8,
      "pieces": 20,
      "totalPieces": 1700
    },
    "M": {
      "cases": 3,
      "trays": 3,
      "pieces": 17,
      "totalPieces": 1187
    },
    "L": {
      "cases": 2,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 743
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 17,
      "totalPieces": 137
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-21_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 2,
      "trays": 9,
      "pieces": 20,
      "totalPieces": 1010
    },
    "PW": {
      "cases": 6,
      "trays": 6,
      "pieces": 20,
      "totalPieces": 2360
    },
    "S": {
      "cases": 8,
      "trays": 7,
      "pieces": 10,
      "totalPieces": 3100
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1230
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 130
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 130
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    }
  },
  "2026-08-21_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 17,
      "totalPieces": 47
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 130
    },
    "NW": {
      "cases": 0,
      "trays": 11,
      "pieces": 11,
      "totalPieces": 341
    },
    "PT": {
      "cases": 2,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 771
    },
    "PW": {
      "cases": 2,
      "trays": 10,
      "pieces": 26,
      "totalPieces": 1046
    },
    "S": {
      "cases": 4,
      "trays": 10,
      "pieces": 17,
      "totalPieces": 1757
    },
    "M": {
      "cases": 5,
      "trays": 9,
      "pieces": 9,
      "totalPieces": 2079
    },
    "L": {
      "cases": 2,
      "trays": 4,
      "pieces": 19,
      "totalPieces": 859
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 16,
      "totalPieces": 106
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 12,
      "totalPieces": 192
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    }
  },
  "2026-08-21_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 10,
      "pieces": 6,
      "totalPieces": 306
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 22,
      "totalPieces": 82
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 27,
      "totalPieces": 87
    },
    "NW": {
      "cases": 0,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 132
    },
    "PT": {
      "cases": 1,
      "trays": 4,
      "pieces": 22,
      "totalPieces": 502
    },
    "PW": {
      "cases": 4,
      "trays": 6,
      "pieces": 10,
      "totalPieces": 1630
    },
    "S": {
      "cases": 5,
      "trays": 10,
      "pieces": 11,
      "totalPieces": 2111
    },
    "M": {
      "cases": 3,
      "trays": 7,
      "pieces": 3,
      "totalPieces": 1293
    },
    "L": {
      "cases": 1,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 570
    },
    "XL": {
      "cases": 0,
      "trays": 8,
      "pieces": 16,
      "totalPieces": 256
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    },
    "BR": {
      "cases": 1,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 388
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-08-21_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 25,
      "totalPieces": 175
    },
    "NW": {
      "cases": 2,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 960
    },
    "PT": {
      "cases": 6,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2160
    },
    "PW": {
      "cases": 8,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 3180
    },
    "S": {
      "cases": 7,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 2550
    },
    "M": {
      "cases": 1,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 510
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 23,
      "totalPieces": 53
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "J": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 2,
      "pieces": 9,
      "totalPieces": 69
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    }
  },
  "2026-08-22_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 28
    },
    "NW": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "PT": {
      "cases": 0,
      "trays": 7,
      "pieces": 12,
      "totalPieces": 222
    },
    "PW": {
      "cases": 1,
      "trays": 4,
      "pieces": 21,
      "totalPieces": 501
    },
    "S": {
      "cases": 3,
      "trays": 4,
      "pieces": 19,
      "totalPieces": 1219
    },
    "M": {
      "cases": 5,
      "trays": 4,
      "pieces": 22,
      "totalPieces": 1942
    },
    "L": {
      "cases": 4,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1740
    },
    "XL": {
      "cases": 1,
      "trays": 2,
      "pieces": 24,
      "totalPieces": 444
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 13,
      "totalPieces": 133
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    }
  },
  "2026-08-22_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 17,
      "totalPieces": 137
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 6,
      "totalPieces": 276
    },
    "PT": {
      "cases": 3,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 1108
    },
    "PW": {
      "cases": 6,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2490
    },
    "S": {
      "cases": 8,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 2910
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 7,
      "totalPieces": 1237
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 11,
      "totalPieces": 161
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 23,
      "totalPieces": 143
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    }
  },
  "2026-08-22_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 8,
      "pieces": 3,
      "totalPieces": 243
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 7,
      "totalPieces": 67
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "NW": {
      "cases": 1,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 435
    },
    "PT": {
      "cases": 3,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 1100
    },
    "PW": {
      "cases": 5,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1950
    },
    "S": {
      "cases": 6,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 2400
    },
    "M": {
      "cases": 2,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 758
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 140
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 10,
      "pieces": 10,
      "totalPieces": 310
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-22_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 9,
      "pieces": 25,
      "totalPieces": 295
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 80
    },
    "NW": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "PT": {
      "cases": 1,
      "trays": 5,
      "pieces": 4,
      "totalPieces": 514
    },
    "PW": {
      "cases": 3,
      "trays": 9,
      "pieces": 19,
      "totalPieces": 1369
    },
    "S": {
      "cases": 5,
      "trays": 5,
      "pieces": 6,
      "totalPieces": 1956
    },
    "M": {
      "cases": 3,
      "trays": 6,
      "pieces": 24,
      "totalPieces": 1284
    },
    "L": {
      "cases": 1,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 690
    },
    "XL": {
      "cases": 0,
      "trays": 11,
      "pieces": 3,
      "totalPieces": 333
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "BR": {
      "cases": 1,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 440
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    }
  },
  "2026-08-22_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 26,
      "totalPieces": 116
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NV": {
      "cases": 0,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 270
    },
    "NW": {
      "cases": 2,
      "trays": 8,
      "pieces": 5,
      "totalPieces": 965
    },
    "PT": {
      "cases": 5,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2010
    },
    "PW": {
      "cases": 8,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 3090
    },
    "S": {
      "cases": 7,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 2640
    },
    "M": {
      "cases": 1,
      "trays": 7,
      "pieces": 25,
      "totalPieces": 595
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 70
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 22,
      "totalPieces": 142
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-23_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 29,
      "totalPieces": 119
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 13,
      "totalPieces": 223
    },
    "PT": {
      "cases": 1,
      "trays": 10,
      "pieces": 11,
      "totalPieces": 671
    },
    "PW": {
      "cases": 4,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 1506
    },
    "S": {
      "cases": 4,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1740
    },
    "M": {
      "cases": 3,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 1160
    },
    "L": {
      "cases": 1,
      "trays": 8,
      "pieces": 16,
      "totalPieces": 616
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 17,
      "totalPieces": 107
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 2,
      "totalPieces": 152
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    }
  },
  "2026-08-23_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 17,
      "totalPieces": 77
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 19,
      "totalPieces": 49
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 52
    },
    "NW": {
      "cases": 1,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 430
    },
    "PT": {
      "cases": 3,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1320
    },
    "PW": {
      "cases": 7,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 2562
    },
    "S": {
      "cases": 7,
      "trays": 10,
      "pieces": 20,
      "totalPieces": 2840
    },
    "M": {
      "cases": 2,
      "trays": 10,
      "pieces": 15,
      "totalPieces": 1035
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-23_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 18,
      "totalPieces": 48
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 25,
      "totalPieces": 175
    },
    "NW": {
      "cases": 1,
      "trays": 5,
      "pieces": 25,
      "totalPieces": 535
    },
    "PT": {
      "cases": 3,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 1215
    },
    "PW": {
      "cases": 5,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1980
    },
    "S": {
      "cases": 6,
      "trays": 3,
      "pieces": 12,
      "totalPieces": 2262
    },
    "M": {
      "cases": 2,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 750
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 170
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 4,
      "totalPieces": 184
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    }
  },
  "2026-08-23_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 10,
      "totalPieces": 220
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 23,
      "totalPieces": 113
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 19,
      "totalPieces": 79
    },
    "NW": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "PT": {
      "cases": 1,
      "trays": 3,
      "pieces": 21,
      "totalPieces": 471
    },
    "PW": {
      "cases": 3,
      "trays": 11,
      "pieces": 8,
      "totalPieces": 1418
    },
    "S": {
      "cases": 5,
      "trays": 6,
      "pieces": 16,
      "totalPieces": 1996
    },
    "M": {
      "cases": 3,
      "trays": 10,
      "pieces": 16,
      "totalPieces": 1396
    },
    "L": {
      "cases": 1,
      "trays": 8,
      "pieces": 22,
      "totalPieces": 622
    },
    "XL": {
      "cases": 1,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 412
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 11,
      "pieces": 3,
      "totalPieces": 333
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-23_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 28,
      "totalPieces": 88
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 15,
      "totalPieces": 165
    },
    "NW": {
      "cases": 2,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 930
    },
    "PT": {
      "cases": 5,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 1995
    },
    "PW": {
      "cases": 9,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 3330
    },
    "S": {
      "cases": 8,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 2990
    },
    "M": {
      "cases": 1,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 615
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 6,
      "totalPieces": 96
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-24_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 13,
      "totalPieces": 73
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "PT": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "PW": {
      "cases": 3,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1350
    },
    "S": {
      "cases": 5,
      "trays": 2,
      "pieces": 13,
      "totalPieces": 1873
    },
    "M": {
      "cases": 3,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1140
    },
    "L": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 23,
      "totalPieces": 113
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 17,
      "totalPieces": 137
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    }
  },
  "2026-08-24_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 13,
      "totalPieces": 103
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 14,
      "totalPieces": 44
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 18,
      "totalPieces": 228
    },
    "PT": {
      "cases": 2,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 930
    },
    "PW": {
      "cases": 6,
      "trays": 7,
      "pieces": 23,
      "totalPieces": 2393
    },
    "S": {
      "cases": 8,
      "trays": 8,
      "pieces": 12,
      "totalPieces": 3132
    },
    "M": {
      "cases": 3,
      "trays": 8,
      "pieces": 4,
      "totalPieces": 1324
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 21,
      "totalPieces": 201
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 2,
      "totalPieces": 122
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-08-24_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 22,
      "totalPieces": 202
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "NW": {
      "cases": 1,
      "trays": 6,
      "pieces": 14,
      "totalPieces": 554
    },
    "PT": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "PW": {
      "cases": 4,
      "trays": 8,
      "pieces": 10,
      "totalPieces": 1690
    },
    "S": {
      "cases": 6,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 2310
    },
    "M": {
      "cases": 2,
      "trays": 8,
      "pieces": 7,
      "totalPieces": 967
    },
    "L": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 27,
      "totalPieces": 27
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 1,
      "totalPieces": 241
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    }
  },
  "2026-08-24_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 80
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NW": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "PT": {
      "cases": 0,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 140
    },
    "PW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "S": {
      "cases": 2,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 840
    },
    "M": {
      "cases": 2,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1020
    },
    "L": {
      "cases": 1,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 615
    },
    "XL": {
      "cases": 0,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 170
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 8,
      "totalPieces": 98
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-24_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 27,
      "totalPieces": 87
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 130
    },
    "NW": {
      "cases": 2,
      "trays": 2,
      "pieces": 25,
      "totalPieces": 805
    },
    "PT": {
      "cases": 5,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1980
    },
    "PW": {
      "cases": 9,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 3465
    },
    "S": {
      "cases": 8,
      "trays": 2,
      "pieces": 25,
      "totalPieces": 2965
    },
    "M": {
      "cases": 1,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 660
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 75
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 6,
      "totalPieces": 96
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-25_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 26,
      "totalPieces": 86
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 16,
      "totalPieces": 46
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NV": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "PT": {
      "cases": 1,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 630
    },
    "PW": {
      "cases": 3,
      "trays": 8,
      "pieces": 20,
      "totalPieces": 1340
    },
    "S": {
      "cases": 5,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2100
    },
    "M": {
      "cases": 3,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1290
    },
    "L": {
      "cases": 1,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 510
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 132
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    }
  },
  "2026-08-25_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 95
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 27,
      "totalPieces": 27
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 12,
      "totalPieces": 222
    },
    "PT": {
      "cases": 2,
      "trays": 7,
      "pieces": 4,
      "totalPieces": 934
    },
    "PW": {
      "cases": 6,
      "trays": 1,
      "pieces": 14,
      "totalPieces": 2204
    },
    "S": {
      "cases": 7,
      "trays": 5,
      "pieces": 8,
      "totalPieces": 2678
    },
    "M": {
      "cases": 4,
      "trays": 9,
      "pieces": 17,
      "totalPieces": 1727
    },
    "L": {
      "cases": 1,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 385
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 2,
      "totalPieces": 122
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-25_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 9,
      "totalPieces": 189
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 18,
      "totalPieces": 78
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 76
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 384
    },
    "PT": {
      "cases": 3,
      "trays": 9,
      "pieces": 16,
      "totalPieces": 1366
    },
    "PW": {
      "cases": 7,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 2550
    },
    "S": {
      "cases": 5,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1920
    },
    "M": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 26,
      "totalPieces": 116
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 18,
      "totalPieces": 48
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 27,
      "totalPieces": 267
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-25_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 75
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "NW": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "PT": {
      "cases": 0,
      "trays": 2,
      "pieces": 25,
      "totalPieces": 85
    },
    "PW": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "S": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "M": {
      "cases": 1,
      "trays": 4,
      "pieces": 11,
      "totalPieces": 491
    },
    "L": {
      "cases": 1,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 690
    },
    "XL": {
      "cases": 0,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 300
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 21,
      "totalPieces": 111
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-25_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 23,
      "totalPieces": 83
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 8,
      "totalPieces": 98
    },
    "NW": {
      "cases": 1,
      "trays": 9,
      "pieces": 25,
      "totalPieces": 655
    },
    "PT": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "PW": {
      "cases": 9,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 3310
    },
    "S": {
      "cases": 8,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 2990
    },
    "M": {
      "cases": 2,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 795
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 80
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 97
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-08-26_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 130
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 76
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 26,
      "totalPieces": 206
    },
    "PT": {
      "cases": 2,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 759
    },
    "PW": {
      "cases": 4,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 1458
    },
    "S": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "M": {
      "cases": 3,
      "trays": 10,
      "pieces": 7,
      "totalPieces": 1387
    },
    "L": {
      "cases": 1,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 455
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 51
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 22,
      "totalPieces": 172
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    }
  },
  "2026-08-26_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 2,
      "totalPieces": 122
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 17,
      "totalPieces": 47
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "PT": {
      "cases": 2,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 817
    },
    "PW": {
      "cases": 5,
      "trays": 7,
      "pieces": 17,
      "totalPieces": 2027
    },
    "S": {
      "cases": 7,
      "trays": 10,
      "pieces": 7,
      "totalPieces": 2827
    },
    "M": {
      "cases": 5,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 1807
    },
    "L": {
      "cases": 1,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 450
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 19,
      "totalPieces": 109
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 41
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 26,
      "totalPieces": 146
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-08-26_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 8,
      "pieces": 1,
      "totalPieces": 241
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 17,
      "totalPieces": 107
    },
    "NNV": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "NW": {
      "cases": 1,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 490
    },
    "PT": {
      "cases": 4,
      "trays": 3,
      "pieces": 4,
      "totalPieces": 1534
    },
    "PW": {
      "cases": 6,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 2400
    },
    "S": {
      "cases": 4,
      "trays": 7,
      "pieces": 14,
      "totalPieces": 1664
    },
    "M": {
      "cases": 1,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 460
    },
    "L": {
      "cases": 0,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 70
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 7,
      "totalPieces": 67
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 11,
      "pieces": 18,
      "totalPieces": 348
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-08-26_6": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 43
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "NW": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "PT": {
      "cases": 0,
      "trays": 3,
      "pieces": 14,
      "totalPieces": 104
    },
    "PW": {
      "cases": 0,
      "trays": 7,
      "pieces": 16,
      "totalPieces": 226
    },
    "S": {
      "cases": 0,
      "trays": 8,
      "pieces": 16,
      "totalPieces": 256
    },
    "M": {
      "cases": 0,
      "trays": 7,
      "pieces": 21,
      "totalPieces": 231
    },
    "L": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 65
    },
    "BR": {
      "cases": 0,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 76
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-26_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 14,
      "totalPieces": 104
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 12,
      "totalPieces": 192
    },
    "NW": {
      "cases": 2,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 900
    },
    "PT": {
      "cases": 5,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1980
    },
    "PW": {
      "cases": 9,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 3330
    },
    "S": {
      "cases": 7,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2850
    },
    "M": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 9,
      "totalPieces": 129
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-08-27_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 26,
      "totalPieces": 86
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 7,
      "totalPieces": 37
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 9,
      "totalPieces": 69
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "PT": {
      "cases": 1,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 630
    },
    "PW": {
      "cases": 3,
      "trays": 7,
      "pieces": 10,
      "totalPieces": 1300
    },
    "S": {
      "cases": 5,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2010
    },
    "M": {
      "cases": 3,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1290
    },
    "L": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "XL": {
      "cases": 0,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 130
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 3,
      "totalPieces": 123
    },
    "BO": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    }
  },
  "2026-08-27_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 8,
      "totalPieces": 128
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 26,
      "totalPieces": 236
    },
    "PT": {
      "cases": 2,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 780
    },
    "PW": {
      "cases": 5,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 2055
    },
    "S": {
      "cases": 8,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 2995
    },
    "M": {
      "cases": 4,
      "trays": 7,
      "pieces": 23,
      "totalPieces": 1673
    },
    "L": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 8,
      "totalPieces": 158
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    }
  },
  "2026-08-27_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 9,
      "totalPieces": 219
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 3,
      "totalPieces": 63
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 140
    },
    "NW": {
      "cases": 1,
      "trays": 2,
      "pieces": 13,
      "totalPieces": 433
    },
    "PT": {
      "cases": 3,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 1130
    },
    "PW": {
      "cases": 5,
      "trays": 5,
      "pieces": 4,
      "totalPieces": 1954
    },
    "S": {
      "cases": 5,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 1865
    },
    "M": {
      "cases": 2,
      "trays": 8,
      "pieces": 21,
      "totalPieces": 981
    },
    "L": {
      "cases": 0,
      "trays": 8,
      "pieces": 27,
      "totalPieces": 267
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 4,
      "totalPieces": 274
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    }
  },
  "2026-08-27_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 76
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "NW": {
      "cases": 1,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 615
    },
    "PT": {
      "cases": 4,
      "trays": 10,
      "pieces": 15,
      "totalPieces": 1755
    },
    "PW": {
      "cases": 9,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 3240
    },
    "S": {
      "cases": 8,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 3025
    },
    "M": {
      "cases": 2,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 740
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 95
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-28_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 65
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 27,
      "totalPieces": 27
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 14,
      "totalPieces": 44
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 195
    },
    "PT": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "PW": {
      "cases": 4,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1470
    },
    "S": {
      "cases": 5,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 2040
    },
    "M": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "L": {
      "cases": 1,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 460
    },
    "XL": {
      "cases": 0,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 132
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 22,
      "totalPieces": 112
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 27,
      "totalPieces": 27
    }
  },
  "2026-08-28_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 3,
      "totalPieces": 123
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 378
    },
    "PT": {
      "cases": 3,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 1116
    },
    "PW": {
      "cases": 6,
      "trays": 9,
      "pieces": 4,
      "totalPieces": 2434
    },
    "S": {
      "cases": 7,
      "trays": 10,
      "pieces": 24,
      "totalPieces": 2844
    },
    "M": {
      "cases": 3,
      "trays": 4,
      "pieces": 22,
      "totalPieces": 1222
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 16,
      "totalPieces": 166
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 19,
      "totalPieces": 139
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-08-28_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 12,
      "totalPieces": 162
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 415
    },
    "PT": {
      "cases": 3,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1290
    },
    "PW": {
      "cases": 4,
      "trays": 10,
      "pieces": 15,
      "totalPieces": 1755
    },
    "S": {
      "cases": 5,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1980
    },
    "M": {
      "cases": 3,
      "trays": 4,
      "pieces": 19,
      "totalPieces": 1219
    },
    "L": {
      "cases": 0,
      "trays": 9,
      "pieces": 22,
      "totalPieces": 292
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 43
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 18,
      "totalPieces": 168
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    }
  },
  "2026-08-28_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 24,
      "totalPieces": 54
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 130
    },
    "NW": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "PT": {
      "cases": 5,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 1945
    },
    "PW": {
      "cases": 9,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 3255
    },
    "S": {
      "cases": 8,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 2970
    },
    "M": {
      "cases": 1,
      "trays": 10,
      "pieces": 6,
      "totalPieces": 666
    },
    "L": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-08-29_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 95
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 7,
      "totalPieces": 37
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "PT": {
      "cases": 2,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 735
    },
    "PW": {
      "cases": 3,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1410
    },
    "S": {
      "cases": 5,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1920
    },
    "M": {
      "cases": 3,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 1195
    },
    "L": {
      "cases": 1,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 505
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 3,
      "totalPieces": 183
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 132
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-29_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 26,
      "totalPieces": 116
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 6,
      "totalPieces": 156
    },
    "PT": {
      "cases": 1,
      "trays": 8,
      "pieces": 23,
      "totalPieces": 623
    },
    "PW": {
      "cases": 5,
      "trays": 7,
      "pieces": 14,
      "totalPieces": 2024
    },
    "S": {
      "cases": 9,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 3295
    },
    "M": {
      "cases": 4,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 1670
    },
    "L": {
      "cases": 1,
      "trays": 2,
      "pieces": 9,
      "totalPieces": 429
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 28
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 19,
      "totalPieces": 139
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-08-29_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 28,
      "totalPieces": 208
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 27,
      "totalPieces": 27
    },
    "NV": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "NW": {
      "cases": 1,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 480
    },
    "PT": {
      "cases": 3,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1110
    },
    "PW": {
      "cases": 4,
      "trays": 11,
      "pieces": 13,
      "totalPieces": 1783
    },
    "S": {
      "cases": 6,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 2211
    },
    "M": {
      "cases": 2,
      "trays": 11,
      "pieces": 4,
      "totalPieces": 1054
    },
    "L": {
      "cases": 0,
      "trays": 7,
      "pieces": 23,
      "totalPieces": 233
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 51
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 25,
      "totalPieces": 235
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-08-29_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 110
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NNV": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 415
    },
    "PT": {
      "cases": 3,
      "trays": 10,
      "pieces": 25,
      "totalPieces": 1405
    },
    "PW": {
      "cases": 8,
      "trays": 8,
      "pieces": 8,
      "totalPieces": 3128
    },
    "S": {
      "cases": 9,
      "trays": 9,
      "pieces": 10,
      "totalPieces": 3520
    },
    "M": {
      "cases": 2,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1020
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 6,
      "totalPieces": 156
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 5,
      "totalPieces": 125
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    }
  },
  "2026-08-30_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 12,
      "totalPieces": 102
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 25,
      "totalPieces": 205
    },
    "PT": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "PW": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "S": {
      "cases": 4,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 1520
    },
    "M": {
      "cases": 4,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1560
    },
    "L": {
      "cases": 1,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 510
    },
    "XL": {
      "cases": 0,
      "trays": 7,
      "pieces": 24,
      "totalPieces": 234
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 14,
      "totalPieces": 134
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    }
  },
  "2026-08-30_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 10,
      "totalPieces": 100
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 21,
      "totalPieces": 81
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 5,
      "totalPieces": 245
    },
    "PT": {
      "cases": 2,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 870
    },
    "PW": {
      "cases": 5,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1980
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "M": {
      "cases": 5,
      "trays": 6,
      "pieces": 14,
      "totalPieces": 1994
    },
    "L": {
      "cases": 1,
      "trays": 9,
      "pieces": 6,
      "totalPieces": 636
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 43
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 110
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    }
  },
  "2026-08-30_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 17,
      "totalPieces": 167
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 4,
      "totalPieces": 64
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 405
    },
    "PT": {
      "cases": 2,
      "trays": 9,
      "pieces": 15,
      "totalPieces": 1005
    },
    "PW": {
      "cases": 5,
      "trays": 10,
      "pieces": 9,
      "totalPieces": 2109
    },
    "S": {
      "cases": 5,
      "trays": 4,
      "pieces": 14,
      "totalPieces": 1934
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 5,
      "totalPieces": 1235
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 26,
      "totalPieces": 206
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 19,
      "totalPieces": 49
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 21,
      "totalPieces": 231
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-30_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 66
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 17,
      "totalPieces": 47
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 3,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1380
    },
    "PW": {
      "cases": 8,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 2970
    },
    "S": {
      "cases": 7,
      "trays": 8,
      "pieces": 20,
      "totalPieces": 2780
    },
    "M": {
      "cases": 5,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 1905
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "BR": {
      "cases": 0,
      "trays": 2,
      "pieces": 26,
      "totalPieces": 86
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-31_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 27,
      "totalPieces": 87
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "PT": {
      "cases": 1,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 660
    },
    "PW": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "S": {
      "cases": 5,
      "trays": 6,
      "pieces": 25,
      "totalPieces": 2005
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1230
    },
    "L": {
      "cases": 1,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 480
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 2,
      "totalPieces": 182
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-08-31_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 17,
      "totalPieces": 107
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 80
    },
    "NW": {
      "cases": 0,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 330
    },
    "PT": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "PW": {
      "cases": 6,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 2340
    },
    "S": {
      "cases": 7,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2850
    },
    "M": {
      "cases": 3,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 1380
    },
    "L": {
      "cases": 0,
      "trays": 9,
      "pieces": 9,
      "totalPieces": 279
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 29,
      "totalPieces": 119
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-08-31_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 13,
      "totalPieces": 163
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 5,
      "totalPieces": 35
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 7,
      "totalPieces": 67
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 14,
      "totalPieces": 104
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 12,
      "totalPieces": 222
    },
    "PT": {
      "cases": 2,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 950
    },
    "PW": {
      "cases": 5,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2130
    },
    "S": {
      "cases": 7,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 2550
    },
    "M": {
      "cases": 2,
      "trays": 3,
      "pieces": 4,
      "totalPieces": 814
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 17,
      "totalPieces": 167
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 28,
      "totalPieces": 88
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 18,
      "totalPieces": 198
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-08-31_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 27,
      "totalPieces": 57
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "NW": {
      "cases": 1,
      "trays": 3,
      "pieces": 9,
      "totalPieces": 459
    },
    "PT": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "PW": {
      "cases": 8,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 3090
    },
    "S": {
      "cases": 7,
      "trays": 8,
      "pieces": 21,
      "totalPieces": 2781
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 1250
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 12,
      "totalPieces": 162
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 29,
      "totalPieces": 29
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "BR": {
      "cases": 0,
      "trays": 2,
      "pieces": 11,
      "totalPieces": 71
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-09-01_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 108
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NW": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "PT": {
      "cases": 1,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 585
    },
    "PW": {
      "cases": 3,
      "trays": 10,
      "pieces": 15,
      "totalPieces": 1395
    },
    "S": {
      "cases": 5,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 1930
    },
    "M": {
      "cases": 3,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1260
    },
    "L": {
      "cases": 1,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 480
    },
    "XL": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 27,
      "totalPieces": 147
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    }
  },
  "2026-09-01_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 16,
      "totalPieces": 136
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 19,
      "totalPieces": 109
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 2,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 990
    },
    "PW": {
      "cases": 6,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 2310
    },
    "S": {
      "cases": 7,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2730
    },
    "M": {
      "cases": 3,
      "trays": 8,
      "pieces": 20,
      "totalPieces": 1340
    },
    "L": {
      "cases": 0,
      "trays": 10,
      "pieces": 9,
      "totalPieces": 309
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 12,
      "totalPieces": 162
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-09-01_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 12,
      "totalPieces": 162
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 2,
      "totalPieces": 122
    },
    "NW": {
      "cases": 1,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 426
    },
    "PT": {
      "cases": 2,
      "trays": 10,
      "pieces": 9,
      "totalPieces": 1029
    },
    "PW": {
      "cases": 3,
      "trays": 9,
      "pieces": 20,
      "totalPieces": 1370
    },
    "S": {
      "cases": 6,
      "trays": 4,
      "pieces": 5,
      "totalPieces": 2285
    },
    "M": {
      "cases": 3,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1350
    },
    "L": {
      "cases": 1,
      "trays": 2,
      "pieces": 27,
      "totalPieces": 447
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 8,
      "totalPieces": 188
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-01_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 3,
      "totalPieces": 93
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 18,
      "totalPieces": 48
    },
    "NW": {
      "cases": 0,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 300
    },
    "PT": {
      "cases": 3,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 1130
    },
    "PW": {
      "cases": 8,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 2940
    },
    "S": {
      "cases": 10,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 3600
    },
    "M": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 25,
      "totalPieces": 205
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 14,
      "totalPieces": 104
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-02_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 132
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NV": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "PT": {
      "cases": 1,
      "trays": 6,
      "pieces": 10,
      "totalPieces": 550
    },
    "PW": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "S": {
      "cases": 5,
      "trays": 9,
      "pieces": 10,
      "totalPieces": 2080
    },
    "M": {
      "cases": 4,
      "trays": 5,
      "pieces": 7,
      "totalPieces": 1597
    },
    "L": {
      "cases": 1,
      "trays": 4,
      "pieces": 7,
      "totalPieces": 487
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 80
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 27,
      "totalPieces": 147
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-02_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 3,
      "totalPieces": 123
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 6,
      "totalPieces": 96
    },
    "NW": {
      "cases": 1,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 436
    },
    "PT": {
      "cases": 3,
      "trays": 1,
      "pieces": 24,
      "totalPieces": 1134
    },
    "PW": {
      "cases": 6,
      "trays": 8,
      "pieces": 26,
      "totalPieces": 2426
    },
    "S": {
      "cases": 8,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 2910
    },
    "M": {
      "cases": 3,
      "trays": 3,
      "pieces": 13,
      "totalPieces": 1183
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 23,
      "totalPieces": 173
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 27,
      "totalPieces": 147
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-09-02_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 8,
      "totalPieces": 218
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 75
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 4,
      "totalPieces": 64
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "PT": {
      "cases": 2,
      "trays": 6,
      "pieces": 12,
      "totalPieces": 912
    },
    "PW": {
      "cases": 5,
      "trays": 4,
      "pieces": 14,
      "totalPieces": 1934
    },
    "S": {
      "cases": 7,
      "trays": 2,
      "pieces": 19,
      "totalPieces": 2599
    },
    "M": {
      "cases": 2,
      "trays": 2,
      "pieces": 12,
      "totalPieces": 792
    },
    "L": {
      "cases": 0,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 270
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 3,
      "totalPieces": 63
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 28
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 23,
      "totalPieces": 293
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-09-02_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 17,
      "totalPieces": 77
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "NW": {
      "cases": 0,
      "trays": 10,
      "pieces": 10,
      "totalPieces": 310
    },
    "PT": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "PW": {
      "cases": 8,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2880
    },
    "S": {
      "cases": 7,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2820
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1230
    },
    "L": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 4,
      "totalPieces": 94
    }
  },
  "2026-09-03_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 21,
      "totalPieces": 111
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 28,
      "totalPieces": 208
    },
    "PT": {
      "cases": 2,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 810
    },
    "PW": {
      "cases": 4,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1590
    },
    "S": {
      "cases": 4,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1710
    },
    "M": {
      "cases": 3,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 1100
    },
    "L": {
      "cases": 1,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 465
    },
    "XL": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 13
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 14,
      "totalPieces": 134
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-09-03_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 95
    },
    "NW": {
      "cases": 0,
      "trays": 11,
      "pieces": 11,
      "totalPieces": 341
    },
    "PT": {
      "cases": 1,
      "trays": 10,
      "pieces": 10,
      "totalPieces": 670
    },
    "PW": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "S": {
      "cases": 7,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2820
    },
    "M": {
      "cases": 5,
      "trays": 8,
      "pieces": 7,
      "totalPieces": 2047
    },
    "L": {
      "cases": 2,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 786
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 11,
      "totalPieces": 101
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-03_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 23,
      "totalPieces": 233
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 8,
      "totalPieces": 38
    },
    "NNV": {
      "cases": 0,
      "trays": 2,
      "pieces": 11,
      "totalPieces": 71
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "NW": {
      "cases": 0,
      "trays": 10,
      "pieces": 7,
      "totalPieces": 307
    },
    "PT": {
      "cases": 2,
      "trays": 7,
      "pieces": 9,
      "totalPieces": 939
    },
    "PW": {
      "cases": 5,
      "trays": 7,
      "pieces": 5,
      "totalPieces": 2015
    },
    "S": {
      "cases": 6,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 2290
    },
    "M": {
      "cases": 2,
      "trays": 5,
      "pieces": 11,
      "totalPieces": 881
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 12,
      "totalPieces": 192
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 26,
      "totalPieces": 56
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 1,
      "totalPieces": 271
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-03_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 80
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 405
    },
    "PT": {
      "cases": 3,
      "trays": 8,
      "pieces": 20,
      "totalPieces": 1340
    },
    "PW": {
      "cases": 8,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 2930
    },
    "S": {
      "cases": 8,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2880
    },
    "M": {
      "cases": 2,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 960
    },
    "L": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 97
    }
  },
  "2026-09-04_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 10,
      "totalPieces": 130
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 23,
      "totalPieces": 53
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 7,
      "totalPieces": 67
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "PT": {
      "cases": 1,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 570
    },
    "PW": {
      "cases": 3,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1260
    },
    "S": {
      "cases": 5,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1920
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "L": {
      "cases": 1,
      "trays": 5,
      "pieces": 13,
      "totalPieces": 523
    },
    "XL": {
      "cases": 0,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 132
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 3,
      "totalPieces": 183
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 28
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-09-04_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 95
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 108
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 2,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 990
    },
    "PW": {
      "cases": 6,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 2310
    },
    "S": {
      "cases": 7,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2820
    },
    "M": {
      "cases": 3,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1320
    },
    "L": {
      "cases": 0,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 300
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 22,
      "totalPieces": 112
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-04_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 28,
      "totalPieces": 238
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 43
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 367
    },
    "PT": {
      "cases": 3,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1200
    },
    "PW": {
      "cases": 5,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 1970
    },
    "S": {
      "cases": 6,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2160
    },
    "M": {
      "cases": 2,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 930
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 11,
      "totalPieces": 281
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    }
  },
  "2026-09-04_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 26,
      "totalPieces": 56
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "NW": {
      "cases": 0,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 330
    },
    "PT": {
      "cases": 2,
      "trays": 10,
      "pieces": 20,
      "totalPieces": 1040
    },
    "PW": {
      "cases": 6,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 2355
    },
    "S": {
      "cases": 8,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 3180
    },
    "M": {
      "cases": 3,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1350
    },
    "L": {
      "cases": 0,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 230
    },
    "XL": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 2,
      "pieces": 18,
      "totalPieces": 78
    }
  },
  "2026-09-05_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 18,
      "totalPieces": 138
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 28
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 24,
      "totalPieces": 24
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "PT": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "PW": {
      "cases": 3,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1320
    },
    "S": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 1250
    },
    "L": {
      "cases": 1,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 570
    },
    "XL": {
      "cases": 0,
      "trays": 4,
      "pieces": 11,
      "totalPieces": 131
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 16,
      "totalPieces": 166
    },
    "BO": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-05_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 5,
      "totalPieces": 155
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NV": {
      "cases": 0,
      "trays": 9,
      "pieces": 4,
      "totalPieces": 274
    },
    "NW": {
      "cases": 1,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 660
    },
    "PT": {
      "cases": 3,
      "trays": 6,
      "pieces": 10,
      "totalPieces": 1270
    },
    "PW": {
      "cases": 5,
      "trays": 10,
      "pieces": 16,
      "totalPieces": 2116
    },
    "S": {
      "cases": 5,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 2040
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 13,
      "totalPieces": 1453
    },
    "L": {
      "cases": 1,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 425
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 17,
      "totalPieces": 77
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 1,
      "totalPieces": 181
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-05_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 2,
      "totalPieces": 212
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "NNV": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 6,
      "totalPieces": 96
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 195
    },
    "PT": {
      "cases": 2,
      "trays": 2,
      "pieces": 23,
      "totalPieces": 803
    },
    "PW": {
      "cases": 5,
      "trays": 7,
      "pieces": 5,
      "totalPieces": 2015
    },
    "S": {
      "cases": 7,
      "trays": 7,
      "pieces": 24,
      "totalPieces": 2754
    },
    "M": {
      "cases": 2,
      "trays": 2,
      "pieces": 22,
      "totalPieces": 802
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 2,
      "totalPieces": 182
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 43
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 26,
      "totalPieces": 296
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    }
  },
  "2026-09-05_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 97
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 23,
      "totalPieces": 53
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "PT": {
      "cases": 2,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 825
    },
    "PW": {
      "cases": 6,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2370
    },
    "S": {
      "cases": 9,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 3240
    },
    "M": {
      "cases": 3,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 1310
    },
    "L": {
      "cases": 0,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 225
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 43
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 19,
      "totalPieces": 109
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-09-06_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 24,
      "totalPieces": 114
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 6,
      "totalPieces": 36
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 170
    },
    "PT": {
      "cases": 1,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 615
    },
    "PW": {
      "cases": 3,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1320
    },
    "S": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "M": {
      "cases": 3,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1350
    },
    "L": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 15,
      "totalPieces": 195
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 26,
      "totalPieces": 146
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-09-06_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 95
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 27,
      "totalPieces": 117
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 390
    },
    "PT": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "PW": {
      "cases": 7,
      "trays": 4,
      "pieces": 18,
      "totalPieces": 2658
    },
    "S": {
      "cases": 7,
      "trays": 7,
      "pieces": 12,
      "totalPieces": 2742
    },
    "M": {
      "cases": 3,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1110
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    }
  },
  "2026-09-06_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 7,
      "totalPieces": 187
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 16,
      "totalPieces": 76
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NNV": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 27,
      "totalPieces": 117
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "PT": {
      "cases": 2,
      "trays": 3,
      "pieces": 17,
      "totalPieces": 827
    },
    "PW": {
      "cases": 5,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 2040
    },
    "S": {
      "cases": 6,
      "trays": 11,
      "pieces": 14,
      "totalPieces": 2504
    },
    "M": {
      "cases": 2,
      "trays": 7,
      "pieces": 19,
      "totalPieces": 949
    },
    "L": {
      "cases": 0,
      "trays": 7,
      "pieces": 8,
      "totalPieces": 218
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 24,
      "totalPieces": 54
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 23,
      "totalPieces": 263
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    }
  },
  "2026-09-06_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 5,
      "totalPieces": 125
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 13,
      "totalPieces": 103
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 400
    },
    "PT": {
      "cases": 3,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1080
    },
    "PW": {
      "cases": 7,
      "trays": 5,
      "pieces": 25,
      "totalPieces": 2695
    },
    "S": {
      "cases": 7,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2850
    },
    "M": {
      "cases": 2,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 930
    },
    "L": {
      "cases": 0,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 132
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 7,
      "totalPieces": 37
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 28,
      "totalPieces": 148
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-07_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 5,
      "totalPieces": 95
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NW": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "PT": {
      "cases": 1,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 570
    },
    "PW": {
      "cases": 3,
      "trays": 9,
      "pieces": 25,
      "totalPieces": 1375
    },
    "S": {
      "cases": 5,
      "trays": 2,
      "pieces": 12,
      "totalPieces": 1872
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "L": {
      "cases": 1,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 540
    },
    "XL": {
      "cases": 0,
      "trays": 5,
      "pieces": 12,
      "totalPieces": 162
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 24,
      "totalPieces": 114
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 29,
      "totalPieces": 29
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-07_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 22,
      "totalPieces": 142
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 26,
      "totalPieces": 86
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 270
    },
    "PT": {
      "cases": 2,
      "trays": 8,
      "pieces": 10,
      "totalPieces": 970
    },
    "PW": {
      "cases": 6,
      "trays": 5,
      "pieces": 20,
      "totalPieces": 2330
    },
    "S": {
      "cases": 7,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 2850
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 1452
    },
    "L": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 11,
      "totalPieces": 161
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-09-07_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "NV": {
      "cases": 0,
      "trays": 7,
      "pieces": 29,
      "totalPieces": 239
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 11,
      "totalPieces": 251
    },
    "PT": {
      "cases": 2,
      "trays": 6,
      "pieces": 24,
      "totalPieces": 924
    },
    "PW": {
      "cases": 5,
      "trays": 6,
      "pieces": 4,
      "totalPieces": 1984
    },
    "S": {
      "cases": 6,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 2280
    },
    "M": {
      "cases": 2,
      "trays": 7,
      "pieces": 24,
      "totalPieces": 954
    },
    "L": {
      "cases": 0,
      "trays": 11,
      "pieces": 7,
      "totalPieces": 337
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 43
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 15,
      "totalPieces": 255
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-07_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 28
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 14,
      "totalPieces": 134
    },
    "NW": {
      "cases": 1,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 570
    },
    "PT": {
      "cases": 3,
      "trays": 3,
      "pieces": 9,
      "totalPieces": 1179
    },
    "PW": {
      "cases": 5,
      "trays": 8,
      "pieces": 21,
      "totalPieces": 2061
    },
    "S": {
      "cases": 6,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2460
    },
    "M": {
      "cases": 3,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 1090
    },
    "L": {
      "cases": 0,
      "trays": 7,
      "pieces": 5,
      "totalPieces": 215
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 28,
      "totalPieces": 148
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-09-08_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 12,
      "totalPieces": 132
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "NV": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "NW": {
      "cases": 0,
      "trays": 3,
      "pieces": 1,
      "totalPieces": 91
    },
    "PT": {
      "cases": 0,
      "trays": 11,
      "pieces": 16,
      "totalPieces": 346
    },
    "PW": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "S": {
      "cases": 3,
      "trays": 7,
      "pieces": 15,
      "totalPieces": 1305
    },
    "M": {
      "cases": 5,
      "trays": 10,
      "pieces": 2,
      "totalPieces": 2102
    },
    "L": {
      "cases": 3,
      "trays": 4,
      "pieces": 7,
      "totalPieces": 1207
    },
    "XL": {
      "cases": 0,
      "trays": 8,
      "pieces": 10,
      "totalPieces": 250
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 21,
      "totalPieces": 171
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-08_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 24,
      "totalPieces": 114
    },
    "NW": {
      "cases": 1,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 405
    },
    "PT": {
      "cases": 3,
      "trays": 4,
      "pieces": 11,
      "totalPieces": 1211
    },
    "PW": {
      "cases": 6,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 2430
    },
    "S": {
      "cases": 7,
      "trays": 3,
      "pieces": 8,
      "totalPieces": 2618
    },
    "M": {
      "cases": 3,
      "trays": 5,
      "pieces": 15,
      "totalPieces": 1245
    },
    "L": {
      "cases": 0,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 300
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 7,
      "totalPieces": 127
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-08_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 22,
      "totalPieces": 202
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 70
    },
    "NV": {
      "cases": 0,
      "trays": 5,
      "pieces": 8,
      "totalPieces": 158
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 4,
      "totalPieces": 274
    },
    "PT": {
      "cases": 2,
      "trays": 4,
      "pieces": 16,
      "totalPieces": 856
    },
    "PW": {
      "cases": 5,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 2070
    },
    "S": {
      "cases": 6,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 2340
    },
    "M": {
      "cases": 2,
      "trays": 8,
      "pieces": 5,
      "totalPieces": 965
    },
    "L": {
      "cases": 0,
      "trays": 7,
      "pieces": 22,
      "totalPieces": 232
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 27,
      "totalPieces": 57
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "BR": {
      "cases": 0,
      "trays": 9,
      "pieces": 2,
      "totalPieces": 272
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-08_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 115
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "PT": {
      "cases": 2,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 900
    },
    "PW": {
      "cases": 5,
      "trays": 9,
      "pieces": 20,
      "totalPieces": 2090
    },
    "S": {
      "cases": 7,
      "trays": 5,
      "pieces": 5,
      "totalPieces": 2675
    },
    "M": {
      "cases": 2,
      "trays": 10,
      "pieces": 20,
      "totalPieces": 1040
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 5,
      "totalPieces": 35
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 26,
      "totalPieces": 146
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-09-09_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "PT": {
      "cases": 1,
      "trays": 8,
      "pieces": 24,
      "totalPieces": 624
    },
    "PW": {
      "cases": 4,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1470
    },
    "S": {
      "cases": 5,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 1820
    },
    "M": {
      "cases": 3,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1290
    },
    "L": {
      "cases": 1,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 425
    },
    "XL": {
      "cases": 0,
      "trays": 5,
      "pieces": 5,
      "totalPieces": 155
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    }
  },
  "2026-09-09_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 5,
      "totalPieces": 125
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 2,
      "totalPieces": 122
    },
    "NW": {
      "cases": 1,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 510
    },
    "PT": {
      "cases": 3,
      "trays": 6,
      "pieces": 18,
      "totalPieces": 1278
    },
    "PW": {
      "cases": 6,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 2340
    },
    "S": {
      "cases": 6,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2370
    },
    "M": {
      "cases": 3,
      "trays": 7,
      "pieces": 5,
      "totalPieces": 1295
    },
    "L": {
      "cases": 1,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 360
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 22,
      "totalPieces": 142
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-09-09_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 25,
      "totalPieces": 175
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "NV": {
      "cases": 0,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 120
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 4,
      "totalPieces": 214
    },
    "PT": {
      "cases": 1,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 660
    },
    "PW": {
      "cases": 4,
      "trays": 11,
      "pieces": 5,
      "totalPieces": 1775
    },
    "S": {
      "cases": 7,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 2520
    },
    "M": {
      "cases": 3,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1260
    },
    "L": {
      "cases": 1,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 390
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 230
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-09-09_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 1,
      "totalPieces": 91
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 25,
      "totalPieces": 85
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "PT": {
      "cases": 2,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 761
    },
    "PW": {
      "cases": 5,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 1850
    },
    "S": {
      "cases": 8,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 2970
    },
    "M": {
      "cases": 3,
      "trays": 6,
      "pieces": 25,
      "totalPieces": 1285
    },
    "L": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 19,
      "totalPieces": 109
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    }
  },
  "2026-09-10_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 14,
      "totalPieces": 104
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 32
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 10,
      "totalPieces": 160
    },
    "PT": {
      "cases": 1,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 450
    },
    "PW": {
      "cases": 3,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1350
    },
    "S": {
      "cases": 5,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1980
    },
    "M": {
      "cases": 3,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1350
    },
    "L": {
      "cases": 1,
      "trays": 6,
      "pieces": 17,
      "totalPieces": 557
    },
    "XL": {
      "cases": 0,
      "trays": 4,
      "pieces": 14,
      "totalPieces": 134
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 16,
      "totalPieces": 136
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    }
  },
  "2026-09-10_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 23,
      "totalPieces": 83
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 20,
      "totalPieces": 260
    },
    "PT": {
      "cases": 2,
      "trays": 8,
      "pieces": 24,
      "totalPieces": 984
    },
    "PW": {
      "cases": 5,
      "trays": 7,
      "pieces": 10,
      "totalPieces": 2020
    },
    "S": {
      "cases": 5,
      "trays": 8,
      "pieces": 5,
      "totalPieces": 2045
    },
    "M": {
      "cases": 6,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 2170
    },
    "L": {
      "cases": 2,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 731
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 80
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 9,
      "totalPieces": 129
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-10_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 25,
      "totalPieces": 145
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "NV": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "NW": {
      "cases": 0,
      "trays": 9,
      "pieces": 6,
      "totalPieces": 276
    },
    "PT": {
      "cases": 2,
      "trays": 3,
      "pieces": 24,
      "totalPieces": 834
    },
    "PW": {
      "cases": 6,
      "trays": 8,
      "pieces": 19,
      "totalPieces": 2419
    },
    "S": {
      "cases": 5,
      "trays": 9,
      "pieces": 25,
      "totalPieces": 2095
    },
    "M": {
      "cases": 2,
      "trays": 10,
      "pieces": 26,
      "totalPieces": 1046
    },
    "L": {
      "cases": 0,
      "trays": 9,
      "pieces": 11,
      "totalPieces": 281
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 11,
      "totalPieces": 41
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 5,
      "pieces": 21,
      "totalPieces": 171
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-09-10_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 3,
      "totalPieces": 63
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "PT": {
      "cases": 1,
      "trays": 3,
      "pieces": 25,
      "totalPieces": 475
    },
    "PW": {
      "cases": 2,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 930
    },
    "S": {
      "cases": 10,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 3780
    },
    "M": {
      "cases": 3,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1320
    },
    "L": {
      "cases": 0,
      "trays": 8,
      "pieces": 20,
      "totalPieces": 260
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 60
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "BR": {
      "cases": 0,
      "trays": 2,
      "pieces": 14,
      "totalPieces": 74
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-09-11_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 2,
      "totalPieces": 92
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NW": {
      "cases": 0,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 150
    },
    "PT": {
      "cases": 1,
      "trays": 5,
      "pieces": 13,
      "totalPieces": 523
    },
    "PW": {
      "cases": 3,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1320
    },
    "S": {
      "cases": 5,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 1940
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "L": {
      "cases": 1,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 495
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 110
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 6,
      "totalPieces": 126
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-09-11_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 80
    },
    "NW": {
      "cases": 1,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 383
    },
    "PT": {
      "cases": 3,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 1170
    },
    "PW": {
      "cases": 6,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 2340
    },
    "S": {
      "cases": 6,
      "trays": 10,
      "pieces": 12,
      "totalPieces": 2472
    },
    "M": {
      "cases": 3,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 1410
    },
    "L": {
      "cases": 1,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 420
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 16,
      "totalPieces": 106
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-11_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 17,
      "totalPieces": 137
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 14,
      "totalPieces": 44
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 22,
      "totalPieces": 82
    },
    "NW": {
      "cases": 0,
      "trays": 10,
      "pieces": 4,
      "totalPieces": 304
    },
    "PT": {
      "cases": 2,
      "trays": 2,
      "pieces": 4,
      "totalPieces": 784
    },
    "PW": {
      "cases": 4,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1590
    },
    "S": {
      "cases": 5,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2100
    },
    "M": {
      "cases": 4,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1710
    },
    "L": {
      "cases": 1,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 480
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 1,
      "totalPieces": 181
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    }
  },
  "2026-09-11_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 1,
      "totalPieces": 61
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "PT": {
      "cases": 1,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 630
    },
    "PW": {
      "cases": 5,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 1850
    },
    "S": {
      "cases": 8,
      "trays": 11,
      "pieces": 0,
      "totalPieces": 3210
    },
    "M": {
      "cases": 3,
      "trays": 9,
      "pieces": 8,
      "totalPieces": 1358
    },
    "L": {
      "cases": 0,
      "trays": 7,
      "pieces": 25,
      "totalPieces": 235
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 2,
      "pieces": 8,
      "totalPieces": 68
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-12_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 29,
      "totalPieces": 89
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NW": {
      "cases": 0,
      "trays": 3,
      "pieces": 26,
      "totalPieces": 116
    },
    "PT": {
      "cases": 1,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 465
    },
    "PW": {
      "cases": 3,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 1200
    },
    "S": {
      "cases": 5,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1980
    },
    "M": {
      "cases": 4,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1440
    },
    "L": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 27,
      "totalPieces": 207
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 2,
      "totalPieces": 122
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 28,
      "totalPieces": 28
    }
  },
  "2026-09-12_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 7,
      "totalPieces": 97
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 12,
      "totalPieces": 42
    },
    "NW": {
      "cases": 0,
      "trays": 4,
      "pieces": 6,
      "totalPieces": 126
    },
    "PT": {
      "cases": 1,
      "trays": 7,
      "pieces": 9,
      "totalPieces": 579
    },
    "PW": {
      "cases": 3,
      "trays": 5,
      "pieces": 17,
      "totalPieces": 1247
    },
    "S": {
      "cases": 7,
      "trays": 7,
      "pieces": 12,
      "totalPieces": 2742
    },
    "M": {
      "cases": 4,
      "trays": 10,
      "pieces": 21,
      "totalPieces": 1761
    },
    "L": {
      "cases": 4,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1470
    },
    "XL": {
      "cases": 1,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 386
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 108
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-09-12_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 6,
      "pieces": 4,
      "totalPieces": 184
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 29,
      "totalPieces": 59
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 14,
      "totalPieces": 74
    },
    "NW": {
      "cases": 0,
      "trays": 4,
      "pieces": 8,
      "totalPieces": 128
    },
    "PT": {
      "cases": 1,
      "trays": 5,
      "pieces": 24,
      "totalPieces": 534
    },
    "PW": {
      "cases": 4,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1590
    },
    "S": {
      "cases": 7,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 2790
    },
    "M": {
      "cases": 3,
      "trays": 11,
      "pieces": 11,
      "totalPieces": 1421
    },
    "L": {
      "cases": 1,
      "trays": 1,
      "pieces": 26,
      "totalPieces": 416
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 18,
      "totalPieces": 78
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "BR": {
      "cases": 0,
      "trays": 8,
      "pieces": 3,
      "totalPieces": 243
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-09-12_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 15,
      "totalPieces": 45
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "NW": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "PT": {
      "cases": 1,
      "trays": 6,
      "pieces": 20,
      "totalPieces": 560
    },
    "PW": {
      "cases": 4,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1650
    },
    "S": {
      "cases": 8,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 3000
    },
    "M": {
      "cases": 4,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 1650
    },
    "L": {
      "cases": 1,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 480
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 80
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    }
  },
  "2026-09-13_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 90
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 3,
      "totalPieces": 33
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NW": {
      "cases": 0,
      "trays": 1,
      "pieces": 13,
      "totalPieces": 43
    },
    "PT": {
      "cases": 1,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 420
    },
    "PW": {
      "cases": 3,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 1320
    },
    "S": {
      "cases": 5,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 1980
    },
    "M": {
      "cases": 4,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1470
    },
    "L": {
      "cases": 1,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 590
    },
    "XL": {
      "cases": 0,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 210
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 3,
      "totalPieces": 123
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 29,
      "totalPieces": 29
    }
  },
  "2026-09-13_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 23,
      "totalPieces": 83
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 23,
      "totalPieces": 23
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 7,
      "totalPieces": 37
    },
    "NW": {
      "cases": 0,
      "trays": 2,
      "pieces": 19,
      "totalPieces": 79
    },
    "PT": {
      "cases": 2,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 720
    },
    "PW": {
      "cases": 5,
      "trays": 5,
      "pieces": 3,
      "totalPieces": 1953
    },
    "S": {
      "cases": 8,
      "trays": 3,
      "pieces": 14,
      "totalPieces": 2984
    },
    "M": {
      "cases": 5,
      "trays": 2,
      "pieces": 7,
      "totalPieces": 1867
    },
    "L": {
      "cases": 1,
      "trays": 9,
      "pieces": 5,
      "totalPieces": 635
    },
    "XL": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 16,
      "totalPieces": 106
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    }
  },
  "2026-09-13_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 4,
      "pieces": 15,
      "totalPieces": 135
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 17,
      "totalPieces": 47
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 17,
      "totalPieces": 77
    },
    "NW": {
      "cases": 1,
      "trays": 2,
      "pieces": 5,
      "totalPieces": 425
    },
    "PT": {
      "cases": 1,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 660
    },
    "PW": {
      "cases": 4,
      "trays": 9,
      "pieces": 10,
      "totalPieces": 1720
    },
    "S": {
      "cases": 7,
      "trays": 4,
      "pieces": 16,
      "totalPieces": 2656
    },
    "M": {
      "cases": 3,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 1185
    },
    "L": {
      "cases": 0,
      "trays": 9,
      "pieces": 27,
      "totalPieces": 297
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 66
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "BR": {
      "cases": 0,
      "trays": 6,
      "pieces": 2,
      "totalPieces": 182
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 11,
      "totalPieces": 11
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-09-13_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "NW": {
      "cases": 0,
      "trays": 6,
      "pieces": 0,
      "totalPieces": 180
    },
    "PT": {
      "cases": 1,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 500
    },
    "PW": {
      "cases": 4,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 1670
    },
    "S": {
      "cases": 8,
      "trays": 4,
      "pieces": 0,
      "totalPieces": 3000
    },
    "M": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "L": {
      "cases": 1,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 420
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 2,
      "totalPieces": 62
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "BR": {
      "cases": 0,
      "trays": 1,
      "pieces": 25,
      "totalPieces": 55
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 3,
      "totalPieces": 3
    }
  },
  "2026-09-14_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 24,
      "totalPieces": 84
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 27,
      "totalPieces": 27
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NW": {
      "cases": 0,
      "trays": 2,
      "pieces": 9,
      "totalPieces": 69
    },
    "PT": {
      "cases": 1,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 361
    },
    "PW": {
      "cases": 3,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 1140
    },
    "S": {
      "cases": 5,
      "trays": 6,
      "pieces": 26,
      "totalPieces": 2006
    },
    "M": {
      "cases": 4,
      "trays": 5,
      "pieces": 0,
      "totalPieces": 1590
    },
    "L": {
      "cases": 1,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 660
    },
    "XL": {
      "cases": 0,
      "trays": 8,
      "pieces": 14,
      "totalPieces": 254
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 21,
      "totalPieces": 111
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 25,
      "totalPieces": 25
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-14_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 1,
      "totalPieces": 91
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 19,
      "totalPieces": 19
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 52
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 240
    },
    "PT": {
      "cases": 2,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 860
    },
    "PW": {
      "cases": 5,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 2100
    },
    "S": {
      "cases": 7,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 2559
    },
    "M": {
      "cases": 5,
      "trays": 0,
      "pieces": 0,
      "totalPieces": 1800
    },
    "L": {
      "cases": 1,
      "trays": 8,
      "pieces": 0,
      "totalPieces": 600
    },
    "XL": {
      "cases": 0,
      "trays": 4,
      "pieces": 26,
      "totalPieces": 146
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "SJ": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 20,
      "totalPieces": 110
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-14_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 19,
      "totalPieces": 169
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 75
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 8,
      "totalPieces": 8
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 6,
      "totalPieces": 66
    },
    "NW": {
      "cases": 0,
      "trays": 2,
      "pieces": 4,
      "totalPieces": 64
    },
    "PT": {
      "cases": 2,
      "trays": 6,
      "pieces": 7,
      "totalPieces": 907
    },
    "PW": {
      "cases": 5,
      "trays": 2,
      "pieces": 11,
      "totalPieces": 1871
    },
    "S": {
      "cases": 7,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 2628
    },
    "M": {
      "cases": 3,
      "trays": 3,
      "pieces": 19,
      "totalPieces": 1189
    },
    "L": {
      "cases": 0,
      "trays": 9,
      "pieces": 16,
      "totalPieces": 286
    },
    "XL": {
      "cases": 0,
      "trays": 1,
      "pieces": 21,
      "totalPieces": 51
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 12,
      "totalPieces": 12
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 19,
      "totalPieces": 229
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 5,
      "totalPieces": 5
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-09-14_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 4,
      "totalPieces": 34
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 6,
      "totalPieces": 6
    },
    "NV": {
      "cases": 0,
      "trays": 3,
      "pieces": 16,
      "totalPieces": 106
    },
    "NW": {
      "cases": 0,
      "trays": 11,
      "pieces": 25,
      "totalPieces": 355
    },
    "PT": {
      "cases": 2,
      "trays": 2,
      "pieces": 26,
      "totalPieces": 806
    },
    "PW": {
      "cases": 4,
      "trays": 10,
      "pieces": 18,
      "totalPieces": 1758
    },
    "S": {
      "cases": 7,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 2610
    },
    "M": {
      "cases": 4,
      "trays": 9,
      "pieces": 4,
      "totalPieces": 1714
    },
    "L": {
      "cases": 1,
      "trays": 2,
      "pieces": 0,
      "totalPieces": 420
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 2,
      "totalPieces": 62
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    },
    "BR": {
      "cases": 0,
      "trays": 1,
      "pieces": 10,
      "totalPieces": 40
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    }
  },
  "2026-09-15_1": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 26,
      "totalPieces": 86
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 16,
      "totalPieces": 16
    },
    "NV": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "NW": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "PT": {
      "cases": 0,
      "trays": 8,
      "pieces": 20,
      "totalPieces": 260
    },
    "PW": {
      "cases": 2,
      "trays": 7,
      "pieces": 20,
      "totalPieces": 950
    },
    "S": {
      "cases": 5,
      "trays": 3,
      "pieces": 13,
      "totalPieces": 1903
    },
    "M": {
      "cases": 5,
      "trays": 1,
      "pieces": 2,
      "totalPieces": 1832
    },
    "L": {
      "cases": 2,
      "trays": 7,
      "pieces": 27,
      "totalPieces": 957
    },
    "XL": {
      "cases": 0,
      "trays": 6,
      "pieces": 28,
      "totalPieces": 208
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 14,
      "totalPieces": 14
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "BR": {
      "cases": 0,
      "trays": 3,
      "pieces": 18,
      "totalPieces": 108
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 26,
      "totalPieces": 26
    }
  },
  "2026-09-15_2": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 3,
      "pieces": 17,
      "totalPieces": 107
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 17,
      "totalPieces": 17
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 20,
      "totalPieces": 50
    },
    "NW": {
      "cases": 0,
      "trays": 8,
      "pieces": 13,
      "totalPieces": 253
    },
    "PT": {
      "cases": 0,
      "trays": 10,
      "pieces": 0,
      "totalPieces": 300
    },
    "PW": {
      "cases": 1,
      "trays": 2,
      "pieces": 21,
      "totalPieces": 441
    },
    "S": {
      "cases": 5,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 1830
    },
    "M": {
      "cases": 8,
      "trays": 6,
      "pieces": 8,
      "totalPieces": 3068
    },
    "L": {
      "cases": 5,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 2010
    },
    "XL": {
      "cases": 1,
      "trays": 3,
      "pieces": 17,
      "totalPieces": 467
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 20,
      "totalPieces": 20
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 15,
      "totalPieces": 15
    },
    "BR": {
      "cases": 0,
      "trays": 4,
      "pieces": 4,
      "totalPieces": 124
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  },
  "2026-09-15_3": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 5,
      "pieces": 16,
      "totalPieces": 166
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 2,
      "pieces": 1,
      "totalPieces": 61
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 4,
      "totalPieces": 4
    },
    "NV": {
      "cases": 0,
      "trays": 2,
      "pieces": 18,
      "totalPieces": 78
    },
    "NW": {
      "cases": 0,
      "trays": 4,
      "pieces": 6,
      "totalPieces": 126
    },
    "PT": {
      "cases": 0,
      "trays": 6,
      "pieces": 12,
      "totalPieces": 192
    },
    "PW": {
      "cases": 1,
      "trays": 1,
      "pieces": 24,
      "totalPieces": 414
    },
    "S": {
      "cases": 4,
      "trays": 5,
      "pieces": 16,
      "totalPieces": 1606
    },
    "M": {
      "cases": 7,
      "trays": 3,
      "pieces": 0,
      "totalPieces": 2610
    },
    "L": {
      "cases": 4,
      "trays": 3,
      "pieces": 8,
      "totalPieces": 1538
    },
    "XL": {
      "cases": 1,
      "trays": 4,
      "pieces": 5,
      "totalPieces": 485
    },
    "J": {
      "cases": 0,
      "trays": 0,
      "pieces": 21,
      "totalPieces": 21
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 22,
      "totalPieces": 22
    },
    "BR": {
      "cases": 0,
      "trays": 7,
      "pieces": 17,
      "totalPieces": 227
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 1,
      "totalPieces": 1
    }
  },
  "2026-09-15_5": {
    "GOOD_CRACK": {
      "cases": 0,
      "trays": 1,
      "pieces": 22,
      "totalPieces": 52
    },
    "BAD_CRACK": {
      "cases": 0,
      "trays": 0,
      "pieces": 18,
      "totalPieces": 18
    },
    "MISSHAPEN": {
      "cases": 0,
      "trays": 0,
      "pieces": 7,
      "totalPieces": 7
    },
    "NV": {
      "cases": 0,
      "trays": 1,
      "pieces": 0,
      "totalPieces": 30
    },
    "NW": {
      "cases": 0,
      "trays": 3,
      "pieces": 15,
      "totalPieces": 105
    },
    "PT": {
      "cases": 1,
      "trays": 2,
      "pieces": 15,
      "totalPieces": 435
    },
    "PW": {
      "cases": 4,
      "trays": 9,
      "pieces": 0,
      "totalPieces": 1710
    },
    "S": {
      "cases": 8,
      "trays": 9,
      "pieces": 10,
      "totalPieces": 3160
    },
    "M": {
      "cases": 5,
      "trays": 4,
      "pieces": 20,
      "totalPieces": 1940
    },
    "L": {
      "cases": 1,
      "trays": 7,
      "pieces": 0,
      "totalPieces": 570
    },
    "XL": {
      "cases": 0,
      "trays": 2,
      "pieces": 20,
      "totalPieces": 80
    },
    "J": {
      "cases": 0,
      "trays": 1,
      "pieces": 9,
      "totalPieces": 39
    },
    "SJ": {
      "cases": 0,
      "trays": 0,
      "pieces": 9,
      "totalPieces": 9
    },
    "BR": {
      "cases": 0,
      "trays": 2,
      "pieces": 10,
      "totalPieces": 70
    },
    "BO": {
      "cases": 0,
      "trays": 0,
      "pieces": 10,
      "totalPieces": 10
    },
    "LOSS": {
      "cases": 0,
      "trays": 0,
      "pieces": 2,
      "totalPieces": 2
    }
  }
},
  mortalities: [
  {
    "flockId": 1,
    "date": "2026-07-11",
    "count": 1,
    "reason": "1-prolapsed"
  },
  {
    "flockId": 1,
    "date": "2026-07-18",
    "count": 3,
    "reason": "1-eaten by cat\r\n1-days dead\r\n1-thin"
  },
  {
    "flockId": 2,
    "date": "2026-07-18",
    "count": 3,
    "reason": "2-prolapsed\r\n1-days dead"
  },
  {
    "flockId": 3,
    "date": "2026-07-18",
    "count": 6,
    "reason": "1-eaten by cat\r\n3-prolapsed\r\n1-NE\r\n1-still alive/thin/twisted neck"
  },
  {
    "flockId": 6,
    "date": "2026-07-18",
    "count": 7,
    "reason": "2-severe thin\r\n2-days dead\r\n1-prolapsed\r\n1-mild hemorrhagic liver/misshapen egg yolk/nabasagan\r\n1-nabasagan"
  },
  {
    "flockId": 5,
    "date": "2026-07-18",
    "count": 8,
    "reason": "4-prolapsed\r\n1-days dead\r\n1-eaten by cat\r\n1-nabasagan\r\n1-NE/thin"
  },
  {
    "flockId": 1,
    "date": "2026-07-19",
    "count": 6,
    "reason": "2-days dead\n1-thin/misshapen egg yolk\n1-nabasagan\n1-broken wings\n1-water bag"
  },
  {
    "flockId": 2,
    "date": "2026-07-19",
    "count": 6,
    "reason": "2-eaten by cat\n2-days dead\n1-prolapsed\n1-still alive/lame/broken wing"
  },
  {
    "flockId": 3,
    "date": "2026-07-19",
    "count": 13,
    "reason": "1-sternaal deviation/nabasagan\n1-NE/nabasagan/friable liver\n1-thin/air in ceca/mild NE\n1-broken wings\n3-prolapsed\n2-days dead\n3-thin/broken wings/unproductive\n1-eaten by cat"
  },
  {
    "flockId": 6,
    "date": "2026-07-19",
    "count": 7,
    "reason": "2-days dead\n1-pale liver/internal hemorrhage\n1-nabasagn/NE/tihn\n1-hemorrhagic liver/nabasagan\n2-thin"
  },
  {
    "flockId": 5,
    "date": "2026-07-19",
    "count": 8,
    "reason": "5-prolapsed\n1-eaten by cat\n1-NE/egg binding\n1-bigti"
  },
  {
    "flockId": 1,
    "date": "2026-07-17",
    "count": 2,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-07-12",
    "count": 4,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-07-13",
    "count": 6,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-07-14",
    "count": 3,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-07-15",
    "count": 3,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-07-16",
    "count": 3,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-07-20",
    "count": 5,
    "reason": "1-thin/broken wings\n1-off feed/fat/pale liver\n1-enlarged friable liver/intenal hemorrhage\n1-mild hemorrhagic liver\n1-thin//pale comb"
  },
  {
    "flockId": 2,
    "date": "2026-07-20",
    "count": 4,
    "reason": "2-eaten by cat\n1-prolapsed\n1-days dead"
  },
  {
    "flockId": 3,
    "date": "2026-07-20",
    "count": 6,
    "reason": "2-prolapsed\n1-days dead\n2-thin\n1-nabasagan"
  },
  {
    "flockId": 6,
    "date": "2026-07-20",
    "count": 6,
    "reason": "3-thin\n1-water bag\n1-prolapsed\n1-days dead"
  },
  {
    "flockId": 5,
    "date": "2026-07-20",
    "count": 8,
    "reason": "3-prolapsed/vent pecked\n2-days dead\n1-eaten by cat\n1-splenomegaly\n1-dilated intestine/enlarged intestine with blood inside"
  },
  {
    "flockId": 1,
    "date": "2026-07-21",
    "count": 6,
    "reason": "1-eaten by cat\n1-days dead\n2-thin\n1-prolapsed/broken wings\n1-nabasagan"
  },
  {
    "flockId": 2,
    "date": "2026-07-21",
    "count": 4,
    "reason": "2-days dead\n1-eaten by cat\n1-thin"
  },
  {
    "flockId": 3,
    "date": "2026-07-21",
    "count": 15,
    "reason": "3-days ded\n4-prolapsed\n1-eaten by cat\n1-egg binding\n1-regress ovaries/broken wing\n\n*culled out lame-5\n1-thin/lame/hypertemia/pale spleen/off feed\n1-pale friable liver/misshapen egg yolk/blood in egg yolk/hypertemia/\n1-egg binding\n1-egg stuck\n1-misshapen egg yolk/thin"
  },
  {
    "flockId": 6,
    "date": "2026-07-21",
    "count": 11,
    "reason": "1-nodules all over/egg binding\n1-nabasagan\n3-days dead\n3-thin/broken wings\n1-NE\n2-eaten by cat"
  },
  {
    "flockId": 5,
    "date": "2026-07-21",
    "count": 3,
    "reason": "3-prolapsed"
  },
  {
    "flockId": 3,
    "date": "2026-07-22",
    "count": 12,
    "reason": "3-days dead\n3-prolapsed\n2-thin\n1-eaten by cat\n1-regress ovaries/thin\n1-dilated intestine/mild prolapsed/misshapen egg yolk\n1-dilated intestine/nabasagan/misshapen egg yolk"
  },
  {
    "flockId": 1,
    "date": "2026-07-22",
    "count": 4,
    "reason": "1-days ded\n1-broken wings\n1-thin\n1-eaten by cat"
  },
  {
    "flockId": 2,
    "date": "2026-07-22",
    "count": 4,
    "reason": "1-days dead\n1-eaten by cat\n1-prolapsed\n1-nabasagan"
  },
  {
    "flockId": 6,
    "date": "2026-07-22",
    "count": 10,
    "reason": "1-pale comb/thin/yellowish liver/mild egg binding\n1-severe egg binding\n3-days dead\n1-nabasagan/thin/pale liver\n1-thin\n1-hemorrhagic friable liver/internal hemorrhage/pale liver\n1-pale friable liver\n1-ascites/nabasagan"
  },
  {
    "flockId": 5,
    "date": "2026-07-22",
    "count": 6,
    "reason": "2-prolapsed\n2-days dead\n1-eaten by cat\n1-pale spleen"
  },
  {
    "flockId": 1,
    "date": "2026-07-23",
    "count": 4,
    "reason": "2-days dead\n1-broken wings/thin\n1-mild hemorrhagic liver/nabasagan"
  },
  {
    "flockId": 2,
    "date": "2026-07-23",
    "count": 5,
    "reason": "1-friable liver/nabasagan\n1-egg binding\n1-eaten by cat\n1-thin\n1-days dead"
  },
  {
    "flockId": 3,
    "date": "2026-07-23",
    "count": 7,
    "reason": "2-days dead\n2-prolapsed\n1-NE/broken leg\n1-nabasagan\n1-egg binding"
  },
  {
    "flockId": 6,
    "date": "2026-07-23",
    "count": 6,
    "reason": "1-prolpsed/egg stuck/nabasagan\n2-thin\n1-severe water bag/thin/unproduction\n1-nabasagan\n1-friable liver/fat/NE/unproduction"
  },
  {
    "flockId": 5,
    "date": "2026-07-23",
    "count": 5,
    "reason": "4-prolapsed\n1-eaten by cat"
  },
  {
    "flockId": 1,
    "date": "2026-07-24",
    "count": 6,
    "reason": "3-thin/broken wings\n1-days dead\n1-enalaged liver/regress ovaries\n1-friable liver"
  },
  {
    "flockId": 2,
    "date": "2026-07-24",
    "count": 4,
    "reason": "1-eaten by cat\n1-thin/prolapsed\n1-nabasagan\n1-friable liver"
  },
  {
    "flockId": 3,
    "date": "2026-07-24",
    "count": 8,
    "reason": "2-prolapsed\n1-eaten by cat\n2-days dead\n1-egg stuck\n2-thin/broken wings\n\nCULLED OUT-3\n2-still alive/lame/off feed/weak/unproductive\n1-still alive/nabasagan"
  },
  {
    "flockId": 6,
    "date": "2026-07-24",
    "count": 10,
    "reason": "2-thin/broken wings\n3-days dead\n1-eaten by cat\n3-prolapsed/nabasagan\n1-friable liver"
  },
  {
    "flockId": 5,
    "date": "2026-07-24",
    "count": 3,
    "reason": "1-mild prolapsed/egg bound/nabasagan\n1-nbasagan/thin/NE/misshapen egg yolk\n1-eaten by cat"
  },
  {
    "flockId": 2,
    "date": "2026-07-25",
    "count": 7,
    "reason": "2-eaten by cat\n1-thin/day dead\n2-thin\n1-thin/off feed\n1-enlarged friable liver/severe hemorrhage on liver/splenomegaly/unproductive"
  },
  {
    "flockId": 3,
    "date": "2026-07-25",
    "count": 12,
    "reason": "1-thin/misshapen egg yolk\n1-hypertemia/mild hemorrhagic liver\n1-friable liver/fat/egg stuck\n1-nabasagan\n3-days dead\n3-prolapsed\n1-eaten by cat\n1-still alive/thin/pale comb/off feed/unproductive/necrotic egg yolk"
  },
  {
    "flockId": 6,
    "date": "2026-07-25",
    "count": 6,
    "reason": "2-thin\n1-days dead\n2-prolapsed\n1-necrotic egg binding"
  },
  {
    "flockId": 5,
    "date": "2026-07-25",
    "count": 6,
    "reason": "5-prolasped\n1-thin/broken wing"
  },
  {
    "flockId": 1,
    "date": "2026-07-26",
    "count": 4,
    "reason": "1-days dead\n1-nabasagan/pale spleen\n1-thin/blood in egg yolk\n1-friable liver/severe egg binding"
  },
  {
    "flockId": 2,
    "date": "2026-07-26",
    "count": 3,
    "reason": "1-eaten by cat\n1-nabasagan/thin\n1-prolapsed"
  },
  {
    "flockId": 3,
    "date": "2026-07-26",
    "count": 12,
    "reason": "2-days dead\n3-prolapsed\n1-severe egg binding\n1-hemorrhagic liver/NE\n\nCULLED OUT-5\n1-still alive/severe prolapsed/egg stuck\n1-still alive/thin/lame/unproductive\n3-still alive/thin/super thin/lame/unproductive"
  },
  {
    "flockId": 6,
    "date": "2026-07-26",
    "count": 4,
    "reason": "1-eaten by cat\n1-days dead\n1-prolapsed\n1-thin/broken wings"
  },
  {
    "flockId": 5,
    "date": "2026-07-26",
    "count": 5,
    "reason": "2-prolapsed\n1-thin\n1-nabasagan\n1-friable liver"
  },
  {
    "flockId": 1,
    "date": "2026-07-27",
    "count": 3,
    "reason": "1-thin/broken wings\n1-prolapsed\n1-still alive/thin/broken wings/lame"
  },
  {
    "flockId": 2,
    "date": "2026-07-27",
    "count": 6,
    "reason": "3-prolapsed\n1-thin\n1-severe egg binding/NE\n1-thin"
  },
  {
    "flockId": 3,
    "date": "2026-07-27",
    "count": 9,
    "reason": "2-days dead\n3-prolapsed\n2-still alive/thin/prolapsed\n1-thih\n1-egg stuck"
  },
  {
    "flockId": 6,
    "date": "2026-07-27",
    "count": 2,
    "reason": "1-prolapsed\n1-days dead"
  },
  {
    "flockId": 5,
    "date": "2026-07-27",
    "count": 10,
    "reason": "1-prolapsed/egg stuck/pale spleen\n1-pale spleen/pale liver/prolapsed/egg stuck\n1-thin\n2-days dead\n1-prolapsed/splenomegaly/pale comb\n1-severe prolapsed/vent pecked\n3-thin/prolapsed/vent pecked"
  },
  {
    "flockId": 1,
    "date": "2026-07-28",
    "count": 5,
    "reason": "1-prolapsed\n1-days dead\n2-thin\n1-mild hemorrhagic liver/thin/brittle bone"
  },
  {
    "flockId": 2,
    "date": "2026-07-28",
    "count": 3,
    "reason": "1-thin\n1-prolapsed\n1-days dead"
  },
  {
    "flockId": 3,
    "date": "2026-07-28",
    "count": 8,
    "reason": "1-prolasped\n1-eaten by cat\n1-days dead\n1-friable liver/NE/red spots on proventriculus\n1-thin/misshapen egg yolk/off feed\n1-pale liver/pale spleen/presence of tapeworms/pale comb\n1-thin/unproductive/NE/day dead\n1-hemorrhagic liver/NE/unproductive"
  },
  {
    "flockId": 6,
    "date": "2026-07-28",
    "count": 8,
    "reason": "4-thin\n1-days dead\n1-mild prolapsed/pale liver\n1-fatty liver/NE/unproductive\n1-thin/broken wings"
  },
  {
    "flockId": 5,
    "date": "2026-07-28",
    "count": 5,
    "reason": "3-prolapsed\n2-thin"
  },
  {
    "flockId": 1,
    "date": "2026-07-29",
    "count": 5,
    "reason": "2-thin\n1-eaten by cat\n1-egg binding/pale comb/pale liver/unbalanced liver/unproductive\n1-broken wings/thin"
  },
  {
    "flockId": 2,
    "date": "2026-07-29",
    "count": 3,
    "reason": "1-prolapsed/thin\n1-eaten by cat\n1-thin/NE"
  },
  {
    "flockId": 3,
    "date": "2026-07-29",
    "count": 5,
    "reason": "1-thin\n2-prolapsed\n2-nabasagan"
  },
  {
    "flockId": 6,
    "date": "2026-07-29",
    "count": 6,
    "reason": "1-prolapsed\n2-severe egg binding/unproductive\n1-nabasagan\n2-days dead"
  },
  {
    "flockId": 5,
    "date": "2026-07-29",
    "count": 1,
    "reason": "1-prolapsed"
  },
  {
    "flockId": 1,
    "date": "2026-07-30",
    "count": 1,
    "reason": "1-day dead"
  },
  {
    "flockId": 2,
    "date": "2026-07-30",
    "count": 3,
    "reason": "1-prolapsed\n1-eaten by cat\n1-NE/dilated intestine/mishapen egg yolk"
  },
  {
    "flockId": 3,
    "date": "2026-07-30",
    "count": 5,
    "reason": "1-prolapsed\n1-days dead/prolapsed\n1-thin/friable liver/pale comb/broken wings\n1-nabasagan/mild internal hemorrhage\n1-still alive/signs of bigti/weak"
  },
  {
    "flockId": 6,
    "date": "2026-07-30",
    "count": 6,
    "reason": "3-thin/unproductive\n1-severe egg binding\n1-broken wings\n1-eaten by cat"
  },
  {
    "flockId": 5,
    "date": "2026-07-30",
    "count": 3,
    "reason": "1-dilated intestine/air in ceca.egg stuck\n1-prolapsed\n1-days dead"
  },
  {
    "flockId": 1,
    "date": "2026-07-31",
    "count": 4,
    "reason": "1-prolapsed\n1-days dead/broken wings\n1-days dead\n1-still alive/lame"
  },
  {
    "flockId": 2,
    "date": "2026-07-31",
    "count": 3,
    "reason": "1-days dead\n1-eaten by cat\n1-prolapsed"
  },
  {
    "flockId": 3,
    "date": "2026-07-31",
    "count": 11,
    "reason": "1-thin/splenomegaly/misshapen egg yolk\n1-pale spleen/egg stuck\n2-thin/broken wings\n3-prolapsed\n3-days dead\n1-still alive/thin/lame"
  },
  {
    "flockId": 6,
    "date": "2026-07-31",
    "count": 15,
    "reason": "1-egg binding/NE/unproductiokn/pale spleen\n2-days dead\n1-friable liver/fat/nabasagan\n1-thin/misshapen egg yolk/egg stuck\n2-egg binding\n4-thin/broken wings\n4-prolapsed"
  },
  {
    "flockId": 5,
    "date": "2026-07-31",
    "count": 5,
    "reason": "1-nabasagan/thin\n4-prolapsed"
  },
  {
    "flockId": 1,
    "date": "2026-08-01",
    "count": 2,
    "reason": "1-days dead\n1-prolapsed"
  },
  {
    "flockId": 2,
    "date": "2026-08-01",
    "count": 3,
    "reason": "1-thin\n1-eaten by cat\n1-still alive/lame"
  },
  {
    "flockId": 3,
    "date": "2026-08-01",
    "count": 15,
    "reason": "3-days dead\n3-thin/broken wings\n3-prolapsed\n1-eaten by cat\n1-dilated intestine/nabasagan\n1-egg binding\n1-ascites/egg bound/nabasagan\n1-pale spleen/dilated intestine/mild prolapsed\n1-still alive/lame/weak"
  },
  {
    "flockId": 6,
    "date": "2026-08-01",
    "count": 7,
    "reason": "1-days dead\n1-prolapsed\n1-broken wings\n1-enlarged liver/nabasagan\n1-dilated intestine/mild NE\n2-broken wings"
  },
  {
    "flockId": 5,
    "date": "2026-08-01",
    "count": 5,
    "reason": "4-prolapsed\n1-eaten by cat"
  },
  {
    "flockId": 2,
    "date": "2026-08-02",
    "count": 2,
    "reason": "2-eaten by cat"
  },
  {
    "flockId": 3,
    "date": "2026-08-02",
    "count": 8,
    "reason": "2-prolapsed\n2-thin\n1-broken wings\n1-bigti\n2-eaten by cat"
  },
  {
    "flockId": 6,
    "date": "2026-08-02",
    "count": 5,
    "reason": "1-ascites/nabasagan\n2-thin/broken wings\n1-fat/egg bound\n1-cystic ovary/nabasagan"
  },
  {
    "flockId": 5,
    "date": "2026-08-02",
    "count": 8,
    "reason": "4-prolapsed\n1-pale comb/splenomegaly/enterits\n1-days dead\n1-dilated intestine/mild hemorrhagic liver\n1-nabasagan"
  },
  {
    "flockId": 1,
    "date": "2026-08-03",
    "count": 3,
    "reason": "1-thin\n2-day dead/thin"
  },
  {
    "flockId": 2,
    "date": "2026-08-03",
    "count": 6,
    "reason": "1-days dead\n2-eaten by cat\n1-nabasagan\n2-thin"
  },
  {
    "flockId": 3,
    "date": "2026-08-03",
    "count": 5,
    "reason": "1-eaten by cat\n1-thin\n1-still alive/thin/lame\n1-severe egg binding\n1-prolapsed"
  },
  {
    "flockId": 6,
    "date": "2026-08-03",
    "count": 7,
    "reason": "2-days dead\n1-thin\n1-unproductive/thin\n1-nabasagan\n1-svere hemorrhagic liver/fat/pale comb\n1-eaten by cat"
  },
  {
    "flockId": 5,
    "date": "2026-08-03",
    "count": 1,
    "reason": "1-prolapsed"
  },
  {
    "flockId": 1,
    "date": "2026-08-04",
    "count": 3,
    "reason": "1-eaten by cat\n1-pale comb/enteritis/ascites/blood in egg yolk\n1-NE/nabasagan"
  },
  {
    "flockId": 2,
    "date": "2026-08-04",
    "count": 3,
    "reason": "2-eaten by cat\n1-thin"
  },
  {
    "flockId": 6,
    "date": "2026-08-04",
    "count": 9,
    "reason": "4-days dead\n2-prolapsed\n1-egg binding\n2-thin"
  },
  {
    "flockId": 5,
    "date": "2026-08-04",
    "count": 6,
    "reason": "1-friable liver\n1-prolapsed\n1-days dead\n1-egg binding\n1-pal spleen\n1-splenic atrophy/entritis"
  },
  {
    "flockId": 3,
    "date": "2026-08-04",
    "count": 4,
    "reason": "2-days dead\n1-egg stuck\n1-still ailve/thin/lame"
  },
  {
    "flockId": 2,
    "date": "2026-08-05",
    "count": 4,
    "reason": "1-eaten by cat\n1-thin\n1-prolapsed\n1-egg bound"
  },
  {
    "flockId": 3,
    "date": "2026-08-05",
    "count": 9,
    "reason": "1-eaten by cat\n2-days dead\n2-prolapsed\n1-tihn\n1-NE/thin\n1-mild prolapsed/fat/dilated intestine/egg stuck\n1-pale spleen"
  },
  {
    "flockId": 6,
    "date": "2026-08-05",
    "count": 6,
    "reason": "1-eaten by cat\n2-prolapsed/days dead\n1-prolapsed\n1-splenomegaly/ascites\n1-pale liver"
  },
  {
    "flockId": 5,
    "date": "2026-08-05",
    "count": 9,
    "reason": "1-eaten by cat\n1-days dead\n1-days dead/prolapsed\n2-prolapsed\n2-thin\n1-dilated intestines/mild prolapsed\n1-friable liver/splenomegaly"
  },
  {
    "flockId": 1,
    "date": "2026-08-06",
    "count": 2,
    "reason": "1-days dead\n1-days dead/pale comb"
  },
  {
    "flockId": 2,
    "date": "2026-08-06",
    "count": 6,
    "reason": "3-days dead\n1-eaten by cat\n1-prolapssed\n1-pale spleen/dilated intestine"
  },
  {
    "flockId": 3,
    "date": "2026-08-06",
    "count": 5,
    "reason": "1-eaten by cat\n2-prolapsed\n1-nabasagan/thin\n1-pale spleen/dilated intestine"
  },
  {
    "flockId": 6,
    "date": "2026-08-06",
    "count": 10,
    "reason": "2-eaten by cat\n2-days dead\n1-prolapsed\n1-nabasagan/NE\n1-hemorrhagic liver\n1-day dead/thin\n1-mild prolapsed\n1-thin/prolapsed"
  },
  {
    "flockId": 5,
    "date": "2026-08-06",
    "count": 3,
    "reason": "3-prolapsed"
  },
  {
    "flockId": 1,
    "date": "2026-08-07",
    "count": 3,
    "reason": "1-still alive/ lame/ thin\n1-day dead/ broken wings/ broken legs/ misshapen egg yolk\n1-bigti/ friable liver/ splenic atrophy"
  },
  {
    "flockId": 2,
    "date": "2026-08-07",
    "count": 3,
    "reason": "1-bigti/ severe enteritis/ misshapen egg yolk\n1-bigti/ thin/ splenomegaly/ regress ovaries\n1-bigti/ pale liver/ pale spleen/ pale comb"
  },
  {
    "flockId": 3,
    "date": "2026-08-07",
    "count": 6,
    "reason": "2-thin/ eaten by cat\n1-still alive/ lame/ may bukol sa mata\n1-days dead/ may kuto\n1-prolapsed/ necrotic doudenum/ eggstuck\n1-bigti"
  },
  {
    "flockId": 6,
    "date": "2026-08-07",
    "count": 5,
    "reason": "1-day dead/ eaten by cat\n1-days dead\n1-heatsroke/ nabasagan/ friable liver\n1-day dead/ fat/ nabasagan/ friable liver\n1-friable liver/ nabasagan"
  },
  {
    "flockId": 5,
    "date": "2026-08-07",
    "count": 2,
    "reason": "1-days dead\n1-enlarged liver/ splenomegaly/ misshapen"
  },
  {
    "flockId": 1,
    "date": "2026-08-08",
    "count": 1,
    "reason": "1-friable liver/ splenomegaly/ enteritis/ misshapen egg yolk/ blood in egg yolk"
  },
  {
    "flockId": 2,
    "date": "2026-08-08",
    "count": 7,
    "reason": "2-days dead\n1-eaten by cat/ thin\n1-bigti/ day dead\n1-day dead/ NE/ nabasagan\n1-prolapsed/ day dead/ necrotic doudenum\n1-bigti/ misshapen egg yolk/ splenomegaly/ NE/ day dead"
  },
  {
    "flockId": 3,
    "date": "2026-08-08",
    "count": 6,
    "reason": "2-days dead\n1-day dead/ egg binding\n1-fat/ friable liver/ nabasagan/ NE\n1-day dead/ NE/ egg binding\n1-thin/ hard liver/ egg binding"
  },
  {
    "flockId": 6,
    "date": "2026-08-08",
    "count": 9,
    "reason": "1-pale hard liver/ nabasagan/ egg stuck/ bigti\n1-spleenic atrophy/ eggstuck\n1-thin/ pale liver/ unproductive\n1-broken legs/ misshapen egg yolk/ partial NE\n1-broken wings/ NE/ days dead/ egg bound\n1-water bag/ egg binding/ regress ovaries\n2-days dead\n1-eaten by cat"
  },
  {
    "flockId": 5,
    "date": "2026-08-08",
    "count": 4,
    "reason": "1-ascites/ splenomegaly/ enteritis\n1-enlarged liver/ ascites/ splenomegaly/ mild enteritis\n2-vent pecking/ pale liver/ dilated intestine"
  },
  {
    "flockId": 1,
    "date": "2026-08-09",
    "count": 8,
    "reason": "1-days dead\n1-prolapsed/ ascites/ splenomegaly/ friable liver/ mild enteritis\n1-thin/ sternal deviation/ NE/ day dead\n1-bigti/ thin/ day dead/ NE/ egg bound\n1-thin/ misshapen egg yolk/ broken leg/ friable liver\n1-broken wing/ egg stuck/ nabasagan/ misshapen egg yolk\n1-friable liver/ broken water bag\n1-thin/ sternal deviation/ enlarged liver/ egg binding"
  },
  {
    "flockId": 2,
    "date": "2026-08-09",
    "count": 2,
    "reason": "1-prolapsed/ pale spleen/ NE\n1-prolapsed/ misshapen egg yolk/ NE/ nabasagan"
  },
  {
    "flockId": 3,
    "date": "2026-08-09",
    "count": 4,
    "reason": "1-prolapsed/ fat/ pale spleen/ eggstuck\n1-broken wings/ prolapsed/ day dead/ pale liver/ pale spleen/ necrotic doudenum/ dilated intestine\n1-bigti/broken leg/ prolapsed/ nabasagan/ NE\n1-eaten by cat"
  },
  {
    "flockId": 6,
    "date": "2026-08-09",
    "count": 4,
    "reason": "1-days dead\n1-prolapsed/ bigti\n1-friable liver/ egg bound/ nabasagan\n1-friable liver/ misshapen egg yolk/ small intestine"
  },
  {
    "flockId": 5,
    "date": "2026-08-09",
    "count": 2,
    "reason": "1-prolapsed/ bigti/ pale liver\n1-splenomegaly/ enteritis/ misshapen eggy yolk"
  },
  {
    "flockId": 1,
    "date": "2026-08-10",
    "count": 4,
    "reason": "1-thin/days dead\n1-eaten by cat\n1-nabasagan\n1-broken wingd/thin"
  },
  {
    "flockId": 2,
    "date": "2026-08-10",
    "count": 4,
    "reason": "2-eaten by cat\n1-thin/pale comb\n1-misshapen egg yolk/pale comb"
  },
  {
    "flockId": 3,
    "date": "2026-08-10",
    "count": 4,
    "reason": "1-eaten by cat\n1-days dead\n1-bigti\n1-prolapsed"
  },
  {
    "flockId": 6,
    "date": "2026-08-10",
    "count": 4,
    "reason": "1-day dead\n1-eaten by cat\n1-egg stuck/egg bound/mild prolapsed\n1-thin"
  },
  {
    "flockId": 5,
    "date": "2026-08-10",
    "count": 7,
    "reason": "5-prolapsed\n2-days dead"
  },
  {
    "flockId": 1,
    "date": "2026-08-11",
    "count": 1,
    "reason": "1-days dead"
  },
  {
    "flockId": 2,
    "date": "2026-08-11",
    "count": 3,
    "reason": "1-days dead\n1-eaten by cat\n1-severe egg binding/unproductive"
  },
  {
    "flockId": 3,
    "date": "2026-08-11",
    "count": 7,
    "reason": "2-days dead\n2-prolapsed\n1-eaten by cat\n1-thin\n1-still alive/super thin/lame/unproductive"
  },
  {
    "flockId": 6,
    "date": "2026-08-11",
    "count": 8,
    "reason": "2-thin\n1-friable liver/NE/fat\n1-nabasagan/friable liver\n2-days dead\n1-eaetn by cat\n1-prolapsed"
  },
  {
    "flockId": 5,
    "date": "2026-08-11",
    "count": 6,
    "reason": "4-prolapsed\n1-splenomegaly\n1-thin/prolasped"
  },
  {
    "flockId": 1,
    "date": "2026-08-12",
    "count": 1,
    "reason": "1-nabasagan"
  },
  {
    "flockId": 2,
    "date": "2026-08-12",
    "count": 3,
    "reason": "1-days daed\n1-prolapsed\n1-eaten by cat"
  },
  {
    "flockId": 3,
    "date": "2026-08-12",
    "count": 7,
    "reason": "3-prolapsed\n1-eaten by cat\n1-pale liver/internal hemorrhage\n1-thin/NE/nabasagan/NE\n1-nabasagan"
  },
  {
    "flockId": 5,
    "date": "2026-08-12",
    "count": 5,
    "reason": "2-days dead/prolapsed\n2-prolapsed\n1-ascites/splenomegaly/enteritis"
  },
  {
    "flockId": 6,
    "date": "2026-08-12",
    "count": 7,
    "reason": "1-eaten by cat\n1-days dead\n2-thin\n2-prolapsed\n1-internal hemorrhage"
  },
  {
    "flockId": 1,
    "date": "2026-08-13",
    "count": 6,
    "reason": "3-days dead\n1-broken leg/sternal deviation\n1-petechial liver/thin/NE/nabasagan/nodules all over\n1-nabasagan"
  },
  {
    "flockId": 2,
    "date": "2026-08-13",
    "count": 1,
    "reason": "1-days dead"
  },
  {
    "flockId": 3,
    "date": "2026-08-13",
    "count": 5,
    "reason": "2-days dead\n1-eaten by cat\n1-thin\n1-prolapsed"
  },
  {
    "flockId": 6,
    "date": "2026-08-13",
    "count": 7,
    "reason": "1-eaten by cat\n3-thin\n2-prolapsed\n1-fat/nabasagan"
  },
  {
    "flockId": 5,
    "date": "2026-08-13",
    "count": 2,
    "reason": "2-prolasped"
  },
  {
    "flockId": 1,
    "date": "2026-08-14",
    "count": 3,
    "reason": "2-days dead\n1-eaten by cat"
  },
  {
    "flockId": 2,
    "date": "2026-08-14",
    "count": 1,
    "reason": "1-pale comb/splenomegaly"
  },
  {
    "flockId": 3,
    "date": "2026-08-14",
    "count": 5,
    "reason": "1-NE/nabasagan\n2-days dead\n1-thin\n1-thin/still alive/lame"
  },
  {
    "flockId": 6,
    "date": "2026-08-14",
    "count": 10,
    "reason": "2-days dead\n1-prolapsed\n4-thin\n1-friable liver/nabasagan\n1-nabasagan\n1-prolapsed/nabasagan"
  },
  {
    "flockId": 5,
    "date": "2026-08-14",
    "count": 3,
    "reason": "1-thin\n1-severe egg binding\n1-thin/still alive/lame"
  },
  {
    "flockId": 1,
    "date": "2026-08-15",
    "count": 4,
    "reason": "1-days dead\n1-eaten by cat\n1-thin/broken wings\n1-severe egg binding/thin/pale comb/unproductive"
  },
  {
    "flockId": 3,
    "date": "2026-08-15",
    "count": 10,
    "reason": "3-days dead\n1-eaten by cat\n1-bigti\n1-NE/thin\n2-prolapsed\n2-thin"
  },
  {
    "flockId": 6,
    "date": "2026-08-15",
    "count": 10,
    "reason": "2-days dead\n1-thin/broken wings\n1-prolapsed/ascites/pale spleen\n3-nabasagan\n3-thin/broken wings/"
  },
  {
    "flockId": 5,
    "date": "2026-08-15",
    "count": 4,
    "reason": "1-nabasagan/crumpled intestine\n1-prolapsed\n1-enteritis/splenomegaly/pale comb\n1-days dead"
  },
  {
    "flockId": 2,
    "date": "2026-08-15",
    "count": 1,
    "reason": "1-pale comb/days dead"
  },
  {
    "flockId": 1,
    "date": "2026-08-16",
    "count": 5,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 2,
    "date": "2026-08-16",
    "count": 4,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 3,
    "date": "2026-08-16",
    "count": 6,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 6,
    "date": "2026-08-16",
    "count": 7,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 5,
    "date": "2026-08-16",
    "count": 4,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-08-17",
    "count": 0,
    "reason": "i cant do necropsy because i havent been feeling well since yesterday."
  },
  {
    "flockId": 2,
    "date": "2026-08-17",
    "count": 0,
    "reason": "i cant do necropsy because i havent been feeling well since yesterday."
  },
  {
    "flockId": 3,
    "date": "2026-08-17",
    "count": 0,
    "reason": "i cant do necropsy because i havent been feeling well since yesterday."
  },
  {
    "flockId": 6,
    "date": "2026-08-17",
    "count": 0,
    "reason": "i cant do necropsy because i havent been feeling well since yesterday."
  },
  {
    "flockId": 5,
    "date": "2026-08-17",
    "count": 0,
    "reason": "i cant do necropsy because i havent been feeling well since yesterday."
  },
  {
    "flockId": 1,
    "date": "2026-08-18",
    "count": 2,
    "reason": "1-days dead\n1-thin"
  },
  {
    "flockId": 2,
    "date": "2026-08-18",
    "count": 4,
    "reason": "1-days dead\n2-eaten by cat\n1-prolapsed"
  },
  {
    "flockId": 3,
    "date": "2026-08-18",
    "count": 5,
    "reason": "2-days dead\n2-eaten by cat\n1-prolapsed"
  },
  {
    "flockId": 6,
    "date": "2026-08-18",
    "count": 13,
    "reason": "3-days dead\n4-thin\n1-nabasagan/thin\n1-water bag\n1-NE/sternal deviation/prolapsed\n1-hard liver/thin\n2-prolapsed"
  },
  {
    "flockId": 5,
    "date": "2026-08-18",
    "count": 2,
    "reason": "2-prolapsed"
  },
  {
    "flockId": 1,
    "date": "2026-08-19",
    "count": 1,
    "reason": "1-days dead"
  },
  {
    "flockId": 2,
    "date": "2026-08-19",
    "count": 3,
    "reason": "1-nabasagan/NE\n1-pale comb/day dead\n1-thin"
  },
  {
    "flockId": 3,
    "date": "2026-08-19",
    "count": 6,
    "reason": "3-still alive/thin/lame\n2-eaten by cat\n1-prolapsed"
  },
  {
    "flockId": 6,
    "date": "2026-08-19",
    "count": 7,
    "reason": "1-eaten by cat\n2-thin/unprodutive\n1-dilated intestine/fat\n1-nabasagan\n1-NE/\n1-prolapsed"
  },
  {
    "flockId": 5,
    "date": "2026-08-19",
    "count": 4,
    "reason": "1-days dead\n1-thin\n1-severe egg binding\n1-eaten by cat"
  },
  {
    "flockId": 1,
    "date": "2026-08-20",
    "count": 3,
    "reason": "1-thin/days dead\n1-thin\n1-severe enlarged friable liver/splenomegaly/pale comb"
  },
  {
    "flockId": 2,
    "date": "2026-08-20",
    "count": 3,
    "reason": "2-prolapsed\n1-thin/pale comb/splenomegaly/unproductive"
  },
  {
    "flockId": 3,
    "date": "2026-08-20",
    "count": 11,
    "reason": "1-eaten by cat\n3-thin/broken wings\n3-prolapsed\n1-egg stuck/hemorrhagic liver\n1-splenomegaly/NE/enteritis\n2-days dead"
  },
  {
    "flockId": 6,
    "date": "2026-08-20",
    "count": 13,
    "reason": "1-nabasagan\n1-NE/crumpled intestine\n1-NE\n4-prolapsed\n5-thin/unproductive/broken wings\n1-eaten by cat"
  },
  {
    "flockId": 5,
    "date": "2026-08-20",
    "count": 5,
    "reason": "2-thin\n1-prolapsed\n1-nabasagan.pale spleen\n1-ascites/enteritis/splenomegaly"
  },
  {
    "flockId": 1,
    "date": "2026-08-21",
    "count": 6,
    "reason": "1-days ded\n1-dilated intestine/pale comb/broken wings\n1-pale comb/friable liver/splenomegaly/enteritis\n1-nabasagan\n1-pale comb/broken wings\n1-nabasagan/splenomegaly/pale comb"
  },
  {
    "flockId": 2,
    "date": "2026-08-21",
    "count": 5,
    "reason": "1-days dead\n2-thin\n1-NE/nabasgan\n1-dilated intestine/pale spleen/pale comb"
  },
  {
    "flockId": 3,
    "date": "2026-08-21",
    "count": 5,
    "reason": "2-prolapsed\n1-eaten by cat\n2-thin"
  },
  {
    "flockId": 6,
    "date": "2026-08-21",
    "count": 4,
    "reason": "1-thin/NE\n1-egg stuck/fat/NE\n2-thin/days dead"
  },
  {
    "flockId": 5,
    "date": "2026-08-21",
    "count": 1,
    "reason": "1-still alive/thin/lame"
  },
  {
    "flockId": 1,
    "date": "2026-08-22",
    "count": 2,
    "reason": "2-thin/broken wings"
  },
  {
    "flockId": 2,
    "date": "2026-08-22",
    "count": 6,
    "reason": "1-prolapsed\n2-thin\n1-internal hemorrhage/thin\n1-still alive/thin\n1-severe egg binding/thin"
  },
  {
    "flockId": 3,
    "date": "2026-08-22",
    "count": 12,
    "reason": "1-splenomegaly/NE\n1-eaten by cat\n1-internal hemorrhage\n1-NE/friable liver\n1-dilated intestine\n3-prolapsed\n4-thin/broken wings"
  },
  {
    "flockId": 5,
    "date": "2026-08-22",
    "count": 5,
    "reason": "2-prolasped\n1-days dead/thin\n2-pale comb/splenomegaly/friable liver"
  },
  {
    "flockId": 6,
    "date": "2026-08-22",
    "count": 6,
    "reason": "3-thin\n1-egg binding\n2-prolapsed"
  },
  {
    "flockId": 1,
    "date": "2026-08-23",
    "count": 3,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 2,
    "date": "2026-08-23",
    "count": 3,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 3,
    "date": "2026-08-23",
    "count": 4,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 6,
    "date": "2026-08-23",
    "count": 5,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 5,
    "date": "2026-08-23",
    "count": 1,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-08-24",
    "count": 2,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 2,
    "date": "2026-08-24",
    "count": 1,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 3,
    "date": "2026-08-24",
    "count": 3,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 6,
    "date": "2026-08-24",
    "count": 11,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 5,
    "date": "2026-08-24",
    "count": 5,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-08-25",
    "count": 3,
    "reason": "1-severe egg binding\n1-white lesion on liver/splenic atrophy\n1-thin/broken wings"
  },
  {
    "flockId": 2,
    "date": "2026-08-25",
    "count": 2,
    "reason": "2-eaten by cat"
  },
  {
    "flockId": 3,
    "date": "2026-08-25",
    "count": 5,
    "reason": "1-thin/days dead\n1-eaten by cat\n1-nabasagan/fat\n1-nabasagan/thin\n1-thin"
  },
  {
    "flockId": 6,
    "date": "2026-08-25",
    "count": 10,
    "reason": "10-thin/from rejects"
  },
  {
    "flockId": 5,
    "date": "2026-08-25",
    "count": 4,
    "reason": "2-prolapsed\n2-thin"
  },
  {
    "flockId": 1,
    "date": "2026-08-26",
    "count": 2,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 2,
    "date": "2026-08-26",
    "count": 6,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 3,
    "date": "2026-08-26",
    "count": 11,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 6,
    "date": "2026-08-26",
    "count": 9,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 5,
    "date": "2026-08-26",
    "count": 2,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-08-27",
    "count": 3,
    "reason": "1-pale liver/unproductive/NE\n2-broken wings/thin"
  },
  {
    "flockId": 2,
    "date": "2026-08-27",
    "count": 2,
    "reason": "1-eaten by cat\n1-prolapsed"
  },
  {
    "flockId": 3,
    "date": "2026-08-27",
    "count": 8,
    "reason": "2-prolapsed\n4-thin\n1-nabasagan/dilated intestine\n1-NE"
  },
  {
    "flockId": 6,
    "date": "2026-08-27",
    "count": 20,
    "reason": "20-thin/lame/broken wings/from rejects"
  },
  {
    "flockId": 5,
    "date": "2026-08-27",
    "count": 3,
    "reason": "1-splenomegaly\n2-prolapsed"
  },
  {
    "flockId": 1,
    "date": "2026-08-28",
    "count": 2,
    "reason": "1-friable liver/blood in egg yolk/thin\n1-nabasagan/thin"
  },
  {
    "flockId": 2,
    "date": "2026-08-28",
    "count": 3,
    "reason": "1-days dead/prolapsed\n1-eaten by cat\n1-splenomegaly"
  },
  {
    "flockId": 3,
    "date": "2026-08-28",
    "count": 1,
    "reason": "1-eaten by cat"
  },
  {
    "flockId": 5,
    "date": "2026-08-28",
    "count": 3,
    "reason": "2-prolapsed\n1-eaten by cat"
  },
  {
    "flockId": 6,
    "date": "2026-08-28",
    "count": 12,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-08-29",
    "count": 1,
    "reason": "1-prolapsed"
  },
  {
    "flockId": 2,
    "date": "2026-08-29",
    "count": 4,
    "reason": "2-days dead\n1-eaten by cat\n1-still alive/thin/unproductive"
  },
  {
    "flockId": 3,
    "date": "2026-08-29",
    "count": 4,
    "reason": "3-days dead\n1-thin/broken wings"
  },
  {
    "flockId": 5,
    "date": "2026-08-29",
    "count": 4,
    "reason": "2-prolapsed\n2-days dead"
  },
  {
    "flockId": 1,
    "date": "2026-08-30",
    "count": 4,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 2,
    "date": "2026-08-30",
    "count": 5,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 3,
    "date": "2026-08-30",
    "count": 5,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 5,
    "date": "2026-08-30",
    "count": 4,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-08-31",
    "count": 2,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 3,
    "date": "2026-08-31",
    "count": 4,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 5,
    "date": "2026-08-31",
    "count": 5,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-09-01",
    "count": 3,
    "reason": "2-thin\n1-prolapsed"
  },
  {
    "flockId": 2,
    "date": "2026-09-01",
    "count": 7,
    "reason": "1-eaten by cat\n2-days dead\n2-thin\n2-prolapsed"
  },
  {
    "flockId": 3,
    "date": "2026-09-01",
    "count": 6,
    "reason": "3-days dead\n2-prolapsed\n1-thin"
  },
  {
    "flockId": 5,
    "date": "2026-09-01",
    "count": 4,
    "reason": "1-prolapsed\n2-days dead\n1-thin"
  },
  {
    "flockId": 1,
    "date": "2026-09-02",
    "count": 2,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 2,
    "date": "2026-09-02",
    "count": 2,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 3,
    "date": "2026-09-02",
    "count": 8,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 5,
    "date": "2026-09-02",
    "count": 6,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 1,
    "date": "2026-09-03",
    "count": 2,
    "reason": "2-water bag"
  },
  {
    "flockId": 2,
    "date": "2026-09-03",
    "count": 6,
    "reason": "2-daysd dead\n2-prolapsed\n2-eaten by cat"
  },
  {
    "flockId": 3,
    "date": "2026-09-03",
    "count": 4,
    "reason": "1-eaten by cat\n2-days ded\n1-super thin/unproductive/NE/bigti"
  },
  {
    "flockId": 5,
    "date": "2026-09-03",
    "count": 6,
    "reason": "2-days dead/prolpsed\n1-days dead/thin\n1-bigti\n1-nabasagan\n1-pale comb/paale spleen/dited intestine/thin"
  },
  {
    "flockId": 1,
    "date": "2026-09-04",
    "count": 5,
    "reason": "1-thin/ pale hard liver with red spotted lession/ broken water bag/ egg binding/ prolapsed\n1-day dead/ bigti/ prolapsed/ nabasagan\n1-thin/ misshapen egg yolk/ NE/ regress ovaries\n1-prolapsed/ friable liver/ pale spleen\n1-days dead/ bigti/ prolapsed/ fat"
  },
  {
    "flockId": 2,
    "date": "2026-09-04",
    "count": 3,
    "reason": "1-days dead/ thin/ sternal deviation\n2-eaten by cat/ thin"
  },
  {
    "flockId": 3,
    "date": "2026-09-04",
    "count": 3,
    "reason": "1-prolapsed/ pale liver/ eaten by cat\n1-broken wings/ pale liver/ pale spleen\n1-thin/ regress ovaries/ splenic atrophy"
  },
  {
    "flockId": 5,
    "date": "2026-09-04",
    "count": 5,
    "reason": "1-splenomegaly/ NE/ day dead/ regress ovaries\n1-days dead\n1-pale friable liver/ splenomegaly/ hemorrhage/ dilated intestine\n1-prolapsed/ pale liver\n1-prolapsed/ egg stuck/ pale liver"
  },
  {
    "flockId": 1,
    "date": "2026-09-05",
    "count": 1,
    "reason": "1-day dead/ friable liver/ thin/ NE/ misshapen egg yolk/ broken leg"
  },
  {
    "flockId": 2,
    "date": "2026-09-05",
    "count": 4,
    "reason": "1-enlarged friable liver/ regress ovaries/ bigti/ day dead\n1-friable liver/ day dead/ nabasagan/NE\n2-eaten by cat/ thin/ lame"
  },
  {
    "flockId": 3,
    "date": "2026-09-05",
    "count": 5,
    "reason": "1-thin/ day dead/ eaten by cat\n1-broken wings/ broken legs/ prolapsed/ pale friable liver/ dilated intestine\n1-thin/ prolapsed/ pale friable liver/ days dead\n1-vent pecking/ pale liver/ necrotic doudenum\n1-prolapsed/ day dead/ NE/ nabasagan/ egg stuck"
  },
  {
    "flockId": 5,
    "date": "2026-09-05",
    "count": 2,
    "reason": "1-eaten by cat/ thin/ lame\n1-nabasagan/ water bag/ necrotic/ doudenum/ day dead"
  },
  {
    "flockId": 1,
    "date": "2026-09-06",
    "count": 3,
    "reason": "1-prolapsed/ days dead/ friable liver/ NE/ broken wings\n2-still alive/ lame/ thin/ broken legs/ broken wings"
  },
  {
    "flockId": 2,
    "date": "2026-09-06",
    "count": 8,
    "reason": "2-days dead\n1-eaten by cat/ thin\n1-thin/ sternal deviation/ unproductive/ day dead/ NE\n1-friable liver/ nabasagan/ egg bound/ enlarged intestine\n1-friable liver/ nabasagan/ heat stroke\n1-eaten by cat/ no intestine\n1-fat/ egg binding"
  },
  {
    "flockId": 3,
    "date": "2026-09-06",
    "count": 4,
    "reason": "1-broken wings/ nabasagan/ friable liver/ misshapen egg yolk/ necrotic doudenum\n3-days dead/ thin"
  },
  {
    "flockId": 5,
    "date": "2026-09-06",
    "count": 1,
    "reason": "1-prolapsed/ pale liver"
  },
  {
    "flockId": 1,
    "date": "2026-09-07",
    "count": 4,
    "reason": "1-days dead/broken wings/thin\n1-pale comb/nabasagan/mild prolapsed\n1-broken leg\n1-eaten by cat"
  },
  {
    "flockId": 2,
    "date": "2026-09-07",
    "count": 1,
    "reason": "1-eaten by cat"
  },
  {
    "flockId": 3,
    "date": "2026-09-07",
    "count": 6,
    "reason": "2-eaten by cat\n2-thin\n2-nabasagan/thin"
  },
  {
    "flockId": 5,
    "date": "2026-09-07",
    "count": 7,
    "reason": "2-eaten by cat\n1-days dead\n1-thin/nabasagan\n1-prolapsed\n2-thin/unproductive"
  },
  {
    "flockId": 1,
    "date": "2026-09-08",
    "count": 1,
    "reason": "1-prolapsed/day dead"
  },
  {
    "flockId": 2,
    "date": "2026-09-08",
    "count": 3,
    "reason": "2-eaten by cat\n1-prolapsed/day dead"
  },
  {
    "flockId": 3,
    "date": "2026-09-08",
    "count": 2,
    "reason": "1-eaten by cat\n1-pale comb/splenomegaly"
  },
  {
    "flockId": 5,
    "date": "2026-09-08",
    "count": 5,
    "reason": "1-eaeten by cat\n1-thin\n2-thin/still alive/unproductive/lame\n1-still alive/swollen head/may sipon/opaque air sacs/greyish liver/misshapen egg yolk"
  },
  {
    "flockId": 1,
    "date": "2026-09-09",
    "count": 5,
    "reason": "1-days dead\n1-thin/broken leg\n1-hard liver/nabasagan\n1-thin\n1-still alive/lame/thin"
  },
  {
    "flockId": 2,
    "date": "2026-09-09",
    "count": 4,
    "reason": "1-thin/unproductive\n1-days dead/thin\n1-friable liver/mild hemorrhagic liver\n1-prolapsed"
  },
  {
    "flockId": 3,
    "date": "2026-09-09",
    "count": 7,
    "reason": "1-eaten by cat\n1-days dead\n1-thin\n1-prolapsed\n1-nabasagan/dilted intestine/thin\n1-nabasagan\n1-pale comb/thin/mild hemorrhagic liver/off feed"
  },
  {
    "flockId": 5,
    "date": "2026-09-09",
    "count": 9,
    "reason": "2-day dead\n1-eaten by cat\n1-thin/swollen head/unproductive\n1-thin/regress ovaries/unproductive\n1-mild sipon/nabasagan\n1-mild hemorrhagic liver/nabasagan\n1-thin\n1-internal hemorrhage"
  },
  {
    "flockId": 1,
    "date": "2026-09-10",
    "count": 1,
    "reason": "1-lame/thin/broken wing/unproductive"
  },
  {
    "flockId": 2,
    "date": "2026-09-10",
    "count": 2,
    "reason": "2-eaten by cat"
  },
  {
    "flockId": 3,
    "date": "2026-09-10",
    "count": 8,
    "reason": "2-eaten by cat\n1-prolapsed/bigti\n1-NE/misshapen egg yolk\n3-prolapsed\n1-days dead"
  },
  {
    "flockId": 5,
    "date": "2026-09-10",
    "count": 5,
    "reason": "1-prolapsed\n1-days dead\n1-eaten by cat\n2-thin"
  },
  {
    "flockId": 1,
    "date": "2026-09-11",
    "count": 3,
    "reason": "1-pale comb/NE/unproductive\n1-pale comb/friable liver/splenomegaly/enteritis/asciets/hemorrhagic liver\n1-days dead"
  },
  {
    "flockId": 2,
    "date": "2026-09-11",
    "count": 5,
    "reason": "1-egg stuck/prolpsded/pale comb\n1-thin/pale spleen/dilated intestine/misshapen egg yolk/pale comb\n1-prolasped\n2-eaten by cat"
  },
  {
    "flockId": 3,
    "date": "2026-09-11",
    "count": 13,
    "reason": "2-eaten by cat\n2-thin/unproductive\n1-days dead\n1-hemorrhagic liver/NE/unproductive\n1-egg binding/prolpsed\n2-prolapsed\n1-hemorrhagic liver/spelnomegaly/NE\n3-eaten by cat"
  },
  {
    "flockId": 5,
    "date": "2026-09-11",
    "count": 3,
    "reason": "1-thin/unproductive\n1-prolapsed\n1-eaten by cat"
  },
  {
    "flockId": 2,
    "date": "2026-09-12",
    "count": 3,
    "reason": "2-prolapsed\n1-eaten by cat"
  },
  {
    "flockId": 3,
    "date": "2026-09-12",
    "count": 7,
    "reason": "2-eaten by cat\n1-prolapsed\n1-thin/misshapen egg yolk\n1-enlarged mild hemorrhagic liver/fat/pale comb\n1-pale comb/petechial liver/internal hemorrhage\n1-nabasagan/NE/day dead"
  },
  {
    "flockId": 5,
    "date": "2026-09-12",
    "count": 6,
    "reason": "1-broken leg/splenomegaly/enteritis/thin/pale comb\n2-thin/splenomegaly/pale comb\n3-thin/unproductive/pale comb"
  },
  {
    "flockId": 1,
    "date": "2026-09-13",
    "count": 3,
    "reason": "1-days dead\n1-broken wings/unproductive\n1-thin/unprodutive"
  },
  {
    "flockId": 2,
    "date": "2026-09-13",
    "count": 6,
    "reason": "2-thin/pale comb/unproductive\n1-prolapsed\n1-days dead\n1-thin/pale comb/mild hemorrhagic liver\n1-nabasagan"
  },
  {
    "flockId": 3,
    "date": "2026-09-13",
    "count": 4,
    "reason": "1-thin\n2-eaten by cat\n1-still alive/thin/unproductive"
  },
  {
    "flockId": 5,
    "date": "2026-09-13",
    "count": 2,
    "reason": "1-thin/unproductive\n1-mild hemorrhagic liver/pale comb"
  },
  {
    "flockId": 1,
    "date": "2026-09-14",
    "count": 1,
    "reason": "1-nabasagan/pale spleen/sternal deviation/off feed"
  },
  {
    "flockId": 2,
    "date": "2026-09-14",
    "count": 6,
    "reason": "2-prolapsed\n2-eaten by cat\n2-days days dead"
  },
  {
    "flockId": 3,
    "date": "2026-09-14",
    "count": 5,
    "reason": "2-eaten by cat\n1-prolapsed\n1-days dead\n1-pale spleen/ascites/thin"
  },
  {
    "flockId": 5,
    "date": "2026-09-14",
    "count": 5,
    "reason": "1-thin\n1-days dead/thin\n1-internal hemorrhage/pale comb/prolapsed/ascites\n1-internal hemorrhage/thin/friable liver\n1-nabasagan"
  },
  {
    "flockId": 1,
    "date": "2026-09-15",
    "count": 2,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 2,
    "date": "2026-09-15",
    "count": 2,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 3,
    "date": "2026-09-15",
    "count": 5,
    "reason": "Natural Causes / Routine"
  },
  {
    "flockId": 5,
    "date": "2026-09-15",
    "count": 3,
    "reason": "Natural Causes / Routine"
  }
],
  medications: [
  {
    "flockId": 1,
    "date": "2026-07-11",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: polymune 400ml/400L-D1\r\n1000H: vit. C+ Electrolytes 400ml/400L-D5\r\n1400H: ox-agua 60ml/1000L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-07-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1000H: betaine 400ml/400L-D2"
  },
  {
    "flockId": 2,
    "date": "2026-07-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1000H: betaine 500ml/500L-D2\r\n14000H: Acid Guard 400ml/400L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-07-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0500H: S/H120 NCDV+NCVD+IBV VACCINATION\r\n0800H: polymune 1L/400L-D8\r\n1000H: Electrolytes 400ml/400L-D2\r\n1200H: betaine 400ml/400L-D2\r\n1400H: liverplex 400ml/400L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-07-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1000H: betaine 600ml/600L-D2"
  },
  {
    "flockId": 6,
    "date": "2026-07-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Polymune 600ml/600L-D1\r\n1000H: Betaine 600ml/600L-D12\r\n1400H:acid guard 600ml/600L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-07-19",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: polymune 1L/400L-D9\r\n0800H: Electrolytes 400ml/400L-D3\r\n1000H: Vitamin C+electrolytes 400ml/400L-D1\n1200H: betaine 400ml/400L-D3\r\n1400H: Vit. B-complex 1600ml/400L-D1\n1700H: Acid Guard (acidifier) 400ml/400L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-07-19",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0500H: S/H120 NCDV+NCVD+IBV VACCINATION 4vials/500L-D1\r\n1000H: Polymune 500ml/500L-D1\n1200H: Vitamin C+Elecrolytes 500ml/500L-D1\n14000H: Liverplex 500ml/500L-D1"
  },
  {
    "flockId": 6,
    "date": "2026-07-19",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1000H: Betaine 600ml/600L-D13\r\n1400H:vit. c+electrolytes 400ml/400L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-07-19",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Polymune 600ml/600L-D1\n1000H: Vitamin c+electrolytes 600ml/600L-D1\n1200H: betaine 600ml/600L-D3\n1400H: Acid guard (acidifier) 600ml/600L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-07-19",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1000H: betaine 400ml/400L-D3\n1400H: vitamin c+electrolytes 400ml/400L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-07-20",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0500H: S/H120 NCDV+NCVD+IBV VACCINATION-d1\n0800H: polymune 1L/400L-D1\n0800H: Amicens plus 40ml/400L-D1\r\n1000H: Electrolytes 400ml/400L-D2\r\n1400H: liverplex 400ml/400L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-07-20",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 50ml/500L-D1\n0800H: Polymune 500ml/500L-D2\n1000H: Vitamin C+Elecrolytes 500ml/500L-D2\n1400H: Calcium phosphorus 1L/500L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-07-20",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 40ml/400L-D1\n0600H: polymune 1L/400L-D10\n0800H: Electrolytes 400ml/400L-D4\r\n1000H: Vitamin C+electrolytes 400ml/400L-D2\n1400H: Calcium phosphorus 800ml/400L-D1"
  },
  {
    "flockId": 6,
    "date": "2026-07-20",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amicens plus 60ml/600L-D1\n1400H:vit. c+electrolytes 400ml/400L-D2\n1700H: Calcium toppings 8 kg-D1"
  },
  {
    "flockId": 1,
    "date": "2026-07-21",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 40ml/400L-D2\r\n1400H: betaine 400ml/400L-D1\n1700H: Calcium Toppings 8kg-D2"
  },
  {
    "flockId": 2,
    "date": "2026-07-21",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 50ml/500L-D2\n0800H: Polymune 500ml/500L-D3\n1000H: betaine 500ml/500L-D1\n1400H: Calcium phosphorus 1L/500L-D2"
  },
  {
    "flockId": 3,
    "date": "2026-07-21",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 40ml/400L-D2\n0800H: polymune 400mL/400L-D11\r\n1000H: Betaine 400ml/400L-D1\n1400H: Calcium phosphorus 800ml/400L-D2"
  },
  {
    "flockId": 6,
    "date": "2026-07-21",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amicens plus 60ml/600L-D2\n1400H: Betaine 600ml/600L-D1\n1700H: Calcium toppings 8 kg-D2"
  },
  {
    "flockId": 5,
    "date": "2026-07-21",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 60ml/400L-D2\n0800H: polymune 600mL/600L-D11\r\n1000H: Betaine 600ml/600L-D5\n1400H: Calcium phosphorus 1200ml/600L-D2"
  },
  {
    "flockId": 1,
    "date": "2026-07-22",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 40ml/400L-D3\r\n1400H: betaine 400ml/400L-D2\n1700H: Calcium Toppings 8kg-D3"
  },
  {
    "flockId": 2,
    "date": "2026-07-22",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 50ml/500L-D3\n0800H: Polymune 500ml/500L-D4\n1000H: betaine 500ml/500L-D2\n1400H: Calcium phosphorus 1L/500L-D3"
  },
  {
    "flockId": 3,
    "date": "2026-07-22",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 40ml/400L-D3\n0800H: polymune 400mL/400L-D12\r\n1000H: Betaine 400ml/400L-D2\n1400H: Calcium phosphorus 800ml/400L-D3"
  },
  {
    "flockId": 6,
    "date": "2026-07-22",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amicens plus 60ml/600L-D3\n1400H: Betaine 600ml/600L-D2\n1700H: Calcium toppings 8 kg-D3"
  },
  {
    "flockId": 5,
    "date": "2026-07-22",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 60ml/400L-D3\n0800H: polymune 600mL/600L-D12\r\n1000H: Betaine 600ml/600L-D6\n1400H: Calcium phosphorus 1200ml/600L-D3"
  },
  {
    "flockId": 6,
    "date": "2026-07-23",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amicens plus 60ml/600L-D4\n1400H: acid guard 500mL/500L-D1\n1700H: Calcium toppings 8 kg-D4"
  },
  {
    "flockId": 1,
    "date": "2026-07-23",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 40ml/400L-D4\r\n1400H: acid guard 400mL/400L-D1\n1700H: Calcium Toppings 8kg-D4"
  },
  {
    "flockId": 2,
    "date": "2026-07-23",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 50ml/500L-D4\n0800H: Polymune 500ml/500L-D5\n1000H: betaine 500ml/500L-D3\n1400H: Calcium phosphorus 1L/500L-D4"
  },
  {
    "flockId": 3,
    "date": "2026-07-23",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 40ml/400L-D4\n0800H: polymune 400mL/400L-D13\r\n1000H: Betaine 400ml/400L-D3\n1400H: Calcium phosphorus 800ml/400L-D4"
  },
  {
    "flockId": 5,
    "date": "2026-07-23",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 60ml/400L-D4\n0800H: polymune 600mL/600L-D13\r\n1000H: Betaine 600ml/600L-D7\n1400H: Calcium phosphorus 1200ml/600L-D4"
  },
  {
    "flockId": 5,
    "date": "2026-07-24",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 60ml/400L-D5\n0800H: polymune 600mL/600L-D14\r\n1000H: Betaine 600ml/600L-D8\n1400H: Calcium phosphorus 1200ml/600L-D5"
  },
  {
    "flockId": 6,
    "date": "2026-07-24",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amicens plus 60ml/600L-D5\n1400H: acid guard 500mL/500L-D2\n1700H: Calcium toppings 8 kg-D5"
  },
  {
    "flockId": 3,
    "date": "2026-07-24",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 40ml/400L-D5\n0800H: polymune 400mL/400L-D14\r\n1000H: Betaine 400ml/400L-D4\n1400H: Calcium phosphorus 800ml/400L-D5"
  },
  {
    "flockId": 2,
    "date": "2026-07-24",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 50ml/500L-D5\n0800H: Polymune 500ml/500L-D6\n1000H: betaine 500ml/500L-D4\n1400H: Calcium phosphorus 1L/500L-D5"
  },
  {
    "flockId": 1,
    "date": "2026-07-24",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 40ml/400L-D5\r\n1400H: acid guard 400mL/400L-D2\n1700H: Calcium Toppings 8kg-D5"
  },
  {
    "flockId": 1,
    "date": "2026-07-25",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: tilmicosin 20% 400ml/400L-D1\n1000H: Amincens plus 40ml/400L-D6\n1400H: Ox-Agua 60ml/1000L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-07-25",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 750ml/500L-D1\n0800H: Amicens plus 50ml/500L-D6\n1000H: Polymune 500ml/500L-D7\n1400H: Ox-Agua 60ml/1000L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-07-25",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 600ml/400L-D1\n0800H: Amicens plus 40ml/400L-D6\n0800H: polymune 400mL/400L-D15\r\n1000H: Vit. C+Electrolytes  400ml/400L-D1\n1400H: Vitamin B-Complex 1.6L/400L-D1"
  },
  {
    "flockId": 6,
    "date": "2026-07-25",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amicens plus 60ml/600L-D6\n1400H: Ox-agua 60ml/1000L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-07-25",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 1L/600L-D1\n0800H: Amicens plus 60ml/400L-D6\n0800H: polymune 600mL/600L-D15\r\n1000H: Vit.C+electrolytes 600ml/600L-D1\n1400H: ox-agua 60ml/1000L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-07-26",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 750ml/500L-D2\n0800H: Amicens plus 50ml/500L-D7\n1000H: Polymune 500ml/500L-D8"
  },
  {
    "flockId": 3,
    "date": "2026-07-26",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 600ml/400L-D2\n0800H: Amicens plus 40ml/400L-D7\n0800H: polymune 400mL/400L-D16\r\n1000H: Vit. C+Electrolytes  400ml/400L-D2\n1400H: Vitamin B-Complex 1.6L/400L-D2"
  },
  {
    "flockId": 6,
    "date": "2026-07-26",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amicens plus 60ml/600L-D7"
  },
  {
    "flockId": 5,
    "date": "2026-07-26",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 1L/600L-D2\n0800H: Amicens plus 60ml/400L-D7\n1000H: polymune 600mL/600L-D16"
  },
  {
    "flockId": 1,
    "date": "2026-07-26",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: tilmicosin 20% 400ml/400L-D2\n1000H: Amincens plus 40ml/400L-D7"
  },
  {
    "flockId": 2,
    "date": "2026-07-27",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 750ml/500L-D3\n1000H: Amino acid 100ml/500L-D1\n1400H: Liver plex 500ml/500L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-07-27",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 600ml/400L-D3\n0800H: Amino acid 80ml/400L-D1\n1000H: Polymune 400ml/400L-D17\n1400H: Liver plex 400ml/400L-D1\n1700H: Vitamin B-Complex 1.6L/400L-D3"
  },
  {
    "flockId": 6,
    "date": "2026-07-27",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 50ml/500L-D1\n1400H: Liver plex 500ml/500L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-07-27",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 1L/600L-D3\n0800H: Amino acid 120ml/600L-D1\n1000H: polymune 600mL/600L-D17\n1400H: Liver plex 600ml/600L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-07-27",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: tilmicosin 20% 400ml/400L-D3\n1000H: Amino acid 40ml/400L-D1\n1400H: Liver plex 400ml/400L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-07-28",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 40ml/400L-D2\n1400H: Liver plex 400ml/400L-D2"
  },
  {
    "flockId": 2,
    "date": "2026-07-28",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 100ml/500L-D2\n1000H: Polymune 400ml/400L-D10\n1400H: Liver plex 500ml/500L-D2"
  },
  {
    "flockId": 3,
    "date": "2026-07-28",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 80ml/400L-D2\n0800H: Polymune 400ml/400L-D18\n1000H: Vitamin C+ Electrolytes 400ml/400L-D1\n1400H: Liver plex 400ml/400L-D2\n1700H: Vitamin B-Complex 1.6L/400L-D4"
  },
  {
    "flockId": 5,
    "date": "2026-07-28",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 120ml/600L-D2\n1000H: polymune 600mL/600L-D18\n1400H: Liver plex 600ml/600L-D2"
  },
  {
    "flockId": 3,
    "date": "2026-07-29",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 80ml/400L-D3\n0800H: Polymune 400ml/400L-D19\n1000H: Vitamin B-Complex 1.6L/400L-D5\n1400H: Liver plex 400ml/400L-D3"
  },
  {
    "flockId": 6,
    "date": "2026-07-28",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 50ml/500L-D2\n1400H: Liver plex 500ml/500L-D2"
  },
  {
    "flockId": 1,
    "date": "2026-07-30",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Ivermectin 400ml/400L-D1\n1000H: Liver plex 400ml/400L-D1\n1400H: Ivermectin 400ml/400L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-07-30",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Ivermectin 550ml/500L-D1\n1000H: Liver plex 400ml/500L-D1\n1400H: Ivermectin 550ml/500L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-07-30",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Ivermectin 500ml/500L-D1\n1000H: Liver plex 400ml/400L-D1\n1400H: Ivermectin 500ml/500L-D1"
  },
  {
    "flockId": 6,
    "date": "2026-07-30",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Ivermectin 500ml/500L-D1\n1000H: Liver plex 500ml/500L-D1\n1400H: Ivermectin 500ml/500L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-07-30",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Ivermectin 700ml/600L-D1\n1000H: Liver plex 600ml/600L-D1\n1400H: Ivermectin 700ml/600L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-07-31",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Ivermectin 400ml/400L-D2\n1000H: Liver plex 400ml/400L-D2\n1400H: Ivermectin 400ml/400L-D2"
  },
  {
    "flockId": 2,
    "date": "2026-07-31",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Ivermectin 550ml/500L-D2\n1000H: Liver plex 400ml/500L-D2\n1400H: Ivermectin 550ml/500L-D2"
  },
  {
    "flockId": 3,
    "date": "2026-07-31",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Ivermectin 500ml/500L-D2\n1000H: Liver plex 400ml/400L-D2\n1400H: Ivermectin 500ml/500L-D2"
  },
  {
    "flockId": 6,
    "date": "2026-07-31",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Ivermectin 500ml/500L-D2\n1000H: Liver plex 500ml/500L-D2\n1400H: Ivermectin 500ml/500L-D2"
  },
  {
    "flockId": 5,
    "date": "2026-07-31",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Ivermectin 700ml/600L-D2\n1000H: Liver plex 600ml/600L-D2\n1400H: Ivermectin 700ml/600L-D2"
  },
  {
    "flockId": 1,
    "date": "2026-08-01",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 40ml/400L (continuation)-D4\n1400H: Liver plex 400ml/400L-D5"
  },
  {
    "flockId": 2,
    "date": "2026-08-01",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 100ml/500L (continuation)-D4\n0800H: Polymune 500ml/500L-D1\n1400H: Liver plex 500ml/500L-D5"
  },
  {
    "flockId": 3,
    "date": "2026-08-01",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 40ml/400L (continuation)-D4\n0800H: Polymune 400ml/400L-D1\n1400H: Liver plex 400ml/400L-D5"
  },
  {
    "flockId": 6,
    "date": "2026-08-01",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 50ml/500L (continuation)-D4\n1400H: Liver plex 500ml/500L-D5"
  },
  {
    "flockId": 5,
    "date": "2026-08-01",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 120ml/600L (continuation)-D4\n0800H: Polymune 600ml/600L-D1\n1000H: Liver plex 600ml/600L-D5"
  },
  {
    "flockId": 1,
    "date": "2026-08-02",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 40ml/400L (continuation)-D5\n1400H: Acid Guard 400ml/400L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-08-02",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 100ml/500L (continuation)-D5\n1400H: Acid Guard 500ml/500L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-08-02",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 40ml/400L (continuation)-D5\n0800H: Polymune 400ml/400L-D2\n1400H: Acid Guard 400ml/400L-D1"
  },
  {
    "flockId": 6,
    "date": "2026-08-02",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 50ml/500L (continuation)-D5\n1400H: Acid Guard 500ml/500L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-08-02",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 120ml/600L (continuation)-D5\n1400H: Acid Guard 500ml/500L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-08-03",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Vitamin ADE 600m/600L-D1\n1400H: Acid Guard 500ml/500L-D2"
  },
  {
    "flockId": 3,
    "date": "2026-08-03",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Vitamin ADE 400m/400L-D1\n0800H: Polymune 400ml/400L-D3\n1400H: Acid Guard 400ml/400L-D2"
  },
  {
    "flockId": 2,
    "date": "2026-08-03",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Vitamin ADE 500m/500L-D1\n1400H: Acid Guard 500ml/500L-D2"
  },
  {
    "flockId": 1,
    "date": "2026-08-03",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 40ml/400L-D6\n1400H: Acid Guard 400ml/400L-D2\n1500H: Calcium toppings 16kg-D1"
  },
  {
    "flockId": 6,
    "date": "2026-08-03",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 50ml/500L-D6\n1400H: Acid Guard 500ml/500L-D2\n1500H: Calcium toppings 16kg-D1"
  },
  {
    "flockId": 1,
    "date": "2026-08-04",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 400ml/400L-D1\n0800H: Amino acid 40ml/400L-D7\n1500H: Calcium toppings 16kg-D2"
  },
  {
    "flockId": 2,
    "date": "2026-08-04",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 400ml/400L-D1\n0800H: Vitamin ADE 500m/500L-D2\n1000H: Polymune 500ml/500L-D1\n1400H: Calcium phosphorus 1L/500L-D2"
  },
  {
    "flockId": 3,
    "date": "2026-08-04",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 400ml/400L-D1\n0800H: Vitamin ADE 400m/400L-D2\n1000H: Polymune 400ml/400L-D4\n1400H: Calcium phosphorus 800ml/400L-D2"
  },
  {
    "flockId": 6,
    "date": "2026-08-04",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 500ml/500L-D1\n0800H: Amino acid 50ml/500L-D7\n1500H: Calcium toppings 16kg-D2"
  },
  {
    "flockId": 5,
    "date": "2026-08-04",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 600ml/600L-D1\n0800H: Vitamin ADE 600m/600L-D2\n1000H: Polymune 600ml/600L-D1\n1400H: Calcium phosphorus 1.2L/600L-D2"
  },
  {
    "flockId": 2,
    "date": "2026-08-06",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 400ml/400L-D2\n0800H: Vitamin ADE 500m/500L-D3\n1000H: Polymune 500ml/500L-D2\n1400H: Calcium phosphorus 1L/500L-D3"
  },
  {
    "flockId": 1,
    "date": "2026-08-07",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 400ml/400L-D4\n0800H: Amino acid 40ml/400L-D10\n1500H: Calcium toppings 16kg-D5"
  },
  {
    "flockId": 2,
    "date": "2026-08-07",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 400ml/400L-D3\n0800H: Vitamin ADE 500m/500L-D4\n1000H: Polymune 500ml/500L-D3\n1400H: Calcium phosphorus 1L/500L-D4"
  },
  {
    "flockId": 3,
    "date": "2026-08-07",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 400ml/400L-D4\n0800H: Vitamin ADE 400m/400L-D5\n1000H: Polymune 400ml/400L-D7\n1400H: Calcium phosphorus 800ml/400L-D5"
  },
  {
    "flockId": 6,
    "date": "2026-08-07",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 500ml/500L-D4\n0800H: Amino acid 50ml/500L-D10\n1500H: Calcium toppings 16kg-D5"
  },
  {
    "flockId": 5,
    "date": "2026-08-07",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 600ml/600L-D4\n0800H: Vitamin ADE 600m/600L-D5\n1000H: Polymune 600ml/600L-D4\n1400H: Calcium phosphorus 1.2L/600L-D5"
  },
  {
    "flockId": 1,
    "date": "2026-08-08",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 400ml/400L-D6\n1400H: Acid Guard 400ml/ 400L -D1"
  },
  {
    "flockId": 2,
    "date": "2026-08-08",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 400ml/400L-D5\n1400H: Acid Guard 500ml/ 500L -D1"
  },
  {
    "flockId": 3,
    "date": "2026-08-08",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 400ml/400L-D6\n1400H: Acid Guard 400ml/400L-D1"
  },
  {
    "flockId": 6,
    "date": "2026-08-08",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 500ml/500L-D6\n1400H: Acid Guard 500ml/ 500L -D1"
  },
  {
    "flockId": 5,
    "date": "2026-08-08",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 600ml/600L-D5\n1400H: Acid Guard 600ml/600L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-08-09",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 400ml/400L-D7\n1400H: Acid Guard 400ml/ 400L -D2"
  },
  {
    "flockId": 2,
    "date": "2026-08-09",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 400ml/400L-D6\n1400H: Acid Guard 500ml/ 500L -D2"
  },
  {
    "flockId": 3,
    "date": "2026-08-09",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 400ml/400L-D7\n1400H: Acid Guard 400ml/400L-D2"
  },
  {
    "flockId": 6,
    "date": "2026-08-09",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 500ml/500L-D7\n1400H: Acid Guard 500ml/ 500L -D2"
  },
  {
    "flockId": 5,
    "date": "2026-08-09",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 600ml/600L-D6\n1400H: Acid Guard 600ml/600L-D2"
  },
  {
    "flockId": 1,
    "date": "2026-08-10",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 40ml/400L-D1\n1400H: Liverplex 400ml/400L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-08-10",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 100ml/500L-D1\n1400H: Liverplex 500ml/500L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-08-10",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 80ml/400L-D1\n1400H: Liverplex 400ml/400L-D1"
  },
  {
    "flockId": 6,
    "date": "2026-08-10",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 50ml/500L-D1\n1400H: Liverplex 500ml/500L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-08-10",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 120ml/500L-D1\n1400H: Liverplex 600ml/500L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-08-11",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 120ml/500L-D2\n1000H: Vitamin c+electrolytes 500ml/500L-D1\n1400H: b-complex 500ml/500L-D1"
  },
  {
    "flockId": 6,
    "date": "2026-08-11",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 50ml/500L-D2\n1000H: Vitamin c+electrolytes 500ml/500L-D1\n1400H: b-complex 500ml/500L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-08-11",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 80ml/400L-D2\n1000H: Vitamin c+electrolytes 400ml/400L-D1\n1400H: b-complex 400ml/400L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-08-11",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 100ml/500L-D2\n1000H: Vitamin c+electrolytes 500ml/500L-D1\n1400H: b-complex 500ml/500L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-08-11",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 40ml/400L-D2\n1000H: Vitamin c+electrolytes 400ml/400L-D1\n1400H: b-complex 400ml/400L-D1"
  },
  {
    "flockId": 6,
    "date": "2026-08-13",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 50ml/500L-D4\n1000H: Vitamin c+electrolytes 500ml/500L-D3\n1400H: b-complex 500ml/500L-D3"
  },
  {
    "flockId": 5,
    "date": "2026-08-13",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 120ml/500L-D4\n1000H: Vitamin c+electrolytes 500ml/500L-D3\n1400H: b-complex 500ml/500L-D3"
  },
  {
    "flockId": 3,
    "date": "2026-08-13",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 80ml/400L-D4\n1000H: Vitamin c+electrolytes 400ml/400L-D3\n1400H: b-complex 400ml/400L-D3"
  },
  {
    "flockId": 2,
    "date": "2026-08-13",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 100ml/500L-D4\n1000H: Vitamin c+electrolytes 500ml/500L-D3\n1400H: b-complex 500ml/500L-D3"
  },
  {
    "flockId": 1,
    "date": "2026-08-13",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 40ml/400L-D4\n1000H: Vitamin c+electrolytes 400ml/400L-D3\n1400H: b-complex 400ml/400L-D3"
  },
  {
    "flockId": 1,
    "date": "2026-08-14",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 40ml/400L-D5\n1400H: b-complex 400ml/400L-D4"
  },
  {
    "flockId": 2,
    "date": "2026-08-14",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 100ml/500L-D5\n1400H: b-complex 500ml/500L-D4"
  },
  {
    "flockId": 3,
    "date": "2026-08-14",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 80ml/400L-D5\n1400H: b-complex 400ml/400L-D4"
  },
  {
    "flockId": 6,
    "date": "2026-08-14",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 50ml/500L-D5\n1400H: b-complex 500ml/500L-D4"
  },
  {
    "flockId": 5,
    "date": "2026-08-14",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 120ml/500L-D5\n1400H: b-complex 500ml/500L-D4"
  },
  {
    "flockId": 1,
    "date": "2026-08-15",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Praziquantel + Levamisole LEVAXANTEL 1L/400L-D1\n1000H: Praziquantel + Levamisole LEVAXANTEL 1L/400L-D1\n1400H:Liverplex 400ml/400L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-08-15",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Praziquantel + Levamisole LEVAXANTEL 1.3L/500L-D1\n1000H: Praziquantel + Levamisole LEVAXANTEL 1.3L/500L-D1\n1400H:Liverplex 500ml/500L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-08-15",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Praziquantel + Levamisole LEVAXANTEL 1L/400L-D1\n1000H: Praziquantel + Levamisole LEVAXANTEL 1L/400L-D1\n1400H:Liverplex 400ml/400L-D1"
  },
  {
    "flockId": 6,
    "date": "2026-08-15",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1400H:Liverplex 400ml/400L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-08-15",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Praziquantel + Levamisole LEVAXANTEL 1.5L/600L-D1\n1000H: Praziquantel + Levamisole LEVAXANTEL 1.5L/600L-D1\n1400H:Liverplex 600ml/600L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-08-16",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1400H: Ox Agua 60ml/1000L"
  },
  {
    "flockId": 2,
    "date": "2026-08-16",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1400H: Ox Agua 60ml/1000L"
  },
  {
    "flockId": 3,
    "date": "2026-08-16",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1400H: Ox Agua 60ml/1000L"
  },
  {
    "flockId": 6,
    "date": "2026-08-16",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1400H: Ox Agua 60ml/1000L"
  },
  {
    "flockId": 5,
    "date": "2026-08-16",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1400H: Ox Agua 60ml/1000L"
  },
  {
    "flockId": 1,
    "date": "2026-08-17",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1400H: Ox Agua 60ml/1000L"
  },
  {
    "flockId": 2,
    "date": "2026-08-17",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1400H: Ox Agua 60ml/1000L"
  },
  {
    "flockId": 3,
    "date": "2026-08-17",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1400H: Ox Agua 60ml/1000L"
  },
  {
    "flockId": 6,
    "date": "2026-08-17",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1400H: Ox Agua 60ml/1000L"
  },
  {
    "flockId": 5,
    "date": "2026-08-17",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1400H: Ox Agua 60ml/1000L"
  },
  {
    "flockId": 1,
    "date": "2026-08-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 40ml/400L-D2\n1400H: Calcium toppings 8kg-D2"
  },
  {
    "flockId": 2,
    "date": "2026-08-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 100ml/500L-D2\n1400H: Calcium phosphorus 500ml/500L-D2"
  },
  {
    "flockId": 3,
    "date": "2026-08-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 80ml/400L-D2\n1400H: Calcium phosphorus 400ml/400L-D2"
  },
  {
    "flockId": 6,
    "date": "2026-08-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 50ml/500L-D2\n1400H: Calcium toppings 8kg-D2"
  },
  {
    "flockId": 5,
    "date": "2026-08-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 120ml/600L-D2\n1400H: Calcium phosphorus 600ml/600L-D2"
  },
  {
    "flockId": 5,
    "date": "2026-08-19",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 120ml/600L-D3\n1000H: Vitamin C+Electrolytes 600ml/600L-D1\n1400H: Calcium phosphorus 600ml/600L-D3"
  },
  {
    "flockId": 6,
    "date": "2026-08-19",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 50ml/500L-D3\n1000H: Vitamin C+Electrolytes 500ml/500L-D1\n1400H: Calcium toppings 8kg-D3"
  },
  {
    "flockId": 3,
    "date": "2026-08-19",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 80ml/400L-D3\n1000H: Vitamin C+Electrolytes 400ml/400L-D1\n1400H: Calcium phosphorus 400ml/400L-D3"
  },
  {
    "flockId": 2,
    "date": "2026-08-19",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 100ml/500L-D3\n1000H: Vitamin C+Electrolytes 500ml/500L-D1\n1400H: Calcium phosphorus 500ml/500L-D3"
  },
  {
    "flockId": 1,
    "date": "2026-08-19",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 40ml/400L-D3\n1000H: Vitamin C+Electrolytes 400ml/400L-D1\n1400H: Calcium toppings 8kg-D3"
  },
  {
    "flockId": 1,
    "date": "2026-08-20",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 40ml/400L-D4\n1000H: Vitamin C+Electrolytes 400ml/400L-D2\n1400H: Calcium toppings 8kg-D4"
  },
  {
    "flockId": 2,
    "date": "2026-08-20",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 100ml/500L-D4\n1000H: Vitamin C+Electrolytes 500ml/500L-D2\n1400H: Calcium phosphorus 500ml/500L-D4"
  },
  {
    "flockId": 5,
    "date": "2026-08-20",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 120ml/600L-D4\n1000H: Vitamin C+Electrolytes 600ml/600L-D2\n1400H: Calcium phosphorus 600ml/600L-D4"
  },
  {
    "flockId": 6,
    "date": "2026-08-20",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 50ml/500L-D4\n1000H: Vitamin C+Electrolytes 500ml/500L-D2\n1400H: Calcium toppings 8kg-D4"
  },
  {
    "flockId": 3,
    "date": "2026-08-20",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 80ml/400L-D4\n1000H: Vitamin C+Electrolytes 400ml/400L-D2\n1400H: Calcium phosphorus 400ml/400L-D4"
  },
  {
    "flockId": 1,
    "date": "2026-08-21",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 200g/400L-D1\n1000H: Amino acid 40ml/400L-D5\n1400H: Calcium toppings 8kg-D5"
  },
  {
    "flockId": 2,
    "date": "2026-08-21",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 250g/500L-D1\n1000H: Amino acid 100ml/500L-D5\n1400H: Calcium phosphorus 500ml/500L-D5"
  },
  {
    "flockId": 3,
    "date": "2026-08-21",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 200g/400L-D1\n1000H: Amino acid 80ml/400L-D5\n1400H: Calcium phosphorus 400ml/400L-D5"
  },
  {
    "flockId": 6,
    "date": "2026-08-21",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 250g/500L-D1\n1000H: Amino acid 50ml/500L-D5\n1400H: Calcium toppings 8kg-D5"
  },
  {
    "flockId": 5,
    "date": "2026-08-21",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 300g/600L-D1\n0600H: Amino acid 120ml/600L-D5\n1400H: Calcium phosphorus 600ml/600L-D5"
  },
  {
    "flockId": 1,
    "date": "2026-08-23",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 200g/400L-D3"
  },
  {
    "flockId": 2,
    "date": "2026-08-23",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 250g/500L-D3"
  },
  {
    "flockId": 3,
    "date": "2026-08-23",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 200g/400L-D3"
  },
  {
    "flockId": 6,
    "date": "2026-08-23",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1000H: Vit C+ Electrolytes 50ml/500L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-08-23",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 300g/600L-D3"
  },
  {
    "flockId": 1,
    "date": "2026-08-24",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 200g/400L-D4\n1000H: Amino acid 40ml/400L-D1\n1400H: Liver plex 400ml/400L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-08-24",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 250g/500L-D4\n1000H: Amino acid 100ml/500L-D1\n1400H: Liver plex 500ml/500L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-08-24",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 200g/400L-D4\n1000H: Amino acid 80ml/400L-D1\n1400H: Liver plex 400ml/400L-D1"
  },
  {
    "flockId": 6,
    "date": "2026-08-24",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1000H: Vit C+ Electrolytes 50ml/500L-D2"
  },
  {
    "flockId": 5,
    "date": "2026-08-24",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 300g/600L-D4\n1000H: Amino acid 120ml/600L-D1\n1400H: Liver plex 600ml/600L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-08-25",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 200g/400L-D5\n0800H: Amino acid 40ml/400L-D2\n1000H: Liver plex 400ml/400L-D2\n1400H: Joymax acidifier 400ml/400L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-08-25",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 250g/500L-D5\n0800H: Amino acid 100ml/500L-D2\n1000H: Liver plex 500ml/500L-D2\n1400H: Joymax acidifier 500ml/500L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-08-25",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 200g/400L-D5\n0800H: Amino acid 80ml/400L-D2\n1000H: Liver plex 400ml/400L-D2\n1400H: Joymax acidifier 400ml/400L-D1"
  },
  {
    "flockId": 6,
    "date": "2026-08-25",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1000H: Vit C+ Electrolytes 50ml/500L-D3"
  },
  {
    "flockId": 5,
    "date": "2026-08-25",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 300g/600L-D5\n0800H: Amino acid 120ml/600L-D2\n1000H: Liver plex 600ml/600L-D2\n1400H: Joymax acidifier 600ml/600L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-08-26",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 40ml/400L-D3\n1000H: Liver plex 400ml/400L-D3\n1400H: Joymax acidifier 400ml/400L-D2"
  },
  {
    "flockId": 5,
    "date": "2026-08-26",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 120ml/600L-D3\n1000H: Liver plex 600ml/600L-D3\n1400H: Joymax acidifier 600ml/600L-D2"
  },
  {
    "flockId": 6,
    "date": "2026-08-26",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "."
  },
  {
    "flockId": 3,
    "date": "2026-08-26",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 80ml/400L-D3\n1000H: Liver plex 400ml/400L-D3\n1400H: Joymax acidifier 400ml/400L-D2"
  },
  {
    "flockId": 2,
    "date": "2026-08-26",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 100ml/500L-D3\n1000H: Liver plex 500ml/500L-D3\n1400H: Joymax acidifier 500ml/500L-D2"
  },
  {
    "flockId": 5,
    "date": "2026-08-27",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 120ml/600L-D4\n1000H: Liver plex 600ml/600L-D4\n1400H: Joymax acidifier 600ml/600L-D3"
  },
  {
    "flockId": 6,
    "date": "2026-08-27",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "Routine administration"
  },
  {
    "flockId": 3,
    "date": "2026-08-27",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 80ml/400L-D4\n1000H: Liver plex 400ml/400L-D4\n1400H: Joymax acidifier 400ml/400L-D3"
  },
  {
    "flockId": 2,
    "date": "2026-08-27",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 100ml/500L-D4\n1000H: Liver plex 500ml/500L-D4\n1400H: Joymax acidifier 500ml/500L-D3"
  },
  {
    "flockId": 1,
    "date": "2026-08-27",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 40ml/400L-D4\n1000H: Liver plex 400ml/400L-D4\n1400H: Joymax acidifier 400ml/400L-D3"
  },
  {
    "flockId": 3,
    "date": "2026-08-28",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 80ml/400L-D5\n1000H: Liver plex 400ml/400L-D5\n1400H: Joymax acidifier 400ml/400L-D4"
  },
  {
    "flockId": 5,
    "date": "2026-08-28",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 120ml/600L-D5\n1000H: Liver plex 600ml/600L-D5\n1400H: Joymax acidifier 600ml/600L-D4"
  },
  {
    "flockId": 2,
    "date": "2026-08-28",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 100ml/500L-D5\n1000H: Liver plex 500ml/500L-D5\n1400H: Joymax acidifier 500ml/500L-D4"
  },
  {
    "flockId": 1,
    "date": "2026-08-28",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amino acid 40ml/400L-D5\n1000H: Liver plex 400ml/400L-D5\n1400H: Joymax acidifier 400ml/400L-D4"
  },
  {
    "flockId": 1,
    "date": "2026-08-29",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Praziquantel+Levamisole (Levaxantel) 1L/400L-D1\n0800H: 0600H: Praziquantel+Levamisole (Levaxantel) 1L/400L-D1\n1000H: Polymune 400ml/400L-D1\n1400H: Liver plex 400ml/400L-D6"
  },
  {
    "flockId": 2,
    "date": "2026-08-29",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Praziquantel+Levamisole (Levaxantel) 1.2L/400L-D1\n0800H: 0600H: Praziquantel+Levamisole (Levaxantel) 1.2L/400L-D1\n1000H: Polymune 500ml/500L-D1\n1400H: Liver plex 500ml/500L-D6"
  },
  {
    "flockId": 3,
    "date": "2026-08-29",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Praziquantel+Levamisole (Levaxantel) 1L/400L-D1\n0800H: 0600H: Praziquantel+Levamisole (Levaxantel) 1L/400L-D1\n1000H: Polymune 400ml/400L-D1\n1400H: Liver plex 400ml/400L-D6"
  },
  {
    "flockId": 5,
    "date": "2026-08-29",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Praziquantel+Levamisole (Levaxantel) 1.4L/600L-D1\n0800H: 0600H: Praziquantel+Levamisole (Levaxantel) 1.4L/600L-D1\n1000H: Polymune 600ml/600L-D1\n1400H: Liver plex 600ml/600L-D6"
  },
  {
    "flockId": 5,
    "date": "2026-08-30",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Polymune 600ml/600L-D2"
  },
  {
    "flockId": 3,
    "date": "2026-08-30",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Polymune 400ml/400L-D2"
  },
  {
    "flockId": 2,
    "date": "2026-08-30",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Polymune 500ml/500L-D2"
  },
  {
    "flockId": 1,
    "date": "2026-08-30",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Polymune 400ml/400L-D2"
  },
  {
    "flockId": 1,
    "date": "2026-08-31",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1000H: Vitamin C+Electrolytes 400ml/400L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-08-31",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1000H: Vitamin C+Electrolytes 500ml/500L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-08-31",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1000H: Vitamin C+Electrolytes 400ml/400L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-08-31",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "1000H: Vitamin C+Electrolytes 460ml/600L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-09-01",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 120ml/600L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-09-01",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 80ml/400L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-09-01",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 100ml/500L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-09-01",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 40ml/400L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-09-02",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 120ml/600L-D2"
  },
  {
    "flockId": 1,
    "date": "2026-09-02",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 40ml/400L-D2"
  },
  {
    "flockId": 2,
    "date": "2026-09-02",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 100ml/500L-D2"
  },
  {
    "flockId": 3,
    "date": "2026-09-02",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 80ml/400L-D2"
  },
  {
    "flockId": 1,
    "date": "2026-09-03",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 80ml/400L-D3"
  },
  {
    "flockId": 2,
    "date": "2026-09-03",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 100ml/500L-D3"
  },
  {
    "flockId": 3,
    "date": "2026-09-03",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 80ml/400L-D3"
  },
  {
    "flockId": 5,
    "date": "2026-09-03",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amicens plus 120ml/600L-D3\n1000H: Polymune 1L/600L-D1\n1400H: Vitamin c+electrolytes 1L/600L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-09-04",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amprolium 20% 400ml/ 400L -D1\n1000H: Amicens plus 80ml/ 400L -D1\n1400H: Liver plex 400ml/ 400L -D1"
  },
  {
    "flockId": 2,
    "date": "2026-09-04",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amprolium 20% 400ml/ 400L -D1\n1000H: Amicens plus 100ml/ 400L -D1\n1400H: Liver plex 500ml/ 500L -D1"
  },
  {
    "flockId": 3,
    "date": "2026-09-04",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amprolium 20% 400ml/ 400L -D1\n1000H: Amicens plus 80ml/ 400L -D1\n1400H: Liver plex 400ml/ 400L -D1"
  },
  {
    "flockId": 5,
    "date": "2026-09-04",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amprolium 20% 600ml/ 600L -D1\n1000H: Amicens plus 120ml/ 600L -D1\n1400H: Liver plex 600ml/ 600L -D1"
  },
  {
    "flockId": 1,
    "date": "2026-09-05",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amprolium 20% 400ml/ 400L -D2\n1000H: Amicens plus 80ml/ 400L -D2\n1400H: Liver plex 400ml/ 400L -D2"
  },
  {
    "flockId": 2,
    "date": "2026-09-05",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amprolium 20% 400ml/ 400L -D2\n1000H: Amicens plus 100ml/ 400L -D2\n1400H: Liver plex 500ml/ 500L -D2"
  },
  {
    "flockId": 3,
    "date": "2026-09-05",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amprolium 20% 400ml/ 400L -D2\n1000H: Amicens plus 80ml/ 400L -D2\n1400H: Liver plex 400ml/ 400L -D2"
  },
  {
    "flockId": 5,
    "date": "2026-09-05",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tiamulin 1020ml/ 600L -D1\n1000H: Amicens plus 120ml/ 600L -D2\n1400H: Liver plex 600ml/ 600L -D2"
  },
  {
    "flockId": 1,
    "date": "2026-09-06",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amprolium 20% 400ml/ 400L -D3\n1000H: Amicens plus 80ml/ 400L -D3\n1400H: Liver plex 400ml/ 400L -D3"
  },
  {
    "flockId": 2,
    "date": "2026-09-06",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amprolium 20% 400ml/ 400L -D3\n1000H: Amicens plus 100ml/ 400L -D3\n1400H: Liver plex 500ml/ 500L -D3"
  },
  {
    "flockId": 3,
    "date": "2026-09-06",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Amprolium 20% 400ml/ 400L -D3\n1000H: Amicens plus 80ml/ 400L -D3\n1400H: Liver plex 400ml/ 400L -D3"
  },
  {
    "flockId": 5,
    "date": "2026-09-06",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tiamulin 1020ml/ 600L -D2\n1000H: Amicens plus 120ml/ 600L -D3\n1400H: Liver plex 600ml/ 600L -D3"
  },
  {
    "flockId": 1,
    "date": "2026-09-07",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Vitamin ADEC 400ml/4ooL-D1\n1000H: Amicens plus 80ml/400L-D5\n1700H: Calcium topping 12kg-D1"
  },
  {
    "flockId": 2,
    "date": "2026-09-07",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: vitamin ADEC 500ml/500L-D1\n1000H: Amicens plus 100ml/ 500L -D5\n1400H: calcium phosphorus 1L/500L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-09-07",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: vitamin ADEC 400ml/400L-D1\n1000H: Amicens plus 80ml/ 400L -D5\n1400H: calcium phosphorus 800mL/500L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-09-07",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tiamulin 1020ml/ 600L -D3\n0800H: Vitamin ADEC 600ml/600L-D1\n1000H: Amicens plus 120ml/ 600L -D4\n1000H: Polymune 1L/600L-D3\n1000H: Liver plex 600ml/ 600L -D4\n1400H: Calcium phosphorud 1.2L/600L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-08-05",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 600ml/600L-D2\n0800H: Vitamin ADE 600m/600L-D3\n1000H: Polymune 600ml/600L-D2\n1400H: Calcium phosphorus 1.2L/600L-D3"
  },
  {
    "flockId": 5,
    "date": "2026-08-06",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tilmicosin 20% 600ml/600L-D3\n0800H: Vitamin ADE 600m/600L-D4\n1000H: Polymune 600ml/600L-D3\n1400H: Calcium phosphorus 1.2L/600L-D4"
  },
  {
    "flockId": 5,
    "date": "2026-08-12",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: amino acid 120ml/500L-D3\n1000H: Vitamin c+electrolytes 500ml/500L-D2\n1400H: b-complex 500ml/500L-D2"
  },
  {
    "flockId": 5,
    "date": "2026-08-22",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimeth+Vitamin C+Vitamin K 300g/600L-D2\n0600H: Amino acid 120ml/600L-D6\n1400H: Calcium phosphorus 600ml/600L-D6"
  },
  {
    "flockId": 1,
    "date": "2026-09-08",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Vitamin ADEC 400ml/4ooL-D2\n1000H: Amicens plus 80ml/400L-D6\n1700H: Calcium topping 12kg-D2"
  },
  {
    "flockId": 2,
    "date": "2026-09-08",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: vitamin ADEC 500ml/500L-D2\n1000H: Amicens plus 100ml/ 500L -D6\n1400H: calcium phosphorus 1L/500L-D2"
  },
  {
    "flockId": 3,
    "date": "2026-09-08",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: vitamin ADEC 400ml/400L-D2\n1000H: Amicens plus 80ml/ 400L -D6\n1400H: calcium phosphorus 800mL/500L-D2"
  },
  {
    "flockId": 5,
    "date": "2026-09-08",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Tiamulin 1020ml/ 600L -D4\n0800H: Vitamin ADEC 600ml/600L-D2\n1000H: Amicens plus 120ml/ 600L -D5\n1000H: Polymune 1L/600L-D4\n1200H: Liver plex 600ml/ 600L -D5\n1400H: Calcium phosphorud 1.2L/600L-D2"
  },
  {
    "flockId": 1,
    "date": "2026-09-09",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Vitamin ADEC 400ml/4ooL-D3\n1000H: Amicens plus 80ml/400L-D7\n1700H: Calcium topping 12kg-D3"
  },
  {
    "flockId": 2,
    "date": "2026-09-09",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: vitamin ADEC 500ml/500L-D3\n1000H: Amicens plus 100ml/ 500L -D7\n1400H: calcium phosphorus 1L/500L-D3"
  },
  {
    "flockId": 3,
    "date": "2026-09-09",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: vitamin ADEC 400ml/400L-D3\n1000H: Amicens plus 80ml/ 400L -D7\n1400H: calcium phosphorus 800mL/500L-D3"
  },
  {
    "flockId": 5,
    "date": "2026-09-09",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Enrofloxacin 20% 885ml/600L-D1\n0800H: Vitamin ADEC 600ml/600L-D3\n1000H: Polymune 1L/600L-D5\n1200H: Liver plex 600ml/ 600L -D6\n1400H: Calcium phosphorud 1.2L/600L-D3\n1700H: Vit. C+electrolytes 600ml/600L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-09-10",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Vitamin ADEC 400ml/4ooL-D4\n1000H: Amicens plus 80ml/400L-D8\n1700H: Calcium topping 12kg-D4"
  },
  {
    "flockId": 2,
    "date": "2026-09-10",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: vitamin ADEC 500ml/500L-D4\n1000H: Amicens plus 100ml/ 500L -D8\n1400H: calcium phosphorus 1L/500L-D4"
  },
  {
    "flockId": 3,
    "date": "2026-09-10",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: vitamin ADEC 400ml/400L-D4\n1000H: Amicens plus 80ml/ 400L -D8\n1400H: calcium phosphorus 800mL/500L-D4"
  },
  {
    "flockId": 5,
    "date": "2026-09-10",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Enrofloxacin 20% 885ml/600L-D2\n0800H: Vitamin ADEC 600ml/600L-D4\n1000H: Polymune 1L/600L-D6\n1200H: Liver plex 600ml/ 600L -D7\n1400H: Calcium phosphorud 1.2L/600L-D4\n1700H: Vit. C+electrolytes 600ml/600L-D2"
  },
  {
    "flockId": 1,
    "date": "2026-09-11",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Vitamin ADEC 400ml/4ooL-D5\n1000H: Amicens plus 80ml/400L-D9\n1700H: Calcium topping 12kg-D5"
  },
  {
    "flockId": 2,
    "date": "2026-09-11",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: vitamin ADEC 500ml/500L-D5\n1000H: Amicens plus 100ml/ 500L -D9\n1400H: calcium phosphorus 1L/500L-D5"
  },
  {
    "flockId": 3,
    "date": "2026-09-11",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: vitamin ADEC 400ml/400L-D5\n1000H: Amicens plus 80ml/ 400L -D9\n1400H: calcium phosphorus 800mL/500L-D5"
  },
  {
    "flockId": 5,
    "date": "2026-09-11",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Enrofloxacin 20% 885ml/600L-D3\n0800H: Vitamin ADEC 600ml/600L-D5\n1000H: Polymune 1L/600L-D7\n1400H: Vit. C+electrolytes 600ml/600L-D3"
  },
  {
    "flockId": 1,
    "date": "2026-09-12",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 200g/400L-D1\n1000H: Vitamin C+ Electrolytes 400ml/400L-D3\n1400H: vtamin b-complex 400ml/400L-D1\n1700H: Ox-agua 60ml/1000L-D1"
  },
  {
    "flockId": 2,
    "date": "2026-09-12",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 300g/500L-D1\n1000H: Vitamin C+ Electrolytes 500ml/500L-D3\n1400H: vtamin b-complex 500ml/500L-D1\n1700H: Ox-agua 60ml/1000L-D1"
  },
  {
    "flockId": 3,
    "date": "2026-09-12",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 200g/400L-D1\n1000H: Vitamin C+ Electrolytes 400ml/400L-D3\n1400H: vtamin b-complex 400ml/400L-D1\n1700H: Ox-agua 60ml/1000L-D1"
  },
  {
    "flockId": 5,
    "date": "2026-09-12",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0500H: CLON/H120 2,500 DOSE 5 vials/600L\n1000H: Polymune 1L/600L-D8\n1400H: Liver plex 600ml/600L-D1\n1700H: Vit. C+electrolytes 600ml/600L-D4"
  },
  {
    "flockId": 1,
    "date": "2026-09-13",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 200g/400L-D2\n1000H: Vitamin C+ Electrolytes 400ml/400L-D4\n1400H: vtamin b-complex 400ml/400L-D2\n1700H: Ox-agua 60ml/1000L-D2"
  },
  {
    "flockId": 2,
    "date": "2026-09-13",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 300g/500L-D2\n1000H: Vitamin C+ Electrolytes 500ml/500L-D4\n1400H: vtamin b-complex 500ml/500L-D2\n1700H: Ox-agua 60ml/1000L-D2"
  },
  {
    "flockId": 3,
    "date": "2026-09-13",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 200g/400L-D2\n1000H: Vitamin C+ Electrolytes 400ml/400L-D4\n1400H: vtamin b-complex 400ml/400L-D2\n1700H: Ox-agua 60ml/1000L-D2"
  },
  {
    "flockId": 5,
    "date": "2026-09-13",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "060H: Polymune 1L/600L-D9\n1000H: Liver plex 600ml/600L-D2\n1400H: Vit. C+electrolytes 600ml/600L-D5\n1700H: Ox-agua 60ml/1000L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-09-14",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 200g/400L-D3\n0800H: Amino acid 80ml/400L-D1\n1000H: Vitamin C+ Electrolytes 400ml/400L-D5\n1400H: vitamin b-complex 400ml/400L-D3"
  },
  {
    "flockId": 2,
    "date": "2026-09-14",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 300g/500L-D3\n0800H: Amino acid 100ml/500L-D1\n1000H: Vitamin C+ Electrolytes 500ml/500L-D5\n1400H: vitamin b-complex 500ml/500L-D3"
  },
  {
    "flockId": 3,
    "date": "2026-09-14",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 200g/400L-D3\n0800H: Amino acid 80ml/400L-D1\n1000H: Vitamin C+ Electrolytes 400ml/400L-D5\n1400H: vitamin b-complex 400ml/400L-D3"
  },
  {
    "flockId": 5,
    "date": "2026-09-14",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimethamine 350g/600L-D1\n0800H: Amino acid 120ml/600L-D1\n1000H: Polymune 1L/600L-D10\n1200H: Vit. C+electrolytes 600ml/600L-D6\n1400H: Vitiamin B-complex+biotin 600ml/600L-D1"
  },
  {
    "flockId": 1,
    "date": "2026-09-15",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 200g/400L-D4\n0800H: Amino acid 80ml/400L-D2\n1000H: Vitamin C+ Electrolytes 400ml/400L-D6\n1400H: vitamin b-complex 400ml/400L-D4"
  },
  {
    "flockId": 2,
    "date": "2026-09-15",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 300g/500L-D4\n0800H: Amino acid 100ml/500L-D2\n1000H: Vitamin C+ Electrolytes 500ml/500L-D6\n1400H: vitamin b-complex 500ml/500L-D4"
  },
  {
    "flockId": 3,
    "date": "2026-09-15",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 200g/400L-D4\n0800H: Amino acid 80ml/400L-D2\n1000H: Vitamin C+ Electrolytes 400ml/400L-D6\n1400H: vitamin b-complex 400ml/400L-D4"
  },
  {
    "flockId": 5,
    "date": "2026-09-15",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimethamine 350g/600L-D2\n0800H: Amino acid 120ml/600L-D2\n1000H: Polymune 1L/600L-D11\n1200H: Vit. C+electrolytes 600ml/600L-D7\n1400H: Vitiamin B-complex+biotin 600ml/600L-D2"
  },
  {
    "flockId": 1,
    "date": "2026-09-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 200g/400L-D7\n0800H: Amino acid 80ml/400L-D5\n1000H: Vitamin C+ Electrolytes 400ml/400L-D9\n1400H: vitamin b-complex 400ml/400L-D7"
  },
  {
    "flockId": 2,
    "date": "2026-09-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 300g/500L-D7\n0800H: Amino acid 100ml/500L-D5\n1000H: Vitamin C+ Electrolytes 500ml/500L-D9\n1400H: vitamin b-complex 500ml/500L-D7"
  },
  {
    "flockId": 3,
    "date": "2026-09-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: pyrimethamine + vitamin C+ vitamin k3 200g/400L-D7\n0800H: Amino acid 80ml/400L-D5\n1000H: Vitamin C+ Electrolytes 400ml/400L-D9\n1400H: vitamin b-complex 400ml/400L-D7"
  },
  {
    "flockId": 5,
    "date": "2026-09-18",
    "medicineName": "General",
    "dosage": 0.0,
    "notes": "0600H: Pyrimethamine 350g/600L-D5\n0800H: Amino acid 120ml/600L-D5\n1000H: Polymune 1L/600L-D14\n1200H: Vit. C+electrolytes 600ml/600L-D10\n1400H: Vitiamin B-complex+biotin 600ml/600L-D5"
  }
]
};
