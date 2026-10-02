---
title: "ListChangedEventArgs"
description: "ListChangedEventArgs: a public class in TaleWorlds.Library, inheriting EventArgs; 5 exposed members (0 methods, 3 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/ListChangedEventArgs.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ListChangedEventArgs

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ListChangedEventArgs : EventArgs`
**File:** `TaleWorlds.Library/ListChangedEventArgs.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

ListChangedEventArgs lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ListChangedEventArgs.cs. It is a public class, implementing/inheriting EventArgs; the inheritance chain is ListChangedEventArgs → EventArgs. It exposes 5 public/protected members: 3 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ListChangedEventArgs lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain ListChangedEventArgs → EventArgs. The surface is property-led (properties 3/5, methods 0/5), so it mostly exposes state for reading. EventArgs on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ListChangedEventArgs.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ListChangedEventArgs` | `public ListChangedEventArgs(ListChangedType listChangedType, int newIndex)` | constructor |
| `ListChangedEventArgs` | `public ListChangedEventArgs(ListChangedType listChangedType, int newIndex, int oldIndex)` | constructor |
| `ListChangedType` | `public ListChangedType ListChangedType` | property |
| `NewIndex` | `public int NewIndex` | property |
| `OldIndex` | `public int OldIndex` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
