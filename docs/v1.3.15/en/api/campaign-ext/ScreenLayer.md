<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScreenLayer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScreenLayer

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public abstract class ScreenLayer : IComparable`
**Base:** `IComparable`
**File:** `TaleWorlds.ScreenSystem/ScreenLayer.cs`

## Overview

`ScreenLayer` lives in `TaleWorlds.ScreenSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ScreenSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Scale` | `public float Scale { get; }` |
| `UsableArea` | `public Vec2 UsableArea { get; }` |
| `Input` | `public InputContext Input { get; }` |
| `InputRestrictions` | `public InputRestrictions InputRestrictions { get; }` |
| `LastActiveState` | `public bool LastActiveState { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsHitThisFrame` | `public bool IsHitThisFrame { get; set; }` |
| `IsFocusLayer` | `public bool IsFocusLayer { get; set; }` |
| `ActiveCursor` | `public CursorType ActiveCursor { get; set; }` |
| `ScreenOrderInLastFrame` | `public int ScreenOrderInLastFrame { get; set; }` |
| `InputUsageMask` | `public InputUsageMask InputUsageMask { get; }` |

## Key Methods

### DrawDebugInfo
`public virtual void DrawDebugInfo()`

**Purpose:** Handles logic related to `draw debug info`.

### EarlyProcessEvents
`public virtual void EarlyProcessEvents(InputType handledInputs)`

**Purpose:** Handles logic related to `early process events`.

### ProcessEvents
`public virtual void ProcessEvents()`

**Purpose:** Handles logic related to `process events`.

### HitTest
`public virtual bool HitTest(Vector2 position)`

**Purpose:** Handles logic related to `hit test`.

### HitTest
`public virtual bool HitTest()`

**Purpose:** Handles logic related to `hit test`.

### FocusTest
`public virtual bool FocusTest()`

**Purpose:** Handles logic related to `focus test`.

### IsFocusedOnInput
`public virtual bool IsFocusedOnInput()`

**Purpose:** Handles logic related to `is focused on input`.

### OnOnScreenKeyboardDone
`public virtual void OnOnScreenKeyboardDone(string inputText)`

**Purpose:** Called when the `on screen keyboard done` event is raised.

### OnOnScreenKeyboardCanceled
`public virtual void OnOnScreenKeyboardCanceled()`

**Purpose:** Called when the `on screen keyboard canceled` event is raised.

### CompareTo
`public int CompareTo(object obj)`

**Purpose:** Handles logic related to `compare to`.

### UpdateLayout
`public virtual void UpdateLayout()`

**Purpose:** Updates the state or data of `layout`.

## Usage Example

```csharp
var implementation = new CustomScreenLayer();
```

## See Also

- [Complete Class Catalog](../catalog)