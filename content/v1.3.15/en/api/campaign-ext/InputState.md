---
title: "InputState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InputState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputState

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class InputState`
**Base:** none
**File:** `TaleWorlds.InputSystem/InputState.cs`

## Overview

`InputState` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NativeResolution` | `public Vec2 NativeResolution { get; set; }` |
| `MousePositionRanged` | `public Vec2 MousePositionRanged { get; set; }` |
| `OldMousePositionRanged` | `public Vec2 OldMousePositionRanged { get; }` |
| `MousePositionChanged` | `public bool MousePositionChanged { get; }` |
| `MousePositionPixel` | `public Vec2 MousePositionPixel { get; set; }` |
| `OldMousePositionPixel` | `public Vec2 OldMousePositionPixel { get; }` |
| `MouseScrollValue` | `public float MouseScrollValue { get; }` |
| `MouseScrollChanged` | `public bool MouseScrollChanged { get; }` |

## Key Methods

### UpdateMousePosition
`public bool UpdateMousePosition(float mousePositionX, float mousePositionY)`

**Purpose:** Updates the state or data of `mouse position`.

### UpdateMouseScroll
`public bool UpdateMouseScroll(float mouseScrollValue)`

**Purpose:** Updates the state or data of `mouse scroll`.

## Usage Example

```csharp
var value = new InputState();
value.UpdateMousePosition(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)