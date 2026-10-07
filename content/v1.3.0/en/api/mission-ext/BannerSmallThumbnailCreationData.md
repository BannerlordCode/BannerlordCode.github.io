---
title: "BannerSmallThumbnailCreationData"
description: "Auto-generated class reference for BannerSmallThumbnailCreationData."
---
# BannerSmallThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerSmallThumbnailCreationData : BannerThumbnailCreationData`
**Base:** `BannerThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerSmallThumbnailCreationData.cs`

## Overview

`BannerSmallThumbnailCreationData` is a one-constructor marker subclass of `BannerThumbnailCreationData`, in the thumbnail-rendering half of `TaleWorlds.MountAndBlade.View`. It adds no members of its own (`BannerSmallThumbnailCreationData.cs:8`). Its entire job is to exist as a distinct runtime type so that the *small* texture cache can tell it apart from its `BannerLargeThumbnailCreationData` sibling, and to fix one constructor argument that the base class leaves open.

It is a short-lived render request, not a cached asset. A `BannerVisual` creates one per banner it needs drawn (`BannerVisual.cs:32`), the base class turns it into a `RenderId` of `TextureName + ":" + banner.BannerCode` (`BannerThumbnailCreationData.cs:50`), the rendering pipeline resolves that id to a `Texture`, and the `Action<Texture>` you passed in is invoked with it. The object itself is usually discarded as soon as the render comes back.

## Mental Model

The base class gives you three texture names, and this subclass picks one for you:

| `isTableauOrNineGrid` | `isLarge` | `TextureName` | where it comes from |
|---|---|---|---|
| `false` | (ignored) | `BannerThumbnail` | `BannerThumbnailCreationData.cs:38` |
| `true` | `false` | `BannerTableauSmall` | `BannerThumbnailCreationData.cs:47` |
| `true` | `true` | `BannerTableauLarge` | unreachable from this class |

The subclass's constructor forwards three of the base's four arguments and hardcodes the fourth: `base(banner, setAction, isTableauOrNineGrid, false)` (`BannerSmallThumbnailCreationData.cs:11`). `isLarge` is therefore permanently `false` here, and `BannerLargeThumbnailCreationData.cs:11` is the mirror that hardcodes `true`. `IsLarge` is set unconditionally in the base constructor, so reading it off a `BannerSmallThumbnailCreationData` always tells you `false` — it carries no information beyond the type itself.

The boundary that matters is downstream, in the cache. `BannerSmallThumbnailCache.CreateTexture` does an `as` cast and, when it fails, returns `null` (`BannerSmallThumbnailCache.cs:18`, `BannerSmallThumbnailCache.cs:22`) rather than throwing. Nothing in that method complains about the wrong type; the texture simply never arrives.

Because `RenderId` is built from `banner.BannerCode`, two instances describing the same banner with the same flags collapse to the same id and the second render is served from cache. Changing `isTableauOrNineGrid` on a later instance is what makes a banner switch between the flat thumbnail and the nine-grid tableau.

## How to use

**Getting it.** It is constructed directly — it has no factory and no static entry point. `BannerVisual` shows the canonical call, wrapping a `Texture` callback into the `setAction`:

```csharp
// Mirrors BannerVisual.cs:32
BannerSmallThumbnailCreationData data =
    new BannerSmallThumbnailCreationData(banner, setAction, isTableauOrNineGrid: true);
data.RenderId = data.TextureName + ":" + banner.BannerCode.ToString();
```

To render one yourself, push it at a small thumbnail cache, which is the type that understands it:

```csharp
BannerSmallThumbnailCache cache = new BannerSmallThumbnailCache(capacity: 32);
Texture tex = cache.CreateTexture(data);   // null unless data is BannerSmallThumbnailCreationData
```

**Typical use** — request the nine-grid tableau rather than the flat banner icon:

```csharp
Banner banner = someClan.Banner;
Action<Texture> onReady = (t) => bannerImageProvider.SetTexture(t);

BannerSmallThumbnailCreationData request =
    new BannerSmallThumbnailCreationData(banner, onReady, isTableauOrNineGrid: true);

Debug.Print(request.TextureName); // "BannerTableauSmall" — never "BannerTableauLarge"
Debug.Print(request.RenderId);    // "BannerTableauSmall:<bannerCode>"
```

**Most common mistake, and what it costs.** Expecting `IsLarge` to be something you can set. It is not a parameter here and not a settable property — the base exposes it as a private-set property fixed by the constructor (`BannerThumbnailCreationData.cs:36`). The moment you need the large variant you must switch to `BannerLargeThumbnailCreationData`, and if you instead hand a `BannerLargeThumbnailCreationData` to a `BannerSmallThumbnailCache` the `as` cast fails and `CreateTexture` returns `null` (`BannerSmallThumbnailCache.cs:22`) — no exception, just a banner that never draws.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BannerSmallThumbnailCreationData entry = ...;
```

## See Also

- [Area Index](../)
- [BannerThumbnailCreationData](../BannerThumbnailCreationData)
- [BannerLargeThumbnailCreationData](../BannerLargeThumbnailCreationData)
- [ThumbnailCreationData](../ThumbnailCreationData)
- [MissionScreen](../MissionScreen)