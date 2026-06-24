<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PopupSceneCameraPath`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PopupSceneCameraPath

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneCameraPath : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Scripts/PopupSceneCameraPath.cs`

## Overview

`PopupSceneCameraPath` lives in `TaleWorlds.MountAndBlade.View.Scripts` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Scripts` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### SetInitialState
`public void SetInitialState()`

**Purpose:** Sets the value or state of `initial state`.

### SetPositiveState
`public void SetPositiveState()`

**Purpose:** Sets the value or state of `positive state`.

### SetNegativeState
`public void SetNegativeState()`

**Purpose:** Sets the value or state of `negative state`.

### SetIsReady
`public void SetIsReady(bool isReady)`

**Purpose:** Sets the value or state of `is ready`.

### GetCameraFade
`public float GetCameraFade()`

**Purpose:** Gets the current value of `camera fade`.

### Destroy
`public void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

## Usage Example

```csharp
var value = new PopupSceneCameraPath();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)