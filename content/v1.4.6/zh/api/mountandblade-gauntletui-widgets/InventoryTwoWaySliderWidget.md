---
title: "InventoryTwoWaySliderWidget"
description: "InventoryTwoWaySliderWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 TwoWaySliderWidget；公开成员 7 个（方法 2、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryTwoWaySliderWidget.cs。"
---
# InventoryTwoWaySliderWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryTwoWaySliderWidget : TwoWaySliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryTwoWaySliderWidget.cs`

## 概述

InventoryTwoWaySliderWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryTwoWaySliderWidget.cs。它是一个 public 类，实现/继承 TwoWaySliderWidget，继承链为 InventoryTwoWaySliderWidget → TwoWaySliderWidget。public/protected 成员共 7 个：2 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InventoryTwoWaySliderWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory），继承链 InventoryTwoWaySliderWidget → TwoWaySliderWidget。成员构成以属性为主（属性 4/7，方法 2/7），对外主要以状态读取接口暴露。继承链上的 TwoWaySliderWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryTwoWaySliderWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsExtended` | `public bool IsExtended` | 属性 |
| `InventoryTwoWaySliderWidget` | `public InventoryTwoWaySliderWidget(UIContext context) : base(context)` | 构造函数 |
| `OnParallelUpdate` | `protected override void OnParallelUpdate(float dt)` | 方法 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `IncreaseStockButtonWidget` | `public ButtonWidget IncreaseStockButtonWidget` | 属性 |
| `DecreaseStockButtonWidget` | `public ButtonWidget DecreaseStockButtonWidget` | 属性 |
| `IsRightSide` | `public bool IsRightSide` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 InventoryAlternativeUsageContainer](../InventoryAlternativeUsageContainer)
- [同命名空间 InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget)
- [同命名空间 InventoryCenterPanelWidget](../InventoryCenterPanelWidget)
- [同命名空间 InventoryEquippedItemControlsBrushWidget](../InventoryEquippedItemControlsBrushWidget)
