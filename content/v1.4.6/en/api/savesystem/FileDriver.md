---
title: "FileDriver"
description: "FileDriver: a public class in TaleWorlds.SaveSystem, inheriting ISaveDriver; 11 exposed members (9 methods, 1 properties, 1 fields). Source: TaleWorlds.SaveSystem/FileDriver.cs."
---
# FileDriver

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class FileDriver : ISaveDriver`
**File:** `TaleWorlds.SaveSystem/FileDriver.cs`

## Overview

FileDriver lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/FileDriver.cs. It is a public class, implementing/inheriting ISaveDriver; the inheritance chain is FileDriver → ISaveDriver. It exposes 11 public/protected members: 9 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FileDriver is a top-level type in TaleWorlds.SaveSystem, namespace matching the module directory; inheritance chain FileDriver → ISaveDriver. The surface is method-led (methods 9/11, properties 1/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/FileDriver.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SavePath` | `public static PlatformDirectoryPath SavePath` | property |
| `GetSaveFilePath` | `public static PlatformFilePath GetSaveFilePath(string fileName)` | method |
| `Task` | `public Task<SaveResultWithMessage>Save(string saveName, int version, MetaData metaData, GameData gameData)` | method |
| `LoadMetaData` | `public MetaData LoadMetaData(string saveName)` | method |
| `Load` | `public LoadData Load(string saveName)` | method |
| `SaveGameFileInfo[]GetSaveGameFileInfos` | `public SaveGameFileInfo[]GetSaveGameFileInfos()` | method |
| `string[]GetSaveGameFileNames` | `public string[]GetSaveGameFileNames()` | method |
| `Delete` | `public bool Delete(string saveName)` | method |
| `IsSaveGameFileExists` | `public bool IsSaveGameFileExists(string saveName)` | method |
| `IsWorkingAsync` | `public bool IsWorkingAsync()` | method |
| `SaveDirectoryName` | `public const string SaveDirectoryName` | field |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ISaveDriver](../ISaveDriver)
- [same namespace AsyncFileSaveDriver](../AsyncFileSaveDriver)
- [same namespace ContainerType](../ContainerType)
- [same namespace EntryId](../EntryId)
- [same namespace FolderId](../FolderId)
