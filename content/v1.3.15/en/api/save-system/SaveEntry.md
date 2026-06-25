---
title: "SaveEntry"
description: "Auto-generated class reference for SaveEntry."
---
# SaveEntry

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveEntry`
**Base:** none
**File:** `TaleWorlds.SaveSystem/SaveEntry.cs`

## Overview

`SaveEntry` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public byte Data { get; }` |
| `Id` | `public EntryId Id { get; }` |
| `FolderId` | `public int FolderId { get; }` |

## Key Methods

### CreateFrom
`public static SaveEntry CreateFrom(int entryFolderId, EntryId entryId, byte data)`

**Purpose:** Constructs a new `from` entity and returns it to the caller.

```csharp
// Static call; no instance required
SaveEntry.CreateFrom(0, entryId, 0);
```

### CreateNew
`public static SaveEntry CreateNew(SaveEntryFolder parentFolder, EntryId entryId)`

**Purpose:** Constructs a new `new` entity and returns it to the caller.

```csharp
// Static call; no instance required
SaveEntry.CreateNew(parentFolder, entryId);
```

### GetBinaryReader
`public BinaryReader GetBinaryReader()`

**Purpose:** Reads and returns the `binary reader` value held by the current object.

```csharp
// Obtain an instance of SaveEntry from the subsystem API first
SaveEntry saveEntry = ...;
var result = saveEntry.GetBinaryReader();
```

### FillFrom
`public void FillFrom(BinaryWriter writer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SaveEntry from the subsystem API first
SaveEntry saveEntry = ...;
saveEntry.FillFrom(writer);
```

## Usage Example

```csharp
SaveEntry.CreateFrom(0, entryId, 0);
```

## See Also

- [Area Index](../)