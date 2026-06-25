---
title: "BattleInitializationModel"
description: "Auto-generated class reference for BattleInitializationModel."
---
# BattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleInitializationModel : MBGameModel<BattleInitializationModel>`
**Base:** `MBGameModel<BattleInitializationModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/BattleInitializationModel.cs`

## Overview

`BattleInitializationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BattleInitializationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BypassPlayerDeployment` | `public static bool BypassPlayerDeployment { get; }` |

## Key Methods

### GetAllAvailableTroopTypes
`public abstract List<FormationClass> GetAllAvailableTroopTypes()`

**Purpose:** Reads and returns the `all available troop types` value held by the current object.

```csharp
// Obtain an instance of BattleInitializationModel from the subsystem API first
BattleInitializationModel battleInitializationModel = ...;
var result = battleInitializationModel.GetAllAvailableTroopTypes();
```

### CanPlayerSideDeployWithOrderOfBattle
`public bool CanPlayerSideDeployWithOrderOfBattle()`

**Purpose:** Checks whether the current object meets the preconditions for `player side deploy with order of battle`.

```csharp
// Obtain an instance of BattleInitializationModel from the subsystem API first
BattleInitializationModel battleInitializationModel = ...;
var result = battleInitializationModel.CanPlayerSideDeployWithOrderOfBattle();
```

### InitializeModel
`public void InitializeModel()`

**Purpose:** Prepares the resources, state, or bindings required by `model`.

```csharp
// Obtain an instance of BattleInitializationModel from the subsystem API first
BattleInitializationModel battleInitializationModel = ...;
battleInitializationModel.InitializeModel();
```

### FinalizeModel
`public void FinalizeModel()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleInitializationModel from the subsystem API first
BattleInitializationModel battleInitializationModel = ...;
battleInitializationModel.FinalizeModel();
```

### SetBypassPlayerDeployment
`public static void SetBypassPlayerDeployment(bool value)`

**Purpose:** Assigns a new value to `bypass player deployment` and updates the object's internal state.

```csharp
// Static call; no instance required
BattleInitializationModel.SetBypassPlayerDeployment(false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BattleInitializationModel instance = ...;
```

## See Also

- [Area Index](../)