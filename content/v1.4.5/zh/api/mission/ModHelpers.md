---
title: "ModHelpers"
description: "ModHelpers 的自动生成类参考。"
---
# ModHelpers

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal static class ModHelpers`
**Base:** 无
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/ModHelpers.cs`

## 概述

`ModHelpers` 位于 `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetSceneObjRootPath
`public static string GetSceneObjRootPath()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 scene obj root path 的结果。

```csharp
// 静态调用，不需要实例
ModHelpers.GetSceneObjRootPath();
```

### DoesSceneFolderAlreadyExist
`public static bool DoesSceneFolderAlreadyExist(string sceneName)`

**用途 / Purpose:** **用途 / Purpose:** 返回scene folder already exist对当前对象是否成立的布尔结果。

```csharp
// 静态调用，不需要实例
ModHelpers.DoesSceneFolderAlreadyExist("example");
```

### GetTempFilePath
`public static string GetTempFilePath(string anyIdentifier)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 temp file path 的结果。

```csharp
// 静态调用，不需要实例
ModHelpers.GetTempFilePath("example");
```

### ReadSceneNameOfDirectory
`public static string ReadSceneNameOfDirectory(string sceneDirectoryPath)`

**用途 / Purpose:** **用途 / Purpose:** 读取scene name of directory的数据或状态。

```csharp
// 静态调用，不需要实例
ModHelpers.ReadSceneNameOfDirectory("example");
```

### WriteBufferToTempFile
`public static string WriteBufferToTempFile(byte buffer)`

**用途 / Purpose:** **用途 / Purpose:** 将buffer to temp file写入目标位置。

```csharp
// 静态调用，不需要实例
ModHelpers.WriteBufferToTempFile(0);
```

### GetTempFileStream
`public static FileStream GetTempFileStream()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 temp file stream 的结果。

```csharp
// 静态调用，不需要实例
ModHelpers.GetTempFileStream();
```

### ExtractZipToTempDirectory
`public static string ExtractZipToTempDirectory(string sourceZipFilePath)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ExtractZipToTempDirectory 对应的操作。

```csharp
// 静态调用，不需要实例
ModHelpers.ExtractZipToTempDirectory("example");
```

### DownloadToTempFile
`public static async Task<string> DownloadToTempFile(HttpClient httpClient, string url, IProgress<ProgressUpdate> progress = null, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** **用途 / Purpose:** 调用 DownloadToTempFile 对应的操作。

```csharp
// 静态调用，不需要实例
ModHelpers.DownloadToTempFile(httpClient, "example", null, default(CancellationToken));
```

## 使用示例

```csharp
ModHelpers.GetSceneObjRootPath();
```

## 参见

- [本区域目录](../)