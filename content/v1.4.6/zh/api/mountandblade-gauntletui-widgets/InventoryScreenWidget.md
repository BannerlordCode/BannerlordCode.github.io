---
title: "InventoryScreenWidget"
description: "InventoryScreenWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 21 个（方法 4、属性 16、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs。"
---
# InventoryScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs`

## 概述

InventoryScreenWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 InventoryScreenWidget → Widget。public/protected 成员共 21 个：4 方法、16 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InventoryScreenWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory），继承链 InventoryScreenWidget → Widget。成员构成以属性为主（属性 16/21，方法 4/21），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InventoryScreenWidget` | `public InventoryScreenWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `ItemWidgetDragBegin` | `public void ItemWidgetDragBegin(InventoryItemButtonWidget itemWidget)` | 方法 |
| `ItemWidgetDrop` | `public void ItemWidgetDrop(InventoryItemButtonWidget itemWidget)` | 方法 |
| `TransferInputKeyVisualWidget` | `public InputKeyVisualWidget TransferInputKeyVisualWidget` | 属性 |
| `PreviousCharacterInputVisualParent` | `public Widget PreviousCharacterInputVisualParent` | 属性 |
| `NextCharacterInputVisualParent` | `public Widget NextCharacterInputVisualParent` | 属性 |
| `TradeLabel` | `public RichTextWidget TradeLabel` | 属性 |
| `InventoryTooltip` | `public Widget InventoryTooltip` | 属性 |
| `ItemPreviewWidget` | `public InventoryItemPreviewWidget ItemPreviewWidget` | 属性 |
| `TransactionCount` | `public int TransactionCount` | 属性 |
| `EquipmentMode` | `public int EquipmentMode` | 属性 |
| `TargetEquipmentIndex` | `public int TargetEquipmentIndex` | 属性 |
| `OtherInventoryListWidget` | `public ScrollablePanel OtherInventoryListWidget` | 属性 |
| `PlayerInventoryListWidget` | `public ScrollablePanel PlayerInventoryListWidget` | 属性 |
| `IsFocusedOnItemList` | `public bool IsFocusedOnItemList` | 属性 |
| `IsBannerTutorialActive` | `public bool IsBannerTutorialActive` | 属性 |
| `BannerTypeName` | `public string BannerTypeName` | 属性 |
| `ScrollToItem` | `public bool ScrollToItem` | 属性 |
| `ScrollItemId` | `public string ScrollItemId` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 InventoryAlternativeUsageContainer](../InventoryAlternativeUsageContainer)
- [同命名空间 InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget)
- [同命名空间 InventoryCenterPanelWidget](../InventoryCenterPanelWidget)
- [同命名空间 InventoryEquippedItemControlsBrushWidget](../InventoryEquippedItemControlsBrushWidget)
