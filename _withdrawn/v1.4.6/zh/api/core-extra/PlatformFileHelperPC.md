---
title: "PlatformFileHelperPC"
description: "PlatformFileHelperPC：TaleWorlds.Library 的 public 类，继承 IPlatformFileHelper；公开成员 17 个（方法 16、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/PlatformFileHelperPC.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlatformFileHelperPC

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class PlatformFileHelperPC : IPlatformFileHelper`
**File:** `TaleWorlds.Library/PlatformFileHelperPC.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

PlatformFileHelperPC 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/PlatformFileHelperPC.cs。它是一个 public 类，实现/继承 IPlatformFileHelper，继承链为 PlatformFileHelperPC → IPlatformFileHelper。public/protected 成员共 17 个：16 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PlatformFileHelperPC 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 PlatformFileHelperPC → IPlatformFileHelper。成员构成以方法为主（方法 16/17，属性 0/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/PlatformFileHelperPC.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlatformFileHelperPC` | `public PlatformFileHelperPC(string applicationName)` | 构造函数 |
| `SaveFile` | `public SaveResult SaveFile(PlatformFilePath path, byte[]data)` | 方法 |
| `SaveFileString` | `public SaveResult SaveFileString(PlatformFilePath path, string data)` | 方法 |
| `Task` | `public Task<SaveResult>SaveFileAsync(PlatformFilePath path, byte[]data)` | 方法 |
| `Task` | `public Task<SaveResult>SaveFileStringAsync(PlatformFilePath path, string data)` | 方法 |
| `AppendLineToFileString` | `public SaveResult AppendLineToFileString(PlatformFilePath path, string data)` | 方法 |
| `GetFileFullPath` | `public string GetFileFullPath(PlatformFilePath filePath)` | 方法 |
| `FileExists` | `public bool FileExists(PlatformFilePath path)` | 方法 |
| `Task` | `public async Task<string>GetFileContentStringAsync(PlatformFilePath path)` | 方法 |
| `GetFileContentString` | `public string GetFileContentString(PlatformFilePath path)` | 方法 |
| `byte[]GetMetaDataContent` | `public byte[]GetMetaDataContent(PlatformFilePath path)` | 方法 |
| `byte[]GetFileContent` | `public byte[]GetFileContent(PlatformFilePath path)` | 方法 |
| `DeleteFile` | `public bool DeleteFile(PlatformFilePath path)` | 方法 |
| `CreateDirectory` | `public void CreateDirectory(PlatformDirectoryPath path)` | 方法 |
| `PlatformFilePath[]GetFiles` | `public PlatformFilePath[]GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)` | 方法 |
| `RenameFile` | `public void RenameFile(PlatformFilePath filePath, string newName)` | 方法 |
| `GetError` | `public string GetError()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IPlatformFileHelper](../IPlatformFileHelper/)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
