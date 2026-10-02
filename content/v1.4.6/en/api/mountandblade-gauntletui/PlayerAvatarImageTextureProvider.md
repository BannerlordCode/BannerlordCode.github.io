---
title: "PlayerAvatarImageTextureProvider"
description: "PlayerAvatarImageTextureProvider: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting ImageIdentifierTextureProvider; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/PlayerAvatarImageTextureProvider.cs."
---
# PlayerAvatarImageTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class PlayerAvatarImageTextureProvider : ImageIdentifierTextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/PlayerAvatarImageTextureProvider.cs`

## Overview

PlayerAvatarImageTextureProvider lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/PlayerAvatarImageTextureProvider.cs. It is a public class, implementing/inheriting ImageIdentifierTextureProvider; the inheritance chain is PlayerAvatarImageTextureProvider → ImageIdentifierTextureProvider → TextureProvider. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerAvatarImageTextureProvider is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers) the module directory; inheritance chain PlayerAvatarImageTextureProvider → ImageIdentifierTextureProvider → TextureProvider. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. TextureProvider on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/PlayerAvatarImageTextureProvider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerAvatarImageTextureProvider` | `public PlayerAvatarImageTextureProvider()` | constructor |
| `Tick` | `public override void Tick(float dt)` | method |
| `OnCreateImageWithId` | `protected override void OnCreateImageWithId(string id, string additionalArgs)` | method |
| `GetCanForceCheckTexture` | `protected override bool GetCanForceCheckTexture()` | method |
| `OnCheckTexture` | `protected override void OnCheckTexture()` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ImageIdentifierTextureProvider](../ImageIdentifierTextureProvider)
- [same namespace BannerImageTextureProvider](../BannerImageTextureProvider)
- [same namespace CharacterImageTextureProvider](../CharacterImageTextureProvider)
- [same namespace CraftingPieceImageTextureProvider](../CraftingPieceImageTextureProvider)
- [same namespace ImageIdentifierTextureProvider](../ImageIdentifierTextureProvider)
