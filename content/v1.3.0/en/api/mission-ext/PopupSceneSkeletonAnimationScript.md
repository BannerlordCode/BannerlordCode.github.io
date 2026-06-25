---
title: "PopupSceneSkeletonAnimationScript"
description: "Auto-generated class reference for PopupSceneSkeletonAnimationScript."
---
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

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of PopupSceneSkeletonAnimationScript from the subsystem API first
PopupSceneSkeletonAnimationScript popupSceneSkeletonAnimationScript = ...;
popupSceneSkeletonAnimationScript.Initialize();
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** **Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of PopupSceneSkeletonAnimationScript from the subsystem API first
PopupSceneSkeletonAnimationScript popupSceneSkeletonAnimationScript = ...;
var result = popupSceneSkeletonAnimationScript.GetTickRequirement();
```

### SetState
`public void SetState(int state)`

**Purpose:** **Purpose:** Assigns a new value to state and updates the object's internal state.

```csharp
// Obtain an instance of PopupSceneSkeletonAnimationScript from the subsystem API first
PopupSceneSkeletonAnimationScript popupSceneSkeletonAnimationScript = ...;
popupSceneSkeletonAnimationScript.SetState(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PopupSceneSkeletonAnimationScript popupSceneSkeletonAnimationScript = ...;
popupSceneSkeletonAnimationScript.Initialize();
```

## See Also

- [Area Index](../)