---
title: "StealthMissionUIHandler"
description: "Auto-generated class reference for StealthMissionUIHandler."
---
# StealthMissionUIHandler

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class StealthMissionUIHandler : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/StealthMissionUIHandler.cs`

## Overview

`StealthMissionUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `StealthMissionUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the `mission screen tick` event is raised.

```csharp
// Obtain an instance of StealthMissionUIHandler from the subsystem API first
StealthMissionUIHandler stealthMissionUIHandler = ...;
stealthMissionUIHandler.OnMissionScreenTick(0);
```

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Invoked when the `object used` event is raised.

```csharp
// Obtain an instance of StealthMissionUIHandler from the subsystem API first
StealthMissionUIHandler stealthMissionUIHandler = ...;
stealthMissionUIHandler.OnObjectUsed(userAgent, usedObject);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<StealthMissionUIHandler>();
```

## See Also

- [Area Index](../)