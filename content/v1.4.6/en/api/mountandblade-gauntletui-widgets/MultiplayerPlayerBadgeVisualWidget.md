---
title: "MultiplayerPlayerBadgeVisualWidget"
description: "MultiplayerPlayerBadgeVisualWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPlayerBadgeVisualWidget.cs."
---
# MultiplayerPlayerBadgeVisualWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerPlayerBadgeVisualWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPlayerBadgeVisualWidget.cs`

## Overview

MultiplayerPlayerBadgeVisualWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPlayerBadgeVisualWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerPlayerBadgeVisualWidget → Widget. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerPlayerBadgeVisualWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer) the module directory; inheritance chain MultiplayerPlayerBadgeVisualWidget → Widget. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPlayerBadgeVisualWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerPlayerBadgeVisualWidget` | `public MultiplayerPlayerBadgeVisualWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `SetForcedSize` | `public void SetForcedSize(float width, float height)` | method |
| `BadgeId` | `public string BadgeId` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MaterialValueOffsetImageWidget](../MaterialValueOffsetImageWidget)
- [same namespace MaterialValueOffsetTextWidget](../MaterialValueOffsetTextWidget)
- [same namespace MultiplayerBattleResultColorizedWidget](../MultiplayerBattleResultColorizedWidget)
- [same namespace MultiplayerEndOfBattleScreenWidget](../MultiplayerEndOfBattleScreenWidget)
