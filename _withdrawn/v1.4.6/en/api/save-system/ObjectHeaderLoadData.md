---
title: "ObjectHeaderLoadData"
description: "ObjectHeaderLoadData: a public class in TaleWorlds.SaveSystem.Load; 13 exposed members (4 methods, 8 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ObjectHeaderLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ObjectHeaderLoadData`
**File:** `TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

ObjectHeaderLoadData lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs. It is a public class; the inheritance chain is ObjectHeaderLoadData. It exposes 13 public/protected members: 4 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ObjectHeaderLoadData lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem.Load`, inheritance chain ObjectHeaderLoadData. The surface is property-led (properties 8/13, methods 4/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ContainerHeaderLoadData](../ContainerHeaderLoadData/)
- [same namespace LoadContext](../LoadContext/)
- [same namespace LoadError](../LoadError/)
- [same namespace LoadResult](../LoadResult/)
