---
title: "SandboxBattleInitializationModel"
description: "Auto-generated class reference for SandboxBattleInitializationModel."
---
# SandboxBattleInitializationModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxBattleInitializationModel : BattleInitializationModel`
**Base:** `BattleInitializationModel`
**File:** `Modules.SandBox/SandBox/SandBox.GameComponents/SandboxBattleInitializationModel.cs`

## Overview

`SandboxBattleInitializationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxBattleInitializationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAllAvailableTroopTypes
`public override List<FormationClass> GetAllAvailableTroopTypes()`

**Purpose:** Reads and returns the `all available troop types` value held by the current object.

```csharp
// Obtain an instance of SandboxBattleInitializationModel from the subsystem API first
SandboxBattleInitializationModel sandboxBattleInitializationModel = ...;
var result = sandboxBattleInitializationModel.GetAllAvailableTroopTypes();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxBattleInitializationModel>(new MySandboxBattleInitializationModel());
```

## See Also

- [Area Index](../)