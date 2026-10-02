---
title: "TakenDamageItemBrushWidget"
description: "TakenDamageItemBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission, inheriting BrushWidget; 13 exposed members (2 methods, 10 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TakenDamageItemBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TakenDamageItemBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TakenDamageItemBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is TakenDamageItemBrushWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 13 public/protected members: 2 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TakenDamageItemBrushWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`, inheritance chain TakenDamageItemBrushWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 10/13, methods 2/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../../gui/BrushWidget/)
- [same namespace AgentAlarmStateWidget](../AgentAlarmStateWidget/)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget/)
- [same namespace AgentHealthWidget](../AgentHealthWidget/)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget/)
