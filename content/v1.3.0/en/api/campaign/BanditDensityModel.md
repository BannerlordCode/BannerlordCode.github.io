---
title: "BanditDensityModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BanditDensityModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `max supported number of looters for clan`.

### GetMinimumTroopCountForHideoutMission
`public abstract int GetMinimumTroopCountForHideoutMission(MobileParty party)`

**Purpose:** Gets the current value of `minimum troop count for hideout mission`.

### GetMaximumTroopCountForHideoutMission
`public abstract int GetMaximumTroopCountForHideoutMission(MobileParty party)`

**Purpose:** Gets the current value of `maximum troop count for hideout mission`.

### IsPositionInsideNavalSafeZone
`public abstract bool IsPositionInsideNavalSafeZone(CampaignVec2 position)`

**Purpose:** Handles logic related to `is position inside naval safe zone`.

## Usage Example

```csharp
var implementation = new CustomBanditDensityModel();
```

## See Also

- [Complete Class Catalog](../catalog)