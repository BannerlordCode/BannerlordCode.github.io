---
title: "CraftingPieceVM"
description: "CraftingPieceVM：TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign 的 public 类，继承 ViewModel；公开成员 17 个（方法 4、属性 10、字段 1）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingPieceVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingPieceVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

CraftingPieceVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CraftingPieceVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 17 个：4 方法、10 属性、1 字段、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CraftingPieceVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，继承链 CraftingPieceVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 10/17，方法 4/17），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingPieceVM` | `public CraftingPieceVM()` | 构造函数 |
| `CraftingPieceVM` | `public CraftingPieceVM(Action<CraftingPieceVM>selectWeaponPart, string templateId, WeaponDesignElement usableCraftingPiece, int pieceType, int index, bool isOpened)` | 构造函数 |
| `RefreshFlagIcons` | `public void RefreshFlagIcons()` | 方法 |
| `ExecuteOpenTooltip` | `public void ExecuteOpenTooltip()` | 方法 |
| `ExecuteCloseTooltip` | `public void ExecuteCloseTooltip()` | 方法 |
| `ExecuteSelect` | `public void ExecuteSelect()` | 方法 |
| `IsFilteredOut` | `public bool IsFilteredOut` | 属性 |
| `MBBindingList` | `public MBBindingList<CraftingItemFlagVM>ItemAttributeIcons` | 属性 |
| `PlayerHasPiece` | `public bool PlayerHasPiece` | 属性 |
| `IsEmpty` | `public bool IsEmpty` | 属性 |
| `TierText` | `public string TierText` | 属性 |
| `Tier` | `public int Tier` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `ImageIdentifier` | `public CraftingPieceImageIdentifierVM ImageIdentifier` | 属性 |
| `PieceType` | `public int PieceType` | 属性 |
| `IsNewlyUnlocked` | `public bool IsNewlyUnlocked` | 属性 |
| `_pieceType` | `public int _pieceType` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CraftingHistoryVM](../CraftingHistoryVM/)
- [同命名空间 CraftingItemFlagVM](../CraftingItemFlagVM/)
- [同命名空间 CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent/)
- [同命名空间 CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent/)
