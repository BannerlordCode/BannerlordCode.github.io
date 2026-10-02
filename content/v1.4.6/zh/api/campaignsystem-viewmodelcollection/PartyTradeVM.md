---
title: "PartyTradeVM"
description: "PartyTradeVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 22 个（方法 8、属性 12、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTradeVM.cs。"
---
# PartyTradeVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyTradeVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTradeVM.cs`

## 概述

PartyTradeVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTradeVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 PartyTradeVM → ViewModel。public/protected 成员共 22 个：8 方法、12 属性、1 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyTradeVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Party），继承链 PartyTradeVM → ViewModel。成员构成以属性为主（属性 12/22，方法 8/22），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTradeVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RemoveZeroCounts;` | `public static event Action RemoveZeroCounts;` | 事件 |
| `PartyTradeVM` | `public PartyTradeVM(PartyScreenLogic partyScreenLogic, TroopRosterElement troopRoster, PartyScreenLogic.PartyRosterSide side, bool isTransfarable, bool isPrisoner, Action<int, bool>onApplyTransaction)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateTroopData` | `public void UpdateTroopData(TroopRosterElement troopRoster, PartyScreenLogic.PartyRosterSide side, bool forceUpdate = true)` | 方法 |
| `FindTroopFromSide` | `public TroopRosterElement? FindTroopFromSide(CharacterObject character, PartyScreenLogic.PartyRosterSide side, bool isPrisoner)` | 方法 |
| `ExecuteIncreasePlayerStock` | `public void ExecuteIncreasePlayerStock()` | 方法 |
| `ExecuteIncreaseOtherStock` | `public void ExecuteIncreaseOtherStock()` | 方法 |
| `ExecuteReset` | `public void ExecuteReset()` | 方法 |
| `ExecuteApplyTransaction` | `public void ExecuteApplyTransaction()` | 方法 |
| `ExecuteRemoveZeroCounts` | `public void ExecuteRemoveZeroCounts()` | 方法 |
| `IsTransfarable` | `public bool IsTransfarable` | 属性 |
| `ThisStockLbl` | `public string ThisStockLbl` | 属性 |
| `TotalStockLbl` | `public string TotalStockLbl` | 属性 |
| `ThisStock` | `public int ThisStock` | 属性 |
| `InitialThisStock` | `public int InitialThisStock` | 属性 |
| `OtherStock` | `public int OtherStock` | 属性 |
| `InitialOtherStock` | `public int InitialOtherStock` | 属性 |
| `TotalStock` | `public int TotalStock` | 属性 |
| `IsThisStockIncreasable` | `public bool IsThisStockIncreasable` | 属性 |
| `IsOtherStockIncreasable` | `public bool IsOtherStockIncreasable` | 属性 |
| `TakeHint` | `public HintViewModel TakeHint` | 属性 |
| `GiveHint` | `public HintViewModel GiveHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PartyCharacterVM](../PartyCharacterVM)
- [同命名空间 PartyCompositionVM](../PartyCompositionVM)
- [同命名空间 PartySortControllerVM](../PartySortControllerVM)
- [同命名空间 PartyVM](../PartyVM)
