<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAlwaysVisibleMarkerTargetVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAlwaysVisibleMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAlwaysVisibleMarkerTargetVM : MissionMarkerTargetVM`
**Base:** `MissionMarkerTargetVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets/MissionAlwaysVisibleMarkerTargetVM.cs`

## Overview

`MissionAlwaysVisibleMarkerTargetVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetPeer` | `public MissionPeer TargetPeer { get; }` |

## Key Methods

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Executes the `remove` operation or workflow.

## Usage Example

```csharp
var value = new MissionAlwaysVisibleMarkerTargetVM();
value.ExecuteRemove();
```

## See Also

- [Complete Class Catalog](../catalog)