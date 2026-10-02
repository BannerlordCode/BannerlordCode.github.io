---
title: "ImageIdentifierTextureProvider"
description: "ImageIdentifierTextureProvider: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting TextureProvider, IDisposable; 16 exposed members (10 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ImageIdentifierTextureProvider.cs."
---
# ImageIdentifierTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public abstract class ImageIdentifierTextureProvider : TextureProvider, IDisposable`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ImageIdentifierTextureProvider.cs`

## Overview

ImageIdentifierTextureProvider lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ImageIdentifierTextureProvider.cs. It is a public class (abstract), implementing/inheriting TextureProvider, IDisposable; the inheritance chain is ImageIdentifierTextureProvider → TextureProvider. It exposes 16 public/protected members: 10 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ImageIdentifierTextureProvider is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers) the module directory; inheritance chain ImageIdentifierTextureProvider → TextureProvider. The surface is method-led (methods 10/16, properties 5/16), so it mostly exposes operations. TextureProvider on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ImageIdentifierTextureProvider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ThumbnailCreationData` | `protected ThumbnailCreationData ThumbnailCreationData` | property |
| `ImageIdentifierTextureProvider` | `public ImageIdentifierTextureProvider()` | constructor |
| `OnCreateImageWithId` | `protected abstract void OnCreateImageWithId(string id, string additionalArgs);` | method |
| `Tick` | `public override void Tick(float dt)` | method |
| `Clear` | `public override void Clear(bool clearNextFrame)` | method |
| `GetCanForceCheckTexture` | `protected virtual bool GetCanForceCheckTexture()` | method |
| `OnCheckTexture` | `protected virtual void OnCheckTexture()` | method |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | method |
| `ForceRefreshTextures` | `protected void ForceRefreshTextures()` | method |
| `CreateImageWithId` | `public void CreateImageWithId(string id, string additionalArgs)` | method |
| `OnTextureCreated` | `protected void OnTextureCreated(TaleWorlds.Engine.Texture texture)` | method |
| `OnTextureCreationCancelled` | `protected void OnTextureCreationCancelled()` | method |
| `IsReleased` | `public bool IsReleased` | property |
| `IsBig` | `public bool IsBig` | property |
| `ImageId` | `public string ImageId` | property |
| `AdditionalArgs` | `public string AdditionalArgs` | property |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerImageTextureProvider](../BannerImageTextureProvider)
- [same namespace CharacterImageTextureProvider](../CharacterImageTextureProvider)
- [same namespace CraftingPieceImageTextureProvider](../CraftingPieceImageTextureProvider)
- [same namespace ItemImageTextureProvider](../ItemImageTextureProvider)
