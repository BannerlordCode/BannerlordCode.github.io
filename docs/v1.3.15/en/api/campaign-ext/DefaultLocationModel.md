<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultLocationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultLocationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultLocationModel : LocationModel`
**Base:** `LocationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultLocationModel.cs`

## Overview

`DefaultLocationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultLocationModel>(new MyDefaultLocationModel())` to change how it computes.

## Key Methods

### GetSettlementUpgradeLevel
```csharp
public override int GetSettlementUpgradeLevel(LocationEncounter locationEncounter)
```

### GetCivilianSceneLevel
```csharp
public override string GetCivilianSceneLevel(Settlement settlement)
```

### GetCivilianUpgradeLevelTag
```csharp
public override string GetCivilianUpgradeLevelTag(int upgradeLevel)
```

### GetUpgradeLevelTag
```csharp
public override string GetUpgradeLevelTag(int upgradeLevel)
```

## Usage Example

```csharp
// Typical usage of DefaultLocationModel (Model)
Game.Current.ReplaceModel<DefaultLocationModel>(new MyDefaultLocationModel());
```

## See Also

- [Complete Class Catalog](../catalog)