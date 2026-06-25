---
title: "DefaultSettlementMilitiaModel"
description: "Auto-generated class reference for DefaultSettlementMilitiaModel."
---
# DefaultSettlementMilitiaModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementMilitiaModel : SettlementMilitiaModel`
**Base:** `SettlementMilitiaModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs`

## Overview

`DefaultSettlementMilitiaModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementMilitiaModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### MilitiaToSpawnAfterSiege
`public override int MilitiaToSpawnAfterSiege(Town town)`

**Purpose:** Executes the MilitiaToSpawnAfterSiege logic.

```csharp
// Obtain an instance of DefaultSettlementMilitiaModel from the subsystem API first
DefaultSettlementMilitiaModel defaultSettlementMilitiaModel = ...;
var result = defaultSettlementMilitiaModel.MilitiaToSpawnAfterSiege(town);
```

### CalculateMilitiaChange
`public override ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of militia change.

```csharp
// Obtain an instance of DefaultSettlementMilitiaModel from the subsystem API first
DefaultSettlementMilitiaModel defaultSettlementMilitiaModel = ...;
var result = defaultSettlementMilitiaModel.CalculateMilitiaChange(settlement, false);
```

### CalculateVeteranMilitiaSpawnChance
`public override ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)`

**Purpose:** Calculates the current value or result of veteran militia spawn chance.

```csharp
// Obtain an instance of DefaultSettlementMilitiaModel from the subsystem API first
DefaultSettlementMilitiaModel defaultSettlementMilitiaModel = ...;
var result = defaultSettlementMilitiaModel.CalculateVeteranMilitiaSpawnChance(settlement);
```

### CalculateMilitiaSpawnRate
`public override void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)`

**Purpose:** Calculates the current value or result of militia spawn rate.

```csharp
// Obtain an instance of DefaultSettlementMilitiaModel from the subsystem API first
DefaultSettlementMilitiaModel defaultSettlementMilitiaModel = ...;
defaultSettlementMilitiaModel.CalculateMilitiaSpawnRate(settlement, meleeTroopRate, rangedTroopRate);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementMilitiaModel>(new MyDefaultSettlementMilitiaModel());
```

## See Also

- [Area Index](../)