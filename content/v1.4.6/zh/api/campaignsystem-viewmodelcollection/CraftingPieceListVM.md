---
title: "CraftingPieceListVM"
description: "CraftingPieceListVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 8 个（方法 2、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceListVM.cs。"
---
# CraftingPieceListVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingPieceListVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceListVM.cs`

## 概述

CraftingPieceListVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceListVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CraftingPieceListVM → ViewModel。public/protected 成员共 8 个：2 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CraftingPieceListVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign），继承链 CraftingPieceListVM → ViewModel。成员构成以属性为主（属性 5/8，方法 2/8），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceListVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingPieceListVM` | `public CraftingPieceListVM(MBBindingList<CraftingPieceVM>pieceList, CraftingPiece.PieceTypes pieceType, Action<CraftingPiece.PieceTypes, bool>onSelect)` | 构造函数 |
| `ExecuteSelect` | `public void ExecuteSelect()` | 方法 |
| `Refresh` | `public void Refresh()` | 方法 |
| `HasNewlyUnlockedPieces` | `public bool HasNewlyUnlockedPieces` | 属性 |
| `MBBindingList` | `public MBBindingList<CraftingPieceVM>Pieces` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `SelectedPiece` | `public CraftingPieceVM SelectedPiece` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CraftingHistoryVM](../CraftingHistoryVM)
- [同命名空间 CraftingItemFlagVM](../CraftingItemFlagVM)
- [同命名空间 CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [同命名空间 CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
