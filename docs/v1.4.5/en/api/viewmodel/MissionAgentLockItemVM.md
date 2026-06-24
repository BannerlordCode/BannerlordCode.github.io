<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentLockItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentLockItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentLockItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionAgentLockItemVM.cs`

## Overview

`MissionAgentLockItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TrackedAgent` | `public Agent TrackedAgent { get; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `LockState` | `public int LockState { get; set; }` |

## Key Methods

### SetLockState
`public void SetLockState(LockStates lockState)`

**Purpose:** Sets the value or state of `lock state`.

### UpdatePosition
`public void UpdatePosition(Vec2 position)`

**Purpose:** Updates the state or data of `position`.

## Usage Example

```csharp
var value = new MissionAgentLockItemVM();
value.SetLockState(lockState);
```

## See Also

- [Complete Class Catalog](../catalog)