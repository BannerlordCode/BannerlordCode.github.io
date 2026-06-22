<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InMemDriver`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InMemDriver

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** class
**Area:** Save System

## Overview

> This is an auto-generated stub. `InMemDriver` is a class in the `TaleWorlds.SaveSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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