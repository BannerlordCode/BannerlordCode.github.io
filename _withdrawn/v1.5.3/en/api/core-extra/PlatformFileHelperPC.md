---
title: "PlatformFileHelperPC"
description: "Auto-generated class reference for PlatformFileHelperPC."
---
# PlatformFileHelperPC

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class PlatformFileHelperPC : IPlatformFileHelper `
**Base:** IPlatformFileHelper
**Source:** TaleWorlds.Library/PlatformFileHelperPC.cs

## Overview

Auto-generated stub for `PlatformFileHelperPC`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SaveFile
`public SaveResult SaveFile(PlatformFilePath path,byte[] data)`

### SaveFileString
`public SaveResult SaveFileString(PlatformFilePath path,string data)`

### SaveFileAsync
`public Task<SaveResult> SaveFileAsync(PlatformFilePath path,byte[] data)`

### SaveFileStringAsync
`public Task<SaveResult> SaveFileStringAsync(PlatformFilePath path,string data)`

### AppendLineToFileString
`public SaveResult AppendLineToFileString(PlatformFilePath path,string data)`

### GetFileFullPath
`public string GetFileFullPath(PlatformFilePath filePath)`

### FileExists
`public bool FileExists(PlatformFilePath path)`

### GetFileContentStringAsync
`public async Task<string> GetFileContentStringAsync(PlatformFilePath path)`

### GetFileContentString
`public string GetFileContentString(PlatformFilePath path)`

### GetMetaDataContent
`public byte[] GetMetaDataContent(PlatformFilePath path)`

### GetFileContent
`public byte[] GetFileContent(PlatformFilePath path)`

### DeleteFile
`public bool DeleteFile(PlatformFilePath path)`

### CreateDirectory
`public void CreateDirectory(PlatformDirectoryPath path)`

### GetFiles
`public PlatformFilePath[] GetFiles(PlatformDirectoryPath path,string searchPattern,SearchOption searchOption)`

### RenameFile
`public void RenameFile(PlatformFilePath filePath,string newName)`

### GetError
`public string GetError()`

## See Also

- [Section index](../)
