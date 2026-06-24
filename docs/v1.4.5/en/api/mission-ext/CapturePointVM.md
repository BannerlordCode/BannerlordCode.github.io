<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CapturePointVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CapturePointVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CapturePointVM : CompassTargetVM`
**Base:** `CompassTargetVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/CapturePointVM.cs`

## Overview

`CapturePointVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FlagProgress` | `public float FlagProgress { get; set; }` |
| `IsSpawnAffectorFlag` | `public bool IsSpawnAffectorFlag { get; set; }` |
| `IsKeepFlag` | `public bool IsKeepFlag { get; set; }` |
| `RemainingRemovalTime` | `public int RemainingRemovalTime { get; set; }` |

## Key Methods

### Refresh
`public override void Refresh(float circleX, float x, float distance)`

**Purpose:** Refreshes the display or cache of `refresh`.

### OnOwnerChanged
`public void OnOwnerChanged(Team newTeam)`

**Purpose:** Called when the `owner changed` event is raised.

### ResetFlag
`public void ResetFlag()`

**Purpose:** Resets `flag` to its initial state.

## Usage Example

```csharp
var value = new CapturePointVM();
value.Refresh(0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)