---
title: "InputState"
description: "InputState: a public class in TaleWorlds.InputSystem; 11 exposed members (2 methods, 8 properties, 0 fields). Canonical bucket system. Source: TaleWorlds.InputSystem/InputState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InputState

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public class InputState`
**File:** `TaleWorlds.InputSystem/InputState.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## Overview

InputState lives in the TaleWorlds.InputSystem module, source file TaleWorlds.InputSystem/InputState.cs. It is a public class; the inheritance chain is InputState. It exposes 11 public/protected members: 2 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InputState lands in canonical bucket `system` (matched rule `rule:TaleWorlds.InputSystem`), namespace `TaleWorlds.InputSystem`, inheritance chain InputState. The surface is property-led (properties 8/11, methods 2/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.InputSystem/InputState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NativeResolution` | `public Vec2 NativeResolution` | property |
| `MousePositionRanged` | `public Vec2 MousePositionRanged` | property |
| `OldMousePositionRanged` | `public Vec2 OldMousePositionRanged` | property |
| `MousePositionChanged` | `public bool MousePositionChanged` | property |
| `MousePositionPixel` | `public Vec2 MousePositionPixel` | property |
| `OldMousePositionPixel` | `public Vec2 OldMousePositionPixel` | property |
| `MouseScrollValue` | `public float MouseScrollValue` | property |
| `MouseScrollChanged` | `public bool MouseScrollChanged` | property |
| `InputState` | `public InputState()` | constructor |
| `UpdateMousePosition` | `public bool UpdateMousePosition(float mousePositionX, float mousePositionY)` | method |
| `UpdateMouseScroll` | `public bool UpdateMouseScroll(float mouseScrollValue)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EmptyInputContext](../EmptyInputContext/)
- [same namespace GameAxisKey](../GameAxisKey/)
- [same namespace GameKey](../GameKey/)
- [same namespace GameKeyContext](../GameKeyContext/)
