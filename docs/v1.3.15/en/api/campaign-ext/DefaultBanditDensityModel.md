<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBanditDensityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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
`public override int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)`

**Purpose:** Gets the current value of `minimum troop count for hideout mission`.

### GetMaxSupportedNumberOfLootersForClan
`public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)`

**Purpose:** Gets the current value of `max supported number of looters for clan`.

### GetMaximumTroopCountForHideoutMission
`public override int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)`

**Purpose:** Gets the current value of `maximum troop count for hideout mission`.

### IsPositionInsideNavalSafeZone
`public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)`

**Purpose:** Handles logic related to `is position inside naval safe zone`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBanditDensityModel>(new MyDefaultBanditDensityModel());
```

## See Also

- [Complete Class Catalog](../catalog)