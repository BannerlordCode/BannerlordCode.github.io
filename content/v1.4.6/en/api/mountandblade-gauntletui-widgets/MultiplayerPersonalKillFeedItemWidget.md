---
title: "MultiplayerPersonalKillFeedItemWidget"
description: "MultiplayerPersonalKillFeedItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 16 exposed members (3 methods, 12 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerPersonalKillFeedItemWidget.cs."
---
# MultiplayerPersonalKillFeedItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerPersonalKillFeedItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerPersonalKillFeedItemWidget.cs`

## Overview

MultiplayerPersonalKillFeedItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerPersonalKillFeedItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerPersonalKillFeedItemWidget → Widget. It exposes 16 public/protected members: 3 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerPersonalKillFeedItemWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed) the module directory; inheritance chain MultiplayerPersonalKillFeedItemWidget → Widget. The surface is property-led (properties 12/16, methods 3/16), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerPersonalKillFeedItemWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NotificationTypeIconWidget` | `public Widget NotificationTypeIconWidget` | property |
| `NotificationBackgroundWidget` | `public Widget NotificationBackgroundWidget` | property |
| `AmountTextWidget` | `public TextWidget AmountTextWidget` | property |
| `MessageTextWidget` | `public RichTextWidget MessageTextWidget` | property |
| `FadeInTime` | `public float FadeInTime` | property |
| `StayTime` | `public float StayTime` | property |
| `FadeOutTime` | `public float FadeOutTime` | property |
| `TimeSinceCreation` | `public float TimeSinceCreation` | property |
| `MultiplayerPersonalKillFeedItemWidget` | `public MultiplayerPersonalKillFeedItemWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `SetSpeedModifier` | `public void SetSpeedModifier(float newSpeed)` | method |
| `SetMaxAlphaValue` | `public void SetMaxAlphaValue(float newMaxAlpha)` | method |
| `IsDamage` | `public bool IsDamage` | property |
| `Message` | `public string Message` | property |
| `ItemType` | `public int ItemType` | property |
| `Amount` | `public int Amount` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiplayerDuelKillFeedItemWidget](../MultiplayerDuelKillFeedItemWidget)
- [same namespace MultiplayerGeneralKillFeedItemWidget](../MultiplayerGeneralKillFeedItemWidget)
- [same namespace MultiplayerGeneralKillFeedWidget](../MultiplayerGeneralKillFeedWidget)
- [same namespace MultiplayerPersonalKillFeedWidget](../MultiplayerPersonalKillFeedWidget)
