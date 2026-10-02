---
title: "MoraleArrowBrushWidget"
description: "MoraleArrowBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleArrowBrushWidget.cs."
---
# MoraleArrowBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MoraleArrowBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleArrowBrushWidget.cs`

## Overview

MoraleArrowBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleArrowBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is MoraleArrowBrushWidget → BrushWidget. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MoraleArrowBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD) the module directory; inheritance chain MoraleArrowBrushWidget → BrushWidget. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleArrowBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LeftSideArrow` | `public bool LeftSideArrow` | property |
| `BaseHorizontalExtendRange` | `public float BaseHorizontalExtendRange` | property |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent` | property |
| `MoraleArrowBrushWidget` | `public MoraleArrowBrushWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `SetFlowLevel` | `public void SetFlowLevel(int flow)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DuelArenaFlagVisualBrushWidget](../DuelArenaFlagVisualBrushWidget)
- [same namespace HUDExtensionBrushWidget](../HUDExtensionBrushWidget)
- [same namespace MoraleWidget](../MoraleWidget)
- [same namespace MultiplayerDeathCardWidget](../MultiplayerDeathCardWidget)
