---
title: "FileHelper"
description: "FileHelper：TaleWorlds.Library 的 public 类；公开成员 16 个（方法 16、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/FileHelper.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FileHelper

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class FileHelper`
**File:** `TaleWorlds.Library/FileHelper.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

FileHelper 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/FileHelper.cs。它是一个 public 类，继承链为 FileHelper。public/protected 成员共 16 个：16 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FileHelper 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 FileHelper。成员构成以方法为主（方法 16/16，属性 0/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/FileHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveFile` | `public static SaveResult SaveFile(PlatformFilePath path, byte[]data)` | 方法 |
| `SaveFileString` | `public static SaveResult SaveFileString(PlatformFilePath path, string data)` | 方法 |
| `GetFileFullPath` | `public static string GetFileFullPath(PlatformFilePath path)` | 方法 |
| `AppendLineToFileString` | `public static SaveResult AppendLineToFileString(PlatformFilePath path, string data)` | 方法 |
| `Task` | `public static Task<SaveResult>SaveFileAsync(PlatformFilePath path, byte[]data)` | 方法 |
| `Task` | `public static Task<SaveResult>SaveFileStringAsync(PlatformFilePath path, string data)` | 方法 |
| `GetError` | `public static string GetError()` | 方法 |
| `FileExists` | `public static bool FileExists(PlatformFilePath path)` | 方法 |
| `Task` | `public static Task<string>GetFileContentStringAsync(PlatformFilePath path)` | 方法 |
| `GetFileContentString` | `public static string GetFileContentString(PlatformFilePath path)` | 方法 |
| `DeleteFile` | `public static void DeleteFile(PlatformFilePath path)` | 方法 |
| `PlatformFilePath[]GetFiles` | `public static PlatformFilePath[]GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)` | 方法 |
| `byte[]GetFileContent` | `public static byte[]GetFileContent(PlatformFilePath filePath)` | 方法 |
| `byte[]GetMetaDataContent` | `public static byte[]GetMetaDataContent(PlatformFilePath filePath)` | 方法 |
| `CopyFile` | `public static void CopyFile(PlatformFilePath source, PlatformFilePath target)` | 方法 |
| `CopyDirectory` | `public static void CopyDirectory(string sourceDir, string destinationDir, bool recursive)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
