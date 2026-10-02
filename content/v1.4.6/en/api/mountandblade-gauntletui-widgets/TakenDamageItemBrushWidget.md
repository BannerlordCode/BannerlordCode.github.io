---
title: "TakenDamageItemBrushWidget"
description: "TakenDamageItemBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 13 exposed members (2 methods, 10 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs."
---
# TakenDamageItemBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TakenDamageItemBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs`

## Overview

TakenDamageItemBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is TakenDamageItemBrushWidget → BrushWidget. It exposes 13 public/protected members: 2 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TakenDamageItemBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission) the module directory; inheritance chain TakenDamageItemBrushWidget → BrushWidget. The surface is property-led (properties 10/13, methods 2/13), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VerticalWidth` | `public float VerticalWidth` | property |
| `VerticalHeight` | `public float VerticalHeight` | property |
| `HorizontalWidth` | `public float HorizontalWidth` | property |
| `HorizontalHeight` | `public float HorizontalHeight` | property |
| `RangedOnScreenStayTime` | `public float RangedOnScreenStayTime` | property |
| `MeleeOnScreenStayTime` | `public float MeleeOnScreenStayTime` | property |
| `TakenDamageItemBrushWidget` | `public TakenDamageItemBrushWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `DamageAmount` | `public int DamageAmount` | property |
| `IsBehind` | `public bool IsBehind` | property |
| `IsRanged` | `public bool IsRanged` | property |
| `ScreenPosOfAffectorAgent` | `public Vec2 ScreenPosOfAffectorAgent` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentAlarmStateWidget](../AgentAlarmStateWidget)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [same namespace AgentHealthWidget](../AgentHealthWidget)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
