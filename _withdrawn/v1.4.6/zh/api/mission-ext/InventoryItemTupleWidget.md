---
title: "InventoryItemTupleWidget"
description: "InventoryItemTupleWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory 的 public 类，继承 InventoryItemButtonWidget；公开成员 28 个（方法 3、属性 24、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemTupleWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InventoryItemTupleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class InventoryItemTupleWidget : InventoryItemButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemTupleWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

InventoryItemTupleWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemTupleWidget.cs。它是一个 public 类，实现/继承 InventoryItemButtonWidget，继承链为 InventoryItemTupleWidget → InventoryItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 28 个：3 方法、24 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InventoryItemTupleWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`，继承链 InventoryItemTupleWidget → InventoryItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 24/28，方法 3/28），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemTupleWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ItemImageIdentifier` | `public InventoryImageIdentifierWidget ItemImageIdentifier` | 属性 |
| `InventoryItemTupleWidget` | `public InventoryItemTupleWidget(UIContext context) : base(context)` | 构造函数 |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | 方法 |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | 方法 |
| `RefreshState` | `protected override void RefreshState()` | 方法 |
| `ItemID` | `public string ItemID` | 属性 |
| `NameTextWidget` | `public TextWidget NameTextWidget` | 属性 |
| `CountTextWidget` | `public TextWidget CountTextWidget` | 属性 |
| `CostTextWidget` | `public TextWidget CostTextWidget` | 属性 |
| `ProfitState` | `public int ProfitState` | 属性 |
| `MainContainer` | `public BrushListPanel MainContainer` | 属性 |
| `ExtendedControlsContainer` | `public InventoryTupleExtensionControlsWidget ExtendedControlsContainer` | 属性 |
| `Slider` | `public InventoryTwoWaySliderWidget Slider` | 属性 |
| `SliderParent` | `public Widget SliderParent` | 属性 |
| `SliderTextWidget` | `public TextWidget SliderTextWidget` | 属性 |
| `IsTransferable` | `public bool IsTransferable` | 属性 |
| `EquipButton` | `public ButtonWidget EquipButton` | 属性 |
| `TransactionCount` | `public int TransactionCount` | 属性 |
| `ItemCount` | `public int ItemCount` | 属性 |
| `IsCivilian` | `public bool IsCivilian` | 属性 |
| `IsStealth` | `public bool IsStealth` | 属性 |
| `IsGenderDifferent` | `public bool IsGenderDifferent` | 属性 |
| `IsEquipable` | `public bool IsEquipable` | 属性 |
| `IsNewlyAdded` | `public bool IsNewlyAdded` | 属性 |
| `CanCharacterUseItem` | `public bool CanCharacterUseItem` | 属性 |
| `DefaultBrush` | `public Brush DefaultBrush` | 属性 |
| `CantUseInSetBrush` | `public Brush CantUseInSetBrush` | 属性 |
| `CharacterCantUseBrush` | `public Brush CharacterCantUseBrush` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 InventoryItemButtonWidget](../InventoryItemButtonWidget/)
- [同命名空间 InventoryAlternativeUsageContainer](../InventoryAlternativeUsageContainer/)
- [同命名空间 InventoryArmorAnimationTextWidget](../InventoryArmorAnimationTextWidget/)
- [同命名空间 InventoryCenterPanelWidget](../InventoryCenterPanelWidget/)
- [同命名空间 InventoryEquippedItemControlsBrushWidget](../InventoryEquippedItemControlsBrushWidget/)
