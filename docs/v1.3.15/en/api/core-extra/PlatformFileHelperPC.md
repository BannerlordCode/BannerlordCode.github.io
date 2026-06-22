<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlatformFileHelperPC`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlatformFileHelperPC

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `PlatformFileHelperPC` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### SaveFile

```csharp
public SaveResult SaveFile(PlatformFilePath path, byte data)
```

### SaveFileString

```csharp
public SaveResult SaveFileString(PlatformFilePath path, string data)
```

### SaveFileAsync

```csharp
public Task<SaveResult> SaveFileAsync(PlatformFilePath path, byte data)
```

### SaveFileStringAsync

```csharp
public Task<SaveResult> SaveFileStringAsync(PlatformFilePath path, string data)
```

### AppendLineToFileString

```csharp
public SaveResult AppendLineToFileString(PlatformFilePath path, string data)
```

### GetFileFullPath

```csharp
public string GetFileFullPath(PlatformFilePath filePath)
```

### FileExists

```csharp
public bool FileExists(PlatformFilePath path)
```

### GetFileContentStringAsync

```csharp
public Task<string> GetFileContentStringAsync(PlatformFilePath path)
```

### GetFileContentString

```csharp
public string GetFileContentString(PlatformFilePath path)
```

### GetMetaDataContent

```csharp
public byte GetMetaDataContent(PlatformFilePath path)
```

### GetFileContent

```csharp
public byte GetFileContent(PlatformFilePath path)
```

### DeleteFile

```csharp
public bool DeleteFile(PlatformFilePath path)
```

### CreateDirectory

```csharp
public void CreateDirectory(PlatformDirectoryPath path)
```

### GetFiles

```csharp
public PlatformFilePath GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)
```

### RenameFile

```csharp
public void RenameFile(PlatformFilePath filePath, string newName)
```

### GetError

```csharp
public string GetError()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)