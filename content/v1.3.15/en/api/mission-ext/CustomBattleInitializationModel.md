---
title: "CustomBattleInitializationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleInitializationModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleInitializationModel : BattleInitializationModel`
**Base:** `BattleInitializationModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleInitializationModel.cs`

## Overview

`CustomBattleInitializationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CustomBattleInitializationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAllAvailableTroopTypes
`public override List<FormationClass> GetAllAvailableTroopTypes()`

**Purpose:** Gets the current value of `all available troop types`.

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleInitializationModel>(new MyCustomBattleInitializationModel());
```

## See Also

- [Complete Class Catalog](../catalog)