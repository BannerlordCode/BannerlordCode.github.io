<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveEntry`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveEntry

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** class
**Area:** Save System

## Overview

> This is an auto-generated stub. `SaveEntry` is a class in the `TaleWorlds.SaveSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public byte Data { get; }` |
| `Id` | `public EntryId Id { get; }` |
| `FolderId` | `public int FolderId { get; }` |


## Key Methods

### CreateFrom

```csharp
public static SaveEntry CreateFrom(int entryFolderId, EntryId entryId, byte data)
```

### CreateNew

```csharp
public static SaveEntry CreateNew(SaveEntryFolder parentFolder, EntryId entryId)
```

### GetBinaryReader

```csharp
public BinaryReader GetBinaryReader()
```

### FillFrom

```csharp
public void FillFrom(BinaryWriter writer)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)