---
title: "MultiplayerTeamPlayerAvatarButtonWidget"
description: "MultiplayerTeamPlayerAvatarButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerTeamPlayerAvatarButtonWidget.cs."
---
# MultiplayerTeamPlayerAvatarButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerTeamPlayerAvatarButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerTeamPlayerAvatarButtonWidget.cs`

## Overview

MultiplayerTeamPlayerAvatarButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerTeamPlayerAvatarButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is MultiplayerTeamPlayerAvatarButtonWidget → ButtonWidget. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerTeamPlayerAvatarButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer) the module directory; inheritance chain MultiplayerTeamPlayerAvatarButtonWidget → ButtonWidget. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerTeamPlayerAvatarButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerTeamPlayerAvatarButtonWidget` | `public MultiplayerTeamPlayerAvatarButtonWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsDead` | `public bool IsDead` | property |
| `DeathAlphaFactor` | `public float DeathAlphaFactor` | property |
| `AvatarImage` | `public ImageIdentifierWidget AvatarImage` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MaterialValueOffsetImageWidget](../MaterialValueOffsetImageWidget)
- [same namespace MaterialValueOffsetTextWidget](../MaterialValueOffsetTextWidget)
- [same namespace MultiplayerBattleResultColorizedWidget](../MultiplayerBattleResultColorizedWidget)
- [same namespace MultiplayerEndOfBattleScreenWidget](../MultiplayerEndOfBattleScreenWidget)
