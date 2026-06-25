---
title: "PopupSceneCameraPath"
description: "Auto-generated class reference for PopupSceneCameraPath."
---
# PopupSceneCameraPath

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneCameraPath : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneCameraPath.cs`

## Overview

`PopupSceneCameraPath` lives in `TaleWorlds.MountAndBlade.View.Scripts` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Scripts` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of PopupSceneCameraPath from the subsystem API first
PopupSceneCameraPath popupSceneCameraPath = ...;
popupSceneCameraPath.Initialize();
```

### SetInitialState
`public void SetInitialState()`

**Purpose:** Assigns a new value to `initial state` and updates the object's internal state.

```csharp
// Obtain an instance of PopupSceneCameraPath from the subsystem API first
PopupSceneCameraPath popupSceneCameraPath = ...;
popupSceneCameraPath.SetInitialState();
```

### SetPositiveState
`public void SetPositiveState()`

**Purpose:** Assigns a new value to `positive state` and updates the object's internal state.

```csharp
// Obtain an instance of PopupSceneCameraPath from the subsystem API first
PopupSceneCameraPath popupSceneCameraPath = ...;
popupSceneCameraPath.SetPositiveState();
```

### SetNegativeState
`public void SetNegativeState()`

**Purpose:** Assigns a new value to `negative state` and updates the object's internal state.

```csharp
// Obtain an instance of PopupSceneCameraPath from the subsystem API first
PopupSceneCameraPath popupSceneCameraPath = ...;
popupSceneCameraPath.SetNegativeState();
```

### SetIsReady
`public void SetIsReady(bool isReady)`

**Purpose:** Assigns a new value to `is ready` and updates the object's internal state.

```csharp
// Obtain an instance of PopupSceneCameraPath from the subsystem API first
PopupSceneCameraPath popupSceneCameraPath = ...;
popupSceneCameraPath.SetIsReady(false);
```

### GetCameraFade
`public float GetCameraFade()`

**Purpose:** Reads and returns the `camera fade` value held by the current object.

```csharp
// Obtain an instance of PopupSceneCameraPath from the subsystem API first
PopupSceneCameraPath popupSceneCameraPath = ...;
var result = popupSceneCameraPath.GetCameraFade();
```

### Destroy
`public void Destroy()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PopupSceneCameraPath from the subsystem API first
PopupSceneCameraPath popupSceneCameraPath = ...;
popupSceneCameraPath.Destroy();
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of PopupSceneCameraPath from the subsystem API first
PopupSceneCameraPath popupSceneCameraPath = ...;
var result = popupSceneCameraPath.GetTickRequirement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PopupSceneCameraPath popupSceneCameraPath = ...;
popupSceneCameraPath.Initialize();
```

## See Also

- [Area Index](../)