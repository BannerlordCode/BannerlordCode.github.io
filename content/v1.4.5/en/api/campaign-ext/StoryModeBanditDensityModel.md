---
title: "StoryModeBanditDensityModel"
description: "Auto-generated class reference for StoryModeBanditDensityModel."
---
# StoryModeBanditDensityModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBanditDensityModel : BanditDensityModel`
**Base:** `BanditDensityModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeBanditDensityModel.cs`

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

## Key Methods

### GetMaximumTroopCountForHideoutMission
`public override int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)`

**Purpose:** Reads and returns the `maximum troop count for hideout mission` value held by the current object.

```csharp
// Obtain an instance of StoryModeBanditDensityModel from the subsystem API first
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.GetMaximumTroopCountForHideoutMission(party, false);
```

### IsPositionInsideNavalSafeZone
`public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)`

**Purpose:** Determines whether the current object is in the `position inside naval safe zone` state or condition.

```csharp
// Obtain an instance of StoryModeBanditDensityModel from the subsystem API first
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.IsPositionInsideNavalSafeZone(position);
```

### GetMaxSupportedNumberOfLootersForClan
`public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)`

**Purpose:** Reads and returns the `max supported number of looters for clan` value held by the current object.

```csharp
// Obtain an instance of StoryModeBanditDensityModel from the subsystem API first
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.GetMaxSupportedNumberOfLootersForClan(clan);
```

### GetMinimumTroopCountForHideoutMission
`public override int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)`

**Purpose:** Reads and returns the `minimum troop count for hideout mission` value held by the current object.

```csharp
// Obtain an instance of StoryModeBanditDensityModel from the subsystem API first
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.GetMinimumTroopCountForHideoutMission(party, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeBanditDensityModel>(new MyStoryModeBanditDensityModel());
```

## See Also

- [Area Index](../)