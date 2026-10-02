---
title: "OrderOfBattleHeroDropWidget"
description: "OrderOfBattleHeroDropWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 5 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDropWidget.cs."
---
# OrderOfBattleHeroDropWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OrderOfBattleHeroDropWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDropWidget.cs`

## Overview

OrderOfBattleHeroDropWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDropWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is OrderOfBattleHeroDropWidget → ButtonWidget. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleHeroDropWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle) the module directory; inheritance chain OrderOfBattleHeroDropWidget → ButtonWidget. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDropWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderOfBattleHeroDropWidget` | `public OrderOfBattleHeroDropWidget(UIContext context) : base(context)` | constructor |
| `OnPreviewDrop` | `protected override bool OnPreviewDrop()` | method |
| `HandleClick` | `protected override void HandleClick()` | method |
| `OnPreviewDragHover` | `protected override bool OnPreviewDragHover()` | method |
| `FormationClass` | `public int FormationClass` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OrderOfBattleFormationClassBrushWidget](../OrderOfBattleFormationClassBrushWidget)
- [same namespace OrderOfBattleFormationClassContainerWidget](../OrderOfBattleFormationClassContainerWidget)
- [same namespace OrderOfBattleFormationClassLockBrushWidget](../OrderOfBattleFormationClassLockBrushWidget)
- [same namespace OrderOfBattleFormationFilterVisualBrushWidget](../OrderOfBattleFormationFilterVisualBrushWidget)
