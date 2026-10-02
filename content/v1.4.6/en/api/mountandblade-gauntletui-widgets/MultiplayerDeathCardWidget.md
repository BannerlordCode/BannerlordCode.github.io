---
title: "MultiplayerDeathCardWidget"
description: "MultiplayerDeathCardWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 14 exposed members (1 methods, 12 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MultiplayerDeathCardWidget.cs."
---
# MultiplayerDeathCardWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerDeathCardWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MultiplayerDeathCardWidget.cs`

## Overview

MultiplayerDeathCardWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MultiplayerDeathCardWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerDeathCardWidget → Widget. It exposes 14 public/protected members: 1 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerDeathCardWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD) the module directory; inheritance chain MultiplayerDeathCardWidget → Widget. The surface is property-led (properties 12/14, methods 1/14), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MultiplayerDeathCardWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeaponTextWidget` | `public TextWidget WeaponTextWidget` | property |
| `TitleTextWidget` | `public TextWidget TitleTextWidget` | property |
| `KillerNameTextWidget` | `public ScrollingRichTextWidget KillerNameTextWidget` | property |
| `KillCountContainer` | `public Widget KillCountContainer` | property |
| `SelfInflictedTitleBrush` | `public Brush SelfInflictedTitleBrush` | property |
| `NormalBrushTitleBrush` | `public Brush NormalBrushTitleBrush` | property |
| `FadeInModifier` | `public float FadeInModifier` | property |
| `FadeOutModifier` | `public float FadeOutModifier` | property |
| `StayTime` | `public float StayTime` | property |
| `MultiplayerDeathCardWidget` | `public MultiplayerDeathCardWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsActive` | `public bool IsActive` | property |
| `IsSelfInflicted` | `public bool IsSelfInflicted` | property |
| `KillCountsEnabled` | `public bool KillCountsEnabled` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DuelArenaFlagVisualBrushWidget](../DuelArenaFlagVisualBrushWidget)
- [same namespace HUDExtensionBrushWidget](../HUDExtensionBrushWidget)
- [same namespace MoraleArrowBrushWidget](../MoraleArrowBrushWidget)
- [same namespace MoraleWidget](../MoraleWidget)
