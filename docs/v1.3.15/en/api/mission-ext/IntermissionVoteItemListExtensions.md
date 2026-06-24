<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IntermissionVoteItemListExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IntermissionVoteItemListExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class IntermissionVoteItemListExtensions`
**Area:** mission-ext

## Overview

`IntermissionVoteItemListExtensions` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ContainsItem
`public static bool ContainsItem(this List<IntermissionVoteItem> intermissionVoteItems, string id)`

**Purpose:** Handles logic related to `contains item`.

### Add
`public static IntermissionVoteItem Add(this List<IntermissionVoteItem> intermissionVoteItems, string id)`

**Purpose:** Adds `add` to the current collection or state.

### GetItem
`public static IntermissionVoteItem GetItem(this List<IntermissionVoteItem> intermissionVoteItems, string id)`

**Purpose:** Gets the current value of `item`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
IntermissionVoteItemListExtensions.ContainsItem(intermissionVoteItems, "example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
