---
title: "DefaultSettlementMilitiaModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementMilitiaModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementMilitiaModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementMilitiaModel : SettlementMilitiaModel`
**Base:** `SettlementMilitiaModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementMilitiaModel.cs`

## Overview

`DefaultSettlementMilitiaModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementMilitiaModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### MilitiaToSpawnAfterSiege
`public override int MilitiaToSpawnAfterSiege(Town town)`

**Purpose:** Handles logic related to `militia to spawn after siege`.

### CalculateMilitiaChange
`public override ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate militia change`.

### CalculateVeteranMilitiaSpawnChance
`public override ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)`

**Purpose:** Handles logic related to `calculate veteran militia spawn chance`.

### CalculateMilitiaSpawnRate
`public override void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)`

**Purpose:** Handles logic related to `calculate militia spawn rate`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementMilitiaModel>(new MyDefaultSettlementMilitiaModel());
```

## See Also

- [Complete Class Catalog](../catalog)