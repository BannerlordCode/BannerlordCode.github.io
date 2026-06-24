<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TrainingIcon`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TrainingIcon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TrainingIcon : UsableMachine`
**Base:** `UsableMachine`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TrainingIcon.cs`

## Overview

`TrainingIcon` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Focused` | `public bool Focused { get; }` |

## Key Methods

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### SetMarked
`public void SetMarked(bool highlight)`

**Purpose:** Sets the value or state of `marked`.

### GetIsActivated
`public bool GetIsActivated()`

**Purpose:** Gets the current value of `is activated`.

### GetTrainingSubTypeTag
`public string GetTrainingSubTypeTag()`

**Purpose:** Gets the current value of `training sub type tag`.

### DisableIcon
`public void DisableIcon()`

**Purpose:** Handles logic related to `disable icon`.

### EnableIcon
`public void EnableIcon()`

**Purpose:** Handles logic related to `enable icon`.

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject = null)`

**Purpose:** Gets the current value of `action text for standing point`.

### OnFocusGain
`public override void OnFocusGain(Agent userAgent)`

**Purpose:** Called when the `focus gain` event is raised.

### OnFocusLose
`public override void OnFocusLose(Agent userAgent)`

**Purpose:** Called when the `focus lose` event is raised.

## Usage Example

```csharp
var value = new TrainingIcon();
value.GetTickRequirement();
```

## See Also

- [Complete Class Catalog](../catalog)