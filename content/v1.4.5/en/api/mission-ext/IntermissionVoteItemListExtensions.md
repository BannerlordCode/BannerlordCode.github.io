---
title: "IntermissionVoteItemListExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IntermissionVoteItemListExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IntermissionVoteItemListExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class IntermissionVoteItemListExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IntermissionVoteItemListExtensions.cs`

## Overview

`IntermissionVoteItemListExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
IntermissionVoteItemListExtensions.ContainsItem(intermissionVoteItems, "example");
```

## See Also

- [Complete Class Catalog](../catalog)