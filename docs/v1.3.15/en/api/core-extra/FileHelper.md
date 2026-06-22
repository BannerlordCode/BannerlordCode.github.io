<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FileHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FileHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class FileHelper`
**Base:** none
**File:** `TaleWorlds.Library/FileHelper.cs`

## Overview

`FileHelper` is a static utility class providing helper methods.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of FileHelper (Helper)
FileHelper./* static helper method */();;
```

## See Also

- [Complete Class Catalog](../catalog)