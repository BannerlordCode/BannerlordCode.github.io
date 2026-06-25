---
title: "PopupSceneSequence"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PopupSceneSequence`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PopupSceneSequence

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneSequence : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Scripts/PopupSceneSequence.cs`

## Overview

`PopupSceneSequence` lives in `TaleWorlds.MountAndBlade.View.Scripts` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Scripts` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitializeWithAgentVisuals
`public void InitializeWithAgentVisuals(AgentVisuals visuals)`

**Purpose:** Initializes the state, resources, or bindings for `with agent visuals`.

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### OnInitialState
`public virtual void OnInitialState()`

**Purpose:** Called when the `initial state` event is raised.

### OnPositiveState
`public virtual void OnPositiveState()`

**Purpose:** Called when the `positive state` event is raised.

### OnNegativeState
`public virtual void OnNegativeState()`

**Purpose:** Called when the `negative state` event is raised.

### SetInitialState
`public void SetInitialState()`

**Purpose:** Sets the value or state of `initial state`.

### SetPositiveState
`public void SetPositiveState()`

**Purpose:** Sets the value or state of `positive state`.

### SetNegativeState
`public void SetNegativeState()`

**Purpose:** Sets the value or state of `negative state`.

## Usage Example

```csharp
var value = new PopupSceneSequence();
value.InitializeWithAgentVisuals(visuals);
```

## See Also

- [Complete Class Catalog](../catalog)