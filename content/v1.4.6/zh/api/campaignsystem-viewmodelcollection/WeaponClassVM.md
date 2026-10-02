---
title: "WeaponClassVM"
description: "WeaponClassVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 14 个（方法 4、属性 9、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassVM.cs。"
---
# WeaponClassVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponClassVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassVM.cs`

## 概述

WeaponClassVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 WeaponClassVM → ViewModel。public/protected 成员共 14 个：4 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WeaponClassVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign），继承链 WeaponClassVM → ViewModel。成员构成以属性为主（属性 9/14，方法 4/14），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NewlyUnlockedPieceCount` | `public int NewlyUnlockedPieceCount` | 属性 |
| `Template` | `public CraftingTemplate Template` | 属性 |
| `WeaponClassVM` | `public WeaponClassVM(int selectionIndex, CraftingTemplate template, Action<int>onSelect)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RegisterSelectedPiece` | `public void RegisterSelectedPiece(CraftingPiece.PieceTypes type, string pieceID)` | 方法 |
| `GetSelectedPieceData` | `public string GetSelectedPieceData(CraftingPiece.PieceTypes type)` | 方法 |
| `ExecuteSelect` | `public void ExecuteSelect()` | 方法 |
| `HasNewlyUnlockedPieces` | `public bool HasNewlyUnlockedPieces` | 属性 |
| `UnlockedPiecesLabelText` | `public string UnlockedPiecesLabelText` | 属性 |
| `UnlockedPiecesCount` | `public int UnlockedPiecesCount` | 属性 |
| `TemplateName` | `public string TemplateName` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `SelectionIndex` | `public int SelectionIndex` | 属性 |
| `WeaponType` | `public string WeaponType` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CraftingHistoryVM](../CraftingHistoryVM)
- [同命名空间 CraftingItemFlagVM](../CraftingItemFlagVM)
- [同命名空间 CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [同命名空间 CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
