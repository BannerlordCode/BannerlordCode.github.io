<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionObject`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObject : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionObject.cs`

## Overview

`MissionObject` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public MissionObjectId Id { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `HitObjectName` | `public virtual TextObject HitObjectName { get; }` |
| `CreatedAtRuntime` | `public bool CreatedAtRuntime { get; }` |

## Key Methods

### SetAbilityOfFaces
`public virtual void SetAbilityOfFaces(bool enabled)`

**Purpose:** Sets the value or state of `ability of faces`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### AfterMissionStart
`public virtual void AfterMissionStart()`

**Purpose:** Handles logic related to `after mission start`.

### OnMissionEnded
`public virtual void OnMissionEnded()`

**Purpose:** Called when the `mission ended` event is raised.

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### SetEnabled
`public void SetEnabled(bool isParentObject = false)`

**Purpose:** Sets the value or state of `enabled`.

### SetEnabledAndMakeVisible
`public void SetEnabledAndMakeVisible(bool isParentObject = false, bool enableFaces = false)`

**Purpose:** Sets the value or state of `enabled and make visible`.

### SetDisabled
`public void SetDisabled(bool isParentObject = false)`

**Purpose:** Sets the value or state of `disabled`.

### SetDisabledAndMakeInvisible
`public void SetDisabledAndMakeInvisible(bool isParentObject = false, bool disableFaces = false)`

**Purpose:** Sets the value or state of `disabled and make invisible`.

### OnEndMission
`public virtual void OnEndMission()`

**Purpose:** Called when the `end mission` event is raised.

### AddStuckMissile
`public virtual void AddStuckMissile(GameEntity missileEntity)`

**Purpose:** Adds `stuck missile` to the current collection or state.

## Usage Example

```csharp
var implementation = new CustomMissionObject();
```

## See Also

- [Complete Class Catalog](../catalog)