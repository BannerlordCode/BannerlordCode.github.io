---
title: "RecordMissionLogic"
description: "Auto-generated class reference for RecordMissionLogic."
---
# RecordMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RecordMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/RecordMissionLogic.cs`

## Overview

`RecordMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `RecordMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of RecordMissionLogic from the subsystem API first
RecordMissionLogic recordMissionLogic = ...;
recordMissionLogic.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of RecordMissionLogic from the subsystem API first
RecordMissionLogic recordMissionLogic = ...;
recordMissionLogic.OnMissionTick(0);
```

### OnEndMissionInternal
`public override void OnEndMissionInternal()`

**Purpose:** Invoked when the end mission internal event is raised.

```csharp
// Obtain an instance of RecordMissionLogic from the subsystem API first
RecordMissionLogic recordMissionLogic = ...;
recordMissionLogic.OnEndMissionInternal();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<RecordMissionLogic>();
```

## See Also

- [Area Index](../)