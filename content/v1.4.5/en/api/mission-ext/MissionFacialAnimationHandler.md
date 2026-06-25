---
title: "MissionFacialAnimationHandler"
description: "Auto-generated class reference for MissionFacialAnimationHandler."
---
# MissionFacialAnimationHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFacialAnimationHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions.Handlers/MissionFacialAnimationHandler.cs`

## Overview

`MissionFacialAnimationHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionFacialAnimationHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionFacialAnimationHandler from the subsystem API first
MissionFacialAnimationHandler missionFacialAnimationHandler = ...;
missionFacialAnimationHandler.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionFacialAnimationHandler from the subsystem API first
MissionFacialAnimationHandler missionFacialAnimationHandler = ...;
missionFacialAnimationHandler.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of MissionFacialAnimationHandler from the subsystem API first
MissionFacialAnimationHandler missionFacialAnimationHandler = ...;
missionFacialAnimationHandler.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionFacialAnimationHandler>();
```

## See Also

- [Area Index](../)