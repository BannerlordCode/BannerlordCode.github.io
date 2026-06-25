---
title: "MissionCrosshair"
description: "Auto-generated class reference for MissionCrosshair."
---
# MissionCrosshair

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCrosshair : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionCrosshair.cs`

## Overview

`MissionCrosshair` lives in `TaleWorlds.MountAndBlade.View.MissionViews` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.MissionViews` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** **Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionCrosshair from the subsystem API first
MissionCrosshair missionCrosshair = ...;
missionCrosshair.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionCrosshair from the subsystem API first
MissionCrosshair missionCrosshair = ...;
missionCrosshair.OnMissionScreenTick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionCrosshair missionCrosshair = ...;
missionCrosshair.OnMissionScreenInitialize();
```

## See Also

- [Area Index](../)