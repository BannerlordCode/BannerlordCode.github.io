---
title: "GauntletInputContext"
description: "GauntletInputContext: a public class in TaleWorlds.GauntletUI, inheriting IReadonlyInputContext; 11 exposed members (10 methods, 0 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/GauntletInputContext.cs."
---
# GauntletInputContext

**Namespace:** `TaleWorlds.GauntletUI.GauntletInput`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GauntletInputContext : IReadonlyInputContext`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/GauntletInputContext.cs`

## Overview

GauntletInputContext lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/GauntletInputContext.cs. It is a public class, implementing/inheriting IReadonlyInputContext; the inheritance chain is GauntletInputContext → IReadonlyInputContext. It exposes 11 public/protected members: 10 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletInputContext is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.GauntletInput) the module directory; inheritance chain GauntletInputContext → IReadonlyInputContext. The surface is method-led (methods 10/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/GauntletInputContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletInputContext` | `public GauntletInputContext(IInputContext inputContext)` | constructor |
| `GetIsMouseActive` | `public bool GetIsMouseActive()` | method |
| `GetMousePosition` | `public Vector2 GetMousePosition()` | method |
| `GetMouseMovement` | `public Vector2 GetMouseMovement()` | method |
| `InputKey[]GetClickKeys` | `public InputKey[]GetClickKeys()` | method |
| `InputKey[]GetAlternateClickKeys` | `public InputKey[]GetAlternateClickKeys()` | method |
| `GetMouseScrollDelta` | `public float GetMouseScrollDelta()` | method |
| `GetControllerLeftStickState` | `public Vector2 GetControllerLeftStickState()` | method |
| `GetControllerRightStickState` | `public Vector2 GetControllerRightStickState()` | method |
| `SetMousePositionOverride` | `public void SetMousePositionOverride(Vector2 mousePosition)` | method |
| `ResetMousePositionOverride` | `public void ResetMousePositionOverride()` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IReadonlyInputContext](../IReadonlyInputContext)
- [same namespace IReadonlyInputContext](../IReadonlyInputContext)
