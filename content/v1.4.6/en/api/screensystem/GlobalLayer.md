---
title: "GlobalLayer"
description: "GlobalLayer: a public class in TaleWorlds.ScreenSystem, inheriting IComparable; 6 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.ScreenSystem/GlobalLayer.cs."
---
# GlobalLayer

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public class GlobalLayer : IComparable`
**File:** `TaleWorlds.ScreenSystem/GlobalLayer.cs`

## Overview

GlobalLayer lives in the TaleWorlds.ScreenSystem module, source file TaleWorlds.ScreenSystem/GlobalLayer.cs. It is a public class, implementing/inheriting IComparable; the inheritance chain is GlobalLayer → IComparable. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GlobalLayer is a top-level type in TaleWorlds.ScreenSystem, namespace matching the module directory; inheritance chain GlobalLayer → IComparable. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. IComparable on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ScreenSystem/GlobalLayer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Layer` | `public ScreenLayer Layer` | property |
| `OnEarlyTick` | `protected virtual void OnEarlyTick(float dt)` | method |
| `OnTick` | `protected virtual void OnTick(float dt)` | method |
| `OnLateTick` | `protected virtual void OnLateTick(float dt)` | method |
| `CompareTo` | `public int CompareTo(object obj)` | method |
| `UpdateLayout` | `public virtual void UpdateLayout()` | method |

## See Also

- [↑ screensystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CursorType](../CursorType)
- [same namespace InputRestrictions](../InputRestrictions)
- [same namespace IScreenManagerEngineConnection](../IScreenManagerEngineConnection)
- [same namespace ScreenComponent](../ScreenComponent)
