<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultEquipmentSelectionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultEquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEquipmentSelectionModel : EquipmentSelectionModel`
**Base:** `EquipmentSelectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEquipmentSelectionModel.cs`

## Overview

`DefaultEquipmentSelectionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultEquipmentSelectionModel>(new MyDefaultEquipmentSelectionModel())` to change how it computes.

## Key Methods

### GetEquipmentRostersForHeroComeOfAge
```csharp
public override MBList<MBEquipmentRoster> GetEquipmentRostersForHeroComeOfAge(Hero hero, bool isCivilian)
```

### GetEquipmentRostersForHeroReachesTeenAge
```csharp
public override MBList<MBEquipmentRoster> GetEquipmentRostersForHeroReachesTeenAge(Hero hero)
```

### GetEquipmentRostersForInitialChildrenGeneration
```csharp
public override MBList<MBEquipmentRoster> GetEquipmentRostersForInitialChildrenGeneration(Hero hero)
```

### GetEquipmentRostersForDeliveredOffspring
```csharp
public override MBList<MBEquipmentRoster> GetEquipmentRostersForDeliveredOffspring(Hero hero)
```

### GetEquipmentRostersForCompanion
```csharp
public override MBList<MBEquipmentRoster> GetEquipmentRostersForCompanion(Hero hero, bool isCivilian)
```

## Usage Example

```csharp
// Typical usage of DefaultEquipmentSelectionModel (Model)
Game.Current.ReplaceModel<DefaultEquipmentSelectionModel>(new MyDefaultEquipmentSelectionModel());
```

## See Also

- [Complete Class Catalog](../catalog)