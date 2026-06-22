<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FileHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FileHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class FileHelper`
**Base:** 无
**File:** `TaleWorlds.Library/FileHelper.cs`

## 概述

`FileHelper` 是一个静态工具类，提供辅助方法。

## 主要方法

### SaveFile
```csharp
public static SaveResult SaveFile(PlatformFilePath path, byte data)
```

### SaveFileString
```csharp
public static SaveResult SaveFileString(PlatformFilePath path, string data)
```

### GetFileFullPath
```csharp
public static string GetFileFullPath(PlatformFilePath path)
```

### AppendLineToFileString
```csharp
public static SaveResult AppendLineToFileString(PlatformFilePath path, string data)
```

### SaveFileAsync
```csharp
public static Task<SaveResult> SaveFileAsync(PlatformFilePath path, byte data)
```

### SaveFileStringAsync
```csharp
public static Task<SaveResult> SaveFileStringAsync(PlatformFilePath path, string data)
```

### GetError
```csharp
public static string GetError()
```

### FileExists
```csharp
public static bool FileExists(PlatformFilePath path)
```

### GetFileContentStringAsync
```csharp
public static Task<string> GetFileContentStringAsync(PlatformFilePath path)
```

### GetFileContentString
```csharp
public static string GetFileContentString(PlatformFilePath path)
```

### DeleteFile
```csharp
public static void DeleteFile(PlatformFilePath path)
```

### GetFiles
```csharp
public static PlatformFilePath GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)
```

### GetFileContent
```csharp
public static byte GetFileContent(PlatformFilePath filePath)
```

### GetMetaDataContent
```csharp
public static byte GetMetaDataContent(PlatformFilePath filePath)
```

### CopyFile
```csharp
public static void CopyFile(PlatformFilePath source, PlatformFilePath target)
```

### CopyDirectory
```csharp
public static void CopyDirectory(string sourceDir, string destinationDir, bool recursive)
```

## 使用示例

```csharp
// FileHelper (Helper) 的典型用法
FileHelper./* static helper method */();;
```

## 参见

- [完整类目录](../catalog)