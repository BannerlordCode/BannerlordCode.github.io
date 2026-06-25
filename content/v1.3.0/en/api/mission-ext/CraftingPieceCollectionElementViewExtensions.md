---
title: "CraftingPieceCollectionElementViewExtensions"
description: "Auto-generated class reference for CraftingPieceCollectionElementViewExtensions."
---
# CraftingPieceCollectionElementViewExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CraftingPieceCollectionElementViewExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CraftingPieceCollectionElementViewExtensions.cs`

## Overview

`CraftingPieceCollectionElementViewExtensions` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetCraftingPieceFrameForInventory
`public static MatrixFrame GetCraftingPieceFrameForInventory(this CraftingPiece craftingPiece)`

**Purpose:** Reads and returns the `crafting piece frame for inventory` value held by the current object.

```csharp
// Static call; no instance required
CraftingPieceCollectionElementViewExtensions.GetCraftingPieceFrameForInventory(craftingPiece);
```

## Usage Example

```csharp
CraftingPieceCollectionElementViewExtensions.GetCraftingPieceFrameForInventory(craftingPiece);
```

## See Also

- [Area Index](../)