---
title: "OrderOfBattleFormationItemListPanel"
description: "OrderOfBattleFormationItemListPanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ListPanel；公开成员 9 个（方法 0、属性 8、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationItemListPanel.cs。"
---
# OrderOfBattleFormationItemListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OrderOfBattleFormationItemListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationItemListPanel.cs`

## 概述

OrderOfBattleFormationItemListPanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationItemListPanel.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 OrderOfBattleFormationItemListPanel → ListPanel。public/protected 成员共 9 个：8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderOfBattleFormationItemListPanel 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle），继承链 OrderOfBattleFormationItemListPanel → ListPanel。成员构成以属性为主（属性 8/9，方法 0/9），对外主要以状态读取接口暴露。继承链上的 ListPanel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationItemListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderOfBattleFormationItemListPanel` | `public OrderOfBattleFormationItemListPanel(UIContext context) : base(context)` | 构造函数 |
| `CardWidget` | `public Widget CardWidget` | 属性 |
| `FormationClassDropdown` | `public DropdownWidget FormationClassDropdown` | 属性 |
| `IsControlledByPlayer` | `public bool IsControlledByPlayer` | 属性 |
| `IsClassDropdownEnabled` | `public bool IsClassDropdownEnabled` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `HasFormation` | `public bool HasFormation` | 属性 |
| `DefaultFocusYOffsetFromCenter` | `public float DefaultFocusYOffsetFromCenter` | 属性 |
| `NoFormationFocusYOffsetFromCenter` | `public float NoFormationFocusYOffsetFromCenter` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 OrderOfBattleFormationClassBrushWidget](../OrderOfBattleFormationClassBrushWidget)
- [同命名空间 OrderOfBattleFormationClassContainerWidget](../OrderOfBattleFormationClassContainerWidget)
- [同命名空间 OrderOfBattleFormationClassLockBrushWidget](../OrderOfBattleFormationClassLockBrushWidget)
- [同命名空间 OrderOfBattleFormationFilterVisualBrushWidget](../OrderOfBattleFormationFilterVisualBrushWidget)
