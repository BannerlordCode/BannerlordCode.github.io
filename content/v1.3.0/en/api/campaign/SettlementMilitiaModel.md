---
title: "SettlementMilitiaModel"
description: "Auto-generated class reference for SettlementMilitiaModel."
---
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

**Purpose:** Executes the MilitiaToSpawnAfterSiege logic.

```csharp
// Obtain an instance of SettlementMilitiaModel from the subsystem API first
SettlementMilitiaModel settlementMilitiaModel = ...;
var result = settlementMilitiaModel.MilitiaToSpawnAfterSiege(town);
```

### CalculateMilitiaChange
`public abstract ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of militia change.

```csharp
// Obtain an instance of SettlementMilitiaModel from the subsystem API first
SettlementMilitiaModel settlementMilitiaModel = ...;
var result = settlementMilitiaModel.CalculateMilitiaChange(settlement, false);
```

### CalculateVeteranMilitiaSpawnChance
`public abstract ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)`

**Purpose:** Calculates the current value or result of veteran militia spawn chance.

```csharp
// Obtain an instance of SettlementMilitiaModel from the subsystem API first
SettlementMilitiaModel settlementMilitiaModel = ...;
var result = settlementMilitiaModel.CalculateVeteranMilitiaSpawnChance(settlement);
```

### CalculateMilitiaSpawnRate
`public abstract void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)`

**Purpose:** Calculates the current value or result of militia spawn rate.

```csharp
// Obtain an instance of SettlementMilitiaModel from the subsystem API first
SettlementMilitiaModel settlementMilitiaModel = ...;
settlementMilitiaModel.CalculateMilitiaSpawnRate(settlement, meleeTroopRate, rangedTroopRate);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementMilitiaModel instance = ...;
```

## See Also

- [Area Index](../)