<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BanditDensityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BanditDensityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>`
**Base:** `MBGameModel<BanditDensityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs`

## Overview

`BanditDensityModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BanditDensityModel>(new MyBanditDensityModel())` to change how it computes.

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
```csharp
public abstract int GetMaxSupportedNumberOfLootersForClan(Clan clan)
```

### GetMinimumTroopCountForHideoutMission
```csharp
public abstract int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)
```

### GetMaximumTroopCountForHideoutMission
```csharp
public abstract int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)
```

### IsPositionInsideNavalSafeZone
```csharp
public abstract bool IsPositionInsideNavalSafeZone(CampaignVec2 position)
```

## Usage Example

```csharp
// Typical usage of BanditDensityModel (Model)
Game.Current.ReplaceModel<BanditDensityModel>(new MyBanditDensityModel());
```

## See Also

- [Complete Class Catalog](../catalog)