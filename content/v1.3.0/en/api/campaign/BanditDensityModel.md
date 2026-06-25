---
title: "BanditDensityModel"
description: "Auto-generated class reference for BanditDensityModel."
---
# BanditDensityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>`
**Base:** `MBGameModel<BanditDensityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs`

## Overview

`BanditDensityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BanditDensityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public abstract int NumberOfMinimumBanditPartiesInAHideoutToInfestIt { get; }` |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public abstract int NumberOfMaximumBanditPartiesInEachHideout { get; }` |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public abstract int NumberOfMaximumBanditPartiesAroundEachHideout { get; }` |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public abstract int NumberOfMaximumHideoutsAtEachBanditFaction { get; }` |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public abstract int NumberOfInitialHideoutsAtEachBanditFaction { get; }` |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public abstract int NumberOfMinimumBanditTroopsInHideoutMission { get; }` |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public abstract int NumberOfMaximumTroopCountForFirstFightInHideout { get; }` |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public abstract int NumberOfMaximumTroopCountForBossFightInHideout { get; }` |
| `SpawnPercentageForFirstFightInHideoutMission` | `public abstract float SpawnPercentageForFirstFightInHideoutMission { get; }` |

## Key Methods

### GetMaxSupportedNumberOfLootersForClan
`public abstract int GetMaxSupportedNumberOfLootersForClan(Clan clan)`

**Purpose:** Reads and returns the `max supported number of looters for clan` value held by the current object.

```csharp
// Obtain an instance of BanditDensityModel from the subsystem API first
BanditDensityModel banditDensityModel = ...;
var result = banditDensityModel.GetMaxSupportedNumberOfLootersForClan(clan);
```

### GetMinimumTroopCountForHideoutMission
`public abstract int GetMinimumTroopCountForHideoutMission(MobileParty party)`

**Purpose:** Reads and returns the `minimum troop count for hideout mission` value held by the current object.

```csharp
// Obtain an instance of BanditDensityModel from the subsystem API first
BanditDensityModel banditDensityModel = ...;
var result = banditDensityModel.GetMinimumTroopCountForHideoutMission(party);
```

### GetMaximumTroopCountForHideoutMission
`public abstract int GetMaximumTroopCountForHideoutMission(MobileParty party)`

**Purpose:** Reads and returns the `maximum troop count for hideout mission` value held by the current object.

```csharp
// Obtain an instance of BanditDensityModel from the subsystem API first
BanditDensityModel banditDensityModel = ...;
var result = banditDensityModel.GetMaximumTroopCountForHideoutMission(party);
```

### IsPositionInsideNavalSafeZone
`public abstract bool IsPositionInsideNavalSafeZone(CampaignVec2 position)`

**Purpose:** Determines whether the current object is in the `position inside naval safe zone` state or condition.

```csharp
// Obtain an instance of BanditDensityModel from the subsystem API first
BanditDensityModel banditDensityModel = ...;
var result = banditDensityModel.IsPositionInsideNavalSafeZone(position);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BanditDensityModel instance = ...;
```

## See Also

- [Area Index](../)