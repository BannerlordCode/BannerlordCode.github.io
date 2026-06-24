<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EquipmentSelectionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EquipmentSelectionModel : MBGameModel<EquipmentSelectionModel>`
**Base:** `MBGameModel<EquipmentSelectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs`

## Overview

`EquipmentSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `EquipmentSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEquipmentRostersForHeroComeOfAge
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForHeroComeOfAge(Hero hero, bool isCivilian)`

**Purpose:** Gets the current value of `equipment rosters for hero come of age`.

### GetEquipmentRostersForHeroReachesTeenAge
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForHeroReachesTeenAge(Hero hero)`

**Purpose:** Gets the current value of `equipment rosters for hero reaches teen age`.

### GetEquipmentRostersForInitialChildrenGeneration
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForInitialChildrenGeneration(Hero hero)`

**Purpose:** Gets the current value of `equipment rosters for initial children generation`.

### GetEquipmentRostersForDeliveredOffspring
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForDeliveredOffspring(Hero hero)`

**Purpose:** Gets the current value of `equipment rosters for delivered offspring`.

### GetEquipmentRostersForCompanion
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForCompanion(Hero companionHero, bool isCivilian)`

**Purpose:** Gets the current value of `equipment rosters for companion`.

## Usage Example

```csharp
var implementation = new CustomEquipmentSelectionModel();
```

## See Also

- [Complete Class Catalog](../catalog)