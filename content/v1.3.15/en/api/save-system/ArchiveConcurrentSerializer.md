---
title: "ArchiveConcurrentSerializer"
description: "Auto-generated class reference for ArchiveConcurrentSerializer."
---
# ArchiveConcurrentSerializer

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ArchiveConcurrentSerializer : IArchiveContext`
**Base:** `IArchiveContext`
**File:** `TaleWorlds.SaveSystem/ArchiveConcurrentSerializer.cs`

## Overview

`ArchiveConcurrentSerializer` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SerializeFolderConcurrent
`public void SerializeFolderConcurrent(SaveEntryFolder folder)`

**Purpose:** Serializes `folder concurrent` into a storable or transmittable format.

```csharp
// Obtain an instance of ArchiveConcurrentSerializer from the subsystem API first
ArchiveConcurrentSerializer archiveConcurrentSerializer = ...;
archiveConcurrentSerializer.SerializeFolderConcurrent(folder);
```

### CreateFolder
`public SaveEntryFolder CreateFolder(SaveEntryFolder parentFolder, FolderId folderId, int entryCount)`

**Purpose:** Constructs a new `folder` entity and returns it to the caller.

```csharp
// Obtain an instance of ArchiveConcurrentSerializer from the subsystem API first
ArchiveConcurrentSerializer archiveConcurrentSerializer = ...;
var result = archiveConcurrentSerializer.CreateFolder(parentFolder, folderId, 0);
```

### FinalizeAndGetBinaryDataConcurrent
`public byte FinalizeAndGetBinaryDataConcurrent()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArchiveConcurrentSerializer from the subsystem API first
ArchiveConcurrentSerializer archiveConcurrentSerializer = ...;
var result = archiveConcurrentSerializer.FinalizeAndGetBinaryDataConcurrent();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArchiveConcurrentSerializer archiveConcurrentSerializer = ...;
archiveConcurrentSerializer.SerializeFolderConcurrent(folder);
```

## See Also

- [Area Index](../)