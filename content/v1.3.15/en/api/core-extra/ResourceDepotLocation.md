---
title: "ResourceDepotLocation"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ResourceDepotLocation`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ResourceDepotLocation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ResourceDepotLocation`
**Base:** none
**File:** `TaleWorlds.Library/ResourceDepotLocation.cs`

## Overview

`ResourceDepotLocation` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BasePath` | `public string BasePath { get; }` |
| `Path` | `public string Path { get; }` |
| `FullPath` | `public string FullPath { get; }` |
| `Watcher` | `public FileSystemWatcher Watcher { get; }` |

## Key Methods

### StartWatchingChanges
`public void StartWatchingChanges(FileSystemEventHandler onChangeEvent, RenamedEventHandler onRenameEvent)`

**Purpose:** Handles logic related to `start watching changes`.

### StopWatchingChanges
`public void StopWatchingChanges()`

**Purpose:** Handles logic related to `stop watching changes`.

## Usage Example

```csharp
var value = new ResourceDepotLocation();
value.StartWatchingChanges(onChangeEvent, onRenameEvent);
```

## See Also

- [Complete Class Catalog](../catalog)