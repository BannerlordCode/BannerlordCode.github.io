---
title: "CharacterTableauTextureProvider"
description: "CharacterTableauTextureProvider: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting TextureProvider; 31 exposed members (4 methods, 26 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/CharacterTableauTextureProvider.cs."
---
# CharacterTableauTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class CharacterTableauTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/CharacterTableauTextureProvider.cs`

## Overview

CharacterTableauTextureProvider lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/CharacterTableauTextureProvider.cs. It is a public class, implementing/inheriting TextureProvider; the inheritance chain is CharacterTableauTextureProvider → TextureProvider. It exposes 31 public/protected members: 4 methods, 26 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterTableauTextureProvider is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.TextureProviders) the module directory; inheritance chain CharacterTableauTextureProvider → TextureProvider. The surface is property-led (properties 26/31, methods 4/31), so it mostly exposes state for reading. TextureProvider on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/CharacterTableauTextureProvider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomAnimationProgressRatio` | `public float CustomAnimationProgressRatio` | property |
| `BannerCodeText` | `public string BannerCodeText` | property |
| `BodyProperties` | `public string BodyProperties` | property |
| `StanceIndex` | `public int StanceIndex` | property |
| `IsFemale` | `public bool IsFemale` | property |
| `Race` | `public int Race` | property |
| `IsBannerShownInBackground` | `public bool IsBannerShownInBackground` | property |
| `IsEquipmentAnimActive` | `public bool IsEquipmentAnimActive` | property |
| `EquipmentCode` | `public string EquipmentCode` | property |
| `IdleAction` | `public string IdleAction` | property |
| `IdleFaceAnim` | `public string IdleFaceAnim` | property |
| `CurrentlyRotating` | `public bool CurrentlyRotating` | property |
| `MountCreationKey` | `public string MountCreationKey` | property |
| `ArmorColor1` | `public uint ArmorColor1` | property |
| `ArmorColor2` | `public uint ArmorColor2` | property |
| `CharStringId` | `public string CharStringId` | property |
| `TriggerCharacterMountPlacesSwap` | `public bool TriggerCharacterMountPlacesSwap` | property |
| `CustomRenderScale` | `public float CustomRenderScale` | property |
| `IsPlayingCustomAnimations` | `public bool IsPlayingCustomAnimations` | property |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation` | property |
| `LeftHandWieldedEquipmentIndex` | `public int LeftHandWieldedEquipmentIndex` | property |
| `RightHandWieldedEquipmentIndex` | `public int RightHandWieldedEquipmentIndex` | property |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration` | property |
| `CustomAnimation` | `public string CustomAnimation` | property |
| `IsTableauEnabled` | `public bool IsTableauEnabled` | property |
| `IsHidden` | `public bool IsHidden` | property |
| `CharacterTableauTextureProvider` | `public CharacterTableauTextureProvider()` | constructor |
| `Clear` | `public override void Clear(bool clearNextFrame)` | method |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | method |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | method |
| `Tick` | `public override void Tick(float dt)` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerTableauTextureProvider](../BannerTableauTextureProvider)
- [same namespace BrightnessDemoTextureProvider](../BrightnessDemoTextureProvider)
- [same namespace ItemTableauTextureProvider](../ItemTableauTextureProvider)
- [same namespace OnlineImageTextureProvider](../OnlineImageTextureProvider)
