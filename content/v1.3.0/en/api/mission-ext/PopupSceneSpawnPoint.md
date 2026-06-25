---
title: "PopupSceneSpawnPoint"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PopupSceneSpawnPoint`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PopupSceneSpawnPoint

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneSpawnPoint : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs`

## Overview

`PopupSceneSpawnPoint` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AddedPrefabComponent` | `public CompositeComponent AddedPrefabComponent { get; }` |

## Key Methods

### InitializeWithAgentVisuals
`public void InitializeWithAgentVisuals(AgentVisuals humanVisuals, AgentVisuals mountVisuals = null)`

**Purpose:** Initializes the state, resources, or bindings for `with agent visuals`.

### SetInitialState
`public void SetInitialState()`

**Purpose:** Sets the value or state of `initial state`.

### SetPositiveState
`public void SetPositiveState()`

**Purpose:** Sets the value or state of `positive state`.

### SetNegativeState
`public void SetNegativeState()`

**Purpose:** Sets the value or state of `negative state`.

### Destroy
`public void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

## Usage Example

```csharp
var value = new PopupSceneSpawnPoint();
value.InitializeWithAgentVisuals(humanVisuals, null);
```

## See Also

- [Complete Class Catalog](../catalog)