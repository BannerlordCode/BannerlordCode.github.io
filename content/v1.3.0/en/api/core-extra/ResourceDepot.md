---
title: "ResourceDepot"
description: "Auto-generated class reference for ResourceDepot."
---
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

**Purpose:** Adds location to the current collection or state.

```csharp
// Obtain an instance of ResourceDepot from the subsystem API first
ResourceDepot resourceDepot = ...;
resourceDepot.AddLocation("example", "example");
```

### CollectResources
`public void CollectResources()`

**Purpose:** Executes the CollectResources logic.

```csharp
// Obtain an instance of ResourceDepot from the subsystem API first
ResourceDepot resourceDepot = ...;
resourceDepot.CollectResources();
```

### GetFiles
`public string GetFiles(string subDirectory, string extension, bool excludeSubContents = false)`

**Purpose:** Reads and returns the files value held by the this instance.

```csharp
// Obtain an instance of ResourceDepot from the subsystem API first
ResourceDepot resourceDepot = ...;
var result = resourceDepot.GetFiles("example", "example", false);
```

### GetFilePath
`public string GetFilePath(string file)`

**Purpose:** Reads and returns the file path value held by the this instance.

```csharp
// Obtain an instance of ResourceDepot from the subsystem API first
ResourceDepot resourceDepot = ...;
var result = resourceDepot.GetFilePath("example");
```

### GetFilesEndingWith
`public IEnumerable<string> GetFilesEndingWith(string fileEndName)`

**Purpose:** Reads and returns the files ending with value held by the this instance.

```csharp
// Obtain an instance of ResourceDepot from the subsystem API first
ResourceDepot resourceDepot = ...;
var result = resourceDepot.GetFilesEndingWith("example");
```

### StartWatchingChangesInDepot
`public void StartWatchingChangesInDepot()`

**Purpose:** Starts the watching changes in depot flow or state machine.

```csharp
// Obtain an instance of ResourceDepot from the subsystem API first
ResourceDepot resourceDepot = ...;
resourceDepot.StartWatchingChangesInDepot();
```

### StopWatchingChangesInDepot
`public void StopWatchingChangesInDepot()`

**Purpose:** Stops the watching changes in depot flow or state machine.

```csharp
// Obtain an instance of ResourceDepot from the subsystem API first
ResourceDepot resourceDepot = ...;
resourceDepot.StopWatchingChangesInDepot();
```

### CheckForChanges
`public void CheckForChanges()`

**Purpose:** Verifies whether for changes holds true for the this instance.

```csharp
// Obtain an instance of ResourceDepot from the subsystem API first
ResourceDepot resourceDepot = ...;
resourceDepot.CheckForChanges();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ResourceDepot resourceDepot = ...;
resourceDepot.AddLocation("example", "example");
```

## See Also

- [Area Index](../)