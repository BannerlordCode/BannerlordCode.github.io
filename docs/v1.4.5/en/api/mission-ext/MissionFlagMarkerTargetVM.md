<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionFlagMarkerTargetVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionFlagMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFlagMarkerTargetVM : MissionMarkerTargetVM`
**Base:** `MissionMarkerTargetVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets/MissionFlagMarkerTargetVM.cs`

## Overview

`MissionFlagMarkerTargetVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetFlag` | `public FlagCapturePoint TargetFlag { get; }` |
| `WorldPosition` | `public override Vec3 WorldPosition { get; }` |
| `FlagProgress` | `public float FlagProgress { get; set; }` |
| `IsSpawnAffectorFlag` | `public bool IsSpawnAffectorFlag { get; set; }` |
| `RemainingRemovalTime` | `public int RemainingRemovalTime { get; set; }` |
| `IsKeepFlag` | `public bool IsKeepFlag { get; set; }` |

## Key Methods

### UpdateScreenPosition
`public override void UpdateScreenPosition(Camera missionCamera)`

**Purpose:** Updates the state or data of `screen position`.

### OnOwnerChanged
`public void OnOwnerChanged(Team team)`

**Purpose:** Called when the `owner changed` event is raised.

### OnRemainingMoraleChanged
`public void OnRemainingMoraleChanged(int remainingMorale)`

**Purpose:** Called when the `remaining morale changed` event is raised.

## Usage Example

```csharp
var value = new MissionFlagMarkerTargetVM();
value.UpdateScreenPosition(missionCamera);
```

## See Also

- [Complete Class Catalog](../catalog)