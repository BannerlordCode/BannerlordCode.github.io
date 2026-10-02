---
title: "MultiplayerDuelKillFeedItemWidget"
description: "MultiplayerDuelKillFeedItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting MultiplayerGeneralKillFeedItemWidget; 9 exposed members (0 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerDuelKillFeedItemWidget.cs."
---
# MultiplayerDuelKillFeedItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerDuelKillFeedItemWidget : MultiplayerGeneralKillFeedItemWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerDuelKillFeedItemWidget.cs`

## Overview

MultiplayerDuelKillFeedItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerDuelKillFeedItemWidget.cs. It is a public class, implementing/inheriting MultiplayerGeneralKillFeedItemWidget; the inheritance chain is MultiplayerDuelKillFeedItemWidget → MultiplayerGeneralKillFeedItemWidget → Widget. It exposes 9 public/protected members: 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerDuelKillFeedItemWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed) the module directory; inheritance chain MultiplayerDuelKillFeedItemWidget → MultiplayerGeneralKillFeedItemWidget → Widget. The surface is property-led (properties 8/9, methods 0/9), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerDuelKillFeedItemWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerDuelKillFeedItemWidget` | `public MultiplayerDuelKillFeedItemWidget(UIContext context) : base(context)` | constructor |
| `IsEndOfDuel` | `public bool IsEndOfDuel` | property |
| `Background` | `public BrushWidget Background` | property |
| `VictimCompassBackground` | `public BrushWidget VictimCompassBackground` | property |
| `MurdererCompassBackground` | `public BrushWidget MurdererCompassBackground` | property |
| `VictimNameText` | `public ScrollingRichTextWidget VictimNameText` | property |
| `MurdererNameText` | `public ScrollingRichTextWidget MurdererNameText` | property |
| `VictimScoreText` | `public TextWidget VictimScoreText` | property |
| `MurdererScoreText` | `public TextWidget MurdererScoreText` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MultiplayerGeneralKillFeedItemWidget](../MultiplayerGeneralKillFeedItemWidget)
- [same namespace MultiplayerGeneralKillFeedItemWidget](../MultiplayerGeneralKillFeedItemWidget)
- [same namespace MultiplayerGeneralKillFeedWidget](../MultiplayerGeneralKillFeedWidget)
- [same namespace MultiplayerPersonalKillFeedItemWidget](../MultiplayerPersonalKillFeedItemWidget)
- [same namespace MultiplayerPersonalKillFeedWidget](../MultiplayerPersonalKillFeedWidget)
