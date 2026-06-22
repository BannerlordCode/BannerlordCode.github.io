<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FileDriver`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FileDriver

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** class
**Area:** Save System

## Overview

> This is an auto-generated stub. `FileDriver` is a class in the `TaleWorlds.SaveSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `SavePath` | `public static PlatformDirectoryPath SavePath { get; }` |


## Key Methods

### GetSaveFilePath

```csharp
public static PlatformFilePath GetSaveFilePath(string fileName)
```

### Save

```csharp
public Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)
```

### LoadMetaData

```csharp
public MetaData LoadMetaData(string saveName)
```

### Load

```csharp
public LoadData Load(string saveName)
```

### GetSaveGameFileInfos

```csharp
public SaveGameFileInfo GetSaveGameFileInfos()
```

### GetSaveGameFileNames

```csharp
public string GetSaveGameFileNames()
```

### Delete

```csharp
public bool Delete(string saveName)
```

### IsSaveGameFileExists

```csharp
public bool IsSaveGameFileExists(string saveName)
```

### IsWorkingAsync

```csharp
public bool IsWorkingAsync()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)