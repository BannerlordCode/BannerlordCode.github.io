---
title: "ContainerHeaderLoadData"
description: "ContainerHeaderLoadData: a public class in TaleWorlds.SaveSystem; 11 exposed members (3 methods, 7 properties, 0 fields). Source: TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs."
---
# ContainerHeaderLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ContainerHeaderLoadData`
**File:** `TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs`

## Overview

ContainerHeaderLoadData lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs. It is a public class; the inheritance chain is ContainerHeaderLoadData. It exposes 11 public/protected members: 3 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ContainerHeaderLoadData is a top-level type in TaleWorlds.SaveSystem, namespace differing from (TaleWorlds.SaveSystem.Load) the module directory; inheritance chain ContainerHeaderLoadData. The surface is property-led (properties 7/11, methods 3/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public int Id` | property |
| `Target` | `public object Target` | property |
| `Context` | `public LoadContext Context` | property |
| `TypeDefinition` | `public ContainerDefinition TypeDefinition` | property |
| `SaveId` | `public SaveId SaveId` | property |
| `ElementCount` | `public int ElementCount` | property |
| `ContainerType` | `public ContainerType ContainerType` | property |
| `ContainerHeaderLoadData` | `public ContainerHeaderLoadData(LoadContext context, int id)` | constructor |
| `GetObjectTypeDefinition` | `public bool GetObjectTypeDefinition()` | method |
| `CreateObject` | `public void CreateObject()` | method |
| `InitialieReaders` | `public void InitialieReaders(SaveEntryFolder saveEntryFolder)` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace LoadContext](../LoadContext)
- [same namespace LoadError](../LoadError)
- [same namespace LoadResult](../LoadResult)
- [same namespace ObjectHeaderLoadData](../ObjectHeaderLoadData)
