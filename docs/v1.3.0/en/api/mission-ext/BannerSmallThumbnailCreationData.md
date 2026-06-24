<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerSmallThumbnailCreationData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerSmallThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerSmallThumbnailCreationData : BannerThumbnailCreationData`
**Base:** `BannerThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerSmallThumbnailCreationData.cs`

## Overview

`BannerSmallThumbnailCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BannerSmallThumbnailCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new BannerSmallThumbnailCreationData();
```

## See Also

- [Complete Class Catalog](../catalog)