---
title: "GlobalLayer"
description: "GlobalLayer: a public class in TaleWorlds.ScreenSystem, inheriting IComparable; 6 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.ScreenSystem/GlobalLayer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GlobalLayer

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public class GlobalLayer : IComparable`
**File:** `TaleWorlds.ScreenSystem/GlobalLayer.cs`
**Bucket:** `gui` (rule:TaleWorlds.ScreenSystem)

## Overview

GlobalLayer lives in the TaleWorlds.ScreenSystem module, source file TaleWorlds.ScreenSystem/GlobalLayer.cs. It is a public class, implementing/inheriting IComparable; the inheritance chain is GlobalLayer → IComparable. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GlobalLayer lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.ScreenSystem`), namespace `TaleWorlds.ScreenSystem`, inheritance chain GlobalLayer → IComparable. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. IComparable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ScreenSystem/GlobalLayer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Layer` | `public ScreenLayer Layer` | property |
| `OnEarlyTick` | `protected virtual void OnEarlyTick(float dt)` | method |
| `OnTick` | `protected virtual void OnTick(float dt)` | method |
| `OnLateTick` | `protected virtual void OnLateTick(float dt)` | method |
| `CompareTo` | `public int CompareTo(object obj)` | method |
| `UpdateLayout` | `public virtual void UpdateLayout()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CursorType](../CursorType/)
- [same namespace InputRestrictions](../InputRestrictions/)
- [same namespace IScreenManagerEngineConnection](../IScreenManagerEngineConnection/)
- [same namespace ScreenComponent](../ScreenComponent/)
