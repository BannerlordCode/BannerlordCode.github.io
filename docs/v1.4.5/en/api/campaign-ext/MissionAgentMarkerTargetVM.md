<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentMarkerTargetVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentMarkerTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker.Targets
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionAgentMarkerTargetVM : MissionNameMarkerTargetVM<Agent>`
**Base:** `MissionNameMarkerTargetVM<Agent>`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker.Targets/MissionAgentMarkerTargetVM.cs`

## Overview

`MissionAgentMarkerTargetVM` lives in `SandBox.ViewModelCollection.Missions.NameMarker.Targets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(QuestMarkerVM x, QuestMarkerVM y)`

**Purpose:** Handles logic related to `compare`.

### UpdatePosition
`public override void UpdatePosition(Camera missionCamera)`

**Purpose:** Updates the state or data of `position`.

### UpdateQuestStatus
`public void UpdateQuestStatus()`

**Purpose:** Updates the state or data of `quest status`.

## Usage Example

```csharp
var value = new MissionAgentMarkerTargetVM();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)