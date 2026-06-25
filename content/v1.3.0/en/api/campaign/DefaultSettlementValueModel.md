---
title: "DefaultSettlementValueModel"
description: "Auto-generated class reference for DefaultSettlementValueModel."
---
# DefaultSettlementValueModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementValueModel : SettlementValueModel`
**Base:** `SettlementValueModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs`

## Overview

`DefaultSettlementValueModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementValueModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FindMostSuitableHomeSettlement
`public override Settlement FindMostSuitableHomeSettlement(Clan clan)`

**Purpose:** Looks up the matching `most suitable home settlement` in the current collection or scope.

```csharp
// Obtain an instance of DefaultSettlementValueModel from the subsystem API first
DefaultSettlementValueModel defaultSettlementValueModel = ...;
var result = defaultSettlementValueModel.FindMostSuitableHomeSettlement(clan);
```

### CalculateSettlementBaseValue
`public override float CalculateSettlementBaseValue(Settlement settlement)`

**Purpose:** Calculates the current value or result of `settlement base value`.

```csharp
// Obtain an instance of DefaultSettlementValueModel from the subsystem API first
DefaultSettlementValueModel defaultSettlementValueModel = ...;
var result = defaultSettlementValueModel.CalculateSettlementBaseValue(settlement);
```

### CalculateSettlementValueForFaction
`public override float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)`

**Purpose:** Calculates the current value or result of `settlement value for faction`.

```csharp
// Obtain an instance of DefaultSettlementValueModel from the subsystem API first
DefaultSettlementValueModel defaultSettlementValueModel = ...;
var result = defaultSettlementValueModel.CalculateSettlementValueForFaction(settlement, faction);
```

### CalculateSettlementValueForEnemyHero
`public override float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)`

**Purpose:** Calculates the current value or result of `settlement value for enemy hero`.

```csharp
// Obtain an instance of DefaultSettlementValueModel from the subsystem API first
DefaultSettlementValueModel defaultSettlementValueModel = ...;
var result = defaultSettlementValueModel.CalculateSettlementValueForEnemyHero(settlement, hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementValueModel>(new MyDefaultSettlementValueModel());
```

## See Also

- [Area Index](../)