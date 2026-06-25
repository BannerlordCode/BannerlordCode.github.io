---
title: "CustomBattleInitializationModel"
description: "Auto-generated class reference for CustomBattleInitializationModel."
---
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

**Purpose:** **Purpose:** Reads and returns the all available troop types value held by the this instance.

```csharp
// Obtain an instance of CustomBattleInitializationModel from the subsystem API first
CustomBattleInitializationModel customBattleInitializationModel = ...;
var result = customBattleInitializationModel.GetAllAvailableTroopTypes();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleInitializationModel>(new MyCustomBattleInitializationModel());
```

## See Also

- [Area Index](../)