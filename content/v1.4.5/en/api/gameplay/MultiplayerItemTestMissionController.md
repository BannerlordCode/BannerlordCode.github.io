---
title: "MultiplayerItemTestMissionController"
description: "Auto-generated class reference for MultiplayerItemTestMissionController."
---
# MultiplayerItemTestMissionController

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class MultiplayerItemTestMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/SandBox/MultiplayerItemTestMissionController.cs`

## Overview

`MultiplayerItemTestMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `MultiplayerItemTestMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MultiplayerItemTestMissionController from the subsystem API first
MultiplayerItemTestMissionController multiplayerItemTestMissionController = ...;
multiplayerItemTestMissionController.AfterStart();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<MultiplayerItemTestMissionController>();
```

## See Also

- [Area Index](../../)