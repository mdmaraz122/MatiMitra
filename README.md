# MatiMitra — Smarter Rotations, Stronger Futures

> **NASA Space Apps Challenge 2026**  
> **Challenge:** Field Shift: Adapting Farms with NASA Data  
> **Team Name:** Agora  

---

## 1. Team Members

| Name | Role | Responsibilities |
|---|---|---|
| **Nafeeza Noor** | Team Lead & Frontend Developer | UI/UX Architecture, React.js Frontend, NASA Layer Visualizations |
| **Md. Maraz** | Backend Developer & Researcher | System Architecture, REST API (Laravel), NASA Data Pipeline & Scoring Engine |
| **Elti Rahman** | Researcher & Storyteller | Domain Research, Agricultural Impact Analysis, Project Narrative & Documentation |
| **Utsha Datta** | Video Editor & Designer | Presentation Video, Media Assets, Visual Design & Branding |

---

## 2. Executive Summary

### Problem Statement
Farmers across Bangladesh confront intensifying climate hazards—irregular monsoons, erratic rainfall, groundwater depletion, salinity intrusion in coastal belts, recurring floods, and seasonal heat stress. 

Despite the urgency of building climate resilience, smallholder farmers lack accessible, hyper-localized insights combining real-time environmental metrics, soil parameters, and crop phenology. Consequently, seasonal crop planning relies predominantly on legacy practices or isolated local advice. This leads to unsustainable water extraction, rapid soil nutrient depletion, and heightened vulnerability to extreme weather shocks.

The central barrier is not a lack of data, but data accessibility: translating high-dimensional Earth observation observations and national agro-ecological data into actionable, field-level crop rotation guidance.

### Our Solution
**MatiMitra** (*Friend of the Soil*) is an intelligent decision-support system designed to empower Bangladeshi farmers and agricultural extension officers with climate-resilient, site-specific crop rotation strategies.

By synthesizing NASA Earth Observation (EO) datasets with authoritative Bangladesh agricultural repositories, MatiMitra delivers prioritized, multi-season crop rotation alternatives tailored to specific field coordinates, current cultivation practices, and individual farmer goals.

---

## 3. Data Integration Matrix

MatiMitra bridges planetary-scale satellite observations with hyper-local agricultural databases:

### NASA Earth Observations
| Satellite / Mission | Dataset | Application in MatiMitra |
|---|---|---|
| **NASA POWER** | Surface Temperature, Relative Humidity, Solar Radiation | Agro-climatology baseline & seasonal thermal comfort indices |
| **GPM (IMERG)** | Precipitation Estimates | Historical rainfall patterns, drought monitoring, wet-spell tracking |
| **SMAP** | L4 Surface & Root-Zone Soil Moisture | Water stress detection, root-zone saturation, irrigation scheduling |
| **MODIS / VIIRS** | NDVI & EVI (Vegetation Indices) | Historical crop vigor, biomass dynamics, regional phenology curves |

### National Agricultural Datasets (Bangladesh)
- **BARC (Bangladesh Agricultural Research Council):** Agro-Ecological Zones (AEZ) and land suitability ratings.
- **SRDI (Soil Resource Development Institute):** Soil texture, salinity indicators, pH, and organic matter content.
- **BRRI & BARI:** Crop variety data, phenological stages, drought/salinity tolerances, and yield profiles.
- **BBS (Bangladesh Bureau of Statistics):** District/Upazila-level historical yield and market dynamics.

---

## 4. Multi-Factor Evaluation Engine

Rather than returning an opaque, single-crop recommendation, MatiMitra processes input variables through a weighted scoring matrix to output **ranked rotation strategies accompanied by transparent rationales**:

$$\text{Strategy Score} = \sum (W_i \times S_i)$$

Where evaluations calculate:
- **Climate Suitability:** Thermal and radiative thresholds across Kharif-1, Kharif-2, and Rabi seasons.
- **Water & Irrigation Balance:** Rainfall forecasts matched against crop evapotranspiration ($ET_c$) and root-zone moisture.
- **Soil Restoration Potential:** Legume-based nitrogen fixation cycles, biomass return, and nutrient-depletion offsets.
- **Risk Mitigation:** Salinity threshold buffers, flood-escape timing, and drought-hardiness.
- **Farmer Objective Alignment:** Custom weighting based on user-selected priorities (e.g., maximum profit, water conservation, risk aversion, soil recovery).

---

## 5. System Architecture & Tech Stack
┌────────────────────────────────────────────────────────┐
│                   Client Layer (SPA)                   │
│       React.js • Tailwind CSS • Leaflet / Mapbox       │
└───────────────────────────▲────────────────────────────┘
│
│ HTTPS / REST API (JSON)
│
┌───────────────────────────▼────────────────────────────┐
│                  Application Layer                     │
│                     PHP / Laravel                      │
│   ┌──────────────────────┐    ┌────────────────────┐   │
│   │  Auth & User State   │    │  Rotation Engine   │   │
│   └──────────────────────┘    └────────────────────┘   │
│   ┌──────────────────────┐    ┌────────────────────┐   │
│   │  NASA Ingestion Job  │    │  Scoring & Ranking │   │
│   └──────────────────────┘    └────────────────────┘   │
└─────────────┬────────────────────────────┬─────────────┘
│                            │
┌─────────────▼──────────────┐   ┌─────────▼─────────────┐
│       Persistence          │   │   External Services   │
│   MySQL 8 (Geo-indexed)    │   │  • NASA POWER / GPM   │
│   Redis (Caching layers)   │   │  • BARC / SRDI APIs   │
└────────────────────────────┘   └───────────────────────┘
### Stack Breakdown
- **Frontend:** React.js, Tailwind CSS, Lucide Icons, interactive geospatial mapping (Leaflet).
- **Backend:** PHP / Laravel (Modular architecture with Service-Repository pattern, scheduled workers for data sync).
- **Database:** MySQL (relational schema storing crop parameters, AEZ bounds, user configurations, and cached climate values).
- **API Interface:** Stateless RESTful APIs returning normalized responses with localized field explanations (Bangla & English).

---

## 6. End-to-End Data Pipeline

1. **User Input & Geo-Contextualization:** The farmer selects field coordinates on an interactive map or provides Upazila/Union details, along with current crops, water source, and primary seasonal goals.
2. **Telemetry Ingestion:** The Laravel backend queries cached NASA POWER and GPM feeds for the bounding coordinate box alongside SRDI soil benchmarks.
3. **Data Normalization & AEZ Mapping:** Raw meteorological values are converted into seasonal averages, anomaly indices, and cumulative precipitation metrics matched against local AEZ classes.
4. **Scoring & Heuristic Evaluation:** The multi-criteria decision algorithm computes suitability scores for viable multi-season rotation sequences (e.g., *Aus Rice → Blackgram → Mustard* vs. *Boro Rice → Fallow → T. Aman*).
5. **Insights Delivery:** The frontend renders interactive rotation cards showing overall score, water savings percentage, expected soil benefit, risk indicators, and simple plain-language guidance.

---

## 7. Local Impact & Sustainability

- **Groundwater Preservation:** Reduces excessive extraction in vulnerable Boro-heavy zones by highlighting low-water alternate Rabi crops (pulses, oilseeds).
- **Soil Conservation:** Encourages systematic inclusion of legumes and green manures to replenish organic matter in depleted topsoils.
- **Climate Adaptation:** Provides actionable buffers against unpredictable monsoon onsets and late-season heat stress for smallholders.
