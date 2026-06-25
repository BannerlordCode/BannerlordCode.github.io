---
title: "ScreenLayer"
description: "Auto-generated class reference for ScreenLayer."
---
# ScreenLayer

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public abstract class ScreenLayer : IComparable`
**Base:** `IComparable`
**File:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenLayer.cs`

## Overview

`ScreenLayer` lives in `TaleWorlds.ScreenSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ScreenSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Input` | `public InputContext Input { get; }` |
| `InputRestrictions` | `public InputRestrictions InputRestrictions { get; }` |
| `LastActiveState` | `public bool LastActiveState { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsHitThisFrame` | `public bool IsHitThisFrame { get; set; }` |
| `IsFocusLayer` | `public bool IsFocusLayer { get; set; }` |
| `ActiveCursor` | `public CursorType ActiveCursor { get; set; }` |
| `ScreenOrderInLastFrame` | `public int ScreenOrderInLastFrame { get; set; }` |

## Key Methods

### DrawDebugInfo
`public virtual void DrawDebugInfo()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ScreenLayer from the subsystem API first
ScreenLayer screenLayer = ...;
screenLayer.DrawDebugInfo();
```

### EarlyProcessEvents
`public virtual void EarlyProcessEvents(InputType handledInputs)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ScreenLayer from the subsystem API first
ScreenLayer screenLayer = ...;
screenLayer.EarlyProcessEvents(handledInputs);
```

### ProcessEvents
`public virtual void ProcessEvents()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ScreenLayer from the subsystem API first
ScreenLayer screenLayer = ...;
screenLayer.ProcessEvents();
```

### HitTest
`public virtual bool HitTest(Vector2 position)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ScreenLayer from the subsystem API first
ScreenLayer screenLayer = ...;
var result = screenLayer.HitTest(position);
```

### HitTest
`public virtual bool HitTest()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ScreenLayer from the subsystem API first
ScreenLayer screenLayer = ...;
var result = screenLayer.HitTest();
```

### FocusTest
`public virtual bool FocusTest()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ScreenLayer from the subsystem API first
ScreenLayer screenLayer = ...;
var result = screenLayer.FocusTest();
```

### IsFocusedOnInput
`public virtual bool IsFocusedOnInput()`

**Purpose:** Determines whether the current object is in the `focused on input` state or condition.

```csharp
// Obtain an instance of ScreenLayer from the subsystem API first
ScreenLayer screenLayer = ...;
var result = screenLayer.IsFocusedOnInput();
```

### OnOnScreenKeyboardDone
`public virtual void OnOnScreenKeyboardDone(string inputText)`

**Purpose:** Invoked when the `on screen keyboard done` event is raised.

```csharp
// Obtain an instance of ScreenLayer from the subsystem API first
ScreenLayer screenLayer = ...;
screenLayer.OnOnScreenKeyboardDone("example");
```

### OnOnScreenKeyboardCanceled
`public virtual void OnOnScreenKeyboardCanceled()`

**Purpose:** Invoked when the `on screen keyboard canceled` event is raised.

```csharp
// Obtain an instance of ScreenLayer from the subsystem API first
ScreenLayer screenLayer = ...;
screenLayer.OnOnScreenKeyboardCanceled();
```

### CompareTo
`public int CompareTo(object obj)`

**Purpose:** Compares the current object with the supplied instance for ordering.

```csharp
// Obtain an instance of ScreenLayer from the subsystem API first
ScreenLayer screenLayer = ...;
var result = screenLayer.CompareTo(obj);
```

### UpdateLayout
`public virtual void UpdateLayout()`

**Purpose:** Recalculates and stores the latest representation of `layout`.

```csharp
// Obtain an instance of ScreenLayer from the subsystem API first
ScreenLayer screenLayer = ...;
screenLayer.UpdateLayout();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ScreenLayer instance = ...;
```

## See Also

- [Area Index](../)