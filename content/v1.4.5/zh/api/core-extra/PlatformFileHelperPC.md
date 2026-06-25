---
title: "PlatformFileHelperPC"
description: "PlatformFileHelperPC 的自动生成类参考。"
---
# PlatformFileHelperPC

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class PlatformFileHelperPC : IPlatformFileHelper`
**Base:** `IPlatformFileHelper`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PlatformFileHelperPC.cs`

## 概述

`PlatformFileHelperPC` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SaveFile
`public SaveResult SaveFile(PlatformFilePath path, byte data)`

**用途 / Purpose:** 将 file 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.SaveFile(path, 0);
```

### SaveFileString
`public SaveResult SaveFileString(PlatformFilePath path, string data)`

**用途 / Purpose:** 将 file string 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.SaveFileString(path, "example");
```

### SaveFileAsync
`public Task<SaveResult> SaveFileAsync(PlatformFilePath path, byte data)`

**用途 / Purpose:** 将 file async 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.SaveFileAsync(path, 0);
```

### SaveFileStringAsync
`public Task<SaveResult> SaveFileStringAsync(PlatformFilePath path, string data)`

**用途 / Purpose:** 将 file string async 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.SaveFileStringAsync(path, "example");
```

### AppendLineToFileString
`public SaveResult AppendLineToFileString(PlatformFilePath path, string data)`

**用途 / Purpose:** 将line to file string追加到当前集合或序列末尾。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.AppendLineToFileString(path, "example");
```

### GetFileFullPath
`public string GetFileFullPath(PlatformFilePath filePath)`

**用途 / Purpose:** 读取并返回当前对象中 file full path 的结果。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.GetFileFullPath(filePath);
```

### FileExists
`public bool FileExists(PlatformFilePath path)`

**用途 / Purpose:** 调用 FileExists 对应的操作。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.FileExists(path);
```

### GetFileContentStringAsync
`public async Task<string> GetFileContentStringAsync(PlatformFilePath path)`

**用途 / Purpose:** 读取并返回当前对象中 file content string async 的结果。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.GetFileContentStringAsync(path);
```

### GetFileContentString
`public string GetFileContentString(PlatformFilePath path)`

**用途 / Purpose:** 读取并返回当前对象中 file content string 的结果。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.GetFileContentString(path);
```

### GetMetaDataContent
`public byte GetMetaDataContent(PlatformFilePath path)`

**用途 / Purpose:** 读取并返回当前对象中 meta data content 的结果。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.GetMetaDataContent(path);
```

### GetFileContent
`public byte GetFileContent(PlatformFilePath path)`

**用途 / Purpose:** 读取并返回当前对象中 file content 的结果。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.GetFileContent(path);
```

### DeleteFile
`public bool DeleteFile(PlatformFilePath path)`

**用途 / Purpose:** 调用 DeleteFile 对应的操作。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.DeleteFile(path);
```

### CreateDirectory
`public void CreateDirectory(PlatformDirectoryPath path)`

**用途 / Purpose:** 构建一个新的 directory 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
platformFileHelperPC.CreateDirectory(path);
```

### GetFiles
`public PlatformFilePath GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)`

**用途 / Purpose:** 读取并返回当前对象中 files 的结果。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.GetFiles(path, "example", searchOption);
```

### RenameFile
`public void RenameFile(PlatformFilePath filePath, string newName)`

**用途 / Purpose:** 调用 RenameFile 对应的操作。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
platformFileHelperPC.RenameFile(filePath, "example");
```

### GetError
`public string GetError()`

**用途 / Purpose:** 读取并返回当前对象中 error 的结果。

```csharp
// 先通过子系统 API 拿到 PlatformFileHelperPC 实例
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.GetError();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PlatformFileHelperPC platformFileHelperPC = ...;
platformFileHelperPC.SaveFile(path, 0);
```

## 参见

- [本区域目录](../)