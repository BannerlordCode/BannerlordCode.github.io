---
title: "CraftingPieceCreationData"
description: "Auto-generated class reference for CraftingPieceCreationData."
---
# CraftingPieceCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingPieceCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/CraftingPieceCreationData.cs`

## Overview

`CraftingPieceCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CraftingPieceCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CraftingPiece` | `public CraftingPiece CraftingPiece { get; }` |
| `Type` | `public string Type { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CraftingPieceCreationData entry = ...;
```

## See Also

- [Area Index](../)