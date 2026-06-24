<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MarkerDistanceComparer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MarkerDistanceComparer

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MarkerDistanceComparer : IComparer<MissionMarkerTargetVM>`
**Base:** `IComparer<MissionMarkerTargetVM>`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker/MultiplayerMissionMarkerVM.cs`

## Overview

`MarkerDistanceComparer` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(MissionMarkerTargetVM x, MissionMarkerTargetVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new MarkerDistanceComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)