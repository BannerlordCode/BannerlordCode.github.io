<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class LocationModel : MBGameModel<LocationModel>`
**Base:** `MBGameModel<LocationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/LocationModel.cs`

## Overview

`LocationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<LocationModel>(new MyLocationModel())` to change how it computes.

## Key Methods

### GetSettlementUpgradeLevel
```csharp
public abstract int GetSettlementUpgradeLevel(LocationEncounter locationEncounter)
```

### GetCivilianSceneLevel
```csharp
public abstract string GetCivilianSceneLevel(Settlement settlement)
```

### GetCivilianUpgradeLevelTag
```csharp
public abstract string GetCivilianUpgradeLevelTag(int upgradeLevel)
```

### GetUpgradeLevelTag
```csharp
public abstract string GetUpgradeLevelTag(int upgradeLevel)
```

## Usage Example

```csharp
// Typical usage of LocationModel (Model)
Game.Current.ReplaceModel<LocationModel>(new MyLocationModel());
```

## See Also

- [Complete Class Catalog](../catalog)