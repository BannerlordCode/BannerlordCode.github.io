---
title: "InventoryEquippedItemControlsBrushWidget"
description: "InventoryEquippedItemControlsBrushWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory 的 public 类，继承 BrushWidget；公开成员 11 个（方法 5、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemControlsBrushWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InventoryEquippedItemControlsBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryEquippedItemControlsBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemControlsBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

InventoryEquippedItemControlsBrushWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemControlsBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 InventoryEquippedItemControlsBrushWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 11 个：5 方法、3 属性、1 事件、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InventoryEquippedItemControlsBrushWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`，继承链 InventoryEquippedItemControlsBrushWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以方法为主（方法 5/11，属性 3/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemControlsBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnHidePanel;` | `public event Action OnHidePanel;` | 事件 |
| `ForcedScopeCollection` | `public NavigationForcedScopeCollectionTargeter ForcedScopeCollection` | 属性 |
| `NavigationScope` | `public NavigationScopeTargeter NavigationScope` | 属性 |
| `InventoryEquippedItemControlsBrushWidget` | `public InventoryEquippedItemControlsBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `ShowPanel` | `public void ShowPanel()` | 方法 |
| `HidePanel` | `public void HidePanel()` | 方法 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `ItemWidget` | `public InventoryItemButtonWidget ItemWidget` | 属性 |
| `ButtonClickEventHandler` | `public delegate void ButtonClickEventHandler(Widget itemWidget);` | 方法 |
| `ButtonClickEventHandler` | `public delegate void ButtonClickEventHandler(Widget itemWidget)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BrushWidget](../../gui/BrushWidget/)
- [同命名空间 InventoryAlternativeUsageContainer](../InventoryAlternativeUsageContainer/)
- [同命名空间 InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget/)
- [同命名空间 InventoryCenterPanelWidget](../InventoryCenterPanelWidget/)
- [同命名空间 InventoryEquippedItemSlotWidget](../InventoryEquippedItemSlotWidget/)
