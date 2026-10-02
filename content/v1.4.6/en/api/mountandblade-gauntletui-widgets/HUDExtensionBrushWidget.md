---
title: "HUDExtensionBrushWidget"
description: "HUDExtensionBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/HUDExtensionBrushWidget.cs."
---
# HUDExtensionBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class HUDExtensionBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/HUDExtensionBrushWidget.cs`

## Overview

HUDExtensionBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/HUDExtensionBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is HUDExtensionBrushWidget → BrushWidget. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HUDExtensionBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD) the module directory; inheritance chain HUDExtensionBrushWidget → BrushWidget. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/HUDExtensionBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AlphaChangeDuration` | `public float AlphaChangeDuration` | property |
| `OrderEnabledAlpha` | `public float OrderEnabledAlpha` | property |
| `HUDExtensionBrushWidget` | `public HUDExtensionBrushWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsOrderActive` | `public bool IsOrderActive` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DuelArenaFlagVisualBrushWidget](../DuelArenaFlagVisualBrushWidget)
- [same namespace MoraleArrowBrushWidget](../MoraleArrowBrushWidget)
- [same namespace MoraleWidget](../MoraleWidget)
- [same namespace MultiplayerDeathCardWidget](../MultiplayerDeathCardWidget)
