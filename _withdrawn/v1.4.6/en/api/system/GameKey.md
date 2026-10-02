---
title: "GameKey"
description: "GameKey: a public class in TaleWorlds.InputSystem; 13 exposed members (3 methods, 8 properties, 0 fields). Canonical bucket system. Source: TaleWorlds.InputSystem/GameKey.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameKey

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public class GameKey`
**File:** `TaleWorlds.InputSystem/GameKey.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## Overview

GameKey lives in the TaleWorlds.InputSystem module, source file TaleWorlds.InputSystem/GameKey.cs. It is a public class; the inheritance chain is GameKey. It exposes 13 public/protected members: 3 methods, 8 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameKey lands in canonical bucket `system` (matched rule `rule:TaleWorlds.InputSystem`), namespace `TaleWorlds.InputSystem`, inheritance chain GameKey. The surface is property-led (properties 8/13, methods 3/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.InputSystem/GameKey.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Id` | `public int Id` | property |
| `StringId` | `public string StringId` | property |
| `GroupId` | `public string GroupId` | property |
| `MainCategoryId` | `public string MainCategoryId` | property |
| `KeyboardKey` | `public Key KeyboardKey` | property |
| `DefaultKeyboardKey` | `public Key DefaultKeyboardKey` | property |
| `ControllerKey` | `public Key ControllerKey` | property |
| `DefaultControllerKey` | `public Key DefaultControllerKey` | property |
| `GameKey` | `public GameKey(int id, string stringId, string groupId, InputKey defaultKeyboardKey, InputKey defaultControllerKey, string mainCategoryId = "")` | constructor |
| `GameKey` | `public GameKey(int id, string stringId, string groupId, InputKey defaultKeyboardKey, string mainCategoryId = "")` | constructor |
| `ToString` | `public override string ToString()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EmptyInputContext](../EmptyInputContext/)
- [same namespace GameAxisKey](../GameAxisKey/)
- [same namespace GameKeyContext](../GameKeyContext/)
- [same namespace HotKey](../HotKey/)
