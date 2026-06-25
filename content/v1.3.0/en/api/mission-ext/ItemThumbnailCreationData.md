---
title: "ItemThumbnailCreationData"
description: "Auto-generated class reference for ItemThumbnailCreationData."
---
# ItemThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemThumbnailCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCreationData.cs`

## Overview

`ItemThumbnailCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ItemThumbnailCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemObject` | `public ItemObject ItemObject { get; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; }` |
| `SetAction` | `public Action<Texture> SetAction { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ItemThumbnailCreationData entry = ...;
```

## See Also

- [Area Index](../)