---
title: "SaveEntryFolder"
description: "Auto-generated class reference for SaveEntryFolder."
---
# SaveEntryFolder

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveEntryFolder`
**Base:** none
**File:** `TaleWorlds.SaveSystem/SaveEntryFolder.cs`

## Overview

`SaveEntryFolder` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GlobalId` | `public int GlobalId { get; }` |
| `ParentGlobalId` | `public int ParentGlobalId { get; }` |
| `FolderId` | `public FolderId FolderId { get; }` |
| `ChildEntries` | `public Dictionary<EntryId, SaveEntry>.ValueCollection ChildEntries { get; }` |
| `ChildFolders` | `public Dictionary<FolderId, SaveEntryFolder>.ValueCollection ChildFolders { get; }` |

## Key Methods

### GetAllEntries
`public List<SaveEntry> GetAllEntries()`

**Purpose:** Reads and returns the all entries value held by the this instance.

```csharp
// Obtain an instance of SaveEntryFolder from the subsystem API first
SaveEntryFolder saveEntryFolder = ...;
var result = saveEntryFolder.GetAllEntries();
```

### CreateRootFolder
`public static SaveEntryFolder CreateRootFolder()`

**Purpose:** Constructs a new root folder entity and returns it to the caller.

```csharp
// Static call; no instance required
SaveEntryFolder.CreateRootFolder();
```

### AddEntry
`public void AddEntry(SaveEntry saveEntry)`

**Purpose:** Adds entry to the current collection or state.

```csharp
// Obtain an instance of SaveEntryFolder from the subsystem API first
SaveEntryFolder saveEntryFolder = ...;
saveEntryFolder.AddEntry(saveEntry);
```

### GetEntry
`public SaveEntry GetEntry(EntryId entryId)`

**Purpose:** Reads and returns the entry value held by the this instance.

```csharp
// Obtain an instance of SaveEntryFolder from the subsystem API first
SaveEntryFolder saveEntryFolder = ...;
var result = saveEntryFolder.GetEntry(entryId);
```

### AddChildFolderEntry
`public void AddChildFolderEntry(SaveEntryFolder saveEntryFolder)`

**Purpose:** Adds child folder entry to the current collection or state.

```csharp
// Obtain an instance of SaveEntryFolder from the subsystem API first
SaveEntryFolder saveEntryFolder = ...;
saveEntryFolder.AddChildFolderEntry(saveEntryFolder);
```

### CreateEntry
`public SaveEntry CreateEntry(EntryId entryId)`

**Purpose:** Constructs a new entry entity and returns it to the caller.

```csharp
// Obtain an instance of SaveEntryFolder from the subsystem API first
SaveEntryFolder saveEntryFolder = ...;
var result = saveEntryFolder.CreateEntry(entryId);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SaveEntryFolder saveEntryFolder = ...;
saveEntryFolder.GetAllEntries();
```

## See Also

- [Area Index](../)