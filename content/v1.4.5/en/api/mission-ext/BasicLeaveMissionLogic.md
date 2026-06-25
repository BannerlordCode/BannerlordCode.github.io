---
title: "BasicLeaveMissionLogic"
description: "Auto-generated class reference for BasicLeaveMissionLogic."
---
# BasicLeaveMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicLeaveMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BasicLeaveMissionLogic.cs`

## Overview

`BasicLeaveMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BasicLeaveMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** **Purpose:** Executes the MissionEnded logic.

```csharp
// Obtain an instance of BasicLeaveMissionLogic from the subsystem API first
BasicLeaveMissionLogic basicLeaveMissionLogic = ...;
var result = basicLeaveMissionLogic.MissionEnded(missionResult);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** **Purpose:** Invoked when the end mission request event is raised.

```csharp
// Obtain an instance of BasicLeaveMissionLogic from the subsystem API first
BasicLeaveMissionLogic basicLeaveMissionLogic = ...;
var result = basicLeaveMissionLogic.OnEndMissionRequest(canPlayerLeave);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BasicLeaveMissionLogic>();
```

## See Also

- [Area Index](../)