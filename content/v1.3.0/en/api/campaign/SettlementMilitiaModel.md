---
title: "SettlementMilitiaModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementMilitiaModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementMilitiaModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>`
**Base:** `MBGameModel<SettlementMilitiaModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs`

## Overview

`SettlementMilitiaModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementMilitiaModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### MilitiaToSpawnAfterSiege
`public abstract int MilitiaToSpawnAfterSiege(Town town)`

**Purpose:** Handles logic related to `militia to spawn after siege`.

### CalculateMilitiaChange
`public abstract ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate militia change`.

### CalculateVeteranMilitiaSpawnChance
`public abstract ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)`

**Purpose:** Handles logic related to `calculate veteran militia spawn chance`.

### CalculateMilitiaSpawnRate
`public abstract void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)`

**Purpose:** Handles logic related to `calculate militia spawn rate`.

## Usage Example

```csharp
var implementation = new CustomSettlementMilitiaModel();
```

## See Also

- [Complete Class Catalog](../catalog)