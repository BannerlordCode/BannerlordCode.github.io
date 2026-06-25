---
title: "GauntletInputContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletInputContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GauntletInputContext

**Namespace:** TaleWorlds.GauntletUI.GauntletInput
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletInputContext : IReadonlyInputContext`
**Base:** `IReadonlyInputContext`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/GauntletInputContext.cs`

## Overview

`GauntletInputContext` lives in `TaleWorlds.GauntletUI.GauntletInput` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.GauntletInput` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetIsMouseActive
`public bool GetIsMouseActive()`

**Purpose:** Gets the current value of `is mouse active`.

### GetMousePosition
`public Vector2 GetMousePosition()`

**Purpose:** Gets the current value of `mouse position`.

### GetMouseMovement
`public Vector2 GetMouseMovement()`

**Purpose:** Gets the current value of `mouse movement`.

### GetClickKeys
`public InputKey GetClickKeys()`

**Purpose:** Gets the current value of `click keys`.

### GetAlternateClickKeys
`public InputKey GetAlternateClickKeys()`

**Purpose:** Gets the current value of `alternate click keys`.

### GetMouseScrollDelta
`public float GetMouseScrollDelta()`

**Purpose:** Gets the current value of `mouse scroll delta`.

### GetControllerLeftStickState
`public Vector2 GetControllerLeftStickState()`

**Purpose:** Gets the current value of `controller left stick state`.

### GetControllerRightStickState
`public Vector2 GetControllerRightStickState()`

**Purpose:** Gets the current value of `controller right stick state`.

### SetMousePositionOverride
`public void SetMousePositionOverride(Vector2 mousePosition)`

**Purpose:** Sets the value or state of `mouse position override`.

### ResetMousePositionOverride
`public void ResetMousePositionOverride()`

**Purpose:** Resets `mouse position override` to its initial state.

## Usage Example

```csharp
var value = new GauntletInputContext();
value.GetIsMouseActive();
```

## See Also

- [Complete Class Catalog](../catalog)