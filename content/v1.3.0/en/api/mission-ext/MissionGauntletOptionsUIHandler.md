---
title: "MissionGauntletOptionsUIHandler"
description: "Auto-generated class reference for MissionGauntletOptionsUIHandler."
---
# MissionGauntletOptionsUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletOptionsUIHandler : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletOptionsUIHandler.cs`

## Overview

`MissionGauntletOptionsUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionGauntletOptionsUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; }` |

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletOptionsUIHandler from the subsystem API first
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
missionGauntletOptionsUIHandler.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletOptionsUIHandler from the subsystem API first
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
missionGauntletOptionsUIHandler.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletOptionsUIHandler from the subsystem API first
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
missionGauntletOptionsUIHandler.OnMissionScreenTick(0);
```

### OnEscape
`public override bool OnEscape()`

**Purpose:** Invoked when the escape event is raised.

```csharp
// Obtain an instance of MissionGauntletOptionsUIHandler from the subsystem API first
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
var result = missionGauntletOptionsUIHandler.OnEscape();
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**Purpose:** Determines whether the this instance is in the opening escape menu on focus change allowed state or condition.

```csharp
// Obtain an instance of MissionGauntletOptionsUIHandler from the subsystem API first
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
var result = missionGauntletOptionsUIHandler.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletOptionsUIHandler>();
```

## See Also

- [Area Index](../)