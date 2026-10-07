---
title: "CharacterThumbnailCreationData"
description: "Auto-generated class reference for CharacterThumbnailCreationData."
---
# CharacterThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterThumbnailCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCreationData.cs`

## Overview

`CharacterThumbnailCreationData` is the request object handed to `ThumbnailCacheManager` when the UI needs a rendered portrait of a `CharacterCode`. It derives from the abstract `ThumbnailCreationData`, whose only member is `public string RenderId { get; protected set; }` set from the base constructor's argument (`ThumbnailCreationData.cs:11`, `ThumbnailCreationData.cs:14`). This class adds five private-set properties — `CharacterCode`, `SetAction`, `IsBig`, `CustomSizeX`, `CustomSizeY` (`CharacterThumbnailCreationData.cs:13`, `:18`, `:23`, `:28`, `:33`) — and does its real work in the constructor.

The instance is short-lived: `CharacterImageTextureProvider` builds one and immediately hands it to `ThumbnailCacheManager.Current.CreateTexture(...)` (`CharacterImageTextureProvider.cs:74`, `CharacterImageTextureProvider.cs:75`), and the provider nulls its field in `Clear` (`CharacterImageTextureProvider.cs:92`). The manager, not this class, owns the texture's lifetime.

## Mental Model

The constructor does three things that are not obvious and each has a consequence.

It **mutates the `CharacterCode` you pass in**. `characterCode.BodyProperties` is replaced with a `BodyProperties` whose `DynamicBodyProperties` are built by casting age, weight and build to `int` and back to `float` (`CharacterThumbnailCreationData.cs:38`). Two things follow: the truncation is real — a 25.7-year-old becomes 25 and a 62.4kg body becomes 62kg — and the object you passed in is no longer the object you hold, so if you reuse that `CharacterCode` for a real agent you have silently rounded its build.

It **builds the cache key**. `base.RenderId` starts as `characterCode.CreateNewCodeString()`, then appends `"1"` or `"0"` for `isBig` (`CharacterThumbnailCreationData.cs:40`), then `string.Format("_x:{0}", customSizeX)` only when `customSizeX > 0` (`CharacterThumbnailCreationData.cs:43`) and the same for Y (`CharacterThumbnailCreationData.cs:47`). The size suffixes are conditional, so a request for size `-1` and one for size `0` produce the **same** `RenderId` — the defaults `-1` and `0` are indistinguishable to the cache. The round-trip is real: `CharacterImageTextureProvider` parses `customSizeX` / `customSizeY` out of the id string and passes them back in (`CharacterImageTextureProvider.cs:59`, `CharacterImageTextureProvider.cs:67`), so the key is both the cache identity and the wire format.

`SetAction` is the completion callback the cache manager invokes with the finished `Texture`, wired to the provider's `OnTextureCreated` at `CharacterImageTextureProvider.cs:74`. It is stored, never invoked by this class.

The release side has a real asymmetry. `OnReleaseCache` only destroys the texture when the character is **not** a child — `FaceGen.GetMaturityTypeWithAge(...BodyProperties.Age) > BodyMeshMaturityType.Child` (`CharacterImageTextureProvider.cs:82`) — because child portraits are cheap enough to keep. It also null-checks `CharacterCode` before touching `BodyProperties`, which matters because `Clear` may have already run.

## How to use

**Getting it.** Construct it yourself and pass it straight to `ThumbnailCacheManager.Current.CreateTexture`; nothing in the tree caches it for you.

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;
using TaleWorlds.ObjectSystem;

// The shipped provider builds the code from an id string (CharacterImageTextureProvider.cs:36);
// building it from a character object is the other CreateFrom overload (CharacterCode.cs:95).
CharacterCode code = CharacterCode.CreateFrom(
    MBObjectManager.Instance.GetObjectTypeList<CharacterObject>("hero")[0]);

var data = new CharacterThumbnailCreationData(
    code,
    texture => Debug.Print("portrait ready", false),
    isBig: false,
    customSizeX: 128,
    customSizeY: 128);

ThumbnailCacheManager.Current.CreateTexture(data);
```

Note that the shipped provider refuses child portraits outright: it tests the maturity first and calls `OnTextureCreated(null)` without ever building the request (`CharacterImageTextureProvider.cs:37`). And `ThumbnailCacheManager.Current` is nullable — the class guards its own members with `!= null` checks (`ThumbnailCacheManager.cs:84`) — so calling it from a lifecycle path that can run before the cache initialises (`ThumbnailCacheManager.cs:100`) throws.

Release it the way the shipped provider does — skip the destroy for child portraits, so a released child portrait stays cached:

```csharp
if (FaceGen.GetMaturityTypeWithAge(data.CharacterCode.BodyProperties.Age) > BodyMeshMaturityType.Child)
{
    ThumbnailCacheManager.Current.DestroyTexture(data);
}
```

**The mistake that serves the wrong-sized portrait from cache.** Passing `0` for a custom size and believing you asked for something distinct from the default. The suffix is appended only when the value is greater than zero (`CharacterThumbnailCreationData.cs:41`, `CharacterThumbnailCreationData.cs:45`), so `0` and `-1` collapse to the same `RenderId` and you get the default-size texture back from the cache with no error.

## Key Properties

| Name | Signature |
|------|-----------|
| `CharacterCode` | `public CharacterCode CharacterCode { get; }` |
| `SetAction` | `public Action<Texture> SetAction { get; }` |
| `IsBig` | `public bool IsBig { get; }` |
| `CustomSizeX` | `public int CustomSizeX { get; }` |
| `CustomSizeY` | `public int CustomSizeY { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CharacterThumbnailCreationData entry = ...;
```

## See Also

- [CraftingPieceCreationData — the sibling request object with a different key format](../CraftingPieceCreationData)
- [OnlineImageTextureWidget — the UI element these portraits end up in](../../gui/OnlineImageTextureWidget)
- [MapColorGradeManager — another Gauntlet-layer-backed manager in this area](../MapColorGradeManager)
- [Area Index](../)