---
title: "CustomMissionSpawnHandler"
description: "Auto-generated class reference for CustomMissionSpawnHandler."
---
# CustomMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomMissionSpawnHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.MissionSpawnHandlers/CustomMissionSpawnHandler.cs`

## Overview

`CustomMissionSpawnHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CustomMissionSpawnHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of CustomMissionSpawnHandler from the subsystem API first
CustomMissionSpawnHandler customMissionSpawnHandler = ...;
customMissionSpawnHandler.OnBehaviorInitialize();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CustomMissionSpawnHandler>();
```

## See Also

- [Area Index](../)