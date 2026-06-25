---
title: "BattleInitializationModel"
description: "Auto-generated class reference for BattleInitializationModel."
---
# BattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleInitializationModel : MBGameModel<BattleInitializationModel>`
**Base:** `MBGameModel<BattleInitializationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs`

## Overview

`BattleInitializationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BattleInitializationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAllAvailableTroopTypes
`public abstract List<FormationClass> GetAllAvailableTroopTypes()`

**Purpose:** **Purpose:** Reads and returns the all available troop types value held by the this instance.

```csharp
// Obtain an instance of BattleInitializationModel from the subsystem API first
BattleInitializationModel battleInitializationModel = ...;
var result = battleInitializationModel.GetAllAvailableTroopTypes();
```

### CanPlayerSideDeployWithOrderOfBattle
`public bool CanPlayerSideDeployWithOrderOfBattle()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for player side deploy with order of battle.

```csharp
// Obtain an instance of BattleInitializationModel from the subsystem API first
BattleInitializationModel battleInitializationModel = ...;
var result = battleInitializationModel.CanPlayerSideDeployWithOrderOfBattle();
```

### InitializeModel
`public void InitializeModel()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by model.

```csharp
// Obtain an instance of BattleInitializationModel from the subsystem API first
BattleInitializationModel battleInitializationModel = ...;
battleInitializationModel.InitializeModel();
```

### FinalizeModel
`public void FinalizeModel()`

**Purpose:** **Purpose:** Executes the FinalizeModel logic.

```csharp
// Obtain an instance of BattleInitializationModel from the subsystem API first
BattleInitializationModel battleInitializationModel = ...;
battleInitializationModel.FinalizeModel();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BattleInitializationModel instance = ...;
```

## See Also

- [Area Index](../)