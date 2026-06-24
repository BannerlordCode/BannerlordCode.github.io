<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveEntryFolder`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveEntryFolder

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveEntryFolder`
**Area:** save-system

## Overview

`SaveEntryFolder` lives in `TaleWorlds.SaveSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// First obtain a SaveEntryFolder instance from game state, then call one of its public methods
var value = new SaveEntryFolder();
value.GetAllEntries();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
