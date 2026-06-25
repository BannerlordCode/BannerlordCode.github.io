---
title: "FileHelper"
description: "Auto-generated class reference for FileHelper."
---
# FileHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class FileHelper`
**Base:** none
**File:** `TaleWorlds.Library/FileHelper.cs`

## Overview

`FileHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `FileHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SaveFile
`public static SaveResult SaveFile(PlatformFilePath path, byte data)`

**Purpose:** Writes `file` to persistent storage or a stream.

```csharp
// Static call; no instance required
FileHelper.SaveFile(path, 0);
```

### SaveFileString
`public static SaveResult SaveFileString(PlatformFilePath path, string data)`

**Purpose:** Writes `file string` to persistent storage or a stream.

```csharp
// Static call; no instance required
FileHelper.SaveFileString(path, "example");
```

### GetFileFullPath
`public static string GetFileFullPath(PlatformFilePath path)`

**Purpose:** Reads and returns the `file full path` value held by the current object.

```csharp
// Static call; no instance required
FileHelper.GetFileFullPath(path);
```

### AppendLineToFileString
`public static SaveResult AppendLineToFileString(PlatformFilePath path, string data)`

**Purpose:** Appends `line to file string` to the end of the current collection or sequence.

```csharp
// Static call; no instance required
FileHelper.AppendLineToFileString(path, "example");
```

### SaveFileAsync
`public static Task<SaveResult> SaveFileAsync(PlatformFilePath path, byte data)`

**Purpose:** Writes `file async` to persistent storage or a stream.

```csharp
// Static call; no instance required
FileHelper.SaveFileAsync(path, 0);
```

### SaveFileStringAsync
`public static Task<SaveResult> SaveFileStringAsync(PlatformFilePath path, string data)`

**Purpose:** Writes `file string async` to persistent storage or a stream.

```csharp
// Static call; no instance required
FileHelper.SaveFileStringAsync(path, "example");
```

### GetError
`public static string GetError()`

**Purpose:** Reads and returns the `error` value held by the current object.

```csharp
// Static call; no instance required
FileHelper.GetError();
```

### FileExists
`public static bool FileExists(PlatformFilePath path)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
FileHelper.FileExists(path);
```

### GetFileContentStringAsync
`public static Task<string> GetFileContentStringAsync(PlatformFilePath path)`

**Purpose:** Reads and returns the `file content string async` value held by the current object.

```csharp
// Static call; no instance required
FileHelper.GetFileContentStringAsync(path);
```

### GetFileContentString
`public static string GetFileContentString(PlatformFilePath path)`

**Purpose:** Reads and returns the `file content string` value held by the current object.

```csharp
// Static call; no instance required
FileHelper.GetFileContentString(path);
```

### DeleteFile
`public static void DeleteFile(PlatformFilePath path)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
FileHelper.DeleteFile(path);
```

### GetFiles
`public static PlatformFilePath GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)`

**Purpose:** Reads and returns the `files` value held by the current object.

```csharp
// Static call; no instance required
FileHelper.GetFiles(path, "example", searchOption);
```

### GetFileContent
`public static byte GetFileContent(PlatformFilePath filePath)`

**Purpose:** Reads and returns the `file content` value held by the current object.

```csharp
// Static call; no instance required
FileHelper.GetFileContent(filePath);
```

### CopyFile
`public static void CopyFile(PlatformFilePath source, PlatformFilePath target)`

**Purpose:** Copies the `file` state of the current object to a target.

```csharp
// Static call; no instance required
FileHelper.CopyFile(source, target);
```

### CopyDirectory
`public static void CopyDirectory(string sourceDir, string destinationDir, bool recursive)`

**Purpose:** Copies the `directory` state of the current object to a target.

```csharp
// Static call; no instance required
FileHelper.CopyDirectory("example", "example", false);
```

## Usage Example

```csharp
FileHelper.Initialize();
```

## See Also

- [Area Index](../)