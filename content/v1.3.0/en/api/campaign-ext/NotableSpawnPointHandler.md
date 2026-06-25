---
title: "NotableSpawnPointHandler"
description: "Auto-generated class reference for NotableSpawnPointHandler."
---
# NotableSpawnPointHandler

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class NotableSpawnPointHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/AgentBehaviors/NotableSpawnPointHandler.cs`

## Overview

`NotableSpawnPointHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `NotableSpawnPointHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of NotableSpawnPointHandler from the subsystem API first
NotableSpawnPointHandler notableSpawnPointHandler = ...;
notableSpawnPointHandler.OnBehaviorInitialize();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<NotableSpawnPointHandler>();
```

## See Also

- [Area Index](../)