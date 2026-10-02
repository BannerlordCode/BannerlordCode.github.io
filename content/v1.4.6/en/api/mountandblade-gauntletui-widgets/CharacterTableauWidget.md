---
title: "CharacterTableauWidget"
description: "CharacterTableauWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextureWidget; 29 exposed members (4 methods, 24 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs."
---
# CharacterTableauWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CharacterTableauWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs`

## Overview

CharacterTableauWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs. It is a public class, implementing/inheriting TextureWidget; the inheritance chain is CharacterTableauWidget → TextureWidget. It exposes 29 public/protected members: 4 methods, 24 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterTableauWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain CharacterTableauWidget → TextureWidget. The surface is property-led (properties 24/29, methods 4/29), so it mostly exposes state for reading. TextureWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterTableauWidget` | `public CharacterTableauWidget(UIContext context) : base(context)` | constructor |
| `OnMousePressed` | `protected override void OnMousePressed()` | method |
| `OnMouseReleased` | `protected override void OnMouseReleased(bool isFromInput)` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `BannerCodeText` | `public string BannerCodeText` | property |
| `SwapPlacesButtonWidget` | `public ButtonWidget SwapPlacesButtonWidget` | property |
| `BodyProperties` | `public string BodyProperties` | property |
| `CustomAnimationProgressRatio` | `public float CustomAnimationProgressRatio` | property |
| `CustomRenderScale` | `public float CustomRenderScale` | property |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration` | property |
| `CharStringId` | `public string CharStringId` | property |
| `StanceIndex` | `public int StanceIndex` | property |
| `IsEquipmentAnimActive` | `public bool IsEquipmentAnimActive` | property |
| `IsFemale` | `public bool IsFemale` | property |
| `Race` | `public int Race` | property |
| `EquipmentCode` | `public string EquipmentCode` | property |
| `MountCreationKey` | `public string MountCreationKey` | property |
| `IdleAction` | `public string IdleAction` | property |
| `IdleFaceAnim` | `public string IdleFaceAnim` | property |
| `CustomAnimation` | `public string CustomAnimation` | property |
| `LeftHandWieldedEquipmentIndex` | `public int LeftHandWieldedEquipmentIndex` | property |
| `RightHandWieldedEquipmentIndex` | `public int RightHandWieldedEquipmentIndex` | property |
| `ArmorColor1` | `public uint ArmorColor1` | property |
| `ArmorColor2` | `public uint ArmorColor2` | property |
| `IsBannerShownInBackground` | `public bool IsBannerShownInBackground` | property |
| `IsPlayingCustomAnimations` | `public bool IsPlayingCustomAnimations` | property |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation` | property |
| `IsTableauEnabled` | `public bool IsTableauEnabled` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
