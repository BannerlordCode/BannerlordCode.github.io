<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClearTheMainCampObjective`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClearTheMainCampObjective

**Namespace:** SandBox.Missions.MissionLogics.Hideout.Objectives
**Module:** SandBox.Missions
**Type:** `public class ClearTheMainCampObjective : MissionObjective`
**Base:** `MissionObjective`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout.Objectives/ClearTheMainCampObjective.cs`

## Overview

`ClearTheMainCampObjective` lives in `SandBox.Missions.MissionLogics.Hideout.Objectives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics.Hideout.Objectives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetCurrentProgress
`public override MissionObjectiveProgressInfo GetCurrentProgress()`

**Purpose:** Gets the current value of `current progress`.

## Usage Example

```csharp
var value = new ClearTheMainCampObjective();
value.GetCurrentProgress();
```

## See Also

- [Complete Class Catalog](../catalog)