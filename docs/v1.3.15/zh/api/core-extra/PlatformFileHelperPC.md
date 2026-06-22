<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlatformFileHelperPC`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlatformFileHelperPC

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`PlatformFileHelperPC` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)