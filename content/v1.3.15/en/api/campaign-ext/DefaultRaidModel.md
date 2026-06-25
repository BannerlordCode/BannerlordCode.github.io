---
title: "DefaultRaidModel"
description: "Auto-generated class reference for DefaultRaidModel."
---
# DefaultRaidModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultRaidModel : RaidModel`
**Base:** `RaidModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultRaidModel.cs`

## Overview

`DefaultRaidModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultRaidModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GoldRewardForEachLostHearth` | `public override int GoldRewardForEachLostHearth { get; }` |

## Key Methods

### CalculateHitDamage
`public override ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)`

**Purpose:** **Purpose:** Calculates the current value or result of hit damage.

```csharp
// Obtain an instance of DefaultRaidModel from the subsystem API first
DefaultRaidModel defaultRaidModel = ...;
var result = defaultRaidModel.CalculateHitDamage(attackerSide, 0);
```

### GetCommonLootItemScores
`public override MBReadOnlyList<ValueTuple<ItemObject, float>> GetCommonLootItemScores()`

**Purpose:** **Purpose:** Reads and returns the common loot item scores value held by the this instance.

```csharp
// Obtain an instance of DefaultRaidModel from the subsystem API first
DefaultRaidModel defaultRaidModel = ...;
var result = defaultRaidModel.GetCommonLootItemScores();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultRaidModel>(new MyDefaultRaidModel());
```

## See Also

- [Area Index](../)