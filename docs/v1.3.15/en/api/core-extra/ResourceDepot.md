<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ResourceDepot`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ResourceDepot

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `ResourceDepot` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ResourceLocations` | `public MBReadOnlyList<ResourceDepotLocation> ResourceLocations { get; }` |


## Key Methods

### AddLocation

```csharp
public void AddLocation(string basePath, string location)
```

### CollectResources

```csharp
public void CollectResources()
```

### GetFiles

```csharp
public string GetFiles(string subDirectory, string extension, bool excludeSubContents = false)
```

### GetFilePath

```csharp
public string GetFilePath(string file)
```

### GetFilesEndingWith

```csharp
public IEnumerable<string> GetFilesEndingWith(string fileEndName)
```

### StartWatchingChangesInDepot

```csharp
public void StartWatchingChangesInDepot()
```

### StopWatchingChangesInDepot

```csharp
public void StopWatchingChangesInDepot()
```

### CheckForChanges

```csharp
public void CheckForChanges()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)