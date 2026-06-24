<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FileHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FileHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class FileHelper`
**Base:** 无
**File:** `TaleWorlds.Library/FileHelper.cs`

## 概述

`FileHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `FileHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SaveFile
`public static SaveResult SaveFile(PlatformFilePath path, byte data)`

**用途 / Purpose:** 保存 `file` 数据。

### SaveFileString
`public static SaveResult SaveFileString(PlatformFilePath path, string data)`

**用途 / Purpose:** 保存 `file string` 数据。

### GetFileFullPath
`public static string GetFileFullPath(PlatformFilePath path)`

**用途 / Purpose:** 获取 `file full path` 的当前值。

### AppendLineToFileString
`public static SaveResult AppendLineToFileString(PlatformFilePath path, string data)`

**用途 / Purpose:** 处理 `append line to file string` 相关逻辑。

### SaveFileAsync
`public static Task<SaveResult> SaveFileAsync(PlatformFilePath path, byte data)`

**用途 / Purpose:** 保存 `file async` 数据。

### SaveFileStringAsync
`public static Task<SaveResult> SaveFileStringAsync(PlatformFilePath path, string data)`

**用途 / Purpose:** 保存 `file string async` 数据。

### GetError
`public static string GetError()`

**用途 / Purpose:** 获取 `error` 的当前值。

### FileExists
`public static bool FileExists(PlatformFilePath path)`

**用途 / Purpose:** 处理 `file exists` 相关逻辑。

### GetFileContentStringAsync
`public static Task<string> GetFileContentStringAsync(PlatformFilePath path)`

**用途 / Purpose:** 获取 `file content string async` 的当前值。

### GetFileContentString
`public static string GetFileContentString(PlatformFilePath path)`

**用途 / Purpose:** 获取 `file content string` 的当前值。

### DeleteFile
`public static void DeleteFile(PlatformFilePath path)`

**用途 / Purpose:** 处理 `delete file` 相关逻辑。

### GetFiles
`public static PlatformFilePath GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)`

**用途 / Purpose:** 获取 `files` 的当前值。

### GetFileContent
`public static byte GetFileContent(PlatformFilePath filePath)`

**用途 / Purpose:** 获取 `file content` 的当前值。

### GetMetaDataContent
`public static byte GetMetaDataContent(PlatformFilePath filePath)`

**用途 / Purpose:** 获取 `meta data content` 的当前值。

### CopyFile
`public static void CopyFile(PlatformFilePath source, PlatformFilePath target)`

**用途 / Purpose:** 处理 `copy file` 相关逻辑。

### CopyDirectory
`public static void CopyDirectory(string sourceDir, string destinationDir, bool recursive)`

**用途 / Purpose:** 处理 `copy directory` 相关逻辑。

## 使用示例

```csharp
FileHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)