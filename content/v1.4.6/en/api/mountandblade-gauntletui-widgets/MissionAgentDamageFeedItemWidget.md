---
title: "MissionAgentDamageFeedItemWidget"
description: "MissionAgentDamageFeedItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 8 exposed members (3 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DamageFeed/MissionAgentDamageFeedItemWidget.cs."
---
# MissionAgentDamageFeedItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.DamageFeed`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MissionAgentDamageFeedItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DamageFeed/MissionAgentDamageFeedItemWidget.cs`

## Overview

MissionAgentDamageFeedItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DamageFeed/MissionAgentDamageFeedItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MissionAgentDamageFeedItemWidget → Widget. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentDamageFeedItemWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.DamageFeed) the module directory; inheritance chain MissionAgentDamageFeedItemWidget → Widget. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DamageFeed/MissionAgentDamageFeedItemWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FadeInTime` | `public float FadeInTime` | property |
| `StayTime` | `public float StayTime` | property |
| `FadeOutTime` | `public float FadeOutTime` | property |
| `TimeSinceCreation` | `public float TimeSinceCreation` | property |
| `MissionAgentDamageFeedItemWidget` | `public MissionAgentDamageFeedItemWidget(UIContext context) : base(context)` | constructor |
| `ShowFeed` | `public void ShowFeed()` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `SetSpeedModifier` | `public void SetSpeedModifier(float newSpeed)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionAgentDamageFeedWidget](../MissionAgentDamageFeedWidget)
