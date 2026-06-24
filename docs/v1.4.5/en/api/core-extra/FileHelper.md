<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FileHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FileHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class FileHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/FileHelper.cs`

## Overview

`FileHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `FileHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SaveFile
`public static SaveResult SaveFile(PlatformFilePath path, byte data)`

**Purpose:** Saves `file` data.

### SaveFileString
`public static SaveResult SaveFileString(PlatformFilePath path, string data)`

**Purpose:** Saves `file string` data.

### GetFileFullPath
`public static string GetFileFullPath(PlatformFilePath path)`

**Purpose:** Gets the current value of `file full path`.

### AppendLineToFileString
`public static SaveResult AppendLineToFileString(PlatformFilePath path, string data)`

**Purpose:** Handles logic related to `append line to file string`.

### SaveFileAsync
`public static Task<SaveResult> SaveFileAsync(PlatformFilePath path, byte data)`

**Purpose:** Saves `file async` data.

### SaveFileStringAsync
`public static Task<SaveResult> SaveFileStringAsync(PlatformFilePath path, string data)`

**Purpose:** Saves `file string async` data.

### GetError
`public static string GetError()`

**Purpose:** Gets the current value of `error`.

### FileExists
`public static bool FileExists(PlatformFilePath path)`

**Purpose:** Handles logic related to `file exists`.

### GetFileContentStringAsync
`public static Task<string> GetFileContentStringAsync(PlatformFilePath path)`

**Purpose:** Gets the current value of `file content string async`.

### GetFileContentString
`public static string GetFileContentString(PlatformFilePath path)`

**Purpose:** Gets the current value of `file content string`.

### DeleteFile
`public static void DeleteFile(PlatformFilePath path)`

**Purpose:** Handles logic related to `delete file`.

### GetFiles
`public static PlatformFilePath GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)`

**Purpose:** Gets the current value of `files`.

### GetFileContent
`public static byte GetFileContent(PlatformFilePath filePath)`

**Purpose:** Gets the current value of `file content`.

### GetMetaDataContent
`public static byte GetMetaDataContent(PlatformFilePath filePath)`

**Purpose:** Gets the current value of `meta data content`.

### CopyFile
`public static void CopyFile(PlatformFilePath source, PlatformFilePath target)`

**Purpose:** Handles logic related to `copy file`.

### CopyDirectory
`public static void CopyDirectory(string sourceDir, string destinationDir, bool recursive)`

**Purpose:** Handles logic related to `copy directory`.

## Usage Example

```csharp
FileHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)