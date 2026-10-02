---
title: "IReadonlyInputContext"
description: "IReadonlyInputContext: a public interface in TaleWorlds.GauntletUI; 8 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/IReadonlyInputContext.cs."
---
# IReadonlyInputContext

**Namespace:** `TaleWorlds.GauntletUI.GauntletInput`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public interface IReadonlyInputContext`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/IReadonlyInputContext.cs`

## Overview

IReadonlyInputContext lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/IReadonlyInputContext.cs. It is a public interface; the inheritance chain is IReadonlyInputContext. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IReadonlyInputContext is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.GauntletInput) the module directory; inheritance chain IReadonlyInputContext. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/IReadonlyInputContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetIsMouseActive` | `bool GetIsMouseActive();` | method |
| `GetMousePosition` | `Vector2 GetMousePosition();` | method |
| `GetMouseMovement` | `Vector2 GetMouseMovement();` | method |
| `InputKey[]GetClickKeys` | `InputKey[]GetClickKeys();` | method |
| `InputKey[]GetAlternateClickKeys` | `InputKey[]GetAlternateClickKeys();` | method |
| `GetControllerLeftStickState` | `Vector2 GetControllerLeftStickState();` | method |
| `GetControllerRightStickState` | `Vector2 GetControllerRightStickState();` | method |
| `GetMouseScrollDelta` | `float GetMouseScrollDelta();` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletInputContext](../GauntletInputContext)
