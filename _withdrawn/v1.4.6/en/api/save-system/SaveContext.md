---
title: "SaveContext"
description: "SaveContext: a public class in TaleWorlds.SaveSystem.Save, inheriting ISaveContext; 14 exposed members (7 methods, 5 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/Save/SaveContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SaveContext

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveContext : ISaveContext`
**File:** `TaleWorlds.SaveSystem/Save/SaveContext.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

SaveContext lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Save/SaveContext.cs. It is a public class, implementing/inheriting ISaveContext; the inheritance chain is SaveContext → ISaveContext. It exposes 14 public/protected members: 7 methods, 5 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveContext lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem.Save`, inheritance chain SaveContext → ISaveContext. The surface is method-led (methods 7/14, properties 5/14), so it mostly exposes operations. ISaveContext on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Save/SaveContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RootObject` | `public object RootObject` | property |
| `SaveData` | `public GameData SaveData` | property |
| `DefinitionContext` | `public DefinitionContext DefinitionContext` | property |
| `GetStatistics` | `public static SaveContext.SaveStatistics GetStatistics()` | method |
| `EnableSaveStatistics` | `public static bool EnableSaveStatistics` | property |
| `SaveContext` | `public SaveContext(DefinitionContext definitionContext)` | constructor |
| `AddOrGetStringId` | `public int AddOrGetStringId(string text)` | method |
| `GetObjectId` | `public int GetObjectId(object target)` | method |
| `GetContainerId` | `public int GetContainerId(object target)` | method |
| `GetStringId` | `public int GetStringId(string target)` | method |
| `GetStringSizeInBytes` | `public static int GetStringSizeInBytes(string text)` | method |
| `Save` | `public bool Save(object target, MetaData metaData, out string errorMessage)` | method |
| `SaveStatistics` | `public struct SaveStatistics` | property |
| `SaveStatistics` | `public struct SaveStatistics` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace LegacySaveContext](../LegacySaveContext/)
- [same namespace SaveError](../SaveError/)
- [same namespace SaveOutput](../SaveOutput/)
