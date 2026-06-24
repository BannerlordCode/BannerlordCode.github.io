<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionNameMarkerTargetVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionNameMarkerTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public abstract class MissionNameMarkerTargetVM<T> : MissionNameMarkerTargetBaseVM`
**Base:** `MissionNameMarkerTargetBaseVM`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker/MissionNameMarkerTargetVM.cs`

## Overview

`MissionNameMarkerTargetVM` lives in `SandBox.ViewModelCollection.Missions.NameMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Target` | `public T Target { get; }` |

## Key Methods

### Equals
`public override bool Equals(MissionNameMarkerTargetBaseVM other)`

**Purpose:** Handles logic related to `equals`.

## Usage Example

```csharp
var implementation = new CustomMissionNameMarkerTargetVM();
```

## See Also

- [Complete Class Catalog](../catalog)