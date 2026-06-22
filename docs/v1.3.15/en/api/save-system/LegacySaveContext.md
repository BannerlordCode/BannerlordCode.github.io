<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LegacySaveContext`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LegacySaveContext

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** class
**Area:** Save System

## Overview

> This is an auto-generated stub. `LegacySaveContext` is a class in the `TaleWorlds.SaveSystem.Save` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `RootObject` | `public object RootObject { get; }` |
| `SaveData` | `public GameData SaveData { get; }` |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; }` |
| `EnableSaveStatistics` | `public static bool EnableSaveStatistics { get; }` |


## Key Methods

### GetStatistics

```csharp
public static LegacySaveContext.SaveStatistics GetStatistics()
```

### AddStrings

```csharp
public void AddStrings(List<string> texts)
```

### AddOrGetStringId

```csharp
public int AddOrGetStringId(string text)
```

### GetObjectId

```csharp
public int GetObjectId(object target)
```

### GetContainerId

```csharp
public int GetContainerId(object target)
```

### GetStringId

```csharp
public int GetStringId(string target)
```

### Save

```csharp
public bool Save(object target, MetaData metaData, out string errorMessage)
```

### GetObjectCounts

```csharp
public ValueTuple<int, int, int, long> GetObjectCounts(string key)
```

### GetContainerCounts

```csharp
public ValueTuple<int, int, int, int, long> GetContainerCounts(string key)
```

### GetContainerSize

```csharp
public long GetContainerSize(string key)
```

### GetTypeKeys

```csharp
public List<string> GetTypeKeys()
```

### GetContainerKeys

```csharp
public List<string> GetContainerKeys()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)