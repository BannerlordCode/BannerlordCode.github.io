---
title: "ResourceDepot"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ResourceDepot`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ResourceDepot

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ResourceDepot`
**Base:** none
**File:** `TaleWorlds.Library/ResourceDepot.cs`

## Overview

`ResourceDepot` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ResourceLocations` | `public MBReadOnlyList<ResourceDepotLocation> ResourceLocations { get; }` |

## Key Methods

### AddLocation
`public void AddLocation(string basePath, string location)`

**Purpose:** Adds `location` to the current collection or state.

### CollectResources
`public void CollectResources()`

**Purpose:** Handles logic related to `collect resources`.

### GetFiles
`public string GetFiles(string subDirectory, string extension, bool excludeSubContents = false)`

**Purpose:** Gets the current value of `files`.

### GetFilePath
`public string GetFilePath(string file)`

**Purpose:** Gets the current value of `file path`.

### GetFilesEndingWith
`public IEnumerable<string> GetFilesEndingWith(string fileEndName)`

**Purpose:** Gets the current value of `files ending with`.

### StartWatchingChangesInDepot
`public void StartWatchingChangesInDepot()`

**Purpose:** Handles logic related to `start watching changes in depot`.

### StopWatchingChangesInDepot
`public void StopWatchingChangesInDepot()`

**Purpose:** Handles logic related to `stop watching changes in depot`.

### CheckForChanges
`public void CheckForChanges()`

**Purpose:** Handles logic related to `check for changes`.

## Usage Example

```csharp
var value = new ResourceDepot();
value.AddLocation("example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)