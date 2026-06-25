---
title: "SaveEntry"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveEntry`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveEntry

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveEntry`
**Area:** save-system

## Overview

`SaveEntry` lives in `TaleWorlds.SaveSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

**Purpose:** Creates a new `from` instance or object.

### CreateNew
`public static SaveEntry CreateNew(SaveEntryFolder parentFolder, EntryId entryId)`

**Purpose:** Creates a new `new` instance or object.

### GetBinaryReader
`public BinaryReader GetBinaryReader()`

**Purpose:** Gets the current value of `binary reader`.

### FillFrom
`public void FillFrom(BinaryWriter writer)`

**Purpose:** Handles logic related to `fill from`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
SaveEntry.CreateFrom(0, entryId, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
