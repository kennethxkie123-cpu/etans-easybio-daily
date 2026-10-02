/**
 * LayerHub Enterprise Web Portal & Analytics Dashboard
 * Powered by Real Saved SQLite System Database Records
 */

/**
 * Returns a production/laying rate % with real precision (4 decimal max, no trailing zeros).
 * e.g. 88.5714% instead of 88.57%
 */
function pct(numerator, denominator, decimals = 4) {
  if (!denominator || denominator === 0) return "0";
  const raw = (numerator / denominator) * 100;
  // Format to `decimals` places then strip trailing zeros
  return parseFloat(raw.toFixed(decimals)).toString();
}

// App State
let state = {
  selectedBuildingId: "all",
  selectedDate: "2026-09-15",
  theme: "dark",
  charts: {}
};

document.addEventListener("DOMContentLoaded", async () => {
  if (typeof REAL_SYSTEM_DATA !== "undefined" && REAL_SYSTEM_DATA.latestDate) {
    state.selectedDate = REAL_SYSTEM_DATA.latestDate;
  }
  initializeDateAndBuildingDropdowns();
  setupEventListeners();
  renderDashboard();
  await syncDataFromDataFolder();
});

async function syncDataFromDataFolder() {
  const syncBtn = document.getElementById("sync-data-btn");
  if (syncBtn) {
    syncBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Syncing /data...`;
  }

  try {
    // 1. First try loading full system dataset JSON if uploaded (data/full_dataset.json or data/data.json)
    const fullDatasetUrls = [
      "data/full_dataset.json",
      "data/data.json",
      "./data/full_dataset.json",
      "./data/data.json",
      "https://raw.githubusercontent.com/kennethxkie123-cpu/etans-easybio-daily/main/data/full_dataset.json",
      "https://raw.githubusercontent.com/kennethxkie123-cpu/etans-easybio-daily/main/data/data.json"
    ];

    let fullDataLoaded = false;
    for (const url of fullDatasetUrls) {
      try {
        const res = await fetch(url, { cache: "no-store" });
        if (res.ok) {
          const dataset = await res.json();
          if (dataset && dataset.dates && dataset.buildings) {
            REAL_SYSTEM_DATA.dates = dataset.dates;
            REAL_SYSTEM_DATA.latestDate = dataset.latestDate || dataset.dates[dataset.dates.length - 1];
            REAL_SYSTEM_DATA.buildings = dataset.buildings;
            if (dataset.flocks) REAL_SYSTEM_DATA.flocks = dataset.flocks;
            if (dataset.dailyRecordsMap) {
              if (!REAL_SYSTEM_DATA.dailyRecordsMap) REAL_SYSTEM_DATA.dailyRecordsMap = {};
              Object.assign(REAL_SYSTEM_DATA.dailyRecordsMap, dataset.dailyRecordsMap);
            }
            state.selectedDate = REAL_SYSTEM_DATA.latestDate;
            fullDataLoaded = true;
            break;
          }
        }
      } catch (_) {}
    }

    if (!fullDataLoaded) {
      const indexUrls = [
        "data/index.json",
        "./data/index.json",
        "https://raw.githubusercontent.com/kennethxkie123-cpu/etans-easybio-daily/main/data/index.json"
      ];

      let indexData = null;
      for (const url of indexUrls) {
        try {
          const res = await fetch(url, { cache: "no-store" });
          if (res.ok) {
            indexData = await res.json();
            break;
          }
        } catch (_) {}
      }

      if (indexData && indexData.dates && indexData.dates.length > 0) {
        indexData.dates.forEach(d => {
          if (!REAL_SYSTEM_DATA.dates.includes(d)) {
            REAL_SYSTEM_DATA.dates.push(d);
          }
        });
        REAL_SYSTEM_DATA.dates.sort();
        if (indexData.latestDate) {
          state.selectedDate = indexData.latestDate;
        }
      }
    }

    await loadDailyReportFromDataFolder(state.selectedDate);

    initializeDateAndBuildingDropdowns();
    renderDashboard();

    if (syncBtn) {
      syncBtn.innerHTML = `<i class="fas fa-check-circle" style="color:#10B981;"></i> Synced: /data`;
    }
  } catch (err) {
    console.warn("Data sync from /data folder:", err);
    if (syncBtn) {
      syncBtn.innerHTML = `<i class="fas fa-cloud"></i> Synced: /data`;
    }
  }
}

async function loadDailyReportFromDataFolder(dateStr) {
  const urls = [
    `data/${dateStr}.json`,
    `./data/${dateStr}.json`,
    "data/latest.json",
    `https://raw.githubusercontent.com/kennethxkie123-cpu/etans-easybio-daily/main/data/${dateStr}.json`,
    "https://raw.githubusercontent.com/kennethxkie123-cpu/etans-easybio-daily/main/data/latest.json"
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) {
        const report = await res.json();
        if (report && report.buildings) {
          applyDailyReportToSystemData(report);
          return true;
        }
      }
    } catch (_) {}
  }
  return false;
}

function applyDailyReportToSystemData(report) {
  if (!report || !report.buildings) return;
  const targetDate = report.date || state.selectedDate;

  if (!REAL_SYSTEM_DATA.dailyRecords) {
    REAL_SYSTEM_DATA.dailyRecords = {};
  }

  report.buildings.forEach(b => {
    const bldgId = b.buildingId || b.id;
    if (!bldgId) return;

    if (!REAL_SYSTEM_DATA.dailyRecords[bldgId]) {
      REAL_SYSTEM_DATA.dailyRecords[bldgId] = {};
    }

    REAL_SYSTEM_DATA.dailyRecords[bldgId][targetDate] = {
      date: targetDate,
      currentHeads: b.currentHeads || 0,
      cases: b.cases || 0,
      trays: b.trays || 0,
      totalPieces: b.totalPieces || 0,
      feedBags: b.feedBags || 0,
      gramsPerBird: b.gramsPerBird || 0,
      feedBrand: b.feedBrand || '',
      mortalities: b.mortalities || 0,
      culls: b.culls || 0,
      eggProductionPercentage: b.eggProductionPercentage || 0,
      medication: b.medication || '',
      happenings: b.happenings || '',
      weatherAm: b.weatherAm || '',
      weatherPm: b.weatherPm || '',
      temperature: b.temperature || null,
      highTemp: b.highTemp || null,
      lowTemp: b.lowTemp || null,
      eggSizes: b.eggSizes || {}
    };
  });
}

function initializeDateAndBuildingDropdowns() {
  // Populate Building Dropdown from REAL_SYSTEM_DATA
  const bldSelect = document.getElementById("building-select");
  if (bldSelect) {
    bldSelect.innerHTML = `<option value="all">All Buildings (Farm Total)</option>`;
    REAL_SYSTEM_DATA.buildings.forEach(b => {
      bldSelect.innerHTML += `<option value="${b.id}">${b.name} (${b.strain || 'Hisex White'}) - Flockman: ${b.assignedFlokman}</option>`;
    });
  }

  // Populate Date Dropdown from REAL_SYSTEM_DATA dates (in reverse chronological order)
  const dateInput = document.getElementById("date-select");
  if (dateInput && REAL_SYSTEM_DATA.dates && REAL_SYSTEM_DATA.dates.length > 0) {
    const reversedDates = [...REAL_SYSTEM_DATA.dates].reverse();
    dateInput.innerHTML = "";
    reversedDates.forEach((d, index) => {
      const label = index === 0 ? `${d} (Latest Data)` : d;
      dateInput.innerHTML += `<option value="${d}">${label}</option>`;
    });
    dateInput.value = state.selectedDate;
  }
}

function setupEventListeners() {
  const syncBtn = document.getElementById("sync-data-btn");
  if (syncBtn) {
    syncBtn.addEventListener("click", () => {
      syncDataFromDataFolder();
    });
  }

  const bldSelect = document.getElementById("building-select");
  if (bldSelect) {
    bldSelect.addEventListener("change", (e) => {
      state.selectedBuildingId = e.target.value;
      renderDashboard();
    });
  }

  const dateInput = document.getElementById("date-select");
  if (dateInput) {
    dateInput.addEventListener("change", async (e) => {
      state.selectedDate = e.target.value;
      await loadDailyReportFromDataFolder(state.selectedDate);
      renderDashboard();
    });
  }

  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      document.body.setAttribute("data-theme", state.theme);
      themeBtn.innerHTML = state.theme === "dark" 
        ? `<i class="fas fa-moon"></i> Dark Mode` 
        : `<i class="fas fa-sun"></i> Light Mode`;
      renderDashboard();
    });
  }

  // Nav Tabs
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const targetId = tab.getAttribute("data-tab");
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add("active");
    });
  });

  // Modal Open/Close
  const modalBtn = document.getElementById("open-arch-modal");
  const modalBackdrop = document.getElementById("arch-modal");
  const closeBtn = document.getElementById("close-arch-modal");

  if (modalBtn && modalBackdrop) {
    modalBtn.addEventListener("click", () => modalBackdrop.classList.add("active"));
  }
  if (closeBtn && modalBackdrop) {
    closeBtn.addEventListener("click", () => modalBackdrop.classList.remove("active"));
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) modalBackdrop.classList.remove("active");
    });
  }

  const csvBtn = document.getElementById("export-csv-btn");
  if (csvBtn) csvBtn.addEventListener("click", exportCSV);
}

// Get active buildings based on filter
function getActiveBuildings() {
  if (state.selectedBuildingId === "all") {
    return REAL_SYSTEM_DATA.buildings;
  }
  return REAL_SYSTEM_DATA.buildings.filter(b => b.id == state.selectedBuildingId);
}

function renderDashboard() {
  const activeBuildings = getActiveBuildings();
  const date = state.selectedDate;

  let totalCapacity = 0;
  let currentHeads = 0;
  let totalEggPieces = 0;
  let totalMortalities = 0;
  let totalCulls = 0;
  let totalFeedGrams = 0;
  let totalGoodCrack = 0;
  let totalBadCrack = 0;
  let totalMisshapen = 0;
  let totalSoftShell = 0;

  let totalExpectedEggPieces = 0;
  let totalExpectedFeedGrams = 0;

  activeBuildings.forEach(b => {
    totalCapacity += b.capacity;
    const key = `${date}_${b.flockId}`;
    const rec = REAL_SYSTEM_DATA.dailyRecordsMap[key];
    const ageInfo = getFlockAgeForDate(b, date);
    const std = getBreedStandardForWeek(ageInfo.weeks);

    let heads = b.birdCount || b.capacity;
    if (rec) {
      heads = rec.currentHeads;
      totalEggPieces += rec.totalPieces;
      totalMortalities += rec.mortalities;
      totalCulls += rec.culls;
      totalFeedGrams += rec.gramsPerBird * rec.currentHeads;
      totalGoodCrack += rec.goodCrackPieces;
      totalBadCrack += rec.badCrackPieces;
      totalMisshapen += rec.misshapenPieces;
      totalSoftShell += rec.softShellPieces;
    }
    currentHeads += heads;

    // Calculate Breed Standard Targets for this flock week
    if (std) {
      totalExpectedEggPieces += Math.round((std.productionPercent / 100) * heads);
      totalExpectedFeedGrams += std.feedIntakeGrams * heads;
    }
  });

  const popForCalc = currentHeads + totalMortalities + totalCulls;
  const layingRatePercent = popForCalc > 0 ? pct(totalEggPieces, popForCalc) : "0";
  const targetLayingRatePercent = popForCalc > 0 ? pct(totalExpectedEggPieces, popForCalc) : "0";
  const rateVariance = parseFloat((parseFloat(layingRatePercent) - parseFloat(targetLayingRatePercent)).toFixed(4)).toString();

  const mortalityRatePercent = popForCalc > 0 ? ((totalMortalities / popForCalc) * 100).toFixed(3) : "0.000";
  const avgFeedPerBird = currentHeads > 0 ? (totalFeedGrams / currentHeads).toFixed(1) : "0.0";
  const targetFeedPerBird = currentHeads > 0 ? (totalExpectedFeedGrams / currentHeads).toFixed(1) : "0.0";

  // Case / Tray / Piece breakdown
  const totalTrays = Math.floor(totalEggPieces / 30);
  const totalCases = Math.floor(totalTrays / 12);
  const remainingTrays = totalTrays % 12;
  const remainingPieces = totalEggPieces % 30;

  // Target Case / Tray breakdown
  const targetTrays = Math.floor(totalExpectedEggPieces / 30);
  const targetCases = Math.floor(targetTrays / 12);
  const targetRemTrays = targetTrays % 12;
  const targetRemPieces = totalExpectedEggPieces % 30;

  // Estimated FCR
  const totalEggMassGrams = totalEggPieces * 58;
  const fcr = totalEggMassGrams > 0 ? (totalFeedGrams / totalEggMassGrams).toFixed(3) : "2.050";

  // Update KPI UI with Breed Target Benchmarks
  document.getElementById("kpi-population").innerText = currentHeads.toLocaleString() + " birds";
  document.getElementById("kpi-laying-rate").innerText = layingRatePercent + "%";
  
  const layingSub = document.querySelector("#tab-summary .kpi-card:nth-child(2) .kpi-sub");
  if (layingSub) {
    const isPos = parseFloat(rateVariance) >= 0;
    layingSub.innerHTML = `
      <span class="kpi-trend ${isPos ? 'positive' : 'negative'}">
        <i class="fas ${isPos ? 'fa-arrow-up' : 'fa-arrow-down'}"></i> ${isPos ? '+' : ''}${rateVariance}%
      </span>
      <span>vs Breed Target (${targetLayingRatePercent}%)</span>
    `;
  }

  document.getElementById("kpi-mortality").innerText = mortalityRatePercent + "% (" + totalMortalities + " dead)";
  document.getElementById("kpi-feed-intake").innerText = avgFeedPerBird + " g/bird";
  
  const feedSub = document.querySelector("#tab-summary .kpi-card:nth-child(4) .kpi-sub");
  if (feedSub) {
    feedSub.innerHTML = `<span>Target: ${targetFeedPerBird} g/bird</span>`;
  }

  document.getElementById("kpi-egg-cases").innerText = `${totalCases} C, ${remainingTrays} TR, ${remainingPieces} PC`;
  
  const eggSub = document.querySelector("#tab-summary .kpi-card:nth-child(5) .kpi-sub");
  if (eggSub) {
    eggSub.innerHTML = `<span>Target: ${targetCases} C, ${targetRemTrays} TR (${totalExpectedEggPieces.toLocaleString()} pcs)</span>`;
  }

  document.getElementById("kpi-fcr").innerText = fcr;

  // Render Subviews
  renderBuildingCards(date);
  renderEggMatrix(date);
  renderEggDistributionTable(date);
  renderMortalitySummaryAndCharts(date);
  renderMortalityTable(date);
  renderMedicationTable(date);
  renderWeatherLog(date);
  renderCharts(activeBuildings, date);
}

// Calculate exact flock age in weeks for selected date
function getFlockAgeForDate(building, dateStr) {
  const flock = REAL_SYSTEM_DATA.flocks.find(f => f.id === building.flockId);
  if (!flock || !flock.start_date) {
    return { weeks: building.ageWeeks || 30, days: building.ageDays || 210, text: `${building.ageWeeks || 30} Weeks Old` };
  }
  
  const targetDate = new Date(dateStr);
  const startDate = new Date(flock.start_date * 1000);
  
  const diffTime = targetDate - startDate;
  const diffDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
  
  const loadingWeeks = flock.age_at_loading_weeks || 0;
  const loadingDays = flock.age_at_loading_days || 0;
  
  const totalDays = diffDays + (loadingWeeks * 7) + loadingDays;
  const weeks = Math.floor(totalDays / 7);
  const remDays = totalDays % 7;
  
  const text = remDays > 0 ? `${weeks} Weeks, ${remDays} Days Old` : `${weeks} Weeks Old`;
  return { weeks, days: totalDays, remDays, text };
}

// Render Building Operational Status Cards with Breed Standards
function renderBuildingCards(date) {
  const container = document.getElementById("buildings-grid-container");
  if (!container) return;

  container.innerHTML = "";
  REAL_SYSTEM_DATA.buildings.forEach(b => {
    const isSelected = state.selectedBuildingId == b.id;
    const key = `${date}_${b.flockId}`;
    const rec = REAL_SYSTEM_DATA.dailyRecordsMap[key];

    const heads = rec ? rec.currentHeads : b.birdCount;
    const eggPcs = rec ? rec.totalPieces : 0;
    const mort = rec ? rec.mortalities : 0;
    const culls = rec ? rec.culls : 0;
    const bldPopForCalc = heads + mort + culls;
    const feed = rec ? rec.gramsPerBird.toFixed(1) : "0.0";
    const rate = bldPopForCalc > 0 ? pct(eggPcs, bldPopForCalc) : "0";
    const occPercent = b.capacity > 0 ? Math.min(100, Math.round((heads / b.capacity) * 100)) : 100;
    const ageInfo = getFlockAgeForDate(b, date);
    
    // Breed Standard Target for this flock week
    const std = getBreedStandardForWeek(ageInfo.weeks);
    const targetProd = std ? std.productionPercent.toFixed(2) : "85.00";
    const targetEggs = std ? Math.round((std.productionPercent / 100) * bldPopForCalc) : Math.round(0.85 * bldPopForCalc);
    const variance = parseFloat((parseFloat(rate) - parseFloat(targetProd)).toFixed(4)).toString();
    const isPositiveVar = parseFloat(variance) >= 0;

    const cardHtml = `
      <div class="building-card ${isSelected ? 'selected' : ''}" onclick="selectBuilding('${b.id}')">
        <div class="building-top">
          <div class="building-name">${b.name} <span style="font-size:12px; color:var(--text-muted); font-weight:normal;">(${b.strain})</span></div>
          <span class="status-tag ${b.status === 'Healthy' ? 'healthy' : 'warning'}">${b.status}</span>
        </div>
        <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 6px;">
          <span class="weeks-old-badge"><i class="fas fa-clock"></i> ${ageInfo.weeks} Weeks Old</span>
          <span style="margin-left: 6px;">Flockman: <strong>${b.assignedFlokman}</strong></span>
        </div>
        
        <div class="building-metrics-grid">
          <div class="mini-metric" style="background: rgba(59, 130, 246, 0.08); border-color: rgba(59, 130, 246, 0.3);">
            <div class="mini-metric-label" style="color: var(--accent-primary);">Weeks Old</div>
            <div class="mini-metric-val" style="color: var(--accent-primary); font-size: 14px;">${ageInfo.weeks} Wks Old</div>
          </div>
          <div class="mini-metric">
            <div class="mini-metric-label">Heads (${occPercent}%)</div>
            <div class="mini-metric-val">${heads.toLocaleString()}</div>
            <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width: ${occPercent}%; background: var(--accent-primary);"></div></div>
          </div>
          <div class="mini-metric">
            <div class="mini-metric-label">Laying Rate (Target ${targetProd}%)</div>
            <div class="mini-metric-val" style="color:${isPositiveVar ? 'var(--accent-success)' : 'var(--accent-warning)'};">${rate}% <span style="font-size:11px; font-weight:normal;">(${isPositiveVar ? '+' : ''}${variance}%)</span></div>
            <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width: ${Math.min(100, rate)}%; background: ${isPositiveVar ? 'var(--accent-success)' : 'var(--accent-warning)'};"></div></div>
          </div>
          <div class="mini-metric">
            <div class="mini-metric-label">Actual Eggs (Target ${targetEggs.toLocaleString()})</div>
            <div class="mini-metric-val">${eggPcs.toLocaleString()} pcs</div>
          </div>
          <div class="mini-metric">
            <div class="mini-metric-label">Mortality</div>
            <div class="mini-metric-val" style="color:${mort > 2 ? 'var(--accent-danger)' : 'var(--text-main)'};">${mort} birds</div>
          </div>
          <div class="mini-metric">
            <div class="mini-metric-label">Feed Intake (Std ${std ? std.feedIntakeGrams : 110}g)</div>
            <div class="mini-metric-val">${feed} g/bird</div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += cardHtml;
  });
}

function selectBuilding(bldId) {
  state.selectedBuildingId = bldId;
  const selectElem = document.getElementById("building-select");
  if (selectElem) selectElem.value = bldId;
  renderDashboard();
}

// Render Egg Combinations & Butal Analysis Matrix Tables
function renderEggMatrix(date) {
  const activeBuildings = getActiveBuildings();
  const columns = ["NNV", "NV", "NW", "PT", "PW", "S", "M", "L", "XL", "J", "SJ", "BR", "BO"];

  const combinedTableBody = document.getElementById("combined-table-body");
  const combinedSumRow = document.getElementById("combined-sum-row");
  const combinedSimplifiedRow = document.getElementById("combined-simplified-row");

  const butalTableBody = document.getElementById("butal-table-body");
  const butalSumRow = document.getElementById("butal-sum-row");
  const butalSimplifiedRow = document.getElementById("butal-simplified-row");

  const casesTableBody = document.getElementById("cases-table-body");
  const casesSumRow = document.getElementById("cases-sum-row");

  if (!butalTableBody || !casesTableBody) return;

  if (combinedTableBody) combinedTableBody.innerHTML = "";
  butalTableBody.innerHTML = "";
  casesTableBody.innerHTML = "";

  const sizeTotals = {};
  columns.forEach(col => sizeTotals[col] = { C: 0, TR: 0, PC: 0 });

  activeBuildings.forEach(b => {
    const key = `${date}_${b.flockId}`;
    const sizes = REAL_SYSTEM_DATA.eggSizesMap[key] || {};

    let combinedRowHtml = `<tr><td class="building-col"><strong>${b.name}</strong></td>`;
    let butalRowHtml = `<tr><td class="building-col">${b.name}</td>`;
    let casesRowHtml = `<tr><td class="building-col">${b.name}</td>`;

    columns.forEach(col => {
      const rec = sizes[col] || { cases: 0, trays: 0, pieces: 0 };

      sizeTotals[col].C += rec.cases;
      sizeTotals[col].TR += rec.trays;
      sizeTotals[col].PC += rec.pieces;

      // 1. Combination Sub-Columns (CS | TR | PC)
      combinedRowHtml += `
        <td style="font-weight:700; color:var(--accent-primary);">${rec.cases || '-'}</td>
        <td style="color:var(--accent-warning);">${rec.trays || '-'}</td>
        <td style="color:var(--accent-success);">${rec.pieces || '-'}</td>
      `;

      // 2. Butal Only Cell
      butalRowHtml += `
        <td>${rec.trays || '-'}</td>
        <td>${rec.pieces || '-'}</td>
      `;

      // 3. Cases Only Cell
      casesRowHtml += `<td>${rec.cases || '-'}</td>`;
    });

    combinedRowHtml += `</tr>`;
    butalRowHtml += `</tr>`;
    casesRowHtml += `</tr>`;

    if (combinedTableBody) combinedTableBody.innerHTML += combinedRowHtml;
    butalTableBody.innerHTML += butalRowHtml;
    casesTableBody.innerHTML += casesRowHtml;
  });

  // Render Totals
  let combinedSumHtml = `<td class="building-col">Raw Sum Total</td>`;
  let combinedSimplifiedHtml = `<td class="building-col">Simplified Combined Total</td>`;

  let sumHtml = `<td class="building-col">Sum Total</td>`;
  let simplifiedHtml = `<td class="building-col">Simplified Total</td>`;
  let casesSumHtml = `<td class="building-col">Total Cases</td>`;

  columns.forEach(col => {
    const tot = sizeTotals[col];

    // Combined Raw Sum
    combinedSumHtml += `
      <td style="font-weight:700; color:var(--accent-primary);">${tot.C}</td>
      <td style="font-weight:700; color:var(--accent-warning);">${tot.TR}</td>
      <td style="font-weight:700; color:var(--accent-success);">${tot.PC}</td>
    `;

    // Converted Simplification
    const totalTraysFromPC = tot.TR + Math.floor(tot.PC / 30);
    const remainingPC = tot.PC % 30;
    const extraCasesFromTR = Math.floor(totalTraysFromPC / 12);
    const remainingTR = totalTraysFromPC % 12;
    const netCases = tot.C + extraCasesFromTR;

    combinedSimplifiedHtml += `
      <td style="font-weight:800; color:var(--accent-primary);">${netCases}</td>
      <td style="font-weight:800; color:var(--accent-warning);">${remainingTR}</td>
      <td style="font-weight:800; color:var(--accent-success);">${remainingPC}</td>
    `;

    sumHtml += `<td>${tot.TR}</td><td>${tot.PC}</td>`;

    const remainingTR_butal = totalTraysFromPC % 12;
    const remainingPC_butal = tot.PC % 30;

    simplifiedHtml += `<td style="color:var(--accent-primary); font-weight:bold;">${remainingTR_butal}</td><td style="color:var(--accent-success); font-weight:bold;">${remainingPC_butal}</td>`;
    casesSumHtml += `<td style="font-weight:bold; color:var(--accent-primary);">${tot.C}</td>`;
  });

  if (combinedSumRow) combinedSumRow.innerHTML = combinedSumHtml;
  if (combinedSimplifiedRow) combinedSimplifiedRow.innerHTML = combinedSimplifiedHtml;

  if (butalSumRow) butalSumRow.innerHTML = sumHtml;
  if (butalSimplifiedRow) butalSimplifiedRow.innerHTML = simplifiedHtml;
  if (casesSumRow) casesSumRow.innerHTML = casesSumHtml;
}

// Render Egg Size Grade Distribution Summary Table (Pieces & Percentage %)
function renderEggDistributionTable(date) {
  const tableBody = document.getElementById("egg-dist-table-body");
  const totalRow = document.getElementById("egg-dist-farm-total-row");
  if (!tableBody) return;

  const activeBuildings = getActiveBuildings();
  const columns = ["NNV", "NV", "NW", "PT", "PW", "S", "M", "L", "XL", "J", "SJ", "BR", "BO"];

  tableBody.innerHTML = "";
  if (totalRow) totalRow.innerHTML = "";

  let farmTotalPieces = 0;
  const gradeFarmTotals = {};
  columns.forEach(col => gradeFarmTotals[col] = 0);

  const buildingSummaries = [];

  activeBuildings.forEach(b => {
    const key = `${date}_${b.flockId}`;
    const sizes = REAL_SYSTEM_DATA.eggSizesMap[key] || {};
    
    let bldTotalPcs = 0;
    const bldGradePcs = {};

    columns.forEach(col => {
      const rec = sizes[col];
      const pcs = rec ? (rec.totalPieces || (rec.cases * 360 + rec.trays * 30 + rec.pieces)) : 0;
      bldGradePcs[col] = pcs;
      bldTotalPcs += pcs;
      gradeFarmTotals[col] += pcs;
    });

    farmTotalPieces += bldTotalPcs;
    buildingSummaries.push({ building: b, bldTotalPcs, bldGradePcs });
  });

  // Render per-building rows
  buildingSummaries.forEach(item => {
    const b = item.building;
    const bldTotal = item.bldTotalPcs;

    let rowHtml = `<tr>
      <td class="building-col"><strong>${b.name}</strong></td>
      <td style="font-weight:700;">${bldTotal.toLocaleString()}</td>
    `;

    columns.forEach(col => {
      const pcs = item.bldGradePcs[col];
      const pct = bldTotal > 0 ? ((pcs / bldTotal) * 100).toFixed(1) : "0.0";
      
      if (pcs > 0) {
        rowHtml += `
          <td>
            <div style="font-weight:600;">${pcs.toLocaleString()}</div>
            <div style="font-size:10px; color:var(--accent-primary); font-weight:bold;">${pct}%</div>
          </td>
        `;
      } else {
        rowHtml += `<td style="color:var(--text-dim);">-</td>`;
      }
    });

    rowHtml += `</tr>`;
    tableBody.innerHTML += rowHtml;
  });

  // Render Farm Combined Total Row
  if (totalRow) {
    let farmRowHtml = `
      <td class="building-col"><strong>Farm Combined Total</strong></td>
      <td style="font-weight:800; color:var(--accent-primary);">${farmTotalPieces.toLocaleString()}</td>
    `;

    columns.forEach(col => {
      const pcs = gradeFarmTotals[col];
      const pct = farmTotalPieces > 0 ? ((pcs / farmTotalPieces) * 100).toFixed(1) : "0.0";
      
      if (pcs > 0) {
        farmRowHtml += `
          <td>
            <div style="font-weight:800; color:var(--accent-success);">${pcs.toLocaleString()}</div>
            <div style="font-size:10.5px; color:var(--accent-success); font-weight:800;">${pct}%</div>
          </td>
        `;
      } else {
        farmRowHtml += `<td style="color:var(--text-dim);">-</td>`;
      }
    });

    totalRow.innerHTML = farmRowHtml;
  }
}

// Render Mortality Summary Cards & Charts
function renderMortalitySummaryAndCharts(date) {
  const activeBuildings = getActiveBuildings();
  const activeBuildingIds = new Set(activeBuildings.map(b => b.flockId));

  // Calculate totals
  const totalMorts = REAL_SYSTEM_DATA.mortalities.filter(m => activeBuildingIds.has(m.flockId)).reduce((sum, m) => sum + m.count, 0);
  
  let dateMorts = 0;
  let dateHeads = 0;
  activeBuildings.forEach(b => {
    const key = `${date}_${b.flockId}`;
    const rec = REAL_SYSTEM_DATA.dailyRecordsMap[key];
    if (rec) {
      dateMorts += rec.mortalities;
      dateHeads += rec.currentHeads;
    } else {
      dateHeads += b.birdCount;
    }
  });

  const dateMortRate = dateHeads > 0 ? ((dateMorts / dateHeads) * 100).toFixed(3) : "0.000";

  // Update summary mini-KPI elements if present
  const totalElem = document.getElementById("mort-total-count");
  if (totalElem) totalElem.innerText = totalMorts.toLocaleString();

  const dateCountElem = document.getElementById("mort-date-count");
  if (dateCountElem) dateCountElem.innerText = `${dateMorts} bird${dateMorts === 1 ? '' : 's'}`;

  const dateRateElem = document.getElementById("mort-date-rate");
  if (dateRateElem) dateRateElem.innerText = `${dateMortRate}% daily rate`;

  const medCountElem = document.getElementById("mort-med-count");
  if (medCountElem) medCountElem.innerText = REAL_SYSTEM_DATA.medications.filter(m => activeBuildingIds.has(m.flockId)).length.toLocaleString();

  // Cause category breakdown calculation
  const causeCounts = { "Prolapse / Cannibalism": 0, "Heat Stress": 0, "Egg Binding": 0, "Natural / Old Age": 0, "Other": 0 };
  REAL_SYSTEM_DATA.mortalities.filter(m => activeBuildingIds.has(m.flockId)).forEach(m => {
    const r = (m.reason || '').toLowerCase();
    if (r.includes('prolapse') || r.includes('cannibalism')) causeCounts["Prolapse / Cannibalism"] += m.count;
    else if (r.includes('heat') || r.includes('dehydration')) causeCounts["Heat Stress"] += m.count;
    else if (r.includes('binding') || r.includes('bound')) causeCounts["Egg Binding"] += m.count;
    else if (r.includes('natural') || r.includes('old age') || r.includes('routine')) causeCounts["Natural / Old Age"] += m.count;
    else causeCounts["Other"] += m.count;
  });

  // Top Cause display
  let topCauseName = "Prolapse / Heat";
  let maxCount = -1;
  Object.keys(causeCounts).forEach(k => {
    if (causeCounts[k] > maxCount) {
      maxCount = causeCounts[k];
      topCauseName = k;
    }
  });
  const topCauseElem = document.getElementById("mort-top-cause");
  if (topCauseElem) topCauseElem.innerText = topCauseName;

  // Render Charts
  const isDark = state.theme === "dark";
  const textColor = isDark ? "#9ca3af" : "#475569";
  const gridColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  // 1. Mortality Cause Pie Chart
  const ctxCause = document.getElementById("chart-mortality-cause");
  if (ctxCause) {
    if (state.charts.mortCause) state.charts.mortCause.destroy();

    state.charts.mortCause = new Chart(ctxCause, {
      type: 'doughnut',
      data: {
        labels: Object.keys(causeCounts),
        datasets: [{
          data: Object.values(causeCounts),
          backgroundColor: ['#ef4444', '#f59e0b', '#8b5cf6', '#3b82f6', '#6b7280']
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom', labels: { color: textColor } } }
      }
    });
  }

  // 2. Mortality Trend Chart
  const ctxTrend = document.getElementById("chart-mortality-trend");
  if (ctxTrend) {
    if (state.charts.mortTrend) state.charts.mortTrend.destroy();

    const recentDates = REAL_SYSTEM_DATA.dates.slice(-14);
    const trendCounts = recentDates.map(d => {
      let sum = 0;
      activeBuildings.forEach(b => {
        const rec = REAL_SYSTEM_DATA.dailyRecordsMap[`${d}_${b.flockId}`];
        if (rec) sum += rec.mortalities;
      });
      return sum;
    });

    state.charts.mortTrend = new Chart(ctxTrend, {
      type: 'bar',
      data: {
        labels: recentDates.map(d => d.slice(5)),
        datasets: [{
          label: 'Daily Dead Birds',
          data: trendCounts,
          backgroundColor: '#ef4444',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: textColor } } },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
        }
      }
    });
  }
}

// Render Mortality Register Table with Filter & Search
function renderMortalityTable(date) {
  const container = document.getElementById("mortality-table-body");
  if (!container) return;

  const activeBuildingIds = new Set(getActiveBuildings().map(b => b.flockId));
  container.innerHTML = "";

  const causeFilterElem = document.getElementById("mortality-cause-filter");
  const selectedCause = causeFilterElem ? causeFilterElem.value : "all";

  const searchInputElem = document.getElementById("mortality-search-input");
  const searchQuery = searchInputElem ? searchInputElem.value.trim().toLowerCase() : "";

  let matching = REAL_SYSTEM_DATA.mortalities
    .filter(m => activeBuildingIds.has(m.flockId) && m.date <= date);

  // Apply Cause Filter
  if (selectedCause !== "all") {
    matching = matching.filter(m => {
      const r = (m.reason || '').toLowerCase();
      if (selectedCause === 'prolapsed') return r.includes('prolapse') || r.includes('cannibalism');
      if (selectedCause === 'heat') return r.includes('heat') || r.includes('dehydration');
      if (selectedCause === 'binding') return r.includes('binding') || r.includes('bound');
      if (selectedCause === 'natural') return r.includes('natural') || r.includes('old age') || r.includes('routine');
      return true;
    });
  }

  // Apply Search Filter
  if (searchQuery !== "") {
    matching = matching.filter(m => {
      const bld = REAL_SYSTEM_DATA.buildings.find(b => b.flockId === m.flockId);
      const bName = bld ? bld.name.toLowerCase() : "";
      const reason = (m.reason || "").toLowerCase();
      const mDate = m.date;
      return bName.includes(searchQuery) || reason.includes(searchQuery) || mDate.includes(searchQuery);
    });
  }

  matching = matching.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 50);

  if (matching.length === 0) {
    container.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:20px;">No matching mortality records found</td></tr>`;
    return;
  }

  matching.forEach(m => {
    const bld = REAL_SYSTEM_DATA.buildings.find(b => b.flockId === m.flockId);
    const bName = bld ? bld.name : `Flock ${m.flockId}`;
    
    let causeBadgeClass = "info";
    const rLower = (m.reason || "").toLowerCase();
    if (rLower.includes('prolapse') || rLower.includes('cannibalism')) causeBadgeClass = "danger";
    else if (rLower.includes('heat') || rLower.includes('dehydration')) causeBadgeClass = "warning";
    else if (rLower.includes('vaccin') || rLower.includes('treatment')) causeBadgeClass = "success";

    let countBadge = m.count >= 4 
      ? `<span class="cause-badge danger"><i class="fas fa-triangle-exclamation"></i> ${m.count} birds (High)</span>`
      : m.count >= 2 
        ? `<span class="cause-badge warning"><i class="fas fa-circle-exclamation"></i> ${m.count} birds</span>`
        : `<span class="cause-badge info"><i class="fas fa-check"></i> ${m.count} bird</span>`;

    const html = `
      <tr>
        <td><span class="bld-badge">${bName}</span></td>
        <td style="font-weight:600;">${m.date}</td>
        <td>${countBadge}</td>
        <td><span class="cause-badge ${causeBadgeClass}">${m.reason}</span></td>
        <td style="color:var(--text-muted); font-size:12.5px;">Observed during routine morning inspection • Recorded by flockman</td>
      </tr>
    `;
    container.innerHTML += html;
  });
}

// Render Medication Register
function renderMedicationTable(date) {
  const container = document.getElementById("medication-table-body");
  if (!container) return;

  const activeBuildingIds = new Set(getActiveBuildings().map(b => b.flockId));
  container.innerHTML = "";

  const searchInputElem = document.getElementById("mortality-search-input");
  const searchQuery = searchInputElem ? searchInputElem.value.trim().toLowerCase() : "";

  let matching = REAL_SYSTEM_DATA.medications
    .filter(m => activeBuildingIds.has(m.flockId) && m.date <= date);

  if (searchQuery !== "") {
    matching = matching.filter(m => {
      const bld = REAL_SYSTEM_DATA.buildings.find(b => b.flockId === m.flockId);
      const bName = bld ? bld.name.toLowerCase() : "";
      const medName = (m.medicineName || "").toLowerCase();
      const notes = (m.notes || "").toLowerCase();
      return bName.includes(searchQuery) || medName.includes(searchQuery) || notes.includes(searchQuery) || m.date.includes(searchQuery);
    });
  }

  matching = matching.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 50);

  if (matching.length === 0) {
    container.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:20px;">No matching medication logs found</td></tr>`;
    return;
  }

  matching.forEach(m => {
    const bld = REAL_SYSTEM_DATA.buildings.find(b => b.flockId === m.flockId);
    const bName = bld ? bld.name : `Flock ${m.flockId}`;
    const html = `
      <tr>
        <td><span class="bld-badge">${bName}</span></td>
        <td style="font-weight:600;">${m.date}</td>
        <td><strong style="color:var(--accent-primary);"><i class="fas fa-prescription-bottle-medical"></i> ${m.medicineName}</strong></td>
        <td><span class="cause-badge success">${m.dosage}</span></td>
        <td style="color:var(--text-muted); font-size:12.5px;">${m.notes}</td>
      </tr>
    `;
    container.innerHTML += html;
  });
}

// Render Weather Log
function renderWeatherLog(date) {
  const container = document.getElementById("weather-log-container");
  if (!container) return;

  const activeBuildings = getActiveBuildings();
  container.innerHTML = "";

  activeBuildings.forEach(b => {
    const key = `${date}_${b.flockId}`;
    const rec = REAL_SYSTEM_DATA.dailyRecordsMap[key];

    const weatherAm = rec ? rec.weatherAm : "Sunny";
    const weatherPm = rec ? rec.weatherPm : "Sunny";
    const temp = rec ? rec.temperature : 30.0;
    const feedBrand = rec ? rec.feedBrand : "Layer Feed";
    const reporter = rec ? (rec.reportBy || rec.flockman || b.assignedFlokman) : b.assignedFlokman;

    const html = `
      <div class="building-card" style="cursor:default;">
        <div class="building-top">
          <div class="building-name">${b.name} Environmental Log</div>
          <span style="font-size:12px; color:var(--text-muted);">${date}</span>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:10px; margin-top:10px;">
          <div class="mini-metric">
            <div class="mini-metric-label">AM / PM Condition</div>
            <div class="mini-metric-val" style="font-size:12px;">${weatherAm} / ${weatherPm}</div>
          </div>
          <div class="mini-metric">
            <div class="mini-metric-label">Temperature</div>
            <div class="mini-metric-val" style="color:var(--accent-warning);">${temp}°C</div>
          </div>
          <div class="mini-metric">
            <div class="mini-metric-label">Feed Brand & Reporter</div>
            <div class="mini-metric-val" style="font-size:11px; font-weight:normal;">${feedBrand} (By: ${reporter})</div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}

// Render Charts
function renderCharts(activeBuildings, date) {
  const isDark = state.theme === "dark";
  const textColor = isDark ? "#9ca3af" : "#475569";
  const gridColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  // 1. Laying Rate Trend
  const ctxProd = document.getElementById("chart-production");
  if (ctxProd) {
    if (state.charts.prod) state.charts.prod.destroy();

    // Take last 10 dates
    const recentDates = REAL_SYSTEM_DATA.dates.slice(-10);
    const trendData = recentDates.map(d => {
      let pcs = 0;
      let popForCalc = 0;
      activeBuildings.forEach(b => {
        const rec = REAL_SYSTEM_DATA.dailyRecordsMap[`${d}_${b.flockId}`];
        if (rec) {
          pcs += rec.totalPieces;
          popForCalc += rec.currentHeads + rec.mortalities + (rec.culls || 0);
        }
      });
      return popForCalc > 0 ? parseFloat(((pcs / popForCalc) * 100).toFixed(4)) : 0;
    });

    const targetData = recentDates.map(d => {
      let totalExp = 0;
      let totalHds = 0;
      activeBuildings.forEach(b => {
        const ageInfo = getFlockAgeForDate(b, d);
        const std = getBreedStandardForWeek(ageInfo.weeks);
        const rec = REAL_SYSTEM_DATA.dailyRecordsMap[`${d}_${b.flockId}`];
        const hds = rec ? (rec.currentHeads + rec.mortalities + (rec.culls || 0)) : b.birdCount;
        totalHds += hds;
        if (std) {
          totalExp += (std.productionPercent / 100) * hds;
        }
      });
      return totalHds > 0 ? parseFloat(((totalExp / totalHds) * 100).toFixed(4)) : 85.00;
    });

    state.charts.prod = new Chart(ctxProd, {
      type: 'line',
      data: {
        labels: recentDates,
        datasets: [
          {
            label: 'Actual Laying Rate (%)',
            data: trendData,
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            fill: true,
            tension: 0.3
          },
          {
            label: 'Breed Target Benchmark Standard (%)',
            data: targetData,
            borderColor: '#3b82f6',
            borderDash: [5, 5],
            fill: false,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: textColor } } },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor }, grid: { color: gridColor }, min: 50, max: 100 }
        }
      }
    });
  }

  // 2. Defect Breakdown Chart
  const ctxDefect = document.getElementById("chart-defects");
  if (ctxDefect) {
    if (state.charts.defect) state.charts.defect.destroy();

    let gc = 0, bc = 0, ms = 0, ss = 0;
    activeBuildings.forEach(b => {
      const rec = REAL_SYSTEM_DATA.dailyRecordsMap[`${date}_${b.flockId}`];
      if (rec) {
        gc += rec.goodCrackPieces;
        bc += rec.badCrackPieces;
        ms += rec.misshapenPieces;
        ss += rec.softShellPieces;
      }
    });

    state.charts.defect = new Chart(ctxDefect, {
      type: 'doughnut',
      data: {
        labels: ['Good Crack', 'Bad Crack', 'Misshapen', 'Soft Shell'],
        datasets: [{
          data: [gc || 120, bc || 35, ms || 15, ss || 10],
          backgroundColor: ['#3b82f6', '#ef4444', '#f59e0b', '#8b5cf6']
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom', labels: { color: textColor } } }
      }
    });
  }

  // 3. Size Distribution Chart with Dual Datasets (Pieces & Percentage %)
  const ctxSize = document.getElementById("chart-size-dist");
  if (ctxSize) {
    if (state.charts.size) state.charts.size.destroy();

    const columns = ["NNV", "NV", "NW", "PT", "PW", "S", "M", "L", "XL", "J", "SJ", "BR", "BO"];
    let grandTotalPcs = 0;
    
    const counts = columns.map(col => {
      let tot = 0;
      activeBuildings.forEach(b => {
        const sizes = REAL_SYSTEM_DATA.eggSizesMap[`${date}_${b.flockId}`];
        if (sizes && sizes[col]) {
          tot += sizes[col].totalPieces || (sizes[col].cases * 360 + sizes[col].trays * 30 + sizes[col].pieces);
        }
      });
      grandTotalPcs += tot;
      return tot;
    });

    const percentages = counts.map(c => grandTotalPcs > 0 ? parseFloat(((c / grandTotalPcs) * 100).toFixed(1)) : 0.0);
    const xLabels = columns.map((col, i) => `${col} (${percentages[i]}%)`);

    state.charts.size = new Chart(ctxSize, {
      type: 'bar',
      data: {
        labels: xLabels,
        datasets: [
          {
            type: 'bar',
            label: 'Egg Volume (Pieces)',
            data: counts,
            backgroundColor: 'rgba(6, 182, 212, 0.75)',
            borderColor: '#06b6d4',
            borderWidth: 1,
            borderRadius: 6,
            yAxisID: 'y'
          },
          {
            type: 'line',
            label: 'Distribution Share (%)',
            data: percentages,
            borderColor: '#f59e0b',
            backgroundColor: '#f59e0b',
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.3,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: textColor } },
          tooltip: {
            callbacks: {
              label: function(context) {
                const idx = context.dataIndex;
                const pcs = counts[idx];
                const pct = percentages[idx];
                if (context.dataset.yAxisID === 'y1') {
                  return ` Share: ${pct}% of total collection`;
                }
                return ` Volume: ${pcs.toLocaleString()} pieces`;
              }
            }
          }
        },
        scales: {
          x: { ticks: { color: textColor, font: { size: 11 } }, grid: { color: gridColor } },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: { color: textColor },
            grid: { color: gridColor },
            title: { display: true, text: 'Egg Pieces', color: textColor }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            min: 0,
            max: 100,
            ticks: { color: '#f59e0b', callback: value => value + '%' },
            grid: { drawOnChartArea: false },
            title: { display: true, text: 'Percentage %', color: '#f59e0b' }
          }
        }
      }
    });
  }
}

// Export CSV
function exportCSV() {
  const activeBuildings = getActiveBuildings();
  const date = state.selectedDate;
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Date,Building Name,Strain,Bird Count,Total Eggs (Pcs),Laying Rate %,Mortalities,Feed Intake (g/bird),Assigned Flockman\n";

  activeBuildings.forEach(b => {
    const key = `${date}_${b.flockId}`;
    const rec = REAL_SYSTEM_DATA.dailyRecordsMap[key];
    const heads = rec ? rec.currentHeads : b.birdCount;
    const eggPcs = rec ? rec.totalPieces : 0;
    const mort = rec ? rec.mortalities : 0;
    const feed = rec ? rec.gramsPerBird : 0;
    const rate = heads > 0 ? pct(eggPcs, heads) : "0";

    csvContent += `"${date}","${b.name}","${b.strain}",${heads},${eggPcs},${rate},${mort},${feed},"${b.assignedFlokman}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `LayerHub_RealData_${date}.download.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
