---
title: "IMBBindingList"
description: "IMBBindingList: a public interface in TaleWorlds.Library, inheriting IList, ICollection; 1 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/IMBBindingList.cs."
---
# IMBBindingList

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IMBBindingList : IList, ICollection, IEnumerable`
**File:** `TaleWorlds.Library/IMBBindingList.cs`

## Overview

IMBBindingList lives in the TaleWorlds.Library module, source file TaleWorlds.Library/IMBBindingList.cs. It is a public interface, implementing/inheriting IList, ICollection, IEnumerable; the inheritance chain is IMBBindingList → IList. It exposes 1 public/protected members: 1 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMBBindingList is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain IMBBindingList → IList. The surface is method-led (methods 0/1, properties 0/1), so it mostly exposes operations. IList on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/IMBBindingList.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ListChanged;` | `event ListChangedEventHandler ListChanged;` | event |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
