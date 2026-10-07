---
title: "BannerLargeThumbnailCreationData"
description: "Auto-generated class reference for BannerLargeThumbnailCreationData."
---
# BannerLargeThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerLargeThumbnailCreationData : BannerThumbnailCreationData`
**Base:** `BannerThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerLargeThumbnailCreationData.cs`

## Overview

`BannerLargeThumbnailCreationData` is a one-line marker class. The whole type is a single constructor that forwards three arguments to its base and does nothing else (`BannerLargeThumbnailCreationData.cs:11`). Declared as `public class BannerLargeThumbnailCreationData : BannerThumbnailCreationData` (`BannerLargeThumbnailCreationData.cs:8`), it adds no members of its own — it exists purely to pin the base's fourth constructor parameter, `isLarge`, to `true`.

That flag is the difference between a 1024-pixel banner render and a 512-pixel one, but only in tableau mode. The base constructor derives a cache key from a name selected by the `isTableauOrNineGrid` / `isLarge` pair (`BannerThumbnailCreationData.cs:38`), and `BannerThumbnailCache.OnCreateTexture` only widens the render target from 512 to 1024 when both flags are set (`BannerThumbnailCache.cs:74`, `BannerThumbnailCache.cs:80`).

You never construct one directly in normal play. `BannerVisual` creates it for you in its two large-thumbnail overloads and immediately hands it to `ThumbnailCacheManager.Current.CreateTexture` (`BannerVisual.cs:39`, `BannerVisual.cs:46`); the public `Banner.GetTableauTextureLarge` extension delegates to the second of those and always requests the tableau variant (`BannerVisualExtensions.cs:26`); `BannerImageTextureProvider` builds one directly with `isTableauOrNineGrid` hard-coded to `true` (`BannerImageTextureProvider.cs:23`).

## Mental Model

Treat this as a named choice in an enum-of-one, not as a configuration object. Because it adds nothing over its base, `isLarge` is the entire contract: reach for this subclass exactly when you want the large variant, and expect nothing else to differ.

The boundary to know is that "large" is not a resolution guarantee — it is a *pair* condition. `BannerLargeThumbnailCreationData` sets only half of it. If the `isTableauOrNineGrid` argument you pass is `false`, the base constructor takes the `else` branch and leaves `TextureName` at `"BannerThumbnail"` (`BannerThumbnailCreationData.cs:38`), which is byte-for-byte the same cache key the small subclass produces. Two requests for the same banner then share one entry, and the second one is served from cache without ever rendering (`BannerThumbnailCache.cs:87`). The class reads like "give me a large texture" and quietly gives you the small one.

A second boundary is lifetime. The object is not just a description — it is the *handle*. `ThumbnailCacheManager.DestroyTexture` takes the same `ThumbnailCreationData` instance back as its release key (`ThumbnailCacheManager.cs:226`), so if you construct one directly and drop the reference, the cache can never be told to release it.

## How to use

**Getting one.** Either take it from the engine's own accessor — `BannerVisual.GetTableauTextureLarge(setAction)` builds it internally and returns the texture (`BannerVisual.cs:37`) — or construct it directly and pass it to `ThumbnailCacheManager.Current.CreateTexture`, which is what `BannerVisual` does (`BannerVisual.cs:40`):

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.View.Tableaus;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

Banner banner = hero.Banner;
Texture bannerTexture = null;

// `true` for the nine-grid/tableau framing — required for the large size to apply.
Action<Texture> onReady = t => bannerTexture = t;

BannerLargeThumbnailCreationData creationData =
    new BannerLargeThumbnailCreationData(banner, onReady, true);

Texture tex = ThumbnailCacheManager.Current.CreateTexture(creationData);
if (tex == null)
{
    Debug.Print("Banner thumbnail request could not be scheduled.");
}

// Later, release it — the SAME instance must be handed back.
ThumbnailCacheManager.Current.DestroyTexture(creationData);
```

`CreateTexture` returns `null` on two ordinary conditions, not only on failure: it refuses to schedule anything during screen manager late tick (`ThumbnailCacheManager.cs:209`), and it walks its cache list and returns `null` if no cache accepted the request (`ThumbnailCacheManager.cs:222`). Null-check before you hand the texture to an image.

**The most common mistake** is passing `false` — or omitting the argument, since `isTableauOrNineGrid` defaults to `false` (`BannerLargeThumbnailCreationData.cs:11`). Nothing warns you. The object reports `IsLarge == true`, but `BannerThumbnailCache.OnCreateTexture` only applies the 1024 size inside `if (isTableauOrNineGrid)` (`BannerThumbnailCache.cs:77`), and the render id collapses to the shared `"BannerThumbnail:<BannerCode>"` key (`BannerThumbnailCreationData.cs:50`) — so you receive whichever size was cached first, at 512x512, and never the large render you asked for. Always pass `true` explicitly.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BannerLargeThumbnailCreationData entry = ...;
```

## See Also

- [Area Index](../)
- [BannerThumbnailCreationData](../BannerThumbnailCreationData) — the abstract base that actually computes the render id and texture name
- [BannerThumbnailCache](../BannerThumbnailCache) — the cache that consumes `IsLarge`, `IsTableauOrNineGrid` and `RenderId`
- [ThumbnailCacheManager](../ThumbnailCacheManager) — the `CreateTexture` / `DestroyTexture` entry points
- [BannerVisual](../BannerVisual) — builds these objects and owns the banner camera