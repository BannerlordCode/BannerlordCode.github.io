---
title: "GameAxisKey"
description: "GameAxisKey: a public class in TaleWorlds.InputSystem; 11 exposed members (2 methods, 7 properties, 0 fields). Canonical bucket system. Source: TaleWorlds.InputSystem/GameAxisKey.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameAxisKey

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public class GameAxisKey`
**File:** `TaleWorlds.InputSystem/GameAxisKey.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## Overview

GameAxisKey lives in the TaleWorlds.InputSystem module, source file TaleWorlds.InputSystem/GameAxisKey.cs. It is a public class; the inheritance chain is GameAxisKey. It exposes 11 public/protected members: 2 methods, 7 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameAxisKey lands in canonical bucket `system` (matched rule `rule:TaleWorlds.InputSystem`), namespace `TaleWorlds.InputSystem`, inheritance chain GameAxisKey. The surface is property-led (properties 7/11, methods 2/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.InputSystem/GameAxisKey.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Id` | `public string Id` | property |
| `AxisKey` | `public Key AxisKey` | property |
| `DefaultAxisKey` | `public Key DefaultAxisKey` | property |
| `PositiveKey` | `public GameKey PositiveKey` | property |
| `NegativeKey` | `public GameKey NegativeKey` | property |
| `Type` | `public GameAxisKey.AxisType Type` | property |
| `GameAxisKey` | `public GameAxisKey(string id, InputKey axisKey, GameKey positiveKey, GameKey negativeKey, GameAxisKey.AxisType type = GameAxisKey.AxisType.X)` | constructor |
| `GetAxisState` | `public float GetAxisState(bool isKeysAllowed, bool isMouseButtonAllowed, bool isMouseWheelAllowed, bool isControllerAllowed)` | method |
| `ToString` | `public override string ToString()` | method |
| `AxisType` | `public enum AxisType` | property |
| `AxisType` | `public enum AxisType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EmptyInputContext](../EmptyInputContext/)
- [same namespace GameKey](../GameKey/)
- [same namespace GameKeyContext](../GameKeyContext/)
- [same namespace HotKey](../HotKey/)
