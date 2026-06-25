---
title: "ItemThumbnailCreationData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemThumbnailCreationData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemThumbnailCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/ItemThumbnailCreationData.cs`

## Overview

`ItemThumbnailCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ItemThumbnailCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemObject` | `public ItemObject ItemObject { get; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; }` |

## Usage Example

```csharp
var value = new ItemThumbnailCreationData();
```

## See Also

- [Complete Class Catalog](../catalog)