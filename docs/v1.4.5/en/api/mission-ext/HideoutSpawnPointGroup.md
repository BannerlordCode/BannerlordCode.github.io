<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutSpawnPointGroup`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutSpawnPointGroup

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HideoutSpawnPointGroup : SynchedMissionObject`
**Base:** `SynchedMissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/HideoutSpawnPointGroup.cs`

## Overview

`HideoutSpawnPointGroup` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSpawnPointFrames
`public MatrixFrame GetSpawnPointFrames()`

**Purpose:** Gets the current value of `spawn point frames`.

### RemoveWithAllChildren
`public void RemoveWithAllChildren()`

**Purpose:** Removes `with all children` from the current collection or state.

## Usage Example

```csharp
var value = new HideoutSpawnPointGroup();
value.GetSpawnPointFrames();
```

## See Also

- [Complete Class Catalog](../catalog)