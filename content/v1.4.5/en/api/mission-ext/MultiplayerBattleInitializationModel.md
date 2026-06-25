---
title: "MultiplayerBattleInitializationModel"
description: "Auto-generated class reference for MultiplayerBattleInitializationModel."
---
# MultiplayerBattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleInitializationModel : BattleInitializationModel`
**Base:** `BattleInitializationModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerBattleInitializationModel.cs`

## Overview

`MultiplayerBattleInitializationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MultiplayerBattleInitializationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAllAvailableTroopTypes
`public override List<FormationClass> GetAllAvailableTroopTypes()`

**Purpose:** Reads and returns the all available troop types value held by the this instance.

```csharp
// Obtain an instance of MultiplayerBattleInitializationModel from the subsystem API first
MultiplayerBattleInitializationModel multiplayerBattleInitializationModel = ...;
var result = multiplayerBattleInitializationModel.GetAllAvailableTroopTypes();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<MultiplayerBattleInitializationModel>(new MyMultiplayerBattleInitializationModel());
```

## See Also

- [Area Index](../)