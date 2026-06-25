---
title: "PopupSceneSequence"
description: "Auto-generated class reference for PopupSceneSequence."
---
# PopupSceneSequence

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneSequence : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Scripts/PopupSceneSequence.cs`

## Overview

`PopupSceneSequence` lives in `TaleWorlds.MountAndBlade.View.Scripts` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Scripts` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitializeWithAgentVisuals
`public void InitializeWithAgentVisuals(AgentVisuals visuals)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by with agent visuals.

```csharp
// Obtain an instance of PopupSceneSequence from the subsystem API first
PopupSceneSequence popupSceneSequence = ...;
popupSceneSequence.InitializeWithAgentVisuals(visuals);
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** **Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of PopupSceneSequence from the subsystem API first
PopupSceneSequence popupSceneSequence = ...;
var result = popupSceneSequence.GetTickRequirement();
```

### OnInitialState
`public virtual void OnInitialState()`

**Purpose:** **Purpose:** Invoked when the initial state event is raised.

```csharp
// Obtain an instance of PopupSceneSequence from the subsystem API first
PopupSceneSequence popupSceneSequence = ...;
popupSceneSequence.OnInitialState();
```

### OnPositiveState
`public virtual void OnPositiveState()`

**Purpose:** **Purpose:** Invoked when the positive state event is raised.

```csharp
// Obtain an instance of PopupSceneSequence from the subsystem API first
PopupSceneSequence popupSceneSequence = ...;
popupSceneSequence.OnPositiveState();
```

### OnNegativeState
`public virtual void OnNegativeState()`

**Purpose:** **Purpose:** Invoked when the negative state event is raised.

```csharp
// Obtain an instance of PopupSceneSequence from the subsystem API first
PopupSceneSequence popupSceneSequence = ...;
popupSceneSequence.OnNegativeState();
```

### SetInitialState
`public void SetInitialState()`

**Purpose:** **Purpose:** Assigns a new value to initial state and updates the object's internal state.

```csharp
// Obtain an instance of PopupSceneSequence from the subsystem API first
PopupSceneSequence popupSceneSequence = ...;
popupSceneSequence.SetInitialState();
```

### SetPositiveState
`public void SetPositiveState()`

**Purpose:** **Purpose:** Assigns a new value to positive state and updates the object's internal state.

```csharp
// Obtain an instance of PopupSceneSequence from the subsystem API first
PopupSceneSequence popupSceneSequence = ...;
popupSceneSequence.SetPositiveState();
```

### SetNegativeState
`public void SetNegativeState()`

**Purpose:** **Purpose:** Assigns a new value to negative state and updates the object's internal state.

```csharp
// Obtain an instance of PopupSceneSequence from the subsystem API first
PopupSceneSequence popupSceneSequence = ...;
popupSceneSequence.SetNegativeState();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PopupSceneSequence popupSceneSequence = ...;
popupSceneSequence.InitializeWithAgentVisuals(visuals);
```

## See Also

- [Area Index](../)