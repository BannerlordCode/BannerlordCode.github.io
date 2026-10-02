---
title: "InputContext"
description: "InputContext: a public class in TaleWorlds.InputSystem, inheriting IInputContext; 48 exposed members (42 methods, 5 properties, 0 fields). Canonical bucket system. Source: TaleWorlds.InputSystem/InputContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InputContext

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public class InputContext : IInputContext`
**File:** `TaleWorlds.InputSystem/InputContext.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## Overview

InputContext lives in the TaleWorlds.InputSystem module, source file TaleWorlds.InputSystem/InputContext.cs. It is a public class, implementing/inheriting IInputContext; the inheritance chain is InputContext → IInputContext. It exposes 48 public/protected members: 42 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InputContext lands in canonical bucket `system` (matched rule `rule:TaleWorlds.InputSystem`), namespace `TaleWorlds.InputSystem`, inheritance chain InputContext → IInputContext. The surface is method-led (methods 42/48, properties 5/48), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.InputSystem/InputContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsKeysAllowed` | `public bool IsKeysAllowed` | property |
| `IsMouseButtonAllowed` | `public bool IsMouseButtonAllowed` | property |
| `IsMouseWheelAllowed` | `public bool IsMouseWheelAllowed` | property |
| `IsControllerAllowed` | `public bool IsControllerAllowed` | property |
| `MouseOnMe` | `public bool MouseOnMe` | property |
| `InputContext` | `public InputContext()` | constructor |
| `GetPointerX` | `public int GetPointerX()` | method |
| `GetPointerY` | `public int GetPointerY()` | method |
| `GetPointerPosition` | `public Vector2 GetPointerPosition()` | method |
| `GetPointerPositionVec2` | `public Vec2 GetPointerPositionVec2()` | method |
| `RegisterHotKeyCategory` | `public void RegisterHotKeyCategory(GameKeyContext category)` | method |
| `IsCategoryRegistered` | `public bool IsCategoryRegistered(GameKeyContext category)` | method |
| `RegisterDownKeys` | `public void RegisterDownKeys()` | method |
| `UnregisterReleasedKeys` | `public void UnregisterReleasedKeys()` | method |
| `ResetLastDownKeys` | `public void ResetLastDownKeys()` | method |
| `IsHotKeyDown` | `public bool IsHotKeyDown(string hotKey)` | method |
| `IsGameKeyDown` | `public bool IsGameKeyDown(int gameKey)` | method |
| `IsGameKeyDownImmediate` | `public bool IsGameKeyDownImmediate(int gameKey)` | method |
| `IsHotKeyPressed` | `public bool IsHotKeyPressed(string hotKey)` | method |
| `IsGameKeyPressed` | `public bool IsGameKeyPressed(int gameKey)` | method |
| `IsHotKeyReleased` | `public bool IsHotKeyReleased(string hotKey)` | method |
| `IsGameKeyReleased` | `public bool IsGameKeyReleased(int gameKey)` | method |
| `GetGameKeyState` | `public float GetGameKeyState(int gameKey)` | method |
| `IsHotKeyDoublePressed` | `public bool IsHotKeyDoublePressed(string hotKey)` | method |
| `GetGameKeyAxis` | `public float GetGameKeyAxis(GameAxisKey gameKey)` | method |
| `GetGameKeyAxis` | `public float GetGameKeyAxis(string gameKey)` | method |
| `GetKeyState` | `public Vec2 GetKeyState(InputKey key)` | method |
| `IsMouseButton` | `protected bool IsMouseButton(InputKey key)` | method |
| `IsKeyDown` | `public bool IsKeyDown(InputKey key)` | method |
| `IsKeyPressed` | `public bool IsKeyPressed(InputKey key)` | method |
| `IsKeyReleased` | `public bool IsKeyReleased(InputKey key)` | method |
| `GetMouseMoveX` | `public float GetMouseMoveX()` | method |
| `GetMouseMoveY` | `public float GetMouseMoveY()` | method |
| `GetNormalizedMouseMoveX` | `public float GetNormalizedMouseMoveX()` | method |
| `GetNormalizedMouseMoveY` | `public float GetNormalizedMouseMoveY()` | method |
| `GetControllerRightStickState` | `public Vec2 GetControllerRightStickState()` | method |
| `GetControllerLeftStickState` | `public Vec2 GetControllerLeftStickState()` | method |
| `GetIsMouseActive` | `public bool GetIsMouseActive()` | method |
| `GetIsMouseDown` | `public bool GetIsMouseDown()` | method |
| `GetMousePositionPixel` | `public Vec2 GetMousePositionPixel()` | method |
| `GetDeltaMouseScroll` | `public float GetDeltaMouseScroll()` | method |
| `GetIsControllerConnected` | `public bool GetIsControllerConnected()` | method |
| `GetMousePositionRanged` | `public Vec2 GetMousePositionRanged()` | method |
| `GetMouseSensitivity` | `public float GetMouseSensitivity()` | method |
| `IsControlDown` | `public bool IsControlDown()` | method |
| `IsShiftDown` | `public bool IsShiftDown()` | method |
| `IsAltDown` | `public bool IsAltDown()` | method |
| `InputKey[]GetClickKeys` | `public InputKey[]GetClickKeys()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IInputContext](../IInputContext/)
- [same namespace EmptyInputContext](../EmptyInputContext/)
- [same namespace GameAxisKey](../GameAxisKey/)
- [same namespace GameKey](../GameKey/)
- [same namespace GameKeyContext](../GameKeyContext/)
