---
title: "ResourceDepotLocation"
description: "Auto-generated class reference for ResourceDepotLocation."
---
# ResourceDepotLocation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ResourceDepotLocation`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ResourceDepotLocation.cs`

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

**Purpose:** Starts the `watching changes` flow or state machine.

```csharp
// Obtain an instance of ResourceDepotLocation from the subsystem API first
ResourceDepotLocation resourceDepotLocation = ...;
resourceDepotLocation.StartWatchingChanges(onChangeEvent, onRenameEvent);
```

### StopWatchingChanges
`public void StopWatchingChanges()`

**Purpose:** Stops the `watching changes` flow or state machine.

```csharp
// Obtain an instance of ResourceDepotLocation from the subsystem API first
ResourceDepotLocation resourceDepotLocation = ...;
resourceDepotLocation.StopWatchingChanges();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ResourceDepotLocation resourceDepotLocation = ...;
resourceDepotLocation.StartWatchingChanges(onChangeEvent, onRenameEvent);
```

## See Also

- [Area Index](../)