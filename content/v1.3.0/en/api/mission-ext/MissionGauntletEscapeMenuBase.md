---
title: "MissionGauntletEscapeMenuBase"
description: "Auto-generated class reference for MissionGauntletEscapeMenuBase."
---
# MissionGauntletEscapeMenuBase

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionGauntletEscapeMenuBase : MissionEscapeMenuView`
**Base:** `MissionEscapeMenuView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletEscapeMenuBase.cs`

## Overview

`MissionGauntletEscapeMenuBase` lives in `TaleWorlds.MountAndBlade.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletEscapeMenuBase from the subsystem API first
MissionGauntletEscapeMenuBase missionGauntletEscapeMenuBase = ...;
missionGauntletEscapeMenuBase.OnMissionScreenFinalize();
```

### OnEscape
`public override bool OnEscape()`

**Purpose:** Invoked when the escape event is raised.

```csharp
// Obtain an instance of MissionGauntletEscapeMenuBase from the subsystem API first
MissionGauntletEscapeMenuBase missionGauntletEscapeMenuBase = ...;
var result = missionGauntletEscapeMenuBase.OnEscape();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletEscapeMenuBase from the subsystem API first
MissionGauntletEscapeMenuBase missionGauntletEscapeMenuBase = ...;
missionGauntletEscapeMenuBase.OnMissionScreenTick(0);
```

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**Purpose:** Invoked when the scene rendering started event is raised.

```csharp
// Obtain an instance of MissionGauntletEscapeMenuBase from the subsystem API first
MissionGauntletEscapeMenuBase missionGauntletEscapeMenuBase = ...;
missionGauntletEscapeMenuBase.OnSceneRenderingStarted();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionGauntletEscapeMenuBase instance = ...;
```

## See Also

- [Area Index](../)