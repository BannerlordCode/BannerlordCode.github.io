---
title: "BannerThumbnailCreationData"
description: "Auto-generated class reference for BannerThumbnailCreationData."
---
# BannerThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BannerThumbnailCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerThumbnailCreationData.cs`

## Overview

`BannerThumbnailCreationData` is the request record for "render this banner to a texture and hand it back through a callback". It is declared abstract (`BannerThumbnailCreationData.cs:8`) because you never instantiate it directly — the two concrete subclasses, `BannerSmallThumbnailCreationData` and `BannerLargeThumbnailCreationData`, exist only to pin one boolean.

Its constructor does all the work, and it does it once. Given a `Banner` and an `Action<Texture>` callback, it picks a `TextureName` from the two flags, concatenates that name with `banner.BannerCode` into the inherited `RenderId` cache key (`BannerThumbnailCreationData.cs:50`), and stores the banner, the callback and both flags behind `{ get; private set; }` properties. Every property on the type is immutable after construction.

The consumer is `BannerThumbnailCache.OnCreateTexture`, which reads exactly these five values and nothing else: `IsTableauOrNineGrid`, `IsLarge`, `SetAction`, `RenderId`, `Banner`, and `TextureName` for the render-target name (`BannerThumbnailCache.cs:68`).

## Mental Model

Read it as a cache key that also carries a callback. The important field is `RenderId`, because that — not object identity, not the `TextureName`, not `IsLarge` — is what the cache is keyed on. `RenderId` is `"<TextureName>:<BannerCode>"` (`BannerThumbnailCreationData.cs:50`), so two instances describing the same banner in the same mode are the *same request* as far as the cache is concerned.

That produces the behaviour you must design around. If the render id is already present, `OnCreateTexture` does not render again; it either queues your `SetAction` onto the existing render callback's action list, or — when there is no pending render — invokes it immediately with the cached texture (`BannerThumbnailCache.cs:87`). So your callback may fire long after the call that created the data, or synchronously inside `CreateTexture`, and code that assumes "callback happens later" or "callback never happens now" will be wrong in one of the two directions.

Two further boundaries. `TextureName` is only used to name the GPU render target, as `textureName + this._bannerCount` (`BannerThumbnailCache.cs:105`) — changing it does not change the cache key, so you cannot use it to force a distinct cache entry. And the object is the release token: `ThumbnailCacheManager.DestroyTexture` needs the very same instance you passed to `CreateTexture` (`ThumbnailCacheManager.cs:226`). Build a fresh equal object to "release" one and the release targets a different key.

## How to use

**Getting one.** Prefer the engine's extension entry point, `Banner.GetTableauTextureLarge(setAction, out creationData)` (`BannerVisualExtensions.cs:24`), which returns both the texture and the creation data you will need in order to release it. When you need the object directly — for a custom banner rendering path — subclass and call the four-argument base constructor, which is public (`BannerThumbnailCreationData.cs:36`).

A typical use, keeping the creation data so the cache entry can be released later:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.View.Tableaus;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

Banner banner = hero.Banner;

// The out-overload hands you both the texture and the creation data,
// and always requests the tableau/nine-grid variant (isTableauOrNineGrid: true).
BannerThumbnailCreationData creationData;
Texture tex = banner.GetTableauTextureLarge(t => ApplyBannerTexture(t), out creationData);

// The SAME instance is the release key. Losing it leaks the cache entry.
ThumbnailCacheManager.Current.DestroyTexture(creationData);
```

For a custom subclass:

```csharp
public class MyModBannerThumbnailCreationData : BannerThumbnailCreationData
{
    public MyModBannerThumbnailCreationData(Banner banner, Action<Texture> setAction, bool isTableau)
        : base(banner, setAction, isTableau, isLarge: false)
    {
    }
}
```

**The most common mistake** is passing `isTableauOrNineGrid: false` and expecting a distinct, larger result. With that flag false the constructor skips both tableau branches and leaves `TextureName` at `"BannerThumbnail"` (`BannerThumbnailCreationData.cs:38`) for every size, so the `isLarge` argument has no effect on the cache key at all. Your request then aliases onto an existing entry and `CreateTexture` returns that earlier texture (`BannerThumbnailCache.cs:87`) — the size difference you configured is silently discarded, with no assertion and no exception.

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
// Typically obtained from a subsystem API or factory
BannerThumbnailCreationData instance = ...;
```

## See Also

- [Area Index](../)
- [ThumbnailCreationData](../ThumbnailCreationData) — the base that owns the `RenderId` key
- [BannerLargeThumbnailCreationData](../BannerLargeThumbnailCreationData) — the subclass pinning `isLarge` to `true`
- [BannerThumbnailCache](../BannerThumbnailCache) — reads every property this type exposes
- [ThumbnailCacheManager](../ThumbnailCacheManager) — `CreateTexture` and `DestroyTexture` consume it