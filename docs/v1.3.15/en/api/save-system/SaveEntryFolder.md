<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveEntryFolder`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveEntryFolder

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** class
**Area:** Save System

## Overview

> This is an auto-generated stub. `SaveEntryFolder` is a class in the `TaleWorlds.SaveSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public List<SaveEntry> GetAllEntries()
```

### CreateRootFolder

```csharp
public static SaveEntryFolder CreateRootFolder()
```

### AddEntry

```csharp
public void AddEntry(SaveEntry saveEntry)
```

### GetEntry

```csharp
public SaveEntry GetEntry(EntryId entryId)
```

### AddChildFolderEntry

```csharp
public void AddChildFolderEntry(SaveEntryFolder saveEntryFolder)
```

### CreateEntry

```csharp
public SaveEntry CreateEntry(EntryId entryId)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)