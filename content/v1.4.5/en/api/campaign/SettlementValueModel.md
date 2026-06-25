---
title: "SettlementValueModel"
description: "Auto-generated class reference for SettlementValueModel."
---
# SettlementValueModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementValueModel : MBGameModel<SettlementValueModel>`
**Base:** `MBGameModel<SettlementValueModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementValueModel.cs`

## Overview

`SettlementValueModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementValueModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FindMostSuitableHomeSettlement
`public abstract Settlement FindMostSuitableHomeSettlement(Clan clan)`

**Purpose:** **Purpose:** Looks up the matching most suitable home settlement in the current collection or scope.

```csharp
// Obtain an instance of SettlementValueModel from the subsystem API first
SettlementValueModel settlementValueModel = ...;
var result = settlementValueModel.FindMostSuitableHomeSettlement(clan);
```

### CalculateSettlementValueForFaction
`public abstract float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)`

**Purpose:** **Purpose:** Calculates the current value or result of settlement value for faction.

```csharp
// Obtain an instance of SettlementValueModel from the subsystem API first
SettlementValueModel settlementValueModel = ...;
var result = settlementValueModel.CalculateSettlementValueForFaction(settlement, faction);
```

### CalculateSettlementBaseValue
`public abstract float CalculateSettlementBaseValue(Settlement settlement)`

**Purpose:** **Purpose:** Calculates the current value or result of settlement base value.

```csharp
// Obtain an instance of SettlementValueModel from the subsystem API first
SettlementValueModel settlementValueModel = ...;
var result = settlementValueModel.CalculateSettlementBaseValue(settlement);
```

### CalculateSettlementValueForEnemyHero
`public abstract float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)`

**Purpose:** **Purpose:** Calculates the current value or result of settlement value for enemy hero.

```csharp
// Obtain an instance of SettlementValueModel from the subsystem API first
SettlementValueModel settlementValueModel = ...;
var result = settlementValueModel.CalculateSettlementValueForEnemyHero(settlement, hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementValueModel instance = ...;
```

## See Also

- [Area Index](../)