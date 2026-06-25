---
title: "ItemCollectionElementMissionExtensions"
description: "Auto-generated class reference for ItemCollectionElementMissionExtensions."
---
# ItemCollectionElementMissionExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ItemCollectionElementMissionExtensions`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ItemCollectionElementMissionExtensions.cs`

## Overview

`ItemCollectionElementMissionExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetItemHolsterIndices
`public static StackArray.StackArray4Int GetItemHolsterIndices(this ItemObject item)`

**Purpose:** Reads and returns the item holster indices value held by the this instance.

```csharp
// Static call; no instance required
ItemCollectionElementMissionExtensions.GetItemHolsterIndices(item);
```

## Usage Example

```csharp
ItemCollectionElementMissionExtensions.GetItemHolsterIndices(item);
```

## See Also

- [Area Index](../)