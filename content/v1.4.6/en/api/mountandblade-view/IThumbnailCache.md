---
title: "IThumbnailCache"
description: "IThumbnailCache: a public interface in TaleWorlds.MountAndBlade.View; 15 exposed members (13 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/IThumbnailCache.cs."
---
# IThumbnailCache

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public interface IThumbnailCache`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/IThumbnailCache.cs`

## Overview

IThumbnailCache lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/IThumbnailCache.cs. It is a public interface; the inheritance chain is IThumbnailCache. It exposes 15 public/protected members: 13 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IThumbnailCache is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails) the module directory; inheritance chain IThumbnailCache. The surface is method-led (methods 13/15, properties 2/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/IThumbnailCache.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Count` | `int Count` | property |
| `RenderCallbackCount` | `int RenderCallbackCount` | property |
| `Initialize` | `void Initialize(ThumbnailCreatorView thumnbailCreatorView);` | method |
| `Destroy` | `void Destroy();` | method |
| `Clear` | `void Clear(bool releaseImmediately);` | method |
| `GetValue` | `bool GetValue(string key, out Texture texture);` | method |
| `AddReference` | `bool AddReference(string key);` | method |
| `RemoveReference` | `bool RemoveReference(string key);` | method |
| `OnThumbnailRenderCompleted` | `bool OnThumbnailRenderCompleted(string renderId, Texture renderTarget);` | method |
| `ClearUnusedCache` | `void ClearUnusedCache();` | method |
| `Tick` | `void Tick(float dt);` | method |
| `Add` | `void Add(string key, Texture value);` | method |
| `PrintToImgui` | `void PrintToImgui();` | method |
| `CreateTexture` | `TextureCreationInfo CreateTexture(ThumbnailCreationData thumbnailCreationData);` | method |
| `ReleaseTexture` | `bool ReleaseTexture(ThumbnailCreationData thumbnailCreationData);` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AvatarThumbnailCache](../AvatarThumbnailCache)
- [same namespace AvatarThumbnailCreationData](../AvatarThumbnailCreationData)
- [same namespace BannerDebugInfo](../BannerDebugInfo)
- [same namespace BannerEditorTextureCache](../BannerEditorTextureCache)
