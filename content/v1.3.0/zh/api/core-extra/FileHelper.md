---
title: "FileHelper"
description: "FileHelper 的自动生成类参考。"
---
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

**用途 / Purpose:** 将 「file」 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
FileHelper.SaveFile(path, 0);
```

### SaveFileString
`public static SaveResult SaveFileString(PlatformFilePath path, string data)`

**用途 / Purpose:** 将 「file string」 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
FileHelper.SaveFileString(path, "example");
```

### GetFileFullPath
`public static string GetFileFullPath(PlatformFilePath path)`

**用途 / Purpose:** 读取并返回当前对象中 「file full path」 的结果。

```csharp
// 静态调用，不需要实例
FileHelper.GetFileFullPath(path);
```

### AppendLineToFileString
`public static SaveResult AppendLineToFileString(PlatformFilePath path, string data)`

**用途 / Purpose:** 将「line to file string」追加到当前集合或序列末尾。

```csharp
// 静态调用，不需要实例
FileHelper.AppendLineToFileString(path, "example");
```

### SaveFileAsync
`public static Task<SaveResult> SaveFileAsync(PlatformFilePath path, byte data)`

**用途 / Purpose:** 将 「file async」 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
FileHelper.SaveFileAsync(path, 0);
```

### SaveFileStringAsync
`public static Task<SaveResult> SaveFileStringAsync(PlatformFilePath path, string data)`

**用途 / Purpose:** 将 「file string async」 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
FileHelper.SaveFileStringAsync(path, "example");
```

### GetError
`public static string GetError()`

**用途 / Purpose:** 读取并返回当前对象中 「error」 的结果。

```csharp
// 静态调用，不需要实例
FileHelper.GetError();
```

### FileExists
`public static bool FileExists(PlatformFilePath path)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
FileHelper.FileExists(path);
```

### GetFileContentStringAsync
`public static Task<string> GetFileContentStringAsync(PlatformFilePath path)`

**用途 / Purpose:** 读取并返回当前对象中 「file content string async」 的结果。

```csharp
// 静态调用，不需要实例
FileHelper.GetFileContentStringAsync(path);
```

### GetFileContentString
`public static string GetFileContentString(PlatformFilePath path)`

**用途 / Purpose:** 读取并返回当前对象中 「file content string」 的结果。

```csharp
// 静态调用，不需要实例
FileHelper.GetFileContentString(path);
```

### DeleteFile
`public static void DeleteFile(PlatformFilePath path)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
FileHelper.DeleteFile(path);
```

### GetFiles
`public static PlatformFilePath GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)`

**用途 / Purpose:** 读取并返回当前对象中 「files」 的结果。

```csharp
// 静态调用，不需要实例
FileHelper.GetFiles(path, "example", searchOption);
```

### GetFileContent
`public static byte GetFileContent(PlatformFilePath filePath)`

**用途 / Purpose:** 读取并返回当前对象中 「file content」 的结果。

```csharp
// 静态调用，不需要实例
FileHelper.GetFileContent(filePath);
```

### CopyFile
`public static void CopyFile(PlatformFilePath source, PlatformFilePath target)`

**用途 / Purpose:** 把当前对象的「file」状态复制到目标对象。

```csharp
// 静态调用，不需要实例
FileHelper.CopyFile(source, target);
```

### CopyDirectory
`public static void CopyDirectory(string sourceDir, string destinationDir, bool recursive)`

**用途 / Purpose:** 把当前对象的「directory」状态复制到目标对象。

```csharp
// 静态调用，不需要实例
FileHelper.CopyDirectory("example", "example", false);
```

## 使用示例

```csharp
FileHelper.Initialize();
```

## 参见

- [本区域目录](../)