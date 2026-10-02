---
title: "GenericComparer<T>"
description: "GenericComparer<T>: a public class in TaleWorlds.Library, inheriting Comparer<T>; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/GenericComparer.cs."
---
# GenericComparer<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class GenericComparer<T>: Comparer<T>where T : IComparable<T>`
**File:** `TaleWorlds.Library/GenericComparer.cs`

## Overview

GenericComparer<T> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/GenericComparer.cs. It is a public class, implementing/inheriting Comparer<T>; the inheritance chain is GenericComparer → Comparer. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GenericComparer<T> is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain GenericComparer → Comparer. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. Comparer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/GenericComparer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Compare` | `public override int Compare(T x, T y)` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
