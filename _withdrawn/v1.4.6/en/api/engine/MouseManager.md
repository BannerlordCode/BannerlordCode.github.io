---
title: "MouseManager"
description: "MouseManager: a public class in TaleWorlds.Engine; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/MouseManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MouseManager

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class MouseManager`
**File:** `TaleWorlds.Engine/MouseManager.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

MouseManager lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/MouseManager.cs. It is a public class; the inheritance chain is MouseManager. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MouseManager lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain MouseManager. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/MouseManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ActivateMouseCursor` | `public static void ActivateMouseCursor(CursorType mouseId)` | method |
| `SetMouseCursor` | `public static void SetMouseCursor(CursorType mouseId, string mousePath)` | method |
| `ShowCursor` | `public static void ShowCursor(bool show)` | method |
| `LockCursorAtCurrentPosition` | `public static void LockCursorAtCurrentPosition(bool lockCursor)` | method |
| `LockCursorAtPosition` | `public static void LockCursorAtPosition(float x, float y)` | method |
| `UnlockCursor` | `public static void UnlockCursor()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
