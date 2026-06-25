---
title: "CustomBattleSpawnModel"
description: "Auto-generated class reference for CustomBattleSpawnModel."
---
# CustomBattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleSpawnModel : BattleSpawnModel`
**Base:** `BattleSpawnModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleSpawnModel.cs`

## Overview

`CustomBattleSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CustomBattleSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionStart
`public override void OnMissionStart()`

**Purpose:** Invoked when the `mission start` event is raised.

```csharp
// Obtain an instance of CustomBattleSpawnModel from the subsystem API first
CustomBattleSpawnModel customBattleSpawnModel = ...;
customBattleSpawnModel.OnMissionStart();
```

### OnMissionEnd
`public override void OnMissionEnd()`

**Purpose:** Invoked when the `mission end` event is raised.

```csharp
// Obtain an instance of CustomBattleSpawnModel from the subsystem API first
CustomBattleSpawnModel customBattleSpawnModel = ...;
customBattleSpawnModel.OnMissionEnd();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleSpawnModel>(new MyCustomBattleSpawnModel());
```

## See Also

- [Area Index](../)