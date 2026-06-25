---
title: "RaidModel"
description: "Auto-generated class reference for RaidModel."
---
# RaidModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RaidModel : MBGameModel<RaidModel>`
**Base:** `MBGameModel<RaidModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/RaidModel.cs`

## Overview

`RaidModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `RaidModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GoldRewardForEachLostHearth` | `public abstract int GoldRewardForEachLostHearth { get; }` |

## Key Methods

### CalculateHitDamage
`public abstract ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)`

**Purpose:** **Purpose:** Calculates the current value or result of hit damage.

```csharp
// Obtain an instance of RaidModel from the subsystem API first
RaidModel raidModel = ...;
var result = raidModel.CalculateHitDamage(attackerSide, 0);
```

### GetRaidLootMultiplier
`public abstract ExplainedNumber GetRaidLootMultiplier(PartyBase receivingParty)`

**Purpose:** **Purpose:** Reads and returns the raid loot multiplier value held by the this instance.

```csharp
// Obtain an instance of RaidModel from the subsystem API first
RaidModel raidModel = ...;
var result = raidModel.GetRaidLootMultiplier(receivingParty);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
RaidModel instance = ...;
```

## See Also

- [Area Index](../)