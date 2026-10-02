---
title: "IMBBindingList"
description: "IMBBindingList: a public interface in TaleWorlds.Library, inheriting IList, ICollection; 1 exposed members (0 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/IMBBindingList.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMBBindingList

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IMBBindingList : IList, ICollection, IEnumerable`
**File:** `TaleWorlds.Library/IMBBindingList.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

IMBBindingList lives in the TaleWorlds.Library module, source file TaleWorlds.Library/IMBBindingList.cs. It is a public interface, implementing/inheriting IList, ICollection, IEnumerable; the inheritance chain is IMBBindingList → IList. It exposes 1 public/protected members: 1 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMBBindingList lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain IMBBindingList → IList. The surface is method-led (methods 0/1, properties 0/1), so it mostly exposes operations. IList on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/IMBBindingList.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ListChanged;` | `event ListChangedEventHandler ListChanged;` | event |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
