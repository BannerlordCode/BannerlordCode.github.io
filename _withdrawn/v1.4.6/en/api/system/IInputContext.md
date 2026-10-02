---
title: "IInputContext"
description: "IInputContext: a public interface in TaleWorlds.InputSystem; 30 exposed members (30 methods, 0 properties, 0 fields). Canonical bucket system. Source: TaleWorlds.InputSystem/IInputContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IInputContext

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public interface IInputContext`
**File:** `TaleWorlds.InputSystem/IInputContext.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## Overview

IInputContext lives in the TaleWorlds.InputSystem module, source file TaleWorlds.InputSystem/IInputContext.cs. It is a public interface; the inheritance chain is IInputContext. It exposes 30 public/protected members: 30 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IInputContext lands in canonical bucket `system` (matched rule `rule:TaleWorlds.InputSystem`), namespace `TaleWorlds.InputSystem`, inheritance chain IInputContext. The surface is method-led (methods 30/30, properties 0/30), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.InputSystem/IInputContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetPointerX` | `int GetPointerX();` | method |
| `GetPointerY` | `int GetPointerY();` | method |
| `GetPointerPosition` | `Vector2 GetPointerPosition();` | method |
| `IsGameKeyDown` | `bool IsGameKeyDown(int gameKey);` | method |
| `IsGameKeyDownImmediate` | `bool IsGameKeyDownImmediate(int gameKey);` | method |
| `IsGameKeyReleased` | `bool IsGameKeyReleased(int gameKey);` | method |
| `IsGameKeyPressed` | `bool IsGameKeyPressed(int gameKey);` | method |
| `GetGameKeyAxis` | `float GetGameKeyAxis(string gameKey);` | method |
| `IsHotKeyDown` | `bool IsHotKeyDown(string gameKey);` | method |
| `IsHotKeyReleased` | `bool IsHotKeyReleased(string gameKey);` | method |
| `IsHotKeyPressed` | `bool IsHotKeyPressed(string gameKey);` | method |
| `IsHotKeyDoublePressed` | `bool IsHotKeyDoublePressed(string gameKey);` | method |
| `IsKeyDown` | `bool IsKeyDown(InputKey key);` | method |
| `IsKeyPressed` | `bool IsKeyPressed(InputKey key);` | method |
| `IsKeyReleased` | `bool IsKeyReleased(InputKey key);` | method |
| `GetKeyState` | `Vec2 GetKeyState(InputKey key);` | method |
| `GetMouseMoveX` | `float GetMouseMoveX();` | method |
| `GetMouseMoveY` | `float GetMouseMoveY();` | method |
| `GetControllerRightStickState` | `Vec2 GetControllerRightStickState();` | method |
| `GetControllerLeftStickState` | `Vec2 GetControllerLeftStickState();` | method |
| `GetDeltaMouseScroll` | `float GetDeltaMouseScroll();` | method |
| `GetIsControllerConnected` | `bool GetIsControllerConnected();` | method |
| `GetIsMouseActive` | `bool GetIsMouseActive();` | method |
| `GetMousePositionRanged` | `Vec2 GetMousePositionRanged();` | method |
| `GetMousePositionPixel` | `Vec2 GetMousePositionPixel();` | method |
| `GetMouseSensitivity` | `float GetMouseSensitivity();` | method |
| `IsControlDown` | `bool IsControlDown();` | method |
| `IsShiftDown` | `bool IsShiftDown();` | method |
| `IsAltDown` | `bool IsAltDown();` | method |
| `InputKey[]GetClickKeys` | `InputKey[]GetClickKeys();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EmptyInputContext](../EmptyInputContext/)
- [same namespace GameAxisKey](../GameAxisKey/)
- [same namespace GameKey](../GameKey/)
- [same namespace GameKeyContext](../GameKeyContext/)
