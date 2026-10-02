---
title: "MBList2D<T>"
description: "MBList2D<T>: a public class in TaleWorlds.Library, inheriting IMBCollection; 9 exposed members (5 methods, 3 properties, 0 fields). Source: TaleWorlds.Library/MBList2D.cs."
---
# MBList2D<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBList2D<T>: IMBCollection`
**File:** `TaleWorlds.Library/MBList2D.cs`

## Overview

MBList2D<T> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MBList2D.cs. It is a public class, implementing/inheriting IMBCollection; the inheritance chain is MBList2D → IMBCollection. It exposes 9 public/protected members: 5 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBList2D<T> is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain MBList2D → IMBCollection. The surface is method-led (methods 5/9, properties 3/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MBList2D.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Count1` | `public int Count1` | property |
| `Count2` | `public int Count2` | property |
| `MBList2D` | `public MBList2D(int count1, int count2)` | constructor |
| `T[]RawArray` | `public T[]RawArray` | property |
| `this[...]` | `public T this[int index1, int index2]` | indexer |
| `Contains` | `public bool Contains(T item)` | method |
| `Clear` | `public void Clear()` | method |
| `ResetWithNewCount` | `public void ResetWithNewCount(int newCount1, int newCount2)` | method |
| `CopyRowTo` | `public void CopyRowTo(int sourceIndex1, int sourceIndex2, MBList2D<T>destination, int destinationIndex1, int destinationIndex2, int copyCount)` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IMBCollection](../IMBCollection)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
