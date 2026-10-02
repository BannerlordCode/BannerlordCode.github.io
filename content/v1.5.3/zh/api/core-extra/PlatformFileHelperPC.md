---
title: "PlatformFileHelperPC"
description: "PlatformFileHelperPC 的自动生成类参考。"
---
# PlatformFileHelperPC

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class PlatformFileHelperPC : IPlatformFileHelper `
**Base:** IPlatformFileHelper
**Source:** TaleWorlds.Library/PlatformFileHelperPC.cs

## 概述

`PlatformFileHelperPC` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/PlatformFileHelperPC.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SaveFile
`public SaveResult SaveFile(PlatformFilePath path,byte[] data) `

### SaveFileString
`public SaveResult SaveFileString(PlatformFilePath path,string data) `

### SaveFileAsync
`public Task<SaveResult> SaveFileAsync(PlatformFilePath path,byte[] data) `

### SaveFileStringAsync
`public Task<SaveResult> SaveFileStringAsync(PlatformFilePath path,string data) `

### AppendLineToFileString
`public SaveResult AppendLineToFileString(PlatformFilePath path,string data) `

### GetFileFullPath
`public string GetFileFullPath(PlatformFilePath filePath) `

### FileExists
`public bool FileExists(PlatformFilePath path) `

### GetFileContentStringAsync
`public async Task<string> GetFileContentStringAsync(PlatformFilePath path) `

### GetFileContentString
`public string GetFileContentString(PlatformFilePath path) `

### GetMetaDataContent
`public byte[] GetMetaDataContent(PlatformFilePath path) `

### GetFileContent
`public byte[] GetFileContent(PlatformFilePath path) `

### DeleteFile
`public bool DeleteFile(PlatformFilePath path) `

### CreateDirectory
`public void CreateDirectory(PlatformDirectoryPath path) `

### GetFiles
`public PlatformFilePath[] GetFiles(PlatformDirectoryPath path,string searchPattern,SearchOption searchOption) `

### RenameFile
`public void RenameFile(PlatformFilePath filePath,string newName) `

### GetError
`public string GetError() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
