---
title: "MultiplayerFactionBannerWidget"
description: "MultiplayerFactionBannerWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 7 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerFactionBannerWidget.cs."
---
# MultiplayerFactionBannerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerFactionBannerWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerFactionBannerWidget.cs`

## Overview

MultiplayerFactionBannerWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerFactionBannerWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerFactionBannerWidget → Widget. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerFactionBannerWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer) the module directory; inheritance chain MultiplayerFactionBannerWidget → Widget. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerFactionBannerWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerFactionBannerWidget` | `public MultiplayerFactionBannerWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `CultureColor1` | `public Color CultureColor1` | property |
| `CultureColor2` | `public Color CultureColor2` | property |
| `FactionCode` | `public string FactionCode` | property |
| `BannerWidget` | `public Widget BannerWidget` | property |
| `IconWidget` | `public Widget IconWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MaterialValueOffsetImageWidget](../MaterialValueOffsetImageWidget)
- [same namespace MaterialValueOffsetTextWidget](../MaterialValueOffsetTextWidget)
- [same namespace MultiplayerBattleResultColorizedWidget](../MultiplayerBattleResultColorizedWidget)
- [same namespace MultiplayerEndOfBattleScreenWidget](../MultiplayerEndOfBattleScreenWidget)
