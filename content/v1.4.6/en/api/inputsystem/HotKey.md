---
title: "HotKey"
description: "HotKey: a public class in TaleWorlds.InputSystem; 11 exposed members (5 methods, 3 properties, 0 fields). Source: TaleWorlds.InputSystem/HotKey.cs."
---
# HotKey

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public class HotKey`
**File:** `TaleWorlds.InputSystem/HotKey.cs`

## Overview

HotKey lives in the TaleWorlds.InputSystem module, source file TaleWorlds.InputSystem/HotKey.cs. It is a public class; the inheritance chain is HotKey. It exposes 11 public/protected members: 5 methods, 3 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HotKey is a top-level type in TaleWorlds.InputSystem, namespace matching the module directory; inheritance chain HotKey. The surface is method-led (methods 5/11, properties 3/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.InputSystem/HotKey.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public List<Key>Keys` | property |
| `List` | `public List<Key>DefaultKeys` | property |
| `HotKey` | `public HotKey(string id, string groupId, List<Key>keys, HotKey.Modifiers modifiers = HotKey.Modifiers.None, HotKey.Modifiers negativeModifiers = HotKey.Modifiers.None)` | constructor |
| `HotKey` | `public HotKey(string id, string groupId, InputKey inputKey, HotKey.Modifiers modifiers = HotKey.Modifiers.None, HotKey.Modifiers negativeModifiers = HotKey.Modifiers.None)` | constructor |
| `HasModifier` | `public bool HasModifier(HotKey.Modifiers modifier)` | method |
| `HasSameModifiers` | `public bool HasSameModifiers(HotKey other)` | method |
| `ToString` | `public override string ToString()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Modifiers` | `public enum Modifiers` | property |
| `Modifiers` | `public enum Modifiers` | nested type |

## See Also

- [↑ inputsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EmptyInputContext](../EmptyInputContext)
- [same namespace GameAxisKey](../GameAxisKey)
- [same namespace GameKey](../GameKey)
- [same namespace GameKeyContext](../GameKeyContext)
