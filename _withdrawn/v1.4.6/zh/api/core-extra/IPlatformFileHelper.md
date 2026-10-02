---
title: "IPlatformFileHelper"
description: "IPlatformFileHelper：TaleWorlds.Library 的 public 接口；公开成员 14 个（方法 14、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/IPlatformFileHelper.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IPlatformFileHelper

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IPlatformFileHelper`
**File:** `TaleWorlds.Library/IPlatformFileHelper.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

IPlatformFileHelper 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/IPlatformFileHelper.cs。它是一个 public 接口，继承链为 IPlatformFileHelper。public/protected 成员共 14 个：14 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IPlatformFileHelper 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 IPlatformFileHelper。成员构成以方法为主（方法 14/14，属性 0/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/IPlatformFileHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveFile` | `SaveResult SaveFile(PlatformFilePath path, byte[]data);` | 方法 |
| `SaveFileString` | `SaveResult SaveFileString(PlatformFilePath path, string data);` | 方法 |
| `AppendLineToFileString` | `SaveResult AppendLineToFileString(PlatformFilePath path, string data);` | 方法 |
| `Task` | `Task<SaveResult>SaveFileAsync(PlatformFilePath path, byte[]data);` | 方法 |
| `Task` | `Task<SaveResult>SaveFileStringAsync(PlatformFilePath path, string data);` | 方法 |
| `FileExists` | `bool FileExists(PlatformFilePath path);` | 方法 |
| `Task` | `Task<string>GetFileContentStringAsync(PlatformFilePath path);` | 方法 |
| `GetFileContentString` | `string GetFileContentString(PlatformFilePath path);` | 方法 |
| `byte[]GetFileContent` | `byte[]GetFileContent(PlatformFilePath filePath);` | 方法 |
| `byte[]GetMetaDataContent` | `byte[]GetMetaDataContent(PlatformFilePath filePath);` | 方法 |
| `DeleteFile` | `bool DeleteFile(PlatformFilePath path);` | 方法 |
| `PlatformFilePath[]GetFiles` | `PlatformFilePath[]GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption);` | 方法 |
| `GetFileFullPath` | `string GetFileFullPath(PlatformFilePath filePath);` | 方法 |
| `GetError` | `string GetError();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
