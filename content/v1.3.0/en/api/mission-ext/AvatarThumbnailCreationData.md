---
title: "AvatarThumbnailCreationData"
description: "Auto-generated class reference for AvatarThumbnailCreationData."
---
# AvatarThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AvatarThumbnailCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/AvatarThumbnailCreationData.cs`

## Overview

The request object that describes one avatar image the view layer wants rendered and cached. It derives from `ThumbnailCreationData` (`AvatarThumbnailCreationData.cs:7`), whose only content is a `RenderId` set from the constructor argument (`ThumbnailCreationData.cs:11`, `ThumbnailCreationData.cs:16`), and adds the payload needed to actually produce the texture: the avatar's raw bytes plus its pixel dimensions and format.

## Mental Model

Read it as a cache key that happens to carry its value. The base class exists purely so a thumbnail cache can key on an id, and `AvatarThumbnailCreationData` passes that id straight through with `: base(avatarID)` (`AvatarThumbnailCreationData.cs:36`) — then immediately stores the *same string again* in its own `AvatarID` property (`AvatarThumbnailCreationData.cs:12`, assigned at `AvatarThumbnailCreationData.cs:37`). All five derived properties are `{ get; private set; }`, so an instance is immutable after construction and is safe to hand to the cache. The real producer is `PlayerAvatarImageTextureProvider.OnAvatarLoaded`, which builds the data from an `AvatarData` and immediately asks the cache for a texture (`PlayerAvatarImageTextureProvider.cs:89`-`PlayerAvatarImageTextureProvider.cs:90`).

## How to use

**Getting one.** Construct it with the avatar id, the encoded image bytes, and the dimensions and format reported alongside them — the same five values `OnAvatarLoaded` passes. Then hand it to `ThumbnailCacheManager.Current.CreateTexture` (`PlayerAvatarImageTextureProvider.cs:90`); `AvatarThumbnailCache` (`AvatarThumbnailCache.cs:7`) is what turns it into a `Texture`.

**Typical use.**

```csharp
// Same call site as PlayerAvatarImageTextureProvider.cs:89-90.
AvatarThumbnailCreationData data = new AvatarThumbnailCreationData(
    avatarID,              // becomes BOTH RenderId (base) and AvatarID
    avatarData.Image,      // AvatarThumbnailCreationData.cs:38
    avatarData.Width,      // AvatarThumbnailCreationData.cs:39
    avatarData.Height,     // AvatarThumbnailCreationData.cs:40
    avatarData.Type);      // AvatarThumbnailCreationData.cs:41

Texture texture = ThumbnailCacheManager.Current.CreateTexture(data);
```

**Watch out.** The id is stored twice and the cache keys on the base copy, `RenderId` (`ThumbnailCreationData.cs:16`), not on `AvatarID`. So two instances built with the same avatar id but different `AvatarBytes` are the *same* cache entry: re-requesting a changed image for an unchanged id returns the previously cached texture, and the new bytes are dropped without any warning. Change the id — or release the cache entry — when the underlying avatar image changes.

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
// This data object is usually returned by campaign/mission APIs
AvatarThumbnailCreationData entry = ...;
```

## See Also

- [Area Index](../)
- [ThumbnailCreationData](../ThumbnailCreationData)
- [AvatarThumbnailCache](../AvatarThumbnailCache)