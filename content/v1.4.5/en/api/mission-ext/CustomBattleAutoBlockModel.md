---
title: "CustomBattleAutoBlockModel"
description: "Auto-generated class reference for CustomBattleAutoBlockModel."
---
# CustomBattleAutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAutoBlockModel : AutoBlockModel`
**Base:** `AutoBlockModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleAutoBlockModel.cs`

## Overview

`CustomBattleAutoBlockModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CustomBattleAutoBlockModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBlockDirection
`public override Agent.UsageDirection GetBlockDirection(Mission mission)`

**Purpose:** Reads and returns the `block direction` value held by the current object.

```csharp
// Obtain an instance of CustomBattleAutoBlockModel from the subsystem API first
CustomBattleAutoBlockModel customBattleAutoBlockModel = ...;
var result = customBattleAutoBlockModel.GetBlockDirection(mission);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleAutoBlockModel>(new MyCustomBattleAutoBlockModel());
```

## See Also

- [Area Index](../)