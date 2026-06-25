---
title: "ArchiveSerializer"
description: "Auto-generated class reference for ArchiveSerializer."
---
# ArchiveSerializer

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ArchiveSerializer : IArchiveContext`
**Base:** `IArchiveContext`
**File:** `TaleWorlds.SaveSystem/ArchiveSerializer.cs`

## Overview

`ArchiveSerializer` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SerializeEntry
`public void SerializeEntry(SaveEntry entry)`

**Purpose:** Serializes `entry` into a storable or transmittable format.

```csharp
// Obtain an instance of ArchiveSerializer from the subsystem API first
ArchiveSerializer archiveSerializer = ...;
archiveSerializer.SerializeEntry(entry);
```

### SerializeFolder
`public void SerializeFolder(SaveEntryFolder folder)`

**Purpose:** Serializes `folder` into a storable or transmittable format.

```csharp
// Obtain an instance of ArchiveSerializer from the subsystem API first
ArchiveSerializer archiveSerializer = ...;
archiveSerializer.SerializeFolder(folder);
```

### CreateFolder
`public SaveEntryFolder CreateFolder(SaveEntryFolder parentFolder, FolderId folderId, int entryCount)`

**Purpose:** Constructs a new `folder` entity and returns it to the caller.

```csharp
// Obtain an instance of ArchiveSerializer from the subsystem API first
ArchiveSerializer archiveSerializer = ...;
var result = archiveSerializer.CreateFolder(parentFolder, folderId, 0);
```

### FinalizeAndGetBinaryData
`public byte FinalizeAndGetBinaryData()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArchiveSerializer from the subsystem API first
ArchiveSerializer archiveSerializer = ...;
var result = archiveSerializer.FinalizeAndGetBinaryData();
```

### GetBinaryDataDebug
`public byte GetBinaryDataDebug()`

**Purpose:** Reads and returns the `binary data debug` value held by the current object.

```csharp
// Obtain an instance of ArchiveSerializer from the subsystem API first
ArchiveSerializer archiveSerializer = ...;
var result = archiveSerializer.GetBinaryDataDebug();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArchiveSerializer archiveSerializer = ...;
archiveSerializer.SerializeEntry(entry);
```

## See Also

- [Area Index](../)