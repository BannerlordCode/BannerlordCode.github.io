---
title: "SaveContext"
description: "SaveContext: a public class in TaleWorlds.SaveSystem, inheriting ISaveContext; 14 exposed members (7 methods, 5 properties, 0 fields). Source: TaleWorlds.SaveSystem/Save/SaveContext.cs."
---
# SaveContext

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveContext : ISaveContext`
**File:** `TaleWorlds.SaveSystem/Save/SaveContext.cs`

## Overview

SaveContext lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Save/SaveContext.cs. It is a public class, implementing/inheriting ISaveContext; the inheritance chain is SaveContext → ISaveContext. It exposes 14 public/protected members: 7 methods, 5 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveContext is a top-level type in TaleWorlds.SaveSystem, namespace differing from (TaleWorlds.SaveSystem.Save) the module directory; inheritance chain SaveContext → ISaveContext. The surface is method-led (methods 7/14, properties 5/14), so it mostly exposes operations. ISaveContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Save/SaveContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace LegacySaveContext](../LegacySaveContext)
- [same namespace SaveError](../SaveError)
- [same namespace SaveOutput](../SaveOutput)
