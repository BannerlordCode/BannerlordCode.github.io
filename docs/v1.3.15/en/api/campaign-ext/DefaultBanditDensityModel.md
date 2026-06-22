<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBanditDensityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBanditDensityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBanditDensityModel : BanditDensityModel`
**Base:** `BanditDensityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBanditDensityModel.cs`

## Overview

`DefaultBanditDensityModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultBanditDensityModel>(new MyDefaultBanditDensityModel())` to change how it computes.

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
```csharp
public override int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)
```

### GetMaxSupportedNumberOfLootersForClan
```csharp
public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)
```

### GetMaximumTroopCountForHideoutMission
```csharp
public override int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)
```

### IsPositionInsideNavalSafeZone
```csharp
public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)
```

## Usage Example

```csharp
// Typical usage of DefaultBanditDensityModel (Model)
Game.Current.ReplaceModel<DefaultBanditDensityModel>(new MyDefaultBanditDensityModel());
```

## See Also

- [Complete Class Catalog](../catalog)