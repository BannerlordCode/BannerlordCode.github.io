---
title: "PieceData"
description: "Auto-generated class reference for PieceData."
---
# PieceData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct PieceData`
**Base:** none
**File:** `TaleWorlds.Core/PieceData.cs`

## Overview

`PieceData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PieceData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PieceType` | `public CraftingPiece.PieceTypes PieceType { get; }` |
| `Order` | `public int Order { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
PieceData entry = ...;
```

## See Also

- [Area Index](../)