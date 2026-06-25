---
title: "NodeComparer"
description: "Auto-generated class reference for NodeComparer."
---
# NodeComparer

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NodeComparer : IComparer<ThumbnailCacheNode>`
**Base:** `IComparer<ThumbnailCacheNode>`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/NodeComparer.cs`

## Overview

`NodeComparer` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(ThumbnailCacheNode x, ThumbnailCacheNode y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of NodeComparer from the subsystem API first
NodeComparer nodeComparer = ...;
var result = nodeComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NodeComparer nodeComparer = ...;
nodeComparer.Compare(x, y);
```

## See Also

- [Area Index](../)