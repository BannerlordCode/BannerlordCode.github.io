---
title: "StoryModeBanditDensityModel"
description: "Auto-generated class reference for StoryModeBanditDensityModel."
---
# StoryModeBanditDensityModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBanditDensityModel : BanditDensityModel`
**Base:** `BanditDensityModel`
**File:** `StoryMode/GameComponents/StoryModeBanditDensityModel.cs`

## Overview

`StoryModeBanditDensityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeBanditDensityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public override int NumberOfMaximumBanditPartiesAroundEachHideout { get; }` |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public override int NumberOfMaximumBanditPartiesInEachHideout { get; }` |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public override int NumberOfMaximumHideoutsAtEachBanditFaction { get; }` |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public override int NumberOfInitialHideoutsAtEachBanditFaction { get; }` |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public override int NumberOfMinimumBanditPartiesInAHideoutToInfestIt { get; }` |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public override int NumberOfMinimumBanditTroopsInHideoutMission { get; }` |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public override int NumberOfMaximumTroopCountForFirstFightInHideout { get; }` |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public override int NumberOfMaximumTroopCountForBossFightInHideout { get; }` |
| `SpawnPercentageForFirstFightInHideoutMission` | `public override float SpawnPercentageForFirstFightInHideoutMission { get; }` |

## Key Methods

### GetMaximumTroopCountForHideoutMission
`public override int GetMaximumTroopCountForHideoutMission(MobileParty party)`

**Purpose:** **Purpose:** Reads and returns the maximum troop count for hideout mission value held by the this instance.

```csharp
// Obtain an instance of StoryModeBanditDensityModel from the subsystem API first
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.GetMaximumTroopCountForHideoutMission(party);
```

### IsPositionInsideNavalSafeZone
`public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)`

**Purpose:** **Purpose:** Determines whether the this instance is in the position inside naval safe zone state or condition.

```csharp
// Obtain an instance of StoryModeBanditDensityModel from the subsystem API first
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.IsPositionInsideNavalSafeZone(position);
```

### GetMaxSupportedNumberOfLootersForClan
`public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)`

**Purpose:** **Purpose:** Reads and returns the max supported number of looters for clan value held by the this instance.

```csharp
// Obtain an instance of StoryModeBanditDensityModel from the subsystem API first
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.GetMaxSupportedNumberOfLootersForClan(clan);
```

### GetMinimumTroopCountForHideoutMission
`public override int GetMinimumTroopCountForHideoutMission(MobileParty party)`

**Purpose:** **Purpose:** Reads and returns the minimum troop count for hideout mission value held by the this instance.

```csharp
// Obtain an instance of StoryModeBanditDensityModel from the subsystem API first
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.GetMinimumTroopCountForHideoutMission(party);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeBanditDensityModel>(new MyStoryModeBanditDensityModel());
```

## See Also

- [Area Index](../)