---
title: "SingleplayerGeneralKillFeedItemWidget"
description: "SingleplayerGeneralKillFeedItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 22 exposed members (2 methods, 19 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/General/SingleplayerGeneralKillFeedItemWidget.cs."
---
# SingleplayerGeneralKillFeedItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.General`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SingleplayerGeneralKillFeedItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/General/SingleplayerGeneralKillFeedItemWidget.cs`

## Overview

SingleplayerGeneralKillFeedItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/General/SingleplayerGeneralKillFeedItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is SingleplayerGeneralKillFeedItemWidget → Widget. It exposes 22 public/protected members: 2 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SingleplayerGeneralKillFeedItemWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.General) the module directory; inheritance chain SingleplayerGeneralKillFeedItemWidget → Widget. The surface is property-led (properties 19/22, methods 2/22), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/General/SingleplayerGeneralKillFeedItemWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TroopTypeIconBrush` | `public Brush TroopTypeIconBrush` | property |
| `MurdererTypeWidget` | `public Widget MurdererTypeWidget` | property |
| `VictimTypeWidget` | `public Widget VictimTypeWidget` | property |
| `ActionIconWidget` | `public Widget ActionIconWidget` | property |
| `VictimNameWidget` | `public TextWidget VictimNameWidget` | property |
| `MurdererNameWidget` | `public TextWidget MurdererNameWidget` | property |
| `FadeInTime` | `public float FadeInTime` | property |
| `StayTime` | `public float StayTime` | property |
| `FadeOutTime` | `public float FadeOutTime` | property |
| `TimeSinceCreation` | `public float TimeSinceCreation` | property |
| `SingleplayerGeneralKillFeedItemWidget` | `public SingleplayerGeneralKillFeedItemWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `SetSpeedModifier` | `public void SetSpeedModifier(float newSpeed)` | method |
| `MurdererName` | `public string MurdererName` | property |
| `MurdererType` | `public string MurdererType` | property |
| `VictimName` | `public string VictimName` | property |
| `VictimType` | `public string VictimType` | property |
| `IsUnconscious` | `public bool IsUnconscious` | property |
| `IsHeadshot` | `public bool IsHeadshot` | property |
| `IsSuicide` | `public bool IsSuicide` | property |
| `IsDrowning` | `public bool IsDrowning` | property |
| `IsPaused` | `public bool IsPaused` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SingleplayerGeneralKillFeedWidget](../SingleplayerGeneralKillFeedWidget)
