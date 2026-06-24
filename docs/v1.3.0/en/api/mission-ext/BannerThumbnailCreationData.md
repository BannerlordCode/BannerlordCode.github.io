<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerThumbnailCreationData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BannerThumbnailCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerThumbnailCreationData.cs`

## Overview

`BannerThumbnailCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BannerThumbnailCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Banner` | `public Banner Banner { get; }` |
| `SetAction` | `public Action<Texture> SetAction { get; }` |
| `TextureName` | `public string TextureName { get; }` |
| `IsTableauOrNineGrid` | `public bool IsTableauOrNineGrid { get; }` |
| `IsLarge` | `public bool IsLarge { get; }` |

## Usage Example

```csharp
var implementation = new CustomBannerThumbnailCreationData();
```

## See Also

- [Complete Class Catalog](../catalog)