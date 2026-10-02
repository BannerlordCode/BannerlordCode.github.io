---
title: "EmptyInputContext"
description: "EmptyInputContext: a public class in TaleWorlds.InputSystem, inheriting IInputContext; 30 exposed members (30 methods, 0 properties, 0 fields). Source: TaleWorlds.InputSystem/EmptyInputContext.cs."
---
# EmptyInputContext

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public sealed class EmptyInputContext : IInputContext`
**File:** `TaleWorlds.InputSystem/EmptyInputContext.cs`

## Overview

EmptyInputContext lives in the TaleWorlds.InputSystem module, source file TaleWorlds.InputSystem/EmptyInputContext.cs. It is a public class (sealed), implementing/inheriting IInputContext; the inheritance chain is EmptyInputContext → IInputContext. It exposes 30 public/protected members: 30 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EmptyInputContext is a top-level type in TaleWorlds.InputSystem, namespace matching the module directory; inheritance chain EmptyInputContext → IInputContext. The surface is method-led (methods 30/30, properties 0/30), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.InputSystem/EmptyInputContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPointerX` | `public int GetPointerX()` | method |
| `GetPointerY` | `public int GetPointerY()` | method |
| `GetPointerPosition` | `public Vector2 GetPointerPosition()` | method |
| `IsGameKeyDown` | `public bool IsGameKeyDown(int gameKey)` | method |
| `IsGameKeyDownImmediate` | `public bool IsGameKeyDownImmediate(int gameKey)` | method |
| `IsGameKeyPressed` | `public bool IsGameKeyPressed(int gameKey)` | method |
| `IsGameKeyReleased` | `public bool IsGameKeyReleased(int gameKey)` | method |
| `GetGameKeyAxis` | `public float GetGameKeyAxis(string gameAxisKey)` | method |
| `IsHotKeyDown` | `public bool IsHotKeyDown(string hotKey)` | method |
| `IsHotKeyReleased` | `public bool IsHotKeyReleased(string hotKey)` | method |
| `IsHotKeyPressed` | `public bool IsHotKeyPressed(string hotKey)` | method |
| `IsHotKeyDoublePressed` | `public bool IsHotKeyDoublePressed(string hotKey)` | method |
| `GetKeyState` | `public Vec2 GetKeyState(InputKey key)` | method |
| `IsKeyDown` | `public bool IsKeyDown(InputKey key)` | method |
| `IsKeyPressed` | `public bool IsKeyPressed(InputKey key)` | method |
| `IsKeyReleased` | `public bool IsKeyReleased(InputKey key)` | method |
| `GetMouseMoveX` | `public float GetMouseMoveX()` | method |
| `GetMouseMoveY` | `public float GetMouseMoveY()` | method |
| `GetIsMouseActive` | `public bool GetIsMouseActive()` | method |
| `GetMousePositionPixel` | `public Vec2 GetMousePositionPixel()` | method |
| `GetDeltaMouseScroll` | `public float GetDeltaMouseScroll()` | method |
| `GetIsControllerConnected` | `public bool GetIsControllerConnected()` | method |
| `GetMousePositionRanged` | `public Vec2 GetMousePositionRanged()` | method |
| `GetMouseSensitivity` | `public float GetMouseSensitivity()` | method |
| `IsControlDown` | `public bool IsControlDown()` | method |
| `IsShiftDown` | `public bool IsShiftDown()` | method |
| `IsAltDown` | `public bool IsAltDown()` | method |
| `GetControllerRightStickState` | `public Vec2 GetControllerRightStickState()` | method |
| `GetControllerLeftStickState` | `public Vec2 GetControllerLeftStickState()` | method |
| `InputKey[]GetClickKeys` | `public InputKey[]GetClickKeys()` | method |

## See Also

- [↑ inputsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IInputContext](../IInputContext)
- [same namespace GameAxisKey](../GameAxisKey)
- [same namespace GameKey](../GameKey)
- [same namespace GameKeyContext](../GameKeyContext)
- [same namespace HotKey](../HotKey)
