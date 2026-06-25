---
title: "SaveEntryFolder"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveEntryFolder`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `all entries`.

### CreateRootFolder
`public static SaveEntryFolder CreateRootFolder()`

**Purpose:** Creates a new `root folder` instance or object.

### AddEntry
`public void AddEntry(SaveEntry saveEntry)`

**Purpose:** Adds `entry` to the current collection or state.

### GetEntry
`public SaveEntry GetEntry(EntryId entryId)`

**Purpose:** Gets the current value of `entry`.

### AddChildFolderEntry
`public void AddChildFolderEntry(SaveEntryFolder saveEntryFolder)`

**Purpose:** Adds `child folder entry` to the current collection or state.

### CreateEntry
`public SaveEntry CreateEntry(EntryId entryId)`

**Purpose:** Creates a new `entry` instance or object.

## Usage Example

```csharp
var value = new SaveEntryFolder();
value.GetAllEntries();
```

## See Also

- [Complete Class Catalog](../catalog)