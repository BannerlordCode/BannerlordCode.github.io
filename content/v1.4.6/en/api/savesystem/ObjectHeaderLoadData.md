---
title: "ObjectHeaderLoadData"
description: "ObjectHeaderLoadData: a public class in TaleWorlds.SaveSystem; 13 exposed members (4 methods, 8 properties, 0 fields). Source: TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs."
---
# ObjectHeaderLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ObjectHeaderLoadData`
**File:** `TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs`

## Overview

ObjectHeaderLoadData lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs. It is a public class; the inheritance chain is ObjectHeaderLoadData. It exposes 13 public/protected members: 4 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ObjectHeaderLoadData is a top-level type in TaleWorlds.SaveSystem, namespace differing from (TaleWorlds.SaveSystem.Load) the module directory; inheritance chain ObjectHeaderLoadData. The surface is property-led (properties 8/13, methods 4/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public int Id` | property |
| `LoadedObject` | `public object LoadedObject` | property |
| `Target` | `public object Target` | property |
| `PropertyCount` | `public short PropertyCount` | property |
| `ChildStructCount` | `public short ChildStructCount` | property |
| `TypeDefinition` | `public TypeDefinition TypeDefinition` | property |
| `Context` | `public LoadContext Context` | property |
| `SaveId` | `public SaveId SaveId` | property |
| `ObjectHeaderLoadData` | `public ObjectHeaderLoadData(LoadContext context, int id)` | constructor |
| `InitialieReaders` | `public void InitialieReaders(SaveEntryFolder saveEntryFolder)` | method |
| `CreateObject` | `public void CreateObject()` | method |
| `AdvancedResolveObject` | `public void AdvancedResolveObject(MetaData metaData, ObjectLoadData objectLoadData)` | method |
| `ResolveObject` | `public void ResolveObject()` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ContainerHeaderLoadData](../ContainerHeaderLoadData)
- [same namespace LoadContext](../LoadContext)
- [same namespace LoadError](../LoadError)
- [same namespace LoadResult](../LoadResult)
