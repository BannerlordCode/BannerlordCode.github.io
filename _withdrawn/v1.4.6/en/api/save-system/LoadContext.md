---
title: "LoadContext"
description: "LoadContext: a public class in TaleWorlds.SaveSystem.Load; 10 exposed members (5 methods, 4 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/Load/LoadContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LoadContext

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class LoadContext`
**File:** `TaleWorlds.SaveSystem/Load/LoadContext.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

LoadContext lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Load/LoadContext.cs. It is a public class; the inheritance chain is LoadContext. It exposes 10 public/protected members: 5 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LoadContext lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem.Load`, inheritance chain LoadContext. The surface is method-led (methods 5/10, properties 4/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Load/LoadContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EnableLoadStatistics` | `public static bool EnableLoadStatistics` | property |
| `RootObject` | `public object RootObject` | property |
| `DefinitionContext` | `public DefinitionContext DefinitionContext` | property |
| `Driver` | `public ISaveDriver Driver` | property |
| `LoadContext` | `public LoadContext(DefinitionContext definitionContext, ISaveDriver driver)` | constructor |
| `Load` | `public bool Load(LoadData loadData, bool loadAsLateInitialize)` | method |
| `TryConvertType` | `public static bool TryConvertType(Type sourceType, Type targetType, ref object data)` | method |
| `GetObjectWithId` | `public ObjectHeaderLoadData GetObjectWithId(int id)` | method |
| `GetContainerWithId` | `public ContainerHeaderLoadData GetContainerWithId(int id)` | method |
| `GetStringWithId` | `public string GetStringWithId(int id)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ContainerHeaderLoadData](../ContainerHeaderLoadData/)
- [same namespace LoadError](../LoadError/)
- [same namespace LoadResult](../LoadResult/)
- [same namespace ObjectHeaderLoadData](../ObjectHeaderLoadData/)
