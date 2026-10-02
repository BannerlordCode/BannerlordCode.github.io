---
title: "MultiplayerPollProgressionWidget"
description: "MultiplayerPollProgressionWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPollProgressionWidget.cs."
---
# MultiplayerPollProgressionWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerPollProgressionWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPollProgressionWidget.cs`

## Overview

MultiplayerPollProgressionWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPollProgressionWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerPollProgressionWidget → Widget. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerPollProgressionWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer) the module directory; inheritance chain MultiplayerPollProgressionWidget → Widget. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPollProgressionWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerPollProgressionWidget` | `public MultiplayerPollProgressionWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `HasOngoingPoll` | `public bool HasOngoingPoll` | property |
| `PollExtension` | `public ListPanel PollExtension` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MaterialValueOffsetImageWidget](../MaterialValueOffsetImageWidget)
- [same namespace MaterialValueOffsetTextWidget](../MaterialValueOffsetTextWidget)
- [same namespace MultiplayerBattleResultColorizedWidget](../MultiplayerBattleResultColorizedWidget)
- [same namespace MultiplayerEndOfBattleScreenWidget](../MultiplayerEndOfBattleScreenWidget)
