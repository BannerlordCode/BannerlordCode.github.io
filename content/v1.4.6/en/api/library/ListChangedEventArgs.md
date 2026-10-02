---
title: "ListChangedEventArgs"
description: "ListChangedEventArgs: a public class in TaleWorlds.Library, inheriting EventArgs; 5 exposed members (0 methods, 3 properties, 0 fields). Source: TaleWorlds.Library/ListChangedEventArgs.cs."
---
# ListChangedEventArgs

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ListChangedEventArgs : EventArgs`
**File:** `TaleWorlds.Library/ListChangedEventArgs.cs`

## Overview

ListChangedEventArgs lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ListChangedEventArgs.cs. It is a public class, implementing/inheriting EventArgs; the inheritance chain is ListChangedEventArgs → EventArgs. It exposes 5 public/protected members: 3 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ListChangedEventArgs is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain ListChangedEventArgs → EventArgs. The surface is property-led (properties 3/5, methods 0/5), so it mostly exposes state for reading. EventArgs on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ListChangedEventArgs.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ListChangedEventArgs` | `public ListChangedEventArgs(ListChangedType listChangedType, int newIndex)` | constructor |
| `ListChangedEventArgs` | `public ListChangedEventArgs(ListChangedType listChangedType, int newIndex, int oldIndex)` | constructor |
| `ListChangedType` | `public ListChangedType ListChangedType` | property |
| `NewIndex` | `public int NewIndex` | property |
| `OldIndex` | `public int OldIndex` | property |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
