---
title: "IntermissionVoteItemListExtensions"
description: "Auto-generated class reference for IntermissionVoteItemListExtensions."
---
# IntermissionVoteItemListExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class IntermissionVoteItemListExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IntermissionVoteItemListExtensions.cs`

## Overview

`IntermissionVoteItemListExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ContainsItem
`public static bool ContainsItem(this List<IntermissionVoteItem> intermissionVoteItems, string id)`

**Purpose:** Indicates whether the current object contains `item`.

```csharp
// Static call; no instance required
IntermissionVoteItemListExtensions.ContainsItem(intermissionVoteItems, "example");
```

### Add
`public static IntermissionVoteItem Add(this List<IntermissionVoteItem> intermissionVoteItems, string id)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Static call; no instance required
IntermissionVoteItemListExtensions.Add(intermissionVoteItems, "example");
```

### GetItem
`public static IntermissionVoteItem GetItem(this List<IntermissionVoteItem> intermissionVoteItems, string id)`

**Purpose:** Reads and returns the `item` value held by the current object.

```csharp
// Static call; no instance required
IntermissionVoteItemListExtensions.GetItem(intermissionVoteItems, "example");
```

## Usage Example

```csharp
IntermissionVoteItemListExtensions.ContainsItem(intermissionVoteItems, "example");
```

## See Also

- [Area Index](../)