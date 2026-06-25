---
title: "MissionAgentPanicHandler"
description: "Auto-generated class reference for MissionAgentPanicHandler."
---
# MissionAgentPanicHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentPanicHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionAgentPanicHandler.cs`

## Overview

`MissionAgentPanicHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionAgentPanicHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentPanicked
`public override void OnAgentPanicked(Agent agent)`

**Purpose:** Invoked when the agent panicked event is raised.

```csharp
// Obtain an instance of MissionAgentPanicHandler from the subsystem API first
MissionAgentPanicHandler missionAgentPanicHandler = ...;
missionAgentPanicHandler.OnAgentPanicked(agent);
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the pre mission tick event is raised.

```csharp
// Obtain an instance of MissionAgentPanicHandler from the subsystem API first
MissionAgentPanicHandler missionAgentPanicHandler = ...;
missionAgentPanicHandler.OnPreMissionTick(0);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionAgentPanicHandler from the subsystem API first
MissionAgentPanicHandler missionAgentPanicHandler = ...;
missionAgentPanicHandler.OnRemoveBehavior();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAgentPanicHandler>();
```

## See Also

- [Area Index](../)