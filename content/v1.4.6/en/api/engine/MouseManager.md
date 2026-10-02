---
title: "MouseManager"
description: "MouseManager: a public class in TaleWorlds.Engine; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/MouseManager.cs."
---
# MouseManager

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class MouseManager`
**File:** `TaleWorlds.Engine/MouseManager.cs`

## Overview

MouseManager lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/MouseManager.cs. It is a public class; the inheritance chain is MouseManager. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MouseManager is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain MouseManager. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/MouseManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActivateMouseCursor` | `public static void ActivateMouseCursor(CursorType mouseId)` | method |
| `SetMouseCursor` | `public static void SetMouseCursor(CursorType mouseId, string mousePath)` | method |
| `ShowCursor` | `public static void ShowCursor(bool show)` | method |
| `LockCursorAtCurrentPosition` | `public static void LockCursorAtCurrentPosition(bool lockCursor)` | method |
| `LockCursorAtPosition` | `public static void LockCursorAtPosition(float x, float y)` | method |
| `UnlockCursor` | `public static void UnlockCursor()` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
