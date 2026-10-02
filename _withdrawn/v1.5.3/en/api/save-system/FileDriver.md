---
title: "FileDriver"
description: "Auto-generated class reference for FileDriver."
---
# FileDriver

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class FileDriver : ISaveDriver `
**Base:** ISaveDriver
**Source:** TaleWorlds.SaveSystem/FileDriver.cs

## Overview

Auto-generated stub for `FileDriver`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetSaveFilePath
`public static PlatformFilePath GetSaveFilePath(string fileName)`

### Save
`public Task<SaveResultWithMessage> Save(string saveName,int version,MetaData metaData,GameData gameData)`

### LoadMetaData
`public MetaData LoadMetaData(string saveName)`

### Load
`public LoadData Load(string saveName)`

### GetSaveGameFileInfos
`public SaveGameFileInfo[] GetSaveGameFileInfos()`

### GetSaveGameFileNames
`public string[] GetSaveGameFileNames()`

### Delete
`public bool Delete(string saveName)`

### IsSaveGameFileExists
`public bool IsSaveGameFileExists(string saveName)`

### IsWorkingAsync
`public bool IsWorkingAsync()`

## See Also

- [Section index](../)
