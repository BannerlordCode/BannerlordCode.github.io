---
title: "OrderOfBattleHeroDragWidget"
description: "OrderOfBattleHeroDragWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDragWidget.cs."
---
# OrderOfBattleHeroDragWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OrderOfBattleHeroDragWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDragWidget.cs`

## Overview

OrderOfBattleHeroDragWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDragWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is OrderOfBattleHeroDragWidget → Widget. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleHeroDragWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle) the module directory; inheritance chain OrderOfBattleHeroDragWidget → Widget. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDragWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderOfBattleHeroDragWidget` | `public OrderOfBattleHeroDragWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `StackCount` | `public int StackCount` | property |
| `StackDragWidget` | `public BrushWidget StackDragWidget` | property |
| `StackThumbnailWidget` | `public ImageIdentifierWidget StackThumbnailWidget` | property |
| `InnerBrushName` | `public string InnerBrushName` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OrderOfBattleFormationClassBrushWidget](../OrderOfBattleFormationClassBrushWidget)
- [same namespace OrderOfBattleFormationClassContainerWidget](../OrderOfBattleFormationClassContainerWidget)
- [same namespace OrderOfBattleFormationClassLockBrushWidget](../OrderOfBattleFormationClassLockBrushWidget)
- [same namespace OrderOfBattleFormationFilterVisualBrushWidget](../OrderOfBattleFormationFilterVisualBrushWidget)
