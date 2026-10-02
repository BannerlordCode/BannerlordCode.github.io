---
title: "LoadResult"
description: "LoadResult: a public class in TaleWorlds.SaveSystem.Load; 6 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/Load/LoadResult.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LoadResult

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class LoadResult`
**File:** `TaleWorlds.SaveSystem/Load/LoadResult.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

LoadResult lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Load/LoadResult.cs. It is a public class; the inheritance chain is LoadResult. It exposes 6 public/protected members: 2 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LoadResult lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem.Load`, inheritance chain LoadResult. The surface is property-led (properties 4/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Load/LoadResult.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Root` | `public object Root` | property |
| `Successful` | `public bool Successful` | property |
| `LoadError[]Errors` | `public LoadError[]Errors` | property |
| `MetaData` | `public MetaData MetaData` | property |
| `InitializeObjects` | `public void InitializeObjects()` | method |
| `AfterInitializeObjects` | `public void AfterInitializeObjects()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ContainerHeaderLoadData](../ContainerHeaderLoadData/)
- [same namespace LoadContext](../LoadContext/)
- [same namespace LoadError](../LoadError/)
- [same namespace ObjectHeaderLoadData](../ObjectHeaderLoadData/)
