---
title: "ISaveDriver"
description: "ISaveDriver: a public interface in TaleWorlds.SaveSystem; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/ISaveDriver.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ISaveDriver

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public interface ISaveDriver`
**File:** `TaleWorlds.SaveSystem/ISaveDriver.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

ISaveDriver lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/ISaveDriver.cs. It is a public interface; the inheritance chain is ISaveDriver. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ISaveDriver lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem`, inheritance chain ISaveDriver. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/ISaveDriver.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Task` | `Task<SaveResultWithMessage>Save(string saveName, int version, MetaData metaData, GameData gameData);` | method |
| `SaveGameFileInfo[]GetSaveGameFileInfos` | `SaveGameFileInfo[]GetSaveGameFileInfos();` | method |
| `string[]GetSaveGameFileNames` | `string[]GetSaveGameFileNames();` | method |
| `LoadMetaData` | `MetaData LoadMetaData(string saveName);` | method |
| `Load` | `LoadData Load(string saveName);` | method |
| `Delete` | `bool Delete(string saveName);` | method |
| `IsSaveGameFileExists` | `bool IsSaveGameFileExists(string saveName);` | method |
| `IsWorkingAsync` | `bool IsWorkingAsync();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AsyncFileSaveDriver](../AsyncFileSaveDriver/)
- [same namespace ContainerType](../ContainerType/)
- [same namespace EntryId](../EntryId/)
- [same namespace FileDriver](../FileDriver/)
