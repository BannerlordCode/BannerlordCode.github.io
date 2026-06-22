<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EquipmentSelectionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EquipmentSelectionModel : MBGameModel<EquipmentSelectionModel>`
**Base:** `MBGameModel<EquipmentSelectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs`

## Overview

`EquipmentSelectionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<EquipmentSelectionModel>(new MyEquipmentSelectionModel())` to change how it computes.

## Key Methods

### GetEquipmentRostersForHeroComeOfAge
```csharp
public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForHeroComeOfAge(Hero hero, bool isCivilian)
```

### GetEquipmentRostersForHeroReachesTeenAge
```csharp
public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForHeroReachesTeenAge(Hero hero)
```

### GetEquipmentRostersForInitialChildrenGeneration
```csharp
public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForInitialChildrenGeneration(Hero hero)
```

### GetEquipmentRostersForDeliveredOffspring
```csharp
public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForDeliveredOffspring(Hero hero)
```

### GetEquipmentRostersForCompanion
```csharp
public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForCompanion(Hero companionHero, bool isCivilian)
```

## Usage Example

```csharp
// Typical usage of EquipmentSelectionModel (Model)
Game.Current.ReplaceModel<EquipmentSelectionModel>(new MyEquipmentSelectionModel());
```

## See Also

- [Complete Class Catalog](../catalog)