---
title: "PartyCompositionVM"
description: "PartyCompositionVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 12 个（方法 3、属性 8、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCompositionVM.cs。"
---
# PartyCompositionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyCompositionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCompositionVM.cs`

## 概述

PartyCompositionVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCompositionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 PartyCompositionVM → ViewModel。public/protected 成员共 12 个：3 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyCompositionVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Party），继承链 PartyCompositionVM → ViewModel。成员构成以属性为主（属性 8/12，方法 3/12），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCompositionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyCompositionVM` | `public PartyCompositionVM()` | 构造函数 |
| `OnTroopRemoved` | `public void OnTroopRemoved(FormationClass formationClass, int count)` | 方法 |
| `OnTroopAdded` | `public void OnTroopAdded(FormationClass formationClass, int count)` | 方法 |
| `RefreshCounts` | `public void RefreshCounts(MBBindingList<PartyCharacterVM>list)` | 方法 |
| `InfantryCount` | `public int InfantryCount` | 属性 |
| `RangedCount` | `public int RangedCount` | 属性 |
| `CavalryCount` | `public int CavalryCount` | 属性 |
| `HorseArcherCount` | `public int HorseArcherCount` | 属性 |
| `InfantryHint` | `public HintViewModel InfantryHint` | 属性 |
| `RangedHint` | `public HintViewModel RangedHint` | 属性 |
| `CavalryHint` | `public HintViewModel CavalryHint` | 属性 |
| `HorseArcherHint` | `public HintViewModel HorseArcherHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PartyCharacterVM](../PartyCharacterVM)
- [同命名空间 PartySortControllerVM](../PartySortControllerVM)
- [同命名空间 PartyTradeVM](../PartyTradeVM)
- [同命名空间 PartyVM](../PartyVM)
