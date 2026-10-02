---
title: "MaterialValueOffsetTextWidget"
description: "MaterialValueOffsetTextWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextWidget; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MaterialValueOffsetTextWidget.cs."
---
# MaterialValueOffsetTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MaterialValueOffsetTextWidget : TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MaterialValueOffsetTextWidget.cs`

## Overview

MaterialValueOffsetTextWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MaterialValueOffsetTextWidget.cs. It is a public class, implementing/inheriting TextWidget; the inheritance chain is MaterialValueOffsetTextWidget → TextWidget. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MaterialValueOffsetTextWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer) the module directory; inheritance chain MaterialValueOffsetTextWidget → TextWidget. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. TextWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MaterialValueOffsetTextWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaterialValueOffsetTextWidget` | `public MaterialValueOffsetTextWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `ValueOffset` | `public float ValueOffset` | property |
| `SaturationOffset` | `public float SaturationOffset` | property |
| `HueOffset` | `public float HueOffset` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MaterialValueOffsetImageWidget](../MaterialValueOffsetImageWidget)
- [same namespace MultiplayerBattleResultColorizedWidget](../MultiplayerBattleResultColorizedWidget)
- [same namespace MultiplayerEndOfBattleScreenWidget](../MultiplayerEndOfBattleScreenWidget)
- [same namespace MultiplayerEndOfRoundPanelBrushWidget](../MultiplayerEndOfRoundPanelBrushWidget)
