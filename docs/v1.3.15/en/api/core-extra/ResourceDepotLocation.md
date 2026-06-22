<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ResourceDepotLocation`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ResourceDepotLocation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `ResourceDepotLocation` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `BasePath` | `public string BasePath { get; }` |
| `Path` | `public string Path { get; }` |
| `FullPath` | `public string FullPath { get; }` |
| `Watcher` | `public FileSystemWatcher Watcher { get; }` |


## Key Methods

### StartWatchingChanges

```csharp
public void StartWatchingChanges(FileSystemEventHandler onChangeEvent, RenamedEventHandler onRenameEvent)
```

### StopWatchingChanges

```csharp
public void StopWatchingChanges()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)