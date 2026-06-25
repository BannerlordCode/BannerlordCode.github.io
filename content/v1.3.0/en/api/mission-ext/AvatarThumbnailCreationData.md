---
title: "AvatarThumbnailCreationData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AvatarThumbnailCreationData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AvatarThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AvatarThumbnailCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/AvatarThumbnailCreationData.cs`

## Overview

`AvatarThumbnailCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AvatarThumbnailCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AvatarID` | `public string AvatarID { get; }` |
| `AvatarBytes` | `public byte AvatarBytes { get; }` |
| `Width` | `public uint Width { get; }` |
| `Height` | `public uint Height { get; }` |
| `ImageType` | `public AvatarData.ImageType ImageType { get; }` |

## Usage Example

```csharp
var value = new AvatarThumbnailCreationData();
```

## See Also

- [Complete Class Catalog](../catalog)