<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PopupSceneSkeletonAnimationScript`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PopupSceneSkeletonAnimationScript

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneSkeletonAnimationScript : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSkeletonAnimationScript.cs`

## Overview

`PopupSceneSkeletonAnimationScript` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### SetState
`public void SetState(int state)`

**Purpose:** Sets the value or state of `state`.

## Usage Example

```csharp
var value = new PopupSceneSkeletonAnimationScript();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)