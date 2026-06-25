---
title: "PopupSceneSpawnPoint"
description: "Auto-generated class reference for PopupSceneSpawnPoint."
---
# PopupSceneSpawnPoint

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneSpawnPoint : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/PopupSceneSpawnPoint.cs`

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

**Purpose:** Prepares the resources, state, or bindings required by with agent visuals.

```csharp
// Obtain an instance of PopupSceneSpawnPoint from the subsystem API first
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
popupSceneSpawnPoint.InitializeWithAgentVisuals(humanVisuals, null);
```

### SetInitialState
`public void SetInitialState()`

**Purpose:** Assigns a new value to initial state and updates the object's internal state.

```csharp
// Obtain an instance of PopupSceneSpawnPoint from the subsystem API first
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
popupSceneSpawnPoint.SetInitialState();
```

### SetPositiveState
`public void SetPositiveState()`

**Purpose:** Assigns a new value to positive state and updates the object's internal state.

```csharp
// Obtain an instance of PopupSceneSpawnPoint from the subsystem API first
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
popupSceneSpawnPoint.SetPositiveState();
```

### SetNegativeState
`public void SetNegativeState()`

**Purpose:** Assigns a new value to negative state and updates the object's internal state.

```csharp
// Obtain an instance of PopupSceneSpawnPoint from the subsystem API first
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
popupSceneSpawnPoint.SetNegativeState();
```

### Destroy
`public void Destroy()`

**Purpose:** Executes the Destroy logic.

```csharp
// Obtain an instance of PopupSceneSpawnPoint from the subsystem API first
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
popupSceneSpawnPoint.Destroy();
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of PopupSceneSpawnPoint from the subsystem API first
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
var result = popupSceneSpawnPoint.GetTickRequirement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
popupSceneSpawnPoint.InitializeWithAgentVisuals(humanVisuals, null);
```

## See Also

- [Area Index](../)