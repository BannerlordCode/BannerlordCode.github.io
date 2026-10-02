---
title: "MBReadOnlyList<T>"
description: "MBReadOnlyList<T>: a public class in TaleWorlds.Library, inheriting List<T>; 3 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/MBReadOnlyList.cs."
---
# MBReadOnlyList<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBReadOnlyList<T>: List<T>`
**File:** `TaleWorlds.Library/MBReadOnlyList.cs`

## Overview

MBReadOnlyList<T> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MBReadOnlyList.cs. It is a public class, implementing/inheriting List<T>; the inheritance chain is MBReadOnlyList → List. It exposes 3 public/protected members: 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBReadOnlyList<T> is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain MBReadOnlyList → List. The surface is method-led (methods 0/3, properties 0/3), so it mostly exposes operations. List on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MBReadOnlyList.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList()` | constructor |
| `MBReadOnlyList` | `public MBReadOnlyList(int capacity) : base(capacity)` | constructor |
| `MBReadOnlyList` | `public MBReadOnlyList(IEnumerable<T>collection) : base(collection)` | constructor |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
