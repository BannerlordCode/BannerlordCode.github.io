---
title: "MissionGauntletMultiplayerOrderUIHandler"
description: "Auto-generated class reference for MissionGauntletMultiplayerOrderUIHandler."
---
# MissionGauntletMultiplayerOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMultiplayerOrderUIHandler : GauntletOrderUIHandler`
**Base:** `GauntletOrderUIHandler`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletMultiplayerOrderUIHandler.cs`

## Overview

`MissionGauntletMultiplayerOrderUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionGauntletMultiplayerOrderUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValidForTick` | `public override bool IsValidForTick { get; }` |

## Key Methods

### IsReady
`public override bool IsReady()`

**Purpose:** **Purpose:** Determines whether the this instance is in the ready state or condition.

```csharp
// Obtain an instance of MissionGauntletMultiplayerOrderUIHandler from the subsystem API first
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
var result = missionGauntletMultiplayerOrderUIHandler.IsReady();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionGauntletMultiplayerOrderUIHandler from the subsystem API first
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
missionGauntletMultiplayerOrderUIHandler.AfterStart();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletMultiplayerOrderUIHandler from the subsystem API first
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
missionGauntletMultiplayerOrderUIHandler.OnMissionScreenTick(0);
```

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** **Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletMultiplayerOrderUIHandler from the subsystem API first
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
missionGauntletMultiplayerOrderUIHandler.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** **Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletMultiplayerOrderUIHandler from the subsystem API first
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
missionGauntletMultiplayerOrderUIHandler.OnMissionScreenFinalize();
```

### InitializeInADisgustingManner
`public void InitializeInADisgustingManner()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by in a disgusting manner.

```csharp
// Obtain an instance of MissionGauntletMultiplayerOrderUIHandler from the subsystem API first
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
missionGauntletMultiplayerOrderUIHandler.InitializeInADisgustingManner();
```

### ValidateInADisgustingManner
`public void ValidateInADisgustingManner()`

**Purpose:** **Purpose:** Checks whether in a disgusting manner satisfies the required constraints, usually returning a boolean.

```csharp
// Obtain an instance of MissionGauntletMultiplayerOrderUIHandler from the subsystem API first
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
missionGauntletMultiplayerOrderUIHandler.ValidateInADisgustingManner();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletMultiplayerOrderUIHandler>();
```

## See Also

- [Area Index](../)