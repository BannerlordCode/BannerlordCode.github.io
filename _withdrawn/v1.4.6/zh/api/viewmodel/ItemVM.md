---
title: "ItemVM"
description: "ItemVM：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 31 个（方法 11、属性 18、字段 1）。canonical 桶 viewmodel。源文件 TaleWorlds.Core.ViewModelCollection/ItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class ItemVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/ItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## 概述

ItemVM 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/ItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 31 个：11 方法、18 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.Core.ViewModelCollection`），命名空间 `TaleWorlds.Core.ViewModelCollection`，继承链 ItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 18/31，方法 11/31），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/ItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TypeId` | `public int TypeId` | 属性 |
| `Version` | `public int Version` | 属性 |
| `ItemVM` | `public ItemVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ItemType` | `public EquipmentIndex ItemType` | 属性 |
| `ImageIdentifier` | `public ItemImageIdentifierVM ImageIdentifier` | 属性 |
| `StringId` | `public string StringId` | 属性 |
| `ItemDescription` | `public string ItemDescription` | 属性 |
| `IsFiltered` | `public bool IsFiltered` | 属性 |
| `ItemCost` | `public int ItemCost` | 属性 |
| `TypeName` | `public string TypeName` | 属性 |
| `PreviewHint` | `public HintViewModel PreviewHint` | 属性 |
| `EquipHint` | `public HintViewModel EquipHint` | 属性 |
| `UnequipHint` | `public HintViewModel UnequipHint` | 属性 |
| `SlaughterHint` | `public BasicTooltipViewModel SlaughterHint` | 属性 |
| `DonateHint` | `public BasicTooltipViewModel DonateHint` | 属性 |
| `BuyAndEquipHint` | `public BasicTooltipViewModel BuyAndEquipHint` | 属性 |
| `SellHint` | `public BasicTooltipViewModel SellHint` | 属性 |
| `BuyHint` | `public BasicTooltipViewModel BuyHint` | 属性 |
| `LockHint` | `public HintViewModel LockHint` | 属性 |
| `ExecutePreviewItem` | `public void ExecutePreviewItem()` | 方法 |
| `ExecuteUnequipItem` | `public void ExecuteUnequipItem()` | 方法 |
| `ExecuteEquipItem` | `public void ExecuteEquipItem()` | 方法 |
| `ReleaseStaticContent` | `public static void ReleaseStaticContent()` | 方法 |
| `ExecuteRefreshTooltip` | `public void ExecuteRefreshTooltip()` | 方法 |
| `ExecuteCancelTooltip` | `public void ExecuteCancelTooltip()` | 方法 |
| `ExecuteBuyItem` | `public void ExecuteBuyItem()` | 方法 |
| `ExecuteSelectItem` | `public void ExecuteSelectItem()` | 方法 |
| `GetItemTypeWithItemObject` | `public EquipmentIndex GetItemTypeWithItemObject()` | 方法 |
| `OnItemTypeUpdated` | `protected void OnItemTypeUpdated()` | 方法 |
| `_itemType` | `public EquipmentIndex _itemType` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 BattleResultVM](../BattleResultVM/)
- [同命名空间 CharacterEquipmentItemVM](../CharacterEquipmentItemVM/)
- [同命名空间 CharacterViewModel](../CharacterViewModel/)
- [同命名空间 CharacterWithActionViewModel](../CharacterWithActionViewModel/)
