---
title: "ContainerHeaderLoadData"
description: "ContainerHeaderLoadData: a public class in TaleWorlds.SaveSystem.Load; 11 exposed members (3 methods, 7 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ContainerHeaderLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ContainerHeaderLoadData`
**File:** `TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

ContainerHeaderLoadData lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs. It is a public class; the inheritance chain is ContainerHeaderLoadData. It exposes 11 public/protected members: 3 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ContainerHeaderLoadData lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem.Load`, inheritance chain ContainerHeaderLoadData. The surface is property-led (properties 7/11, methods 3/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace LoadContext](../LoadContext/)
- [same namespace LoadError](../LoadError/)
- [same namespace LoadResult](../LoadResult/)
- [same namespace ObjectHeaderLoadData](../ObjectHeaderLoadData/)
