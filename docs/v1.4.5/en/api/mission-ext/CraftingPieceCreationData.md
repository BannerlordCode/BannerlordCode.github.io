<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingPieceCreationData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingPieceCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingPieceCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/CraftingPieceCreationData.cs`

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
var value = new CraftingPieceCreationData();
```

## See Also

- [Complete Class Catalog](../catalog)