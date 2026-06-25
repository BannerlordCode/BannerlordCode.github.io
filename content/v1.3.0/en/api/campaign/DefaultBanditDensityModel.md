---
title: "DefaultBanditDensityModel"
description: "Auto-generated class reference for DefaultBanditDensityModel."
---
# DefaultBanditDensityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBanditDensityModel : BanditDensityModel`
**Base:** `BanditDensityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBanditDensityModel.cs`

## Overview

`DefaultBanditDensityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBanditDensityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public override int NumberOfMinimumBanditPartiesInAHideoutToInfestIt { get; }` |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public override int NumberOfMaximumBanditPartiesInEachHideout { get; }` |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public override int NumberOfMaximumBanditPartiesAroundEachHideout { get; }` |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public override int NumberOfMaximumHideoutsAtEachBanditFaction { get; }` |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public override int NumberOfInitialHideoutsAtEachBanditFaction { get; }` |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public override int NumberOfMinimumBanditTroopsInHideoutMission { get; }` |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public override int NumberOfMaximumTroopCountForFirstFightInHideout { get; }` |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public override int NumberOfMaximumTroopCountForBossFightInHideout { get; }` |
| `SpawnPercentageForFirstFightInHideoutMission` | `public override float SpawnPercentageForFirstFightInHideoutMission { get; }` |

## Key Methods

### GetMinimumTroopCountForHideoutMission
`public override int GetMinimumTroopCountForHideoutMission(MobileParty party)`

**Purpose:** Reads and returns the minimum troop count for hideout mission value held by the this instance.

```csharp
// Obtain an instance of DefaultBanditDensityModel from the subsystem API first
DefaultBanditDensityModel defaultBanditDensityModel = ...;
var result = defaultBanditDensityModel.GetMinimumTroopCountForHideoutMission(party);
```

### GetMaxSupportedNumberOfLootersForClan
`public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)`

**Purpose:** Reads and returns the max supported number of looters for clan value held by the this instance.

```csharp
// Obtain an instance of DefaultBanditDensityModel from the subsystem API first
DefaultBanditDensityModel defaultBanditDensityModel = ...;
var result = defaultBanditDensityModel.GetMaxSupportedNumberOfLootersForClan(clan);
```

### GetMaximumTroopCountForHideoutMission
`public override int GetMaximumTroopCountForHideoutMission(MobileParty party)`

**Purpose:** Reads and returns the maximum troop count for hideout mission value held by the this instance.

```csharp
// Obtain an instance of DefaultBanditDensityModel from the subsystem API first
DefaultBanditDensityModel defaultBanditDensityModel = ...;
var result = defaultBanditDensityModel.GetMaximumTroopCountForHideoutMission(party);
```

### IsPositionInsideNavalSafeZone
`public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)`

**Purpose:** Determines whether the this instance is in the position inside naval safe zone state or condition.

```csharp
// Obtain an instance of DefaultBanditDensityModel from the subsystem API first
DefaultBanditDensityModel defaultBanditDensityModel = ...;
var result = defaultBanditDensityModel.IsPositionInsideNavalSafeZone(position);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBanditDensityModel>(new MyDefaultBanditDensityModel());
```

## See Also

- [Area Index](../)