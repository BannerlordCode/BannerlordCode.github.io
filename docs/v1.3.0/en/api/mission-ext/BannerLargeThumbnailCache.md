<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerLargeThumbnailCache`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerLargeThumbnailCache

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerLargeThumbnailCache : BannerThumbnailCache`
**Base:** `BannerThumbnailCache`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerLargeThumbnailCache.cs`

## Overview

`BannerLargeThumbnailCache` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateTexture
`public override Texture CreateTexture(ThumbnailCreationData thumbnailCreationData)`

**Purpose:** Creates a new `texture` instance or object.

## Usage Example

```csharp
var value = new BannerLargeThumbnailCache();
value.CreateTexture(thumbnailCreationData);
```

## See Also

- [Complete Class Catalog](../catalog)