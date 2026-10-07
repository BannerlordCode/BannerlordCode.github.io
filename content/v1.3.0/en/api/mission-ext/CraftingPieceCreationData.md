---
title: "CraftingPieceCreationData"
description: "Auto-generated class reference for CraftingPieceCreationData."
---
# CraftingPieceCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingPieceCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CraftingPieceCreationData.cs`

## Overview

`CraftingPieceCreationData` is the request object `ThumbnailCacheManager` receives when the UI needs the icon of a `CraftingPiece`. It derives from the abstract `ThumbnailCreationData`, whose only member is `public string RenderId { get; protected set; }` assigned from the base constructor's argument (`ThumbnailCreationData.cs:11`, `ThumbnailCreationData.cs:14`). This class adds three private-set properties — `CraftingPiece`, `Type`, `SetAction` (`CraftingPieceCreationData.cs:13`, `:18`, `:23`) — and its constructor does one thing: compose the cache key.

The instance is short-lived and never cached by its creator. `CraftingPieceImageTextureProvider` builds one and hands it straight to `ThumbnailCacheManager.Current.CreateTexture(...)` (`CraftingPieceImageTextureProvider.cs:32`, `CraftingPieceImageTextureProvider.cs:36`), then nulls its field in `Clear` (`CraftingPieceImageTextureProvider.cs:52`). The manager owns the texture.

## Mental Model

The `RenderId` is `craftingPiece.StringId + "$" + type`, built in the base-constructor argument list (`CraftingPieceCreationData.cs:26`). That makes the key a **two-field composite**, and it matters because the id is also how the provider gets the two fields *back*. `CraftingPieceImageTextureProvider` splits the incoming id on `'$'`, takes element `0` as the `CraftingPiece` object id and element `1` as the `type` string, and passes them into the constructor (`CraftingPieceImageTextureProvider.cs:22`, `CraftingPieceImageTextureProvider.cs:32`). The separator is therefore a wire format, not an implementation detail: any `type` string containing `$`, or a `CraftingPiece` whose `StringId` contains one, breaks the round trip.

The `$` split is done twice in the shipped provider rather than once into locals, and the second element is read without a length check — `id.Split(...)[1]`. An id with no `$` throws `IndexOutOfRangeException` inside the texture provider, not a graceful failure.

Contrast with `CharacterThumbnailCreationData`, which builds its key with conditional `string.Format` suffixes. This class has no conditional parts at all: same piece and same type string means the same cache entry, always, whatever the caller intended to distinguish.

`SetAction` is the completion callback carrying the finished `Texture`, wired to the provider's `OnTextureCreated` (`CraftingPieceImageTextureProvider.cs:35`). It is stored on the object and invoked by the cache manager, never by this class.

The failure mode the provider guards is a wrong object id, not a missing object: if `MBObjectManager.Instance.GetObject<CraftingPiece>(...)` returns null it raises `Debug.FailedAssert("WRONG CraftingPiece IMAGE IDENTIFIER ID", ...)` and still calls `OnTextureCreated(null)` (`CraftingPieceImageTextureProvider.cs:28`, `CraftingPieceImageTextureProvider.cs:29`), so the UI receives a null texture rather than hanging.

## How to use

**Getting it.** Construct it and pass it to the cache manager; there is no resolver and no service.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;
using TaleWorlds.ObjectSystem;

string pieceId = "gp_pike_head";
CraftingPiece piece = MBObjectManager.Instance.GetObject<CraftingPiece>(pieceId);
if (piece == null)
{
    Debug.Print("no such crafting piece: " + pieceId, false);
    return;
}

var data = new CraftingPieceCreationData(
    piece,
    "icon",                                    // the "$"-separated suffix half of the key
    texture => Debug.Print("icon ready", false));

ThumbnailCacheManager.Current.CreateTexture(data);
```

Release it symmetrically, which the shipped provider does without the maturity test the character thumbnails need:

```csharp
if (data != null)
{
    ThumbnailCacheManager.Current.DestroyTexture(data);
    data = null;
}
```

**The mistake that gives you someone else's icon.** Passing a `type` string that contains the `$` separator. The key is built by concatenation (`CraftingPieceCreationData.cs:26`) but parsed by `Split('$')[0]` and `[1]` (`CraftingPieceImageTextureProvider.cs:22`), so a type of `"a$b"` produces an id whose pieces now disagree with the object's real id, and the cache either returns the wrong cached texture or the provider throws indexing past the end of the split array.

## Key Properties

| Name | Signature |
|------|-----------|
| `CraftingPiece` | `public CraftingPiece CraftingPiece { get; }` |
| `Type` | `public string Type { get; }` |
| `SetAction` | `public Action<Texture> SetAction { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CraftingPieceCreationData entry = ...;
```

## See Also

- [CharacterThumbnailCreationData — the sibling request object with a conditional size suffix](../CharacterThumbnailCreationData)
- [OnlineImageTextureWidget — the UI element these icons end up in](../../gui/OnlineImageTextureWidget)
- [MapColorGradeManager — another Gauntlet-layer-backed manager in this area](../MapColorGradeManager)
- [Area Index](../)