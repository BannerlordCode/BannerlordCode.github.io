---
title: "FileHelper"
description: "FileHelper 的自动生成类参考。"
---
# FileHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class FileHelper `
**Base:** System.Object
**Source:** TaleWorlds.Library/FileHelper.cs

## 概述

`FileHelper` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/FileHelper.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SaveFile
`public static SaveResult SaveFile(PlatformFilePath path,byte[] data) `

### SaveFileString
`public static SaveResult SaveFileString(PlatformFilePath path,string data) `

### GetFileFullPath
`public static string GetFileFullPath(PlatformFilePath path) `

### AppendLineToFileString
`public static SaveResult AppendLineToFileString(PlatformFilePath path,string data) `

### SaveFileAsync
`public static Task<SaveResult> SaveFileAsync(PlatformFilePath path,byte[] data) `

### SaveFileStringAsync
`public static Task<SaveResult> SaveFileStringAsync(PlatformFilePath path,string data) `

### GetError
`public static string GetError() `

### FileExists
`public static bool FileExists(PlatformFilePath path) `

### GetFileContentStringAsync
`public static Task<string> GetFileContentStringAsync(PlatformFilePath path) `

### GetFileContentString
`public static string GetFileContentString(PlatformFilePath path) `

### DeleteFile
`public static void DeleteFile(PlatformFilePath path) `

### GetFiles
`public static PlatformFilePath[] GetFiles(PlatformDirectoryPath path,string searchPattern,SearchOption searchOption) `

### GetFileContent
`public static byte[] GetFileContent(PlatformFilePath filePath) `

### GetMetaDataContent
`public static byte[] GetMetaDataContent(PlatformFilePath filePath) `

### CopyFile
`public static void CopyFile(PlatformFilePath source,PlatformFilePath target) `

### CopyDirectory
`public static void CopyDirectory(string sourceDir,string destinationDir,bool recursive) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
