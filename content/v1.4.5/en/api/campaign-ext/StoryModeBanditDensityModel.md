---
title: "StoryModeBanditDensityModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeBanditDensityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeBanditDensityModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBanditDensityModel : BanditDensityModel`
**Base:** `BanditDensityModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeBanditDensityModel.cs`

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

**Purpose:** Gets the current value of `maximum troop count for hideout mission`.

### IsPositionInsideNavalSafeZone
`public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)`

**Purpose:** Handles logic related to `is position inside naval safe zone`.

### GetMaxSupportedNumberOfLootersForClan
`public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)`

**Purpose:** Gets the current value of `max supported number of looters for clan`.

### GetMinimumTroopCountForHideoutMission
`public override int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)`

**Purpose:** Gets the current value of `minimum troop count for hideout mission`.

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeBanditDensityModel>(new MyStoryModeBanditDensityModel());
```

## See Also

- [Complete Class Catalog](../catalog)