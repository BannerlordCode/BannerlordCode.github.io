---
title: "LocationItemSpawnHandler"
description: "Auto-generated class reference for LocationItemSpawnHandler."
---
# LocationItemSpawnHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class LocationItemSpawnHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/LocationItemSpawnHandler.cs`

## Overview

`LocationItemSpawnHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `LocationItemSpawnHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of LocationItemSpawnHandler from the subsystem API first
LocationItemSpawnHandler locationItemSpawnHandler = ...;
locationItemSpawnHandler.AfterStart();
```

### OnEntityRemoved
`public override void OnEntityRemoved(GameEntity entity)`

**Purpose:** Invoked when the entity removed event is raised.

```csharp
// Obtain an instance of LocationItemSpawnHandler from the subsystem API first
LocationItemSpawnHandler locationItemSpawnHandler = ...;
locationItemSpawnHandler.OnEntityRemoved(entity);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<LocationItemSpawnHandler>();
```

## See Also

- [Area Index](../)