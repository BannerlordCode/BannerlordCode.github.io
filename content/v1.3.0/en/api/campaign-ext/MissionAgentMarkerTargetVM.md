---
title: "MissionAgentMarkerTargetVM"
description: "Auto-generated class reference for MissionAgentMarkerTargetVM."
---
# MissionAgentMarkerTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker.Targets
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionAgentMarkerTargetVM : MissionNameMarkerTargetVM<Agent>`
**Base:** `MissionNameMarkerTargetVM<Agent>`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs`

## Overview

`MissionAgentMarkerTargetVM` lives in `SandBox.ViewModelCollection.Missions.NameMarker.Targets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### UpdatePosition
`public override void UpdatePosition(Camera missionCamera)`

**Purpose:** Recalculates and stores the latest representation of position.

```csharp
// Obtain an instance of MissionAgentMarkerTargetVM from the subsystem API first
MissionAgentMarkerTargetVM missionAgentMarkerTargetVM = ...;
missionAgentMarkerTargetVM.UpdatePosition(missionCamera);
```

### UpdateQuestStatus
`public void UpdateQuestStatus()`

**Purpose:** Recalculates and stores the latest representation of quest status.

```csharp
// Obtain an instance of MissionAgentMarkerTargetVM from the subsystem API first
MissionAgentMarkerTargetVM missionAgentMarkerTargetVM = ...;
missionAgentMarkerTargetVM.UpdateQuestStatus();
```

### Compare
`public int Compare(QuestMarkerVM x, QuestMarkerVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MissionAgentMarkerTargetVM from the subsystem API first
MissionAgentMarkerTargetVM missionAgentMarkerTargetVM = ...;
var result = missionAgentMarkerTargetVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionAgentMarkerTargetVM missionAgentMarkerTargetVM = ...;
missionAgentMarkerTargetVM.UpdatePosition(missionCamera);
```

## See Also

- [Area Index](../)