---
title: "InputRestrictions"
description: "Auto-generated class reference for InputRestrictions."
---
# InputRestrictions

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public class InputRestrictions`
**Base:** none
**File:** `TaleWorlds.ScreenSystem/InputRestrictions.cs`

## Overview

`InputRestrictions` lives in `TaleWorlds.ScreenSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ScreenSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Order` | `public int Order { get; }` |
| `Id` | `public Guid Id { get; }` |
| `MouseVisibility` | `public bool MouseVisibility { get; }` |
| `InputUsageMask` | `public InputUsageMask InputUsageMask { get; }` |

## Key Methods

### SetMouseVisibility
`public void SetMouseVisibility(bool isVisible)`

**Purpose:** **Purpose:** Assigns a new value to mouse visibility and updates the object's internal state.

```csharp
// Obtain an instance of InputRestrictions from the subsystem API first
InputRestrictions inputRestrictions = ...;
inputRestrictions.SetMouseVisibility(false);
```

### SetInputRestrictions
`public void SetInputRestrictions(bool isMouseVisible = true, InputUsageMask mask = InputUsageMask.All)`

**Purpose:** **Purpose:** Assigns a new value to input restrictions and updates the object's internal state.

```csharp
// Obtain an instance of InputRestrictions from the subsystem API first
InputRestrictions inputRestrictions = ...;
inputRestrictions.SetInputRestrictions(false, inputUsageMask.All);
```

### ResetInputRestrictions
`public void ResetInputRestrictions()`

**Purpose:** **Purpose:** Returns input restrictions to its default or initial condition.

```csharp
// Obtain an instance of InputRestrictions from the subsystem API first
InputRestrictions inputRestrictions = ...;
inputRestrictions.ResetInputRestrictions();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InputRestrictions inputRestrictions = ...;
inputRestrictions.SetMouseVisibility(false);
```

## See Also

- [Area Index](../)