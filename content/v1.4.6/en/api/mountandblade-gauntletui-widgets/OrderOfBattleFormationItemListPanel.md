---
title: "OrderOfBattleFormationItemListPanel"
description: "OrderOfBattleFormationItemListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 9 exposed members (0 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationItemListPanel.cs."
---
# OrderOfBattleFormationItemListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OrderOfBattleFormationItemListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationItemListPanel.cs`

## Overview

OrderOfBattleFormationItemListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationItemListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is OrderOfBattleFormationItemListPanel → ListPanel. It exposes 9 public/protected members: 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleFormationItemListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle) the module directory; inheritance chain OrderOfBattleFormationItemListPanel → ListPanel. The surface is property-led (properties 8/9, methods 0/9), so it mostly exposes state for reading. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationItemListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderOfBattleFormationItemListPanel` | `public OrderOfBattleFormationItemListPanel(UIContext context) : base(context)` | constructor |
| `CardWidget` | `public Widget CardWidget` | property |
| `FormationClassDropdown` | `public DropdownWidget FormationClassDropdown` | property |
| `IsControlledByPlayer` | `public bool IsControlledByPlayer` | property |
| `IsClassDropdownEnabled` | `public bool IsClassDropdownEnabled` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `HasFormation` | `public bool HasFormation` | property |
| `DefaultFocusYOffsetFromCenter` | `public float DefaultFocusYOffsetFromCenter` | property |
| `NoFormationFocusYOffsetFromCenter` | `public float NoFormationFocusYOffsetFromCenter` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OrderOfBattleFormationClassBrushWidget](../OrderOfBattleFormationClassBrushWidget)
- [same namespace OrderOfBattleFormationClassContainerWidget](../OrderOfBattleFormationClassContainerWidget)
- [same namespace OrderOfBattleFormationClassLockBrushWidget](../OrderOfBattleFormationClassLockBrushWidget)
- [same namespace OrderOfBattleFormationFilterVisualBrushWidget](../OrderOfBattleFormationFilterVisualBrushWidget)
