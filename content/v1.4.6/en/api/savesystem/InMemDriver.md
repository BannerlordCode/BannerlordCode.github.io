---
title: "InMemDriver"
description: "InMemDriver: a public class in TaleWorlds.SaveSystem, inheriting ISaveDriver; 8 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.SaveSystem/InMemDriver.cs."
---
# InMemDriver

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class InMemDriver : ISaveDriver`
**File:** `TaleWorlds.SaveSystem/InMemDriver.cs`

## Overview

InMemDriver lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/InMemDriver.cs. It is a public class, implementing/inheriting ISaveDriver; the inheritance chain is InMemDriver → ISaveDriver. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InMemDriver is a top-level type in TaleWorlds.SaveSystem, namespace matching the module directory; inheritance chain InMemDriver → ISaveDriver. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/InMemDriver.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Task` | `public Task<SaveResultWithMessage>Save(string saveName, int version, MetaData metaData, GameData gameData)` | method |
| `LoadMetaData` | `public MetaData LoadMetaData(string saveName)` | method |
| `Load` | `public LoadData Load(string saveName)` | method |
| `SaveGameFileInfo[]GetSaveGameFileInfos` | `public SaveGameFileInfo[]GetSaveGameFileInfos()` | method |
| `string[]GetSaveGameFileNames` | `public string[]GetSaveGameFileNames()` | method |
| `Delete` | `public bool Delete(string saveName)` | method |
| `IsSaveGameFileExists` | `public bool IsSaveGameFileExists(string saveName)` | method |
| `IsWorkingAsync` | `public bool IsWorkingAsync()` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ISaveDriver](../ISaveDriver)
- [same namespace AsyncFileSaveDriver](../AsyncFileSaveDriver)
- [same namespace ContainerType](../ContainerType)
- [same namespace EntryId](../EntryId)
- [same namespace FileDriver](../FileDriver)
