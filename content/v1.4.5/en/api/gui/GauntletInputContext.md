---
title: "GauntletInputContext"
description: "Auto-generated class reference for GauntletInputContext."
---
# GauntletInputContext

**Namespace:** TaleWorlds.GauntletUI.GauntletInput
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletInputContext : IReadonlyInputContext`
**Base:** `IReadonlyInputContext`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.GauntletInput/GauntletInputContext.cs`

## Overview

`GauntletInputContext` lives in `TaleWorlds.GauntletUI.GauntletInput` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.GauntletInput` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetIsMouseActive
`public bool GetIsMouseActive()`

**Purpose:** Reads and returns the `is mouse active` value held by the current object.

```csharp
// Obtain an instance of GauntletInputContext from the subsystem API first
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetIsMouseActive();
```

### GetMousePosition
`public Vector2 GetMousePosition()`

**Purpose:** Reads and returns the `mouse position` value held by the current object.

```csharp
// Obtain an instance of GauntletInputContext from the subsystem API first
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetMousePosition();
```

### GetMouseMovement
`public Vector2 GetMouseMovement()`

**Purpose:** Reads and returns the `mouse movement` value held by the current object.

```csharp
// Obtain an instance of GauntletInputContext from the subsystem API first
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetMouseMovement();
```

### GetClickKeys
`public InputKey GetClickKeys()`

**Purpose:** Reads and returns the `click keys` value held by the current object.

```csharp
// Obtain an instance of GauntletInputContext from the subsystem API first
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetClickKeys();
```

### GetAlternateClickKeys
`public InputKey GetAlternateClickKeys()`

**Purpose:** Reads and returns the `alternate click keys` value held by the current object.

```csharp
// Obtain an instance of GauntletInputContext from the subsystem API first
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetAlternateClickKeys();
```

### GetMouseScrollDelta
`public float GetMouseScrollDelta()`

**Purpose:** Reads and returns the `mouse scroll delta` value held by the current object.

```csharp
// Obtain an instance of GauntletInputContext from the subsystem API first
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetMouseScrollDelta();
```

### GetControllerLeftStickState
`public Vector2 GetControllerLeftStickState()`

**Purpose:** Reads and returns the `controller left stick state` value held by the current object.

```csharp
// Obtain an instance of GauntletInputContext from the subsystem API first
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetControllerLeftStickState();
```

### GetControllerRightStickState
`public Vector2 GetControllerRightStickState()`

**Purpose:** Reads and returns the `controller right stick state` value held by the current object.

```csharp
// Obtain an instance of GauntletInputContext from the subsystem API first
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetControllerRightStickState();
```

### SetMousePositionOverride
`public void SetMousePositionOverride(Vector2 mousePosition)`

**Purpose:** Assigns a new value to `mouse position override` and updates the object's internal state.

```csharp
// Obtain an instance of GauntletInputContext from the subsystem API first
GauntletInputContext gauntletInputContext = ...;
gauntletInputContext.SetMousePositionOverride(mousePosition);
```

### ResetMousePositionOverride
`public void ResetMousePositionOverride()`

**Purpose:** Returns `mouse position override` to its default or initial condition.

```csharp
// Obtain an instance of GauntletInputContext from the subsystem API first
GauntletInputContext gauntletInputContext = ...;
gauntletInputContext.ResetMousePositionOverride();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletInputContext gauntletInputContext = ...;
gauntletInputContext.GetIsMouseActive();
```

## See Also

- [Area Index](../)